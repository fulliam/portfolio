<template>
    <div
      class="blur list"
      style="display: flex;
             position: absolute;
             border-radius: 40px;
             height: 150px;
             width: 400px;
             transform: scale(0.7);
             left: 0;
             margin-top: 2%;"
    >
    </div>
    <div style="display: flex;
                position: absolute;
                color: blue;
                transform: scale(0.7);
                left: 45px;
                margin-top: 0;"
    >
      <p style="color: rgb(70, 70, 131);">{{ hours.toString().padStart(2, '0') }}</p>
      <p style="color: rgb(70, 70, 131);">:</p>
      <p style="color: rgb(70, 70, 131);">{{ minutes.toString().padStart(2, '0') }}</p>
    </div>

    <div
      class="circle_black long"
      style="display: flex;
             position: absolute;
             bottom: 90px;
             margin-top: 0;
             left: 5%;
             color: #c92020;"
      @click="setAlarm"
      @keydown.enter="setAlarm"
    >
      <p style="left: 40px; top: 10%; font-size: 40px; color: rgb(42, 252, 0);">save</p>
    </div>

    <audio ref="audioRef" :src="audioURL">
      <track kind="captions" />
    </audio>

    <div
      class="circle_black"
      style="position: absolute;
             right: 15%;
             margin-top: 3%;
             width: 100px;
             height: 100px;
             transform: scale(0.7);"
      v-show="!alarmListIsOpen"
      @click="handleAlarmListOpened"
      @keydown.enter="handleAlarmListOpened"
    >
      <p style="left: 60%; top: -30%;">ᐅ</p>
    </div>

    <AlarmList
      :alarms="alarms"
      :isOpen="alarmListIsOpen"
      @toggle-alarm="toggleAlarm"
      @delete-alarm="deleteAlarm"
      @close:alarmList="handleAlarmListOpened"
    />

    <ModalWindow :visible="showModal" @confirm="handleModalConfirm" />
</template>

<script>
import ModalWindow from '../../components/alarm/ModalWindow/index.vue';
import AlarmList from '../../components/alarm/AlarmList/index.vue';

export default {
  name: 'AlarmComponent',
  data: () => ({
    showModal: false,
    playInterval: null,
    alarms: [],
    alarmListIsOpen: false,
  }),

  props: {
    hours: {
      type: String,
      required: true,
    },
    minutes: {
      type: String,
      required: true,
    },
    audioURL: {
      type: String,
      required: true,
    },
  },

  components: {
    ModalWindow,
    AlarmList,
  },

  emits: ['close:timePicker'],

  methods: {
    setAlarm() {
      const now = new Date();
      const alarmTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        this.hours,
        this.minutes,
      );

      let timeDiff = alarmTime - now;
      if (timeDiff < 0) {
        alarmTime.setDate(alarmTime.getDate() + 1);
        timeDiff = alarmTime - now;
      }

      const index = this.alarms.length;

      const audioElement = new Audio(this.audioURL);
      audioElement.loop = true;

      this.alarms.push({
        hours: this.hours,
        minutes: this.minutes,
        isActive: true,
        audioElement,
        alarmTimeout: setTimeout(() => this.triggerAlarm(index), timeDiff),
      });
    },

    triggerAlarm(index) {
      this.alarms[index].audioElement.play();
      this.showModal = true;
    },

    handleModalConfirm() {
      this.alarms.forEach((alarm) => {
        // eslint-disable-next-line no-param-reassign
        alarm.audioElement.pause();
        // eslint-disable-next-line no-param-reassign
        alarm.audioElement.currentTime = 0;
      });
      this.showModal = false;
    },

    toggleAlarm(index) {
      const alarm = this.alarms[index];
      alarm.isActive = !alarm.isActive;

      if (alarm.isActive) {
        const now = new Date();
        const alarmTime = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          alarm.hours,
          alarm.minutes,
        );

        let timeDiff = alarmTime - now;
        if (timeDiff < 0) {
          alarmTime.setDate(alarmTime.getDate() + 1);
          timeDiff = alarmTime - now;
        }

        alarm.alarmTimeout = setTimeout(this.triggerAlarm, timeDiff);
      } else {
        clearTimeout(alarm.alarmTimeout);
        alarm.alarmTimeout = null;
        alarm.audioElement.pause();
        alarm.audioElement.currentTime = 0;
      }
    },

    deleteAlarm(index) {
      const alarm = this.alarms.splice(index, 1)[0];
      clearTimeout(alarm.alarmTimeout);
      alarm.audioElement.pause();
      alarm.audioElement.currentTime = 0;
    },

    handleAlarmListOpened() {
      this.alarmListIsOpen = !this.alarmListIsOpen;
      this.$emit('close:timePicker', !this.alarmListIsOpen);
    },
  },
};
</script>

<style lang="scss" scoped>
p {
    font-size: 60px;
    font-family: 'Press Start 2P';
    color: #e7bd3e;
    background: rgba(0, 0, 0, 0);
    text-shadow: rgba(245, 120, 11, 0.69) 7px -1px;
    -webkit-text-stroke: .07em rgba(0,0,0,.5);
}
</style>
