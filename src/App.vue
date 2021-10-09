<template>
  <div id="app" class="h-full">
    <TopNav @goto="goto" />
    <HeroSection id="hero" />
    <Journey id="journey" @goto="goto" />
    <Projects id="projects" />
    <Stack id="stack" />
    <Contact id="contact" />
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
}
</style>
