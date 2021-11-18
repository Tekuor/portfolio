<template>
  <div
    class="pt-32 pb-12 h-full text-white w-full flex flex-col items-center md:text-left text-center"
  >
    <div class="md:w-3/4 w-full">
      <p class="second-text">I'm Matekuor, a full stack dev.</p>
      <p class="first-text md:text-6xl text-xl">
        Building efficient software that have positive impact on businesses and
        customers.
      </p>
      <div class="name-div min-h-96 mt-10 p-10">
        <div class="flex flex-row">
          <div
            class="rounded-full h-8 w-8 cursor-pointer"
            style="background: rgba(255, 255, 255, 0.1);"
            @click="playSound(require('../assets/Matekuor.mp3'))"
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

        <div class="flex flex-row justify-end mt-3 md:w-1/3 w-full md:ml-4">
          <div>
            <p>Second daughter in a Krobo family</p>
          </div>
        </div>

        <div
          style="border-top: 1px solid rgba(255, 255, 255, 0.25)"
          class="mt-10"
        >
          <div
            class="flex md:flex-row flex-col justify-between mt-8 cursor-pointer"
          >
            <div class="record-div md:mt-0 mt-8" @click="showModal">
              <div class="flex flex-row md:mt-4 mt-2 mx-3">
                <div
                  class="rounded-full md:h-9 h-8 md:w-9 w-11"
                  style="background: rgba(255, 255, 255, 0.1);"
                >
                  <img class="ml-2 mt-2 " src="@/assets/voice.png" />
                </div>
                <div class="pl-4 md:mt-1">
                  <p class="record-text">Record you pronounce my name 😆</p>
                </div>
              </div>
            </div>

            <div class="md:mt-5 mt-4">
              <p class="audio-text">
                <span style="color: #D65CD6; font-weight: bold">Listen</span>
                to how 12+ others butchered my name
              </p>
            </div>
          </div>
        </div>
      </div>

      <modal
        name="example"
        width="100%"
        height="100%"
        :clickToClose="true"
        :showClose="true"
      >
        <div
          style="color:black; background-color: #3a2f52;"
          class="w-full h-full"
        >
          <div class="flex flex-col items-end pt-8 pr-12">
            <button id="hamburger" @click="closeModal()">
              <img
                class="float-right"
                src="@/assets/close.png"
                width="40"
                height="40"
              />
            </button>
          </div>
          <div class="flex flex-col items-center mt-8">
            <div class="flex flex-row mb-8" v-if="!file">
              <div v-show="!recording">
                <button
                  class="rounded-full h-14 w-14 flex flex-col items-center"
                  style="background: rgba(255, 255, 255, 0.1);"
                  @click="record()"
                >
                  <img class="mt-3 w-7" src="@/assets/voice.png" />
                </button>
              </div>

              <div v-show="recording">
                <button
                  id="stop"
                  class="rounded-full h-14 w-14 flex flex-col items-center"
                  style="background: rgba(255, 255, 255, 0.1);"
                >
                  <img class="w-9 mt-2" src="@/assets/stop.png" />
                </button>
              </div>
            </div>

            <audio v-else controls :src="file">
              Your browser does not support the
              <code>audio</code> element.
            </audio>

            <div class="flex flex-col items-center" v-if="!file">
              <div class="recording-heading">
                Click on the mic Icon to Start recording
              </div>
              <div class="recording-text">Record you pronounce my name 😆</div>
            </div>

            <div class="name-div min-h-96 mt-8 p-10">
              <div class="flex flex-row">
                <div
                  class="rounded-full h-8 w-8"
                  style="background: rgba(255, 255, 255, 0.1);"
                  @click="playSound(require('../assets/Matekuor.mp3'))"
                >
                  <img class="ml-1 mt-1" src="@/assets/volumeDown.png" />
                </div>
                <div class="pl-8">
                  <p class="name">Matekuor</p>
                  <p class="pronunciation">/məˌtɪəˌkʊə/</p>
                </div>
              </div>

              <div class="flex flex-row mt-8">
                <div class="noun-text">
                  <p>noun</p>
                </div>
              </div>

              <div class="flex flex-row justify-end mt-3 w-64 md:ml-4">
                <div class="name-meaning">
                  <p>Second daughter in a Krobo family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: "",
      preset: "kosvy4q2",
      recording: false,
    };
  },
  methods: {
    showModal() {
      this.$modal.show("example");
    },
    closeModal() {
      this.$modal.hide("example");
    },
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    record() {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        this.recording = true;
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        const audioChunks = [];

        mediaRecorder.addEventListener("dataavailable", (event) => {
          audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
          this.recording = false;
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          this.file = audioUrl;

          let formData = new FormData();
          formData.append("upload_preset", this.preset);
          formData.append("file", audioBlob);

          fetch(`https://api.cloudinary.com/v1_1/dt7xfykxp/upload`, {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((result) => {
              console.log("Success:", result);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        });

        document.getElementById("stop").addEventListener("click", function() {
          mediaRecorder.stop();
        });
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
.first-text {
  font-style: normal;
  font-weight: 600;
  /* font-size: 64px; */
  color: #ffffff;
}

.second-text {
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
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
  min-height: 64px;
  background: #9e71fc;
  border-radius: 8px;
}

.audio-text {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
}

.recording-heading {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
}

.recording-text {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
}

.pronunciation {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #ffffff;
}

.name-meaning {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
}

.noun-text {
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  color: #ffffff;
}

@media only screen and (max-width: 600px) {
  .audio-text {
    font-size: 12px;
  }

  .record-text {
    font-size: 12px;
  }
}

.record-text {
  font-weight: bold;
  font-size: 16px;
}

audio::-webkit-media-controls-panel {
  /* background-color: #56AEFF; */
}
</style>
