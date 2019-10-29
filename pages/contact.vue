<template>
  <div class="flex flex-col items-center h-screen w-full bg-blue-600">
    <div class="flex flex-col items-center justify-center content-center">
      <div class="cover-img w-full">
        <img class="cover" src="~/assets/img/cover.jpg" alt="cover" />
        <div
          class="cover-text flex flex-col w-full justify-center text-center items-center tracking-widest"
        >
          <h1 class="w-full text-xl md:text-3xl text-white uppercase">CONTACT BAJOO</h1>
          <h3
            class="w-full text-sm md:text-md text-white"
          >While we're good with smoke signals, there are simpler ways for us to get in touch and answer your questions.</h3>
        </div>
      </div>
    </div>
    <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:w-2/5 md:mx-auto p-6">
      <div>Goblok</div>
      <div>Goblok</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    };
  }
};
</script>

<style scoped>
.cover-img {
  position: relative;
  opacity: 1;
}

.cover-text {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cover {
  width: 100%;
  max-height: 50vh;
  object-fit: cover;
  object-position: center;
}
</style>
