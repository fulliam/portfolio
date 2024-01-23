<template>
    <div class="black-backgground" v-if="isOpen"></div>
    <button
        class="glowing-btn"
        style="position: fixed; top: 120px;"
        @click="isOpen = !isOpen"
    >
        <span class='glowing-txt'>&#128722;C<span class='faulty-letter'>L</span>ICK</span>
    </button>
    <div class="cart" v-show="isOpen">
      <div class="empty-text" v-if="cartItems.length === 0">
        <button class="glowing-btn" @click="isOpen = !isOpen">EMPTY
            ✖
        </button>
      </div>
      <div v-else style="width: 100%;">
      <ul>
        <button
            class="glowing-btn"
            style="top: 0; right: 10px; color: #9f97ff; perspective: 1rem;"
            @click="isOpen = !isOpen"
        >
        &#128722;CARD <span style="color: #fff;">✖</span>
        </button>
        <li v-for="item in uniqueItems" :key="item.id">
          <img :src="item.imageSrc" :alt="item.alt" />
          <div style="display: block ruby; margin-left: 5%;">
            <h3 style="color: #fff;">{{ item.name }} </h3> /
            <p style="color: green;">{{ item.price }} </p> /
            <p style="color: #fff;">COUNT: {{ getItemQuantity(item.id) }} </p> /
          </div>
          <!--
          <button
            style="width: 40px;
                   color: brown;
                   top: -5px;
                   width: 50px;
                   height: 50px;
                   border: none;
                   cursor: pointer;
                   font-size: 30px;
                   background: rgba(0, 0, 0, 0);"
            @click="removeFromCart(item.id)"
          >
            ⌦
          </button>
        -->
        </li>
      </ul>
      <div class="total-quantity">Total Quantity: {{ totalQuantity }}</div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CartComponent',
  props: {
    cartItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    uniqueItems() {
      // Filter out unique items in the cart
      const uniqueItems = [];
      const uniqueItemIds = [];

      this.cartItems.forEach((item) => {
        if (!uniqueItemIds.includes(item.id)) {
          uniqueItemIds.push(item.id);
          uniqueItems.push(item);
        }
      });

      return uniqueItems;
    },
    totalQuantity() {
      // Calculate and return the total quantity of items
      return this.cartItems.length;
    },
  },
  methods: {
    removeFromCart(productId) {
      this.$emit('remove-from-cart', productId);
    },
    getItemQuantity(itemId) {
      // Calculate and return the quantity of the item
      return this.cartItems.filter((item) => item.id === itemId).length;
    },
  },
};
</script>

<style scoped lang="scss">
.black-backgground {
  background-color: #1e1e1ed9;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
}

.open-cart {
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 80;
  cursor: pointer;
}

.cart {
  margin-top: 20px;
  background-color: #181818fc;
  border-radius: 20px;
  padding: 40px;
  justify-content: center;
  display: flex;
  width: 65%;
  height: 55%;
  overflow: scroll;
  overflow-x: hidden;
  position: fixed;
  z-index: 200;
  right: 20px;
  top: 20px;
  transition: opacity 0.3s ease-in-out;

  @keyframes fadeIn {
      0% { opacity: 0; }
      20% { opacity: 0.2; }
      40% { opacity: 0.4; }
      60% { opacity: 0.6; }
      80% { opacity: 0.8; }
      100% { opacity: 1; }
  }

  animation: fadeIn 0.6s ease forwards;
}

.empty-text {
  display: flex;
  width: 100%;
  position: relative;
  top: 20px;
  justify-content: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  background-color: #4d4d4d1a;
  padding: 20px;
  border-radius: 20px;
  user-select: none;
  cursor: pointer;
  overflow: hidden;

  &:hover {
      background-color: lighten(#4d4d4d1a, 10%);
  }
}

img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

@import url("https://fonts.googleapis.com/css?family=Raleway");

*,
*::before,
*::after {
  box-sizing: border-box;
}

.glowing-btn {
  --glow-color: hsl(61.8, 77.9%, 50.4%);
  right: 10px;
  z-index: 80;
  color: var(--glow-color);
  cursor: pointer;
  padding: 0.35em 1em;
  border: 2px solid var(--glow-color);
  border-radius: 20px;
  background: none;
  perspective: 2em;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 10px;
  height: 45px;
  margin: 10px;

  -webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  -moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  animation: border-flicker 2s linear infinite;
}

.glowing-txt {
  height: 40px;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 10px;
  float: left;
  margin-right: -0.8em;
  -webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--glow-color);
  -moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--glow-color);
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
  animation: text-flicker 3s linear infinite;
}

.faulty-letter {
  opacity: 0.5;
  animation: faulty-flicker 2s linear infinite;
}

.glowing-btn::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  filter: blur(1em);
  transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
  background: var(--glow-color);
  pointer-events: none;
}

.glowing-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: -1;
  border-radius: 20px;
  background-color: var(--glow-color);
  box-shadow: 0 0 2em 0.2em var(--glow-color);
  transition: opacity 100ms linear;
}
.glowing-txt:hover,
.glowing-btn:hover {
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: none;
  animation: none;
}

.glowing-btn:hover .glowing-txt {
  animation: none;
}

.glowing-btn:hover .faulty-letter {
  animation: none;
  text-shadow: none;
  opacity: 1;
}

.glowing-btn:hover:before {
  filter: blur(1.5em);
  opacity: 1;
}

.glowing-btn:hover:after {
  opacity: 1;
}

@keyframes faulty-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 0.1;
  }
  4% {
    opacity: 0.5;
  }
  19% {
    opacity: 0.5;
  }
  21% {
    opacity: 0.1;
  }
  23% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  83% {
    opacity: 0.4;
  }

  87% {
    opacity: 1;
  }
}

@keyframes text-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 0.1;
  }

  9% {
    opacity: 1;
  }

  12% {
    opacity: 0.1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.3;
  }
  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }
  72% {
    opacity: 0.2;
  }

  77% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}

@keyframes border-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 1;
  }
  4% {
    opacity: 0.1;
  }

  8% {
    opacity: 1;
  }
  70% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
</style>
