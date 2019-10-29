<template>
  <div class="w-full">
    <div id="paypal-button-container"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    paypal
      .Buttons({
        createOrder: function(data, actions) {
          // Set up the transaction
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.grandTotal
                }
              }
            ]
          });
        }
      })
      .render("#paypal-button-container");
  },
  props: ["grandTotal"]
};
</script>
<style lang="scss" scoped>
</style>
