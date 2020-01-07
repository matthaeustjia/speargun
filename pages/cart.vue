<template>
  <div class="mx-auto container flex flex-col items-center p-3">
    <div class="uppercase text-2xl md:text-4xl tracking-tighter text-black mb-5">
      <h1>Shopping Cart</h1>
    </div>
    <div v-if="cartList.length > 0">
      <div class="border my-3 p-3" v-for="cart, index in cartList">
        <div class="flex flex-row flex-wrap justify-center">
          <div class="w-full md:w-1/3 flex justify-center">
            <img class="w-1/2 h-32" :src="cart.images[0]" alt />
          </div>
          <div class="flex w-full md:w-2/3 justify-around">
            <div class="flex flex-col w-1/4">
              <h2 class="text-xs">Product</h2>
              <div class="flex">
                <h1 class="text-md md:text-xl">{{cart.name}}</h1>
              </div>
            </div>
            <div class="flex flex-col w-1/4">
              <h2 class="text-xs">Price</h2>
              <div class="flex">
                <h1 class="text-md md:text-xl">${{cart.price}}</h1>
              </div>
            </div>
            <div class="flex flex-col w-1/4">
              <h2 class="text-xs">Quantity</h2>
              <div class="flex flex-col">
                <div class="flex">
                  <button
                    @click="substractQuantity(index)"
                    class="w-4 md:w-5 border bg-transparent font-bold"
                  >-</button>
                  <h3 class="border w-5 md:w-8 text-center">{{cart.quantity}}</h3>
                  <button
                    @click="addQuantity(index)"
                    class="w-4 md:w-5 border bg-transparent font-bold"
                  >+</button>
                </div>
                <div class="flex text-center mt-2">
                  <button
                    @click="removeItemFromCart(index)"
                    class="bg-transparent text-red-600 text-center text-xs"
                  >Remove</button>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-1/4 text-right">
              <h2 class="text-xs">Total</h2>
              <h1 class="text-md md:text-xl">${{productTotal(index)}}</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full text-right font-semibold my-5">
        <h1>Grand Total</h1>
        <h1
          class="text-md md:text-xl"
        >${{grandTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}}</h1>
      </div>
      <div class="flex justify-center text-center font-semibold">
        <Paypal />
      </div>
    </div>
    <div class="text-xl" v-else>
      <h1 class="text-3xl">Ooops....</h1>
      <div>Your shopping cart is empty.</div>
    </div>
  </div>
</template>

<script>
import Paypal from "~/components/Paypal";
export default {
  head() {
    return {
      title: "Cart",
      titleTemplate: "%s - Bajoo Wooden Speargun",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "High quality euro wooden speargun. teak wooden speargun"
        }
      ]
    };
  },
  computed: {
    cartList() {
      return this.$store.state.cart.cartList;
    },
    grandTotal() {
      return this.$store.getters["cart/grandTotal"];
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
