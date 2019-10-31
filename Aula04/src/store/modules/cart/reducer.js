import produce from 'immer';

export default function cart(state = [], action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draftState => {
        const { product } = action;
        draftState.push(product);
        /*         const productIndex = draftState.findIndex(
          p => p.id === action.product.id
        );
        if (productIndex >= 0) {
          draftState[productIndex].amount += 1;
        } else {
          draftState.push({
            ...action.product,
            amount: 1,
          });
        } */
      });
    case '@cart/REMOVE':
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draftState.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      // if (action.amount <= 0) {
      //   return state;
      // }
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draftState[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }

  /** Qdo o usuario clicar no botao AddToCart o objeto inteiro será adicionado
   * no vetor abaixo do reducer e ficará disponivel para o resto da aplicacao,
   * como por exemplo para o HEADER onde estará o MeuCarrinho, na pagina onde
   * estará o produto (/cart) etc...
   * 1. para isso comecar pela HOME onde está o botao e importar o 'connect' do
   * react-redux -- no HOME remover export default e colocar abaixo chamando o
   * metodo connect()(Home)
   * 2. Criar uma ACTION que contem um estado e quando ususario clicar no
   * botao do AddTCart irá chamar o onCLick()
   * 3. criar metodo handleAddProduct(product){} na Home
   * 4. colocaro so states e actions
   * 5. Qdo disparo um DISPATCH todos os reducers na minha aplicacao serao
   * chamados, e para isso será criado um SWITCH para pegar a action que
   * interessa somente.
   * 6.case 'ADD_TO_CART':
      return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ];

   *
   */
}
