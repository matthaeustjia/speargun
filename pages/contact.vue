<template>
  <div class="flex flex-col items-center h-screen w-full bg-blue-600">
    <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:w-2/5 md:mx-auto p-6">
      <h1
        class="mb-2 text-center uppercase tracking-wide font-bold text-2xl underline text-grey-darkest"
      >CONTACT US</h1>
      <form class="my-10 md:flex md:flex-wrap md:justify-between">
        <div class="flex flex-col mb-4 w-full">
          <label
            class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
            for="name"
          >Name</label>
          <input
            class="border py-2 px-3 text-grey-darkest md:mr-2"
            type="text"
            id="name"
            v-model="name"
          />
        </div>
        <div class="flex flex-col mb-4 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Email</label>
          <input class="border py-2 px-3 text-grey-darkest" type="email" id="email" v-model="email" />
        </div>
        <div class="flex flex-col mb-4 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="phone">Phone</label>
          <input class="border py-2 px-3 text-grey-darkest" type="tel" id="phone" v-model="phone" />
        </div>
        <div class="flex flex-col mb-4 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="subject">Subject</label>
          <input
            class="border py-2 px-3 text-grey-darkest"
            type="text"
            id="subject"
            v-model="subject"
          />
        </div>
        <div class="flex flex-col mb-6 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="message">Message</label>
          <textarea
            class="border py-2 px-3 text-grey-darkest"
            rows="4"
            cols="50"
            id="message"
            v-model="message"
          >
At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
</textarea>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >Submit</button>
      </form>
    </div>
    <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:w-2/5 md:mx-auto p-6"></div>
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

<style lang="scss" scoped>
</style>
