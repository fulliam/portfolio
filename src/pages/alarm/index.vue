<template>
  <div class="app-alarm">
    <div
      v-show="timePickerShow"
      style="display: flex;
             transform: scale(0.7);
             margin-top: 10%;"
    >
      <div style="padding: 20px; margin: 20px;">
        <TimePicker
          v-model="selectedNumber1"
          numbersCount="24"
        />
      </div>
      <div style="padding: 20px; margin: 20px;">
        <TimePicker
          v-model="selectedNumber2"
          numbersCount="60"
        />
      </div>
    </div>
    <AlarmComponent
      :hours="selectedNumber1.toString().padStart(2, '0')"
      :minutes="selectedNumber2.toString().padStart(2, '0')"
      :audioURL="audioURL"
      @close:timePicker="handleTimePickerShow"
    />
    <VoiceRecord @audio-recorded="handleAudioRecorded"/>
  </div>
</template>

<script>
import TimePicker from '../../components/alarm/TimePicker/index.vue';
import AlarmComponent from '../../views/alarm/index.vue';
import VoiceRecord from '../../components/alarm/VoiceRecord/index.vue';

export default {
  name: 'AlarmPage',
  components: {
    TimePicker,
    AlarmComponent,
    VoiceRecord,
  },
  data() {
    return {
      selectedNumber1: 0,
      selectedNumber2: 0,
      audioURL: '',
      timePickerShow: true,
    };
  },
  methods: {
    handleAudioRecorded(data) {
      this.audioURL = data;
    },
    handleTimePickerShow(value) {
      this.timePickerShow = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-alarm {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
