<template>
  <div class="text-white py-14 w-full flex flex-col items-center">
    <div class="md:w-3/4 w-full">
      <div class="journey-text h-auto md:text-left text-center">
        <p>
          Hi, I'm Gifty Matekuor Mate-Kole - a full stack developer from Ghana.
          I love creating apps that make processes simpler and have a positive
          impact on people's lives.
        </p>
        <p class="mt-12">
          I began my tech journey in university where I studied Management
          Information Systems. I have 3 years of work experience building web
          apps. Through these experiences and taking online courses, I have
          acquired knowledge in Javascript, PHP and other languages and
          frameworks listed in my
          <span class="cursor-pointer" style="color: #D65CD6"
            ><a @click="goto('stack')">tech stack</a></span
          >. I also have some experience building hybrid mobile apps with
          Nativescript-Vue.
        </p>

        <p class="mt-12">
          When I’m not coding, I can be found baking, crocheting, reading or
          watching movies.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto(id) {
      this.$emit("goto", id);
    },
  },
};
</script>

<style>
.section-heading {
  font-style: normal;
  font-weight: 900;
  font-size: 230px;
  color: #4e4463;
}

.journey-text {
  font-weight: 300;
  font-size: 32px;
}

@media only screen and (max-width: 800px) {
  .section-heading {
    font-weight: 900;
    font-size: 64px;
  }
}
</style>
