<template>
  <div id="app" class="h-full">
    <TopNav />
    <HeroSection />
    <Journey />
    <Projects />
    <Stack />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import HeroSection from "@/components/HeroSection";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default {
  name: "App",
  components: {
    TopNav,
    HeroSection,
    Journey,
    Projects,
    Stack,
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
}
</style>
