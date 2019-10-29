export const state = () => ({
  cartList: []
})

export const getters = {
  totalItemsInCart(state) {
    return state.cartList.length;
  },
  grandTotal(state) {
    let grandTotal = 0;
    for (let i = 0; i < state.cartList.length; i++) {
      grandTotal =
        grandTotal + state.cartList[i].price * state.cartList[i].quantity;
    }
    return grandTotal;
  }
}
export const mutations = {
  pushProductToCart(state, product) {
    var index = state.cartList.findIndex(cart => cart.id == product.id)
    console.log(index);
    if (index === -1) {
      state.cartList.push({
        ...product,
        quantity: 1
      })
    } else {
      state.cartList[index].quantity = state.cartList[index].quantity + 1
    }

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
