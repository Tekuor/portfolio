<template>
  <div class="text-white pt-14 pb-36" style="position: relative;">
    <div class="flex flex-col">
      <div class="w-full h-auto">
        <h1 class="stack-heading text-center">Stack & Tools</h1>
      </div>

      <div class="h-auto -mt-9">
        <div class="mx-40 stack-div flex flex-row">
          <div class="w-1/2 mt-40 ml-14">
            <h4 class="stack-heading-text">
              Halo! Saya Dwinawan, seorand user interface Designer. Saat ini
              tinggal di Surakarta
            </h4>
            <p class="stack-text">
              Halo! Saya Dwinawan, seorand user interface Halo! Saya Dwinawan,
              seorand user interface Designer. Saat ini tinggal di Surakarta
            </p>
          </div>
          <div class="-mt-12">
            <div class="stack-box p-6" style="z-index: 1;">
              <h4 class="stack-title">Front-end stack</h4>
              <div class="flex flex-row flex-wrap justify-between mt-6">
                <div class="stack-div-indv flex flex-row">
                  <div class="small-square mt-2.5 ml-2.5"></div>
                  <p class="stack-div-text mt-3 ml-2">Vue js</p>
                </div>
                <div class="stack-div-indv flex flex-row">
                  <div class="small-square mt-2.5 ml-2.5"></div>
                  <p class="stack-div-text mt-3 ml-2">React js</p>
                </div>
                <div class="stack-div-indv flex flex-row">
                  <div class="small-square mt-2.5 ml-2.5"></div>
                  <p class="stack-div-text mt-3 px-1">Typescript</p>
                </div>
                <div class="stack-div-indv mt-6"></div>
                <div class="stack-div-indv mt-6"></div>
                <div class="stack-div-indv mt-6"></div>
              </div>
            </div>
            <div
              class="stack-box p-6"
              style="z-index: 2; top:480px; right: 70px;"
            >
              <h4 class="stack-title">Back-end stack</h4>
              <div class="flex flex-row flex-wrap justify-between mt-6">
                <div class="stack-div-indv flex flex-row">
                  <div class="small-square mt-2.5 ml-2.5"></div>
                  <p class="stack-div-text mt-3 ml-2">Express js</p>
                </div>
                <div class="stack-div-indv flex flex-row">
                  <div class="small-square mt-2.5 ml-2.5"></div>
                  <p class="stack-div-text mt-3 ml-2">PHP</p>
                </div>
                <div class="stack-div-indv flex flex-row">
                  <div class="small-square mt-2.5 ml-2.5"></div>
                  <p class="stack-div-text mt-3 px-1">Laravel</p>
                </div>
                <div class="stack-div-indv mt-6 flex flex-row">
                  <div class="small-square mt-2.5 ml-2.5"></div>
                  <p class="stack-div-text mt-3 px-1">Mongo DB</p>
                </div>
                <div class="stack-div-indv mt-6 flex flex-row">
                  <div class="small-square mt-2.5 ml-2.5"></div>
                  <p class="stack-div-text mt-3 px-1">SQL</p>
                </div>
                <div class="stack-div-indv mt-6 flex flex-row">
                  <div class="small-square mt-2.5 ml-2.5"></div>
                  <p class="stack-div-text mt-3 px-1">Python</p>
                </div>
              </div>
            </div>
            <div
              class="stack-box"
              style="z-index: 1; top:679px; right: 300px;"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.stack-heading {
  font-style: normal;
  font-weight: 900;
  font-size: 180px;
  color: #4e4463;
}

.stack-div {
  width: 981px;
  height: 553px;
  background: #9e71fc;
  border-radius: 16px;
}

.stack-heading-text {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
}

.stack-text {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
}

.stack-box {
  width: 428px;
  height: 277px;
  background: #fafafa;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  position: absolute;
}

.stack-title {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #3a2f52;
}

.stack-div-indv {
  min-width: 99px;
  min-height: 44px;
  background: #ffffff;
  border-radius: 4px;
}

.small-square {
  width: 24px;
  height: 24px;
  background: #ebebeb;
  border-radius: 4px;
}

.stack-div-text {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #000000;
}
</style>
