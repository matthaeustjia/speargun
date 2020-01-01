<template>
  <div class="flex flex-col items-center h-screen w-full">
    <div class="cover-img w-full">
      <img class="cover" src="~/assets/img/cover.jpg" alt="Image Cover" />
      <div
        class="cover-text flex flex-col w-full justify-center text-center items-center tracking-widest"
      >
        <h1 class="w-full text-2xl md:text-4xl text-white uppercase">CONTACT US</h1>
        <h2 class="container text-xs md:text-sm text-white">
          Thank you for visiting our website. We'd love to hear your comments, so please take a moment to provide the information below. For further assistance you may also call us at
          <a
            href="tel:0421843213"
          >0421 843 213</a> , Monday through Friday from 8-5 PST and Saturday from 9-3 PST.
        </h2>
      </div>
    </div>
    <div class="container flex flex-wrap bg-white">
      <div class="w-2/3 flex">
        <p></p>
      </div>
      <div class="w-full flex flex-wrap justify-center">
        <form class="w-full md:w-2/3 p-1 md:p-5">
          <div class="w-full flex flex-wrap">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >Name</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                required
              />
            </div>
          </div>
          <div class="w-full flex flex-wrap">
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="phone"
              >Phone</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="number"
                required
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="email"
              >Email</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                required
              />
            </div>
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="subject"
              >Subject</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="subject"
                type="text"
                required
              />
            </div>
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="message"
              >Message</label>
              <textarea
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="message"
                id="message"
                cols="30"
                rows="10"
                required
              ></textarea>
              <button
                class="w-full bg-blue-600 hover:bg-blue-900 uppercase text-xl tracking-tightest text-white font-bold py-2 px-2 rounded-sm"
              >Submit</button>
            </div>
          </div>
        </form>
      </div>
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
  },
  head() {
    return {
      title: "Contact US",
      titleTemplate: "%s - Bajoo Wooden Speargun",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Contact us. All the information you need to get in touch regarding our speargun. For general enquiries the best place to start is to email info@woodenspeargun.com.au. One of our Supporter Care team will follow up with you to help find out what you need and who can help."
        }
      ]
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
