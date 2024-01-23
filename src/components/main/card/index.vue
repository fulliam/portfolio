<template>
  <div
    class="page-card"
  >
    <router-link :to="`/${page.url}`">
      <img :src="currentImage" :alt="page.url">
      <div class="info">
        <dl>
          <dt>
            <b style="color: #00000070;">This is </b>«{{ page.title }}»
          </dt>
          <dd>
            <i style="color: #00000070;">what is it? — </i>{{ page.description }}
          </dd>
        </dl>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PageCard',
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.page.img[this.currentIndex];
    },
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.page.img.length;
    },
  },
  mounted() {
    setInterval(this.nextImage, 3000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
.page-card {
  border: 14px solid rgba(175, 127, 51, 0.87);
  background: rgba(165, 42, 42, 0.5294117647);
  transition: all 1.5s ease;
  overflow: hidden;
  box-shadow: inset 10px 10px 10px black, 0px 20px 10px rgba(54, 16, 16, 0.77);
  margin: 20px;
  border-radius: 40px;
  width: 80%;

    &:hover {
      border-color: lighten(rgba(175, 127, 51, 0.87), 15%);
      box-shadow: inset 10px 10px 10px black;
      transform: rotateY(-10deg);
    }

    & a {
        display: flex;
        text-decoration: none;
        padding: 15px;

        @media screen and (max-width: 1074px) {
            display: grid;
        }
    }

    & img {
        width: 200px;
        object-fit: scale-down;
        border-radius: 20px;
        border: 10px solid #131926;
        height: 150px;
        background: #131926;
        transition: 0.5s;
        user-select: none;
        box-shadow: 5px 5px 5px #000000c9;
        position: relative;

        &:hover {
            transform: scale(1.08);
        }
    }

    & .info {
      opacity: 1;
      width: 100%;
      transition: opacity 2s ease;
      overflow: hidden;

      & dl {
        margin: 20px;
        font-size: 30px;
        font-family: "Amatic SC";

        & dt {
          color: #ccc;
          text-align: initial;
        }

        & dd {
          font-weight: bolder;
          color: #e7a916e3;
          font-size: 30px;
        }
      }
    }
}
</style>
