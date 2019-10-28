<template>
  <div class="flex flex-col container">
    <h1>Shopping</h1>
    <div class="mx-2 md:m-0" v-for="cart, index in cartList">
      <div class="flex flex-row flex-wrap justify-between">
        <div class="w-2/5">
          <img class="w-full" :src="cart.images[0]" alt />
        </div>
        <div class="flex">
          <div class="flex flex-col w-3/5">
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
              <h1 class="text-xl">{{productTotal(index)}}</h1>
            </div>
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
      return this.cartList[index].quantity * this.cartList[index].price;
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
