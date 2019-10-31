import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

// transformar a function em class para poder usar os STATES do component.
// para trabalhar com redux removo o export default  e coloco no final
// como o metodo 'connect'

// para trabalhar com os Hooks teremos que transformas de novo em function
// class Home extends Component {
export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  // metodo que vai se comunicar com API
  // async componentDidMount() {

  //   this.setState({ products: data });
  // }

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{' '}
              {amount[product.id] || 0}
            </div>

            <span>Adicionar ao Carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

// const mapStateToProps = state => ({
//   amount:
// });

/* const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home); */
