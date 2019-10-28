export const state = () => ({
  cart: []
})

export const getters = {
  totalItemsInCart(state) {
    return state.cart.length;
  }
}
export const mutations = {
  pushProductToCart(state, product) {
    state.cart.push(product)
  }
}
