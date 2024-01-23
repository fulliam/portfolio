<template>
  <div class="card">
    <div
      v-for="product in products"
      :key="product.id"
      :class="[
        'product',
        product.class,
        { active: product.active },
      ]"
      :style="{
        zIndex: product.active ? '5' : '6',
        margin: product.active ? '40px' : '0',
        marginLeft: product.active ? '10px' : '0',
        marginRight: product.active ? '10px' : '0',
        position: product.active ? 'relative' : 'absolute',
      }"
    >
      <div class="black-backgground" v-if="!product.active"></div>
      <div
        :class="[
          'card-item',
          product.picClass,
        ]"
        :style="{
            width: product.active  ? '55%' : '10%',
            height: product.active  ? '35%' : '10%',
            position: product.active  ? 'relative' : 'fixed',
            top: product.active  ? '20px' : '30%',
            zIndex: product.active  ? '' : '99',
            transform: product.active ? '' : 'scale(1)',
        }"
      >
        <img
          :style="{ transform: product.active ? '' : 'scale(3)' }"
          :src="product.imageSrc"
          :alt="product.alt"

        />
        <div
          class="card-opener"
          @click="imageView(product)"
          @keydown.q="imageView(product)"
        >
        </div>
        <!--
        <div
          class="delete-button"
          @click="deleteProduct(product.id)"
          @keydown.q="handleClick(product.id)"
          @click.stop
        >
          ✖
        </div>
        -->
      </div>

      <div class="slider">
        <div class="add-to-cart">
          <button
            class="btn btn--yellow"
            @click="addToCart(product.id)"
          >
            ✓
            <span>
              <i class="btn__bg"  aria-hidden="true"></i>
              <i class="btn__bg"  aria-hidden="true"></i>
              <i class="btn__bg"  aria-hidden="true"></i>
              <i class="btn__bg"  aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="description">
          {{ product.description }}
        </div>
        <div class="price">
          PRICE {{ product.price }}
        </div>
      </div>
      <div class="name">{{ product.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    products: {
      type: Array,
      required: true,
    },
  }, // v-show="product.addToCart == true"
  methods: {
    /* eslint-disable */
    imageView(product) {
      product.active = !product.active;
    },
    /* eslint-enable */
    deleteProduct(id) {
      this.$emit('delete', id);
    },
    addToCart(id) {
      this.$emit('add-to-cart', id);
      const { activeElement } = document;
      setTimeout(() => {
        activeElement.blur();
      }, 600);
    },
  },
};
</script>

<style lang="scss" scoped>
$hueStep: 90;
$delayStep: .115s;

