<template>
  <div
    class="text-white py-14 w-full flex flex-col items-center"
    style="max-width: 1200px"
  >
    <div class="md:w-3/4 w-full">
      <div class="flex lg:flex-row flex-col justify-center">
        <div
          class="project-card lg:mr-12 lg:mb-0 mb-10 w-full"
          style="background: #fcddec;"
        >
          <h4 class="project-heading mx-6 mt-8">Tweeter</h4>
          <p class="mt-2 mx-6 project-text h-16">
            A clone of twitter. Built with Vue js, Buefy and Tailwind Css (In
            Progress)
          </p>
          <div class="flex flex-row mx-6 mt-4">
            <a
              href="https://tweeter-g.herokuapp.com/"
              class="project-button p-2 cursor-pointer"
              style="background:#9e71fc"
              target="_blank"
              >Live Demo</a
            >
            <a
              class="project-button p-2 ml-4 cursor-pointer"
              style="background: #D65CD6"
              >Code</a
            >
          </div>

          <div
            class="flex flex-col items-center w-full h-full mt-16 mx-auto"
            style="max-width: 381px; height: 300px;"
          >
            <div
              class="project-image bg-green-400 w-full h-full"
              v-bind:style="{
                'background-image':
                  'url(' + require('../assets/tweeter.png') + ')',
              }"
            ></div>
          </div>
        </div>

        <div class="project-card w-full" style="background: #F0DDFC;">
          <h4 class="project-heading mx-6 mt-8">Casting Agency</h4>
          <p class="mt-2 mx-6 project-text">
            A project to help manage and assign actors to movies. Frontend was
            built with Vue js, Buefy and Tailwind Css. Backend was built with
            Python.
          </p>
          <div class="flex flex-row mx-6 mt-4">
            <a
              href="https://casting-agency21.herokuapp.com/"
              class="project-button p-2 cursor-pointer"
              style="background:#9e71fc"
              target="_blank"
              >Live Demo</a
            >
            <a
              href="https://github.com/Tekuor/capstone#casting-agency"
              class="project-button p-2 ml-4 cursor-pointer"
              style="background: #D65CD6"
              target="_blank"
              >Code</a
            >
          </div>

          <div class="project-image mx-6 mt-14"></div>
        </div>
      </div>

      <div class="flex lg:flex-row flex-col justify-center mt-12">
        <div
          class="project-card lg:mr-12 lg:mb-0 mb-10 w-full"
          style="background: #FCF5DD;"
        >
          <h4 class="project-heading mx-6 mt-8">Investment Calculator</h4>
          <p class="mt-2 mx-6 project-text h-16">
            Investment calculator to help determine how much your money will
            grow. Built with Vue js
          </p>
          <div class="flex flex-row mx-6 mt-4">
            <a
              href="https://investmentcalculator.netlify.app/"
              class="project-button p-2 cursor-pointer"
              style="background:#9e71fc"
              target="_blank"
              >Live Demo</a
            >
            <a
              class="project-button p-2 ml-4 cursor-pointer"
              style="background: #D65CD6"
              >Code</a
            >
          </div>

          <!-- <div
            class="flex flex-col items-center w-full h-full mt-16 mx-auto"
            style="max-width: 381px; height: 300px;"
          >
            <div
              class="project-image bg-green-400 w-full h-full"
              v-bind:style="{
                'background-image':
                  'url(' + require('../assets/tweeter.png') + ')',
              }"
            ></div>
          </div> -->
        </div>

        <div class="project-card w-full" style="background: #EEFCDD;">
          <h4 class="project-heading mx-6 mt-8">Recipe Finder</h4>
          <p class="mt-2 mx-6 project-text h-16">
            Recipe finder built with React js and Tailwind Css.
          </p>
          <div class="flex flex-row mx-6 mt-4">
            <a
              href="https://recipes-react-proj.herokuapp.com/"
              class="project-button p-2 cursor-pointer"
              style="background:#9e71fc"
              target="_blank"
              >Live Demo</a
            >
            <a
              href="https://github.com/Tekuor/recipes"
              class="project-button p-2 ml-4 cursor-pointer"
              style="background: #D65CD6"
              target="_blank"
              >Code</a
            >
          </div>

          <div class="project-image mx-6 mt-14"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.project-card {
  /* max-width: 445px; */
  min-height: 559px;
  border-radius: 16px;
}

.project-heading {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
}

.project-text {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #3a2f52;
}

.project-button {
  max-width: 114px;
  min-height: 40px;
  border-radius: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
}

.project-image {
  background: #ebebeb;
  border-radius: 8px 8px 0px 0px;
  background-size: 100%, 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media only screen and (max-width: 700px) {
  /* .project-heading {
    font-weight: 900;
    font-size: 64px;
  } */
}
</style>
