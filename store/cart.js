export const state = () => ({
  cartList: []
})

export const getters = {
  totalItemsInCart(state) {
    return state.cartList.length;
  }
}
export const mutations = {
  pushProductToCart(state, product) {
    state.cartList.push({
      ...product,
      quantity: 1
    })
  },
  addQuantity(state, index) {
    state.cartList[index].quantity = state.cartList[index].quantity + 1
  },
  substractQuantity(state, index) {
    if (state.cartList[index].quantity > 1)
      state.cartList[index].quantity = state.cartList[index].quantity - 1
  },
  removeItemFromCart(state, index) {
    state.cartList.splice(index, 1);
  }
}
