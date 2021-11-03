<template>
  <nav
    class="flex flex-wrap items-center fixed w-full z-50 justify-between px-4 md:px-20 py-1 md:py-2"
  >
    <div class="logo">Matekuor</div>

    <div class="flex md:hidden">
      <button id="hamburger" @click="show()">
        <img
          class="toggle block"
          src="@/assets/menu.svg"
          width="30"
          height="30"
        />
        <img
          class="toggle hidden p-2 md:pr-0"
          src="@/assets/close.png"
          width="40"
          height="40"
        />
      </button>
    </div>

    <div
      class="font-bold md:font-normal links toggle hidden md:flex w-full md:w-auto text-center text-bold mt-5 md:mt-0 md:border-none"
    >
      <a
        @click="goto('hero')"
        class="block md:inline-block px-3 py-3 md:border-none cursor-pointer"
        >Home</a
      >
      <a
        @click="goto('journey')"
        class="block md:inline-block px-3 py-3 md:border-none cursor-pointer"
        >About</a
      >
      <a
        @click="goto('stack')"
        class="block md:inline-block px-3 py-3 md:border-none cursor-pointer"
        >Stack</a
      >
      <a
        @click="goto('projects')"
        class="block md:inline-block px-3 py-3 md:border-none cursor-pointer"
        >Projects</a
      >
      <a
        @click="goto('contact')"
        class="block md:inline-block px-3 py-3 md:border-none cursor-pointer"
        >Contact</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    show() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    },
    goto(id) {
      this.$emit("goto", id);
    },
  },
};
</script>

<style scoped>
nav {
  background: #3a2f52;
}

.links {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #ffffff;
}

.logo {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
}
</style>
