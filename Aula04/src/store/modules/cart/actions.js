export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}
// para trabalhar com SAGA divido minha action em DUAS
// request que o SAGA irá ouvir
// success que irá atualizar as informacoes apenas
export function updateAmountRequest(id, amount) {
  return { type: '@cart/UPDATE_AMOUNT_REQUEST', id, amount };
}

export function updateAmountSuccess(id, amount) {
  return { type: '@cart/UPDATE_AMOUNT_SUCCESS', id, amount };
}
