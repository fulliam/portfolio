<template>
  <div class="body">
    <CartComponent :cartItems="cartItems"/>
    <CardComponent @delete="deleteProduct" @add-to-cart="addToCart" :products="products">
    </CardComponent>
  </div>
  <footer>
    <button
      @click="addProduct"
      class="add-button"
      style="font-family: 'Monoton';"
    >
      ADD
    </button>
    <button
      @click="toggleInterval"
      class="add-button interval"
      style="font-family: 'Monoton';"
    >
      {{ isIntervalRunning ? "STOP" : "START" }}
    </button>
  </footer>
</template>

<script>
import CardComponent from '../../components/shop/CardComponent.vue';
import CartComponent from '../../components/shop/CartComponent.vue';
import pic1 from '../../assets/styles/shop/img/one_pic.webp';
import pic2 from '../../assets/styles/shop/img/two_pic.webp';
import pic3 from '../../assets/styles/shop/img/three_pic.webp';
import pic4 from '../../assets/styles/shop/img/four_pic.webp';
import pic5 from '../../assets/styles/shop/img/five_pic.webp';
import pic6 from '../../assets/styles/shop/img/six_pic.webp';
import pic7 from '../../assets/styles/shop/img/seven_pic.webp';
import pic8 from '../../assets/styles/shop/img/eight_pic.webp';
import pic9 from '../../assets/styles/shop/img/nine_pic.webp';

export default {
  name: 'ShopPage',
  data() {
    return {
      active: null,
      counter: 4,
      isIntervalRunning: false,
      intervalId: null,
      products: [
        {
          id: '1',
          picClass: 'pic-1',
          imageSrc: pic1,
          alt: 'img',
          description: 'DESCRIPTION',
          price: '7.500$.',
          name: 'NAME',
          class: 'item-1',
          active: true,
          addToCart: false,
        },
        {
          id: '2',
          picClass: 'pic-2',
          imageSrc: pic2,
          alt: 'img',
          description: 'DESCRIPTION',
          price: '9.990$',
          name: 'NAME',
          class: 'item-2',
          active: true,
          addToCart: false,
        },
        {
          id: '3',
          picClass: 'pic-3',
          imageSrc: pic3,
          alt: 'img',
          description: 'DESCRIPTION',
          price: '2.000$',
          name: 'NAME',
          class: 'item-3',
          active: true,
          addToCart: false,
        },
        {
          id: '4',
          picClass: 'pic-4',
          imageSrc: pic4,
          alt: 'img',
          description: 'DESCRIPTION',
          price: '5.00$',
          name: 'NAME',
          class: 'item-4',
          active: true,
          addToCart: false,
        },
      ],
      images: [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9],
      cartItems: [],
    };
  },
  components: {
    CardComponent,
    CartComponent,
  },
  methods: {
    addProduct() {
      if (this.counter >= 9) {
        this.counter = 0;
      }
      const newProduct = {
        id: `item-${this.counter + 1}`,
        picClass: `pic-${this.counter + 1}`,
        imageSrc: this.images[this.counter],
        alt: 'img',
        description: 'DESCRIPTION',
        price: '1.000$',
        name: 'NAME',
        class: `item-${this.counter + 1}`,
        active: true,
        addToCart: false,
      };
      this.products.push(newProduct);
      this.counter += 1;
    },
    addToCart(productId) {
      const productObj = this.products.find((product) => product.id === productId);
      const cartItem = { ...productObj };
      this.cartItems.push(cartItem);
    },
    deleteProduct(id) {
      this.products = this.products.filter((product) => product.id !== id);
    },
    toggleInterval() {
      if (this.isIntervalRunning) {
        clearInterval(this.intervalId);
        this.isIntervalRunning = false;
      } else {
        this.intervalId = setInterval(() => {
          this.addProduct();
        }, 1000);
        this.isIntervalRunning = true;
      }
    },
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>

<style lang="scss" scoped>
.body {
  margin-top: 160px;
  margin-bottom: 60px;
}

.add-button {
  background-color: darken(#4935a6, 5%);
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  position: relative;
  top: 20%;
  left: -2%;
  height: 40px;
  width: 90px;
  z-index: 10;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: darken(#4935a6, 15%);
  }

  &.interval {
    left: 30px;
  }
}
/*
@media screen and (min-width: 400px) {
  .add-button {
    &.interval {
      left: 18%;
    }
  }
}

@media screen and (min-width: 600px) {
  .add-button {
    &.interval {
      left: 16%;
    }
  }
}

@media screen and (min-width: 800px) {
  .add-button {
    &.interval {
      left: 14%;
    }
  }
}

@media screen and (min-width: 1000px) {
  .add-button {
    &.interval {
      left: 12%;
    }
  }
}

@media screen and (min-width: 1200px) {
  .add-button {
    &.interval {
      left: 9%;
    }
  }
}
*/
.delete-button {
  position: relative;
  padding: 5px;
  top: 5px;
  right: 10px;
  font-size: 32px;
  color: white;
  cursor: pointer;
  z-index: 100;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d05151;
  display: contents;
}

body {
  background-color: lighten(#1e1e1e, 5%);
  justify-content: center;
  display: flex;
  margin: 0;
  padding: 0;
}

nav {
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 115px;
  background-color: #1e1e1e;
  z-index: 9;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0 0 20px 20px;
  top: -10px;
  padding-top: 85px;

  a {
    position: relative;
    color: #2c3e50;
    top: 35px;
    left: 360px;
    // height: 70px;
    // width: 230px;
    padding: 23px;
    text-align: center;
    text-decoration: none;
    background-color: lighten(#4935a6, 5%);
    font-size: 18px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: fixed;
    z-index: 10;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);

    &.router-link-exact-active {
      color: #fff;
    }
  }
}

footer {
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: #fff;
  height: 60px;
  overflow: hidden;
  background-color: #1e1e1e;
  z-index: 9;
  box-shadow: 20px 0px 10px 15px  rgba(0, 0, 0, 0.5);
  border-radius: 20px 20px 0 0;
}
</style>
