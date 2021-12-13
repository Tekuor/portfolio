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
                to how others butchered my name
              </p>
            </div>
          </div>
        </div>
      </div>

      <modal
        name="example"
        width="100%"
        height="auto"
        :clickToClose="true"
        :showClose="true"
        :scrollable="true"
      >
        <div
          style="color:black; background-color: #3a2f52;"
          class="w-full h-screen"
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
          <div v-if="showRecordings" class="flex flex-col items-center mt-8">
            <div class="mb-8">
              <p class="recording-text text-lg">
                Listen to how others butchered my name
              </p>
              <p
                class="listen-text cursor-pointer"
                @click="showRecordings = false"
              >
                Record yourself pronouncing my name
              </p>
            </div>
            <div class="recordings-div flex flex-col items-center pt-8">
              <audio
                controls
                :src="recording.secure_url"
                :key="index"
                class="mb-8"
                v-for="(recording, index) in recordedFiles"
              >
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          </div>
          <div v-else class="flex flex-col items-center mt-8">
            <div class="flex flex-row mb-8" v-if="!file">
              <div v-show="!recording && !saved && !discarded">
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
                  <img class="w-9 mt-3" src="@/assets/stopIcon.png" />
                </button>
              </div>

              <div v-show="saved">
                <button
                  id="save"
                  class="rounded-full h-14 w-14 flex flex-col items-center"
                  style="background: rgba(255, 255, 255, 0.1);"
                >
                  <img class="w-9 mt-3" src="@/assets/check.png" />
                </button>
              </div>

              <div v-show="discarded">
                <button
                  id="discard"
                  class="rounded-full h-14 w-14 flex flex-col items-center"
                  style="background: rgba(255, 255, 255, 0.1);"
                >
                  <img class="w-7 mt-3" src="@/assets/discard.png" />
                </button>
              </div>
            </div>

            <div
              v-show="recorded && !saved && !discarded"
              class="flex flex-col items-center"
            >
              <audio controls :src="file">
                Your browser does not support the
                <code>audio</code> element.
              </audio>

              <div class="flex flex-row mt-8">
                <button
                  class="discard-btn px-4 text-white font-semibold"
                  type="button"
                  @click="discardAudio()"
                >
                  Discard
                </button>
                <button
                  class="ml-6 save-btn px-4 text-white font-semibold"
                  type="button"
                  @click="saveAudio()"
                >
                  Save
                </button>
              </div>
            </div>

            <div class="flex flex-col items-center" v-if="!file">
              <div v-show="recording" class="time-text mb-2">
                {{ duration }}s
              </div>

              <div
                v-if="!recording && !saved && !discarded"
                class="recording-heading mb-2 cursor-pointer"
                @click="record()"
              >
                Start recording
              </div>
              <div
                v-else-if="!recording && saved"
                class="recording-heading mb-2 cursor-pointer"
              >
                Recording Saved
              </div>
              <div
                v-else-if="!recording && discarded"
                class="recording-heading mb-2 cursor-pointer"
              >
                Recording Discarded
              </div>
              <div v-else class="recording-heading mb-2 cursor-pointer">
                Stop recording
              </div>

              <div
                class="recording-text"
                v-if="!recording && !saved && !discarded"
              >
                Record yourself pronounce my name 😆
              </div>
            </div>

            <div
              class="listen-text mt-10 cursor-pointer"
              @click="getRecordings()"
            >
              Listen to how others butchered my name >
            </div>

            <div class="name-div min-h-96 mt-8 p-10">
              <div class="flex flex-row">
                <div
                  class="rounded-full h-8 w-9 cursor-pointer"
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
import { format } from "date-fns";

export default {
  data() {
    return {
      file: "",
      preset: "kosvy4q2",
      recording: false,
      duration: 0,
      saved: false,
      discarded: false,
      recorded: false,
      formData: {},
      recordedFiles: [],
      showRecordings: false,
    };
  },
  methods: {
    showModal() {
      this.$modal.show("example");
    },
    closeModal() {
      this.reset();
      this.$modal.hide("example");
    },
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    reset() {
      this.saved = false;
      this.discarded = false;
      this.recorded = false;
      this.recording = false;
    },
    record() {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        this.recording = true;
        const mediaRecorder = new MediaRecorder(stream);
        let start = Date.now();
        mediaRecorder.start();

        let timer = setInterval(() => {
          this.duration = format(Date.now() - start, "mm:ss");
        }, 1000);

        const audioChunks = [];

        mediaRecorder.addEventListener("dataavailable", (event) => {
          audioChunks.push(event.data);
        });

        this.formData = new FormData();

        mediaRecorder.addEventListener("stop", () => {
          this.recording = false;
          clearInterval(timer);
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          this.file = audioUrl;

          this.formData.append("folder", "portfolio");
          this.formData.append("tags", "portfolio");
          this.formData.append("resource_type", "video");
          this.formData.append("access_mode", "authenticated");
          this.formData.append("file", audioBlob);

          this.recording = false;
          this.recorded = true;
        });

        document.getElementById("stop").addEventListener("click", function() {
          mediaRecorder.stop();
        });
      });
    },
    saveAudio() {
      fetch(`http://localhost:8000/upload`, {
        method: "POST",
        body: this.formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          this.recording = false;
          this.saved = true;
          this.file = "";
        });
    },
    getRecordings() {
      fetch(`http://localhost:8000/get-files`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result.response.resources);
          this.recordedFiles = result.response.resources;
          this.showRecordings = true;
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          // this.recording = false;
          // this.saved = true;
          // this.file = "";
        });
    },
    discardAudio() {
      this.recording = false;
      this.discarded = true;
      this.file = "";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
.first-text {
  font-style: normal;
  font-weight: 600;
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
  font-size: 20px;
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

.time-text {
  font-weight: 300;
  font-size: 16px;
  text-align: center;
  color: #d65cd6;
}

.discard-btn {
  height: 43px;
  background: #d65cd6;
  border-radius: 8px;
}

.save-btn {
  height: 43px;
  background: #9e71fc;
  border-radius: 8px;
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

.listen-text {
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  color: #d65cd6;
}

audio::-webkit-media-controls-panel {
  /* background-color: #56AEFF; */
}

.recordings-div {
  position: static;
  width: 406px;
  max-height: 544px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
</style>