.btn {
  background: hsl(var(--hue), 98%, 80%);
  border: none;
  border-radius: 7px;
  cursor: pointer;
  color: black;
  font: 600 1.05rem/1 "Nunito", sans-serif;
  letter-spacing: .05em;
  overflow: hidden;
  position: relative;
  text-transform: lowercase;
  width: 120px;
  height: 40px;

  &--yellow {
    --hue: 46;
  }

  // &:active,
  &:focus {
    outline: 3px solid hsl(calc(var(--hue) + #{$hueStep}), 98%, 80%);
  }

  & + & {
    margin-top: 2.5em;
  }

  &__bg {
    background: hsl(var(--hueBg), 98%, 80%);
    border-radius: 50%;
    display: block;
    height: 0;
    left: 50%;
    margin: -50% 0 0 -50%;
    padding-top: 100%;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: scale(0);
    transform-origin: 50% 50%;
    transition: transform 0.175s cubic-bezier(0.5, 1, 0.89, 1);
    z-index: 1;

    @for $i from 1 through 4 {
      &:nth-of-type(#{$i}) {
        --hueBg: calc(var(--hue) - #{$i * $hueStep});
        transition-delay: $delayStep / 2 * (4 - $i);
      }
    }

    .btn:focus &,
    .btn:active & {
      transform: scale(1.5);
      transition: transform 0.2s cubic-bezier(0.11, 0, 0.5, 0);

      @for $i from 1 through 4 {
        &:nth-of-type(#{$i}) {
          transition-delay: $delayStep * $i;
        }
      }
    }

    & .addToCart {
      display: none;
    }
  }
}

.black-backgground {
  background-color: #1e1e1ed9;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
  top: 0;
  padding: 0;
  margin: 0;
}

.card {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
}

@media screen and (max-width: 800px) {
  .card {
    display: grid;
  }
}

@media screen and (max-width: 400px) {
  .card {
    transform: scale(0.95);
  }
}

@media screen and (max-width: 300px) {
  .card {
    transform: scale(0.85);
  }
}

@media screen and (max-width: 200px) {
  .card {
    transform: scale(0.75);
  }
}

.slider {
  position: absolute;
  bottom: 25%;
  // left: calc(50% - 110px);
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  font-family: 'Amatic SC';
  background-color: #80808054;
  width: 80%;
  height: 50%;
  border-radius: 20px;
  transition: transform 0.8s ease;
  padding: 5%;
  z-index: 2;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
}

.description {
  position: absolute;
  top: 14px;
  left: 14px;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  font-family: 'Amatic SC';
}

.add-to-cart {
  position: absolute;
  bottom: 55px;
  left: 20px;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  font-family: 'Amatic SC';
}

.price {
  position: absolute;
  bottom: 10px;
  right: 20px;
  color: #1e1e1e;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Amatic SC';
  background-color: yellow;
  padding-left: 10px;
  border-radius: 5px;
  text-align: center;
  margin: 5px;
  margin-left: 0;
}

.name {
  position: absolute;
  bottom: 3%;
  text-align: center;
  color: darken(#1e1e1e, 15%);
  font-size: 36px;
  background-color: #80808054;
  font-weight: bold;
  font-family: 'Amatic SC';
  transition: opacity 0.4s ease;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 20px;
  width: 90%;
  padding: 1%;
}

.product {
  width: 200px;
  margin: 40px;
  border-radius: 20px;
  border: 3px solid black;
  height: 300px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s ease;

  @keyframes fadeIn {
    0% { opacity: 0; }
    20% { opacity: 0.2; }
    40% { opacity: 0.4; }
    60% { opacity: 0.6; }
    80% { opacity: 0.8; }
    100% { opacity: 1; }
  }

  animation: fadeIn 0.6s ease forwards;

  &:hover {
    .slider {
      transform: translateY(70px);
    }
    .name {
      opacity: 0;
    }
  }

  &:not(:hover) {
    .slider {
      transition: transform 0.4s ease;
      transform: translateY(-105px);
    }
  }
}

.card-item {
  top: 20px;
  border-radius: 30px;
  overflow: hidden;
  padding: 18%;
  margin: -2%;
  z-index: 3;
  cursor: pointer;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);

  &:hover {
    transition: transform 0.8s ease, box-shadow 0.5s ease;
    transform: scale(1.2) translateY(-30px);
    z-index: 6;
  }

  &:not(:hover) {
    transition: transform 0.4s ease;
    transform: scale(1);
    z-index: 3;
  }

  img {
    width: 100%;
    z-index: 99;
  }
}

.card-opener {
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
  background: rgb(0, 0, 0, 0);
  top: 0;
  left: 0;
}

$color-1: rgb(89, 170, 166);
$color-1l: lighten($color-1, 10%);
$color-1d: darken($color-1, 10%);

$color-2: #df4462;
$color-2l: lighten($color-2, 10%);
$color-2d: darken($color-2, 10%);

$color-3: #c8bf30;
$color-3l: lighten($color-3, 10%);
$color-3d: darken($color-3, 10%);

$color-4: #348029;
$color-4l: lighten($color-4, 10%);
$color-4d: darken($color-4, 10%);

$color-5: #a35686;
$color-5l: lighten($color-5, 10%);
$color-5d: darken($color-5, 10%);

$color-6: #6a8abf;
$color-6l: lighten($color-6, 10%);
$color-6d: darken($color-6, 10%);

$color-7: #b16853;
$color-7l: lighten($color-7, 10%);
$color-7d: darken($color-7, 10%);

$color-8: #5ea16b;
$color-8l: lighten($color-8, 10%);
$color-8d: darken($color-8, 10%);

$color-9: #8a6f8d;
$color-9l: lighten($color-9, 10%);
$color-9d: darken($color-9, 10%);

// Custom colors for each product
.item-1 {
  background-color: darken($color-1, 20%);
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7),
    0 0 5px $color-1l, 0 0 15px $color-1l, 0 0 20px $color-1l,
    0 0 40px $color-1l, 0 0 60px $color-1d, 0 0 10px $color-1d,
    0 0 98px $color-1d;
}

.item-2 {
  background-color: darken($color-2, 20%);
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7),
    0 0 5px $color-2l, 0 0 15px $color-2l, 0 0 20px $color-2l,
    0 0 40px $color-2l, 0 0 60px $color-2d, 0 0 10px $color-2d,
    0 0 98px $color-2d;
}

.item-3 {
  background-color: darken($color-3, 20%);
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7),
    0 0 5px $color-3l, 0 0 15px $color-3l, 0 0 20px $color-3l,
    0 0 40px $color-3l, 0 0 60px $color-3d, 0 0 10px $color-3d,
    0 0 98px $color-3d;
}

