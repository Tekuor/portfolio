<template>
  <div class="flex flex-row mx-16 pb-20 flex-wrap">
    <div style="width: 541px;">
      <p class="contact-heading">Contact me</p>
    </div>
    <div>
      <div class="contact-div p-8">
        <input
          style="color:white"
          class="px-4"
          type="text"
          id="name"
          name="name"
          placeholder="Full name"
        />

        <input
          style="color:white"
          class="px-4 mt-6"
          type="email"
          id="name"
          name="name"
          placeholder="E-mail address"
        />

        <textarea
          style="color:white"
          class="mt-6 p-4"
          id="message"
          name="message"
          rows="8"
          cols="50"
        ></textarea>

        <button id="sendBtn" class="mt-6" type="button" disabled>
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  width: 554px;
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
  width: 490px;
  height: 43px;
  border-radius: 8px;
  background: #d65cd6;
  color: white;
}

#sendBtn:disabled {
  opacity: 0.6;
}
</style>
