<template>
  <div id="app" class="h-full">
    <TopNav @goto="goto" />
    <HeroSection id="hero" class="mb-20" />
    <Journey id="journey" @goto="goto" class="mb-20" />
    <Projects id="projects" class="mb-20" />
    <Stack id="stack" class="mb-20" />
    <Contact id="contact" class="pb-40" />

    <footer class="w-full py-10 text-white">
      <div class="flex flex-row h-auto justify-between px-12">
        <div>
          <h2 class="text-lg font-semibold">Matekuor Mate-Kole</h2>
          <p class="text-gray-300">Fullstack developer</p>
        </div>
        <div>
          <h2 class="text-lg font-semibold">Site Map</h2>
          <p class="text-gray-300 cursor-pointer pt-4" @click="goto('hero')">
            Home
          </p>
          <p class="text-gray-300 cursor-pointer pt-4" @click="goto('journey')">
            About
          </p>
          <p class="text-gray-300 cursor-pointer pt-4" @click="goto('stack')">
            Stack
          </p>
          <p
            class="text-gray-300 cursor-pointer pt-4"
            @click="goto('projects')"
          >
            Projects
          </p>
          <p class="text-gray-300 cursor-pointer pt-4" @click="goto('contact')">
            Contact
          </p>
        </div>
        <div class="flex flex-col">
          <h2 class="text-lg font-semibold">Social</h2>
          <a
            href="https://www.linkedin.com/in/giftymatekole/"
            target="blank"
            class="text-gray-300 cursor-pointer pt-4"
            >LinkedIn</a
          >
          <a
            href="https://github.com/Tekuor"
            target="blank"
            class="text-gray-300 cursor-pointer pt-4"
            >Github</a
          >
        </div>
      </div>
    </footer>

    <notifications classes="my-notification" />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import HeroSection from "@/components/HeroSection";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

export default {
  name: "App",
  components: {
    TopNav,
    HeroSection,
    Journey,
    Projects,
    Stack,
    Contact,
  },
  methods: {
    goto(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #3a2f52;
  color: rgba(255, 255, 255, 0.1);
  width: 100%;
}

footer {
  position: absolute;
  min-height: 116px;
  background: #9e71fc;
}

.my-notification {
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;
  background: #d65cd6 !important;
}
</style>
