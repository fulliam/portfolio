<template>
    <div
      class="circle_black"
      style="display: flex; position: absolute; bottom: 40px; right: 5%; color: #c92020;"
      @mousedown="startRecording"
      @mouseup="stopRecording"
      @mouseleave="stopRecording"
      @focusout="stopRecording"
      @touchstart="startRecording"
      @touchend="stopRecording"
    >
      <p>
        🎙️
      </p>
    </div>
</template>

<script>
export default {
  name: 'VoiceRecord',
  data() {
    return {
      recording: false,
      mediaRecorder: null,
      chunks: [],
    };
  },

  emits: ['audio-recorded'],

  methods: {
    startRecording() {
      if (this.recording) return;
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          this.mediaRecorder = new MediaRecorder(stream);
          this.recording = true;

          this.mediaRecorder.start();

          this.mediaRecorder.addEventListener('dataavailable', (event) => {
            if (event.data.size > 0) {
              this.chunks.push(event.data);
            }
          });

          this.mediaRecorder.addEventListener('stop', () => {
            const blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' });
            const audioURL = URL.createObjectURL(blob);

            this.$emit('audio-recorded', audioURL);

            this.chunks = [];
          });
        })
        .catch((error) => {
          console.error('Error accessing microphone:', error);
        });
    },
    stopRecording() {
      if (this.mediaRecorder && this.recording) {
        this.mediaRecorder.stop();
        this.recording = false;
      }
    },
  },
};
</script>

<style lang="scss">
.circle:before,
.circle_black:before {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 150px;
  height: 150px;
  content: " ";
  cursor: pointer;
  transition: 0.3s ease-out;
  border-radius: 150px;
  filter: blur(7px);
}
.circle.long,
.circle_black.long {
  width: 250px;
  height: 100px;
}
.circle.long:before,
.circle_black.long:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  height: 150px;
}
.circle:before {
  box-shadow: 8px 8px 20px #a9a8b7, -8px -8px 20px #fff;
}
.circle_black:before {
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5),
    -8px -8px 20px rgba(255, 255, 255, 0.2);
}
.circle:active:before {
  box-shadow: 8px 8px 20px #a9a8b7, -8px -8px 20px #fff,
    inset -8px -8px 20px #fff, inset 8px 8px 20px #a9a8b7;
}
.circle_black:active:before {
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5),
    -8px -8px 20px rgba(255, 255, 255, 0.2), inset 8px 8px 20px rgba(0, 0, 0, 1),
    inset -8px -8px 20px rgba(255, 255, 255, 0.2);
}
.circle:active:before,
.circle_black:active:before {
  transition: 0.3s ease-in;
  transform: scale(1.05);
}
.circle p,
.circle_black p {
  position: absolute;
  z-index: 5;
  user-select: none;
  cursor: pointer;
  left: 28%;
  top: -12%;
  font-size: 60px;
  opacity: 0.2;
  transition: opacity 0.4s;
}
.circle:active p,
.circle_black:active p {
  opacity: 0.1;
}
.circle_black {
  color: white;
}
</style>
