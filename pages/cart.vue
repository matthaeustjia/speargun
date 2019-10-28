<template>
  <div class="flex flex-row flex-wrap container">
    <h1 class="w-full">Shopping</h1>
    <div class="mx-2 md:m-0" v-for="cart, index in cartList">
      <div class="flex flex-row flex-wrap w-full">
        <div class="w-1/3">
          <img class="w-full" :src="cart.images[0]" alt />
        </div>
        <div class="flex w-2/3 justify-around">
          <div class="flex flex-col">
            <h1>Product</h1>
            <div class="flex">
              <h1 class="text-xl">{{cart.name}}</h1>
              <h1 class="text-xl">${{cart.price}}</h1>
            </div>
          </div>
          <div class="flex flex-col">
            <h1>Quantity</h1>
            <div>
              <div class="flex">
                <button
                  @click="substractQuantity(index)"
                  class="w-5 border bg-transparent font-bold"
                >-</button>
                <h3 class="border w-8 text-center">{{cart.quantity}}</h3>
                <button @click="addQuantity(index)" class="w-5 border bg-transparent font-bold">+</button>
              </div>
              <button
                @click="removeItemFromCart(index)"
                class="bg-transparent text-center text-xs"
              >Remove</button>
            </div>
          </div>
          <div class="flex flex-col w-3/5">
            <h1>Total</h1>
            <div class="flex">
              <h1 class="text-xl">${{productTotal(index)}}</h1>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-3/5">
          <h1>Grand Total</h1>
          <div class="flex">
            <h1 class="text-xl">${{grandTotal}}</h1>
          </div>
        </div>
      </div>
    </div>
    <Paypal />
  </div>
</template>

<script>
import Paypal from "~/components/Paypal";
export default {
  computed: {
    cartList() {
      return this.$store.state.cart.cartList;
    },
    grandTotal() {
      let grandTotal = 0;
      for (let i = 0; i < this.cartList.length; i++) {
        grandTotal =
          grandTotal + this.cartList[i].price * this.cartList[i].quantity;
      }
      return grandTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
  },
  methods: {
    addQuantity(index) {
      this.$store.commit("cart/addQuantity", index);
    },
    substractQuantity(index) {
      this.$store.commit("cart/substractQuantity", index);
    },
    productTotal(index) {
      let productTotal =
        this.cartList[index].quantity * this.cartList[index].price;
      return productTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },

    removeItemFromCart(index) {
      this.$store.commit("cart/removeItemFromCart", index);
    }
  },
  components: {
    Paypal
  }
};
</script>

<style lang="scss" scoped>
</style>
