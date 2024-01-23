<template>
    <div v-show="isOpen">
      <div
        class="circle_black"
        style="position: absolute;
               right: 15%;
               margin-top: 3%;
               width: 100px;
               height: 100px;
               transform: scale(0.7);"
        @click="handleCloseAlarmList"
        @keydown.right="handleCloseAlarmList"
      >
        <p style="left: 40%; top: -30%;">ᐊ</p>
      </div>

      <div class="circle_black alarms">
      </div>
      <div class="alarm-list">
        <ul>
          <li class="alarm-item" v-for="(alarm, index) in alarms" :key="index">
            <p style="font-size: 30px;">time: {{ alarm.hours }}:{{ alarm.minutes }}</p>
            <button
              class="button-14"
              @click="toggleAlarm(index)"
            >
              <div class="button-14-top text">
                <p style="font-size: 12px;">
                  {{ alarm.isActive ? 'On' : 'Off' }}
                </p>
              </div>
              <div
                class="button-14-bottom"
                :style="[alarm.isActive ? { background: '#156b15' } : { background: '#ab2c2c' }]"
              ></div>
              <div class="button-14-base"></div>
            </button>
            <button class="button-11" @click="deleteAlarm(index)">
            <div class="button-11__content">
              <div class="button-11__icon">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 80 80" style="enable-background:new 0 0 80 80;" xml:space="preserve"> <g> <path d="M64,48L64,48h-8V32h8c8.836,0,16-7.164,16-16S72.836,0,64,0c-8.837,0-16,7.164-16,16v8H32v-8c0-8.836-7.164-16-16-16 S0,7.164,0,16s7.164,16,16,16h8v16h-8l0,0l0,0C7.164,48,0,55.164,0,64s7.164,16,16,16c8.837,0,16-7.164,16-16l0,0v-8h16v7.98 c0,0.008-0.001,0.014-0.001,0.02c0,8.836,7.164,16,16,16s16-7.164,16-16S72.836,48.002,64,48z M64,8c4.418,0,8,3.582,8,8 s-3.582,8-8,8h-8v-8C56,11.582,59.582,8,64,8z M8,16c0-4.418,3.582-8,8-8s8,3.582,8,8v8h-8C11.582,24,8,20.417,8,16z M16,72 c-4.418,0-8-3.582-8-8s3.582-8,8-8l0,0h8v8C24,68.418,20.418,72,16,72z M32,48V32h16v16H32z M64,72c-4.418,0-8-3.582-8-8l0,0v-8 h7.999c4.418,0,8,3.582,8,8S68.418,72,64,72z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
              </div>
              <p class="button-11__text text">Del</p>
            </div>
          </button>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AlarmList',
  props: {
    alarms: {
      type: Array,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['toggle-alarm', 'delete-alarm', 'close:alarmList'],

  methods: {
    toggleAlarm(index) {
      this.$emit('toggle-alarm', index);
    },
    deleteAlarm(index) {
      this.$emit('delete-alarm', index);
    },
    handleCloseAlarmList() {
      this.$emit('close:alarmList', false);
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

  .circle_black {
    &.alarms:before {
      position: absolute;
      left: 8%;
      top: 33%;
      width: 85%;
      height: 40%;
      border-radius: 40px;
      margin: 0;
      box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5),
      -8px -8px 20px rgba(255, 255, 255, 0.2), inset 8px 8px 20px rgba(0, 0, 0, 1),
      inset -8px -8px 20px rgba(255, 255, 255, 0.2);
    }
  }

  .alarm-list {
    position: absolute;
    top: 36%;
    left: 7%;
    width: 83%;
    height: 33%;
    overflow: scroll;
    border-radius: 30px;
  }

  .alarm-item {
    background-color: #f6f6f600;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 10px 0;
  }

  .alarm-toggle {
    cursor: pointer;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 2px;
    transition-duration: 0.4s;

    &:hover {
      background-color: #0056b3;
      text-decoration: none;
      color: white;
    }
  }

  .alarm-delete {
    cursor: pointer;
    color: #fff;
    background-color: #dc3545;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 2px;
    transition-duration: 0.4s;

    &:hover {
      background-color: #c82333;
      text-decoration: none;
      color: white;
    }
  }

  /* CSS */
  .button-14 {
    touch-action: manipulation;
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    border-width: 0;
    padding: 0 8px 12px;
    min-width: 10em;
    box-sizing: border-box;
    background: transparent;
    font: inherit;
    cursor: pointer;
  }

  .button-14-top {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 0;
    padding: 8px 16px;
    transform: translateY(0);
    text-align: center;
    color: #fff;
    text-shadow: 0 -1px rgba(0, 0, 0, .25);
    transition-property: transform;
    transition-duration: .2s;
    -webkit-user-select: none;
    user-select: none;
  }

  .button-14:active .button-14-top {
    transform: translateY(6px);
  }
  /*
  .button-14-top::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
    background-image: radial-gradient(#565656a4, #87878747);
    text-align: center;
    color: #fff;
    box-shadow: inset 0 0 0px 1px rgba(255, 255, 255, .2), 0 1px 2px 1px rgba(255, 255, 255, .2);
    transition-property: border-radius, padding, width, transform;
    transition-duration: .2s;
  }
  */
  .button-14:active .button-14-top::after {
    border-radius: 6px;
    padding: 0 2px;
  }

  .button-14-bottom {
    position: absolute;
    z-index: -1;
    bottom: 4px;
    left: 4px;
    border-radius: 8px / 16px 16px 8px 8px;
    padding-top: 6px;
    width: calc(100% - 8px);
    height: calc(100% - 10px);
    box-sizing: content-box;
    background-color: #803;
    background-image: radial-gradient(4px 8px at 4px calc(100% - 8px),
      rgba(255, 255, 255, .25), transparent),
      radial-gradient(4px 8px at calc(100% - 4px) calc(100% - 8px),
      rgba(255, 255, 255, .25), transparent),
      radial-gradient(16px at -4px 0, white, transparent),
      radial-gradient(16px at calc(100% + 4px) 0, white, transparent);
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5), inset 0 -1px 3px 3px rgba(0, 0, 0, .4);
    transition-property: border-radius, padding-top;
    transition-duration: .2s;
  }

  .button-14:active .button-14-bottom {
    border-radius: 10px 10px 8px 8px / 8px;
    padding-top: 0;
  }

  .button-14-base {
    position: absolute;
    z-index: -2;
    top: 4px;
    left: 0;
    border-radius: 12px;
    width: 100%;
    height: calc(100% - 4px);
    background-color: rgba(0, 0, 0, .15);
    box-shadow: 0 1px 1px 0 rgba(255, 255, 255, .75), inset 0 2px 2px rgba(0, 0, 0, .25);
  }

  /* CSS */
  .button-11 {
    touch-action: manipulation;
    position: relative;
    padding: 0;
    width: 100px;
    height: 65px;
    border: 2px solid #888888;
    outline: none;
    background-color: #f4f5f6;
    border-radius: 20px;
    transition: 0.13s ease-in-out;
    cursor: pointer;
  }
  .button-11:active {
    box-shadow: none;
  }
  .button-11:active .button-11__content {
    box-shadow: none;
  }
  .button-11:active
  .button-11__content
  .button-11__text,
  .button-11:active
  .button-11__content
  .button-11__icon {
    transform: translate3d(0px, -9px, 0px);
  }

  .button-11__content {
    position: relative;
    display: grid;
    padding: 10px;
    width: 80%;
    height: 80%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    box-shadow: inset 0px -4px 0px #dddddd, 0px -4px 0px #f4f5f6;
    border-radius: 20px;
    transition: 0.13s ease-in-out;
    z-index: 1;
  }
  .button-11__icon {
    position: relative;
    display: flex;
    transform: translate3d(0px, 0px, 0px);
    grid-column: 4;
    align-self: start;
    justify-self: end;
    width: 16px;
    height: 16px;
    transition: 0.13s ease-in-out;
  }
  .button-11__icon svg {
    width: 16px;
    height: 16px;
    fill: #aaaaaa;
  }
  .button-11__text {
    position: relative;
    transform: translate3d(10px, -12px, 0px);
    margin: 0;
    align-self: end;
    grid-column: 1/5;
    grid-row: 2;
    text-align: center;
    font-size: 16px;
    background-color: #888888;
    color: transparent;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    transition: 0.13s ease-in-out;
  }
</style>