.item-4 {
  background-color: darken($color-4, 20%);
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7),
    0 0 5px $color-4l, 0 0 15px $color-4l, 0 0 20px $color-4l,
    0 0 40px $color-4l, 0 0 60px $color-4d, 0 0 10px $color-4d,
    0 0 98px $color-4d;
}

.item-5 {
  background-color: darken($color-5, 20%);
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7),
    0 0 5px $color-5l, 0 0 15px $color-5l, 0 0 20px $color-5l,
    0 0 40px $color-5l, 0 0 60px $color-5d, 0 0 10px $color-5d,
    0 0 98px $color-5d;
}

.item-6 {
  background-color: darken($color-6, 20%);
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7),
    0 0 5px $color-6l, 0 0 15px $color-6l, 0 0 20px $color-6l,
    0 0 40px $color-6l, 0 0 60px $color-6d, 0 0 10px $color-6d,
    0 0 98px $color-6d;
}

.item-7 {
  background-color: darken($color-7, 20%);
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7),
    0 0 5px $color-7l, 0 0 15px $color-7l, 0 0 20px $color-7l,
    0 0 40px $color-7l, 0 0 60px $color-7d, 0 0 10px $color-7d,
    0 0 98px $color-7d;
}

.item-8 {
  background-color: darken($color-8, 20%);
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7),
    0 0 5px $color-8l, 0 0 15px $color-8l, 0 0 20px $color-8l,
    0 0 40px $color-8l, 0 0 60px $color-8d, 0 0 10px $color-8d,
    0 0 98px $color-8d;
}

.item-9 {
  background-color: darken($color-9, 20%);
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7),
    0 0 5px $color-9l, 0 0 15px $color-9l, 0 0 20px $color-9l,
    0 0 40px $color-9l, 0 0 60px $color-9d, 0 0 10px $color-9d,
    0 0 98px $color-9d;
}

// Custom image positions for each product
.pic-1 {
  background-color: $color-1;
}

.pic-2 {
  background-color: $color-2;
}

.pic-3 {
  background-color: $color-3;
}

.pic-4 {
  background-color: $color-4;
}

.pic-5 {
  background-color: $color-5;
}

.pic-6 {
  background-color: $color-6;
}

.pic-7 {
  background-color: $color-7;
}

.pic-8 {
  background-color: $color-8;
}

.pic-9 {
  background-color: $color-9;
}
</style>
