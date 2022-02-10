<template>
  <div class="flex w-full flex flex-col items-center">
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
            v-if="!loading"
            @click="sendMessage"
            id="sendBtn"
            class="mt-6 w-full"
            type="button"
          >
            Send
          </button>
          <div v-else class="flex flex-col items-center mt-6">
            <img class="w-12 h-12" src="../assets/loader.svg" />
          </div>
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
      loading: false,
    };
  },
  methods: {
    sendMessage() {
      if (this.validForm) {
        this.loading = true;
        const scriptURL = "http://localhost:8000/add-message";

        const data = {
          name: this.name,
          email: this.email,
          message: this.message,
        };

        fetch(scriptURL, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then(() => {
            this.name = "";
            this.email = "";
            this.message = "";

            this.$notify({
              title: "Message Sent!",
              text:
                "Thanks for leaving a message. I will get back to you soon.",
            });
          })
          .catch((error) => console.error("Error!", error.message))
          .finally(() => (this.loading = false));
      }
    },
  },
  computed: {
    validForm: function() {
      return this.name && this.message && this.email;
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
