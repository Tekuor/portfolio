<template>
  <div
    class="flex lg:flex-row flex-col md-mx-16 mx-0 pb-20 flex-wrap items-center"
  >
    <div class="lg:mr-14 lg:ml-12 lg:w-2/5">
      <p class="contact-heading lg:text-left text-center">Contact me</p>
    </div>
    <div class="lg:w-2/5">
      <form name="contact">
        <div class="contact-div p-8">
          <input
            style="color:white"
            class="px-4"
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            v-model="name"
          />

          <input
            style="color:white"
            class="px-4 mt-6"
            type="email"
            id="email"
            name="email"
            placeholder="E-mail address"
            v-model="email"
          />

          <textarea
            style="color:white"
            class="mt-6 p-4"
            id="message"
            name="message"
            rows="8"
            cols="50"
            v-model="message"
          ></textarea>

          <button
            @click="sendMessage"
            id="sendBtn"
            class="mt-6 w-full"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwCtBdEW5P8C6s2ET5VwhQMgByzE7zy6WfrhS5YYiiQpC5po_PBcuzZ5rnA4_Ob5algVA/exec";
      const form = document.forms["contact"];

      fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      })
        .then(() =>
          alert("Thanks for Contacting us..! We Will Contact You Soon...")
        )
        .catch((error) => console.error("Error!", error.message));
    },
  },
};
</script>

<style>
.contact-heading {
  font-style: normal;
  font-weight: 900;
  font-size: 130.761px;
  line-height: 100px;
  letter-spacing: -0.015em;
}

.contact-div {
  max-width: 554px;
  min-height: 484px;
  background: #4e4463;
  border-radius: 16px;
}

input,
textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

input {
  height: 56px;
}

textarea:focus,
input:focus {
  outline: none;
}

#sendBtn {
  min-height: 43px;
  border-radius: 8px;
  background: #d65cd6;
  color: white;
}

#sendBtn:disabled {
  opacity: 0.6;
}

@media only screen and (max-width: 800px) {
  .contact-heading {
    font-weight: 900;
    font-size: 64px;
  }
}
</style>
