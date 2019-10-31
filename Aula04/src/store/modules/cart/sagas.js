import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;
  if (amount > stockAmount) {
    // console.tron.warn('ERRO');
    toast.error(`Quantidade Solicitada Fora do Estoque!`);
    return;
  }

  if (productExists) {
    // const amount = productExists.amount + 1;
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    // console.tron.warn('ERRO');
    toast.error('Quantidade Solicitada Fora do Estoque!');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

//* é um 'generator' como se fosse o async e o parametro da funcao
// virá de uma ACTION
// o YIELD é como se fosse o await
// nao consigo depois do YIELD chamar o api.get() diretamente, entao
// precisarei importar o SAGA, e usar o metodo CALL() que tem um Promise nele
//

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
