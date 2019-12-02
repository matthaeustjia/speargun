<template>
  <div class="w-full">
    <div id="paypal-button-container"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let description = "";
    var vm = this;
    paypal
      .Buttons({
        createOrder: function(data, actions) {
          // Set up the transaction
          for (let i = 0; i < vm.cartList.length; i++) {
            description =
              description +
              vm.cartList[i].name +
              " Quantity " +
              vm.cartList[i].quantity +
              ", ";
          }
          console.log(description);
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: vm.grandTotal
                },
                payee: {
                  email_address: "matthaeustjia@gmail.com"
                },
                description: description
              }
            ]
          });
        },
        onApprove: function(data, actions) {
          // Capture the funds from the transaction
          return actions.order.capture().then(function(details) {
            // Show a success message to your buyer
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        }
      })
      .render("#paypal-button-container");
  },
  computed: {
    cartList() {
      return this.$store.state.cart.cartList;
    },
    grandTotal() {
      return this.$store.getters["cart/grandTotal"];
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
