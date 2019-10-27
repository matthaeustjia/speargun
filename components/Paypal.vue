<template>
  <div class="w-full">
    <div id="paypal-button-container"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    paypal.Buttons().render("#paypal-button-container");
  }
};
</script>
<style lang="scss" scoped>
</style>
