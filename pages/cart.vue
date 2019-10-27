<template>
  <div class="flex flex-col text-center object-center items-center container justify-center">
    <div>
      <h1 v-for="cart in cartList" :key="cart.id">{{cart.name}}</h1>
    </div>
    <Paypal />
  </div>
</template>

<script>
import Paypal from "~/components/Paypal";
export default {
  computed: {
    cartList() {
      return this.$store.state.cart;
    }
  },
  components: {
    Paypal
  }
};
</script>

<style lang="scss" scoped>
</style>
