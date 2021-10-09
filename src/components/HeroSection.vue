<template>
  <div class="pt-32 pb-12 h-full md:px-40 text-white">
    <p class="first-text">
      Enthused with data and it’s management, I took a dive into backend
      development and databases.
    </p>
    <p class="second-text">I'm Matekuor, a full stack dev.</p>
    <div class="name-div h-96 mt-10 p-10">
      <div class="flex flex-row">
        <div
          class="rounded-full h-8 w-8"
          style="background: rgba(255, 255, 255, 0.1);"
        >
          <img class="ml-1 mt-1" src="@/assets/volumeDown.png" />
        </div>
        <div class="pl-8">
          <p class="name">Matekuor</p>
          <p>/məˌtɪəˌkʊə/</p>
        </div>
      </div>

      <div class="flex flex-row mt-8">
        <div>
          <p>noun</p>
        </div>
      </div>

      <div class="flex flex-row justify-end mt-3 w-64 md:ml-4">
        <div>
          <p>Second daughter in a family</p>
        </div>
      </div>

      <div
        style="border-top: 1px solid rgba(255, 255, 255, 0.25)"
        class="mt-10"
      >
        <div class="flex flex-row justify-between mt-8">
          <div class="md:mt-5">
            <p class="audio-text">
              <span style="color: #9E71FC; font-weight: bold">27 audios</span>
              where people butchered my name 😂😅
            </p>
          </div>

          <div class="record-div">
            <div class="flex flex-row mt-4 mx-3">
              <div
                class="rounded-full h-9 w-9"
                style="background: rgba(255, 255, 255, 0.1);"
              >
                <img class="ml-2 mt-2" src="@/assets/voice.png" />
              </div>
              <div class="pl-4 mt-1">
                <p class="record-text">Record you pronounce my name 😆</p>
              </div>
            </div>
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
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
.first-text {
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  color: #ffffff;
}

.second-text {
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  color: #ffffff;
}

.name-div {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}

.name {
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
}

.record-div {
  width: 351px;
  min-height: 64px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.audio-text {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
}

.record-text {
  font-weight: bold;
  font-size: 16px;
}
</style>
