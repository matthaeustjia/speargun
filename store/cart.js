export const state = () => ({
  cart: []
})
export const mutations = {
  pushProductToCart(state, product) {
    state.cart.push(product)
  }
}
