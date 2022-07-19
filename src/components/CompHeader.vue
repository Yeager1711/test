<template>
  <div>
    <header class="header">
      <a href="#" class="logo">TEST_CODE</a>

      <div id="btn-cart" @click=" modelCartShow()" class="fa-solid fa-cart-shopping">
        <span class="count-item"> {{ totalQuantity }} </span>
      </div>
    </header>


    <!-- CART -->
    <div class="model-cart">
      <div class="box-container">
        <div id="btn-close" @click="modelCartHidden()">
          <ThemifyIcon icon="close" />
        </div>

        <h3>Giỏ hàng của bạn</h3>

        <div class="free-ship">
          <img src="./images/car_ship.svg" alt="" />
          <span>Miễn Phí giao hàng đối với đơn hàng trên 500.000đ</span>
        </div>

          <!-- <div v-if="!storeCart.length" class="alert-secondary" role="alert"> Giỏ hàng còn trống! </div> -->
        <div class="list-item">
          <div 
            v-for="item in storeCart"
            :key="item.id"
            :class="item.cl"
          >

            <div id="btn-remove" @click="removeItem(item.id)"> <ThemifyIcon icon="close" /> </div>

            <img :src="item.image" alt="">

            <div class="description">
              <div class="name"> {{item.name}} </div>
              <div class="price"> {{item.price_new}} </div>
            </div>

            <div class="quantity">
              <button @click="reduceQty(item.id)"> - </button> 
              {{ item.qty }}
              <button @click="addQty(item.id)"> + </button>
            </div>
          </div>

        </div>

        <!-- <button class="button-pay"> Thanh Toán -></button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import ThemifyIcon from "../../node_modules/vue-themify-icons/ThemifyIcon.vue";

export default {
  name: "comp-header",
  components: { ThemifyIcon },

  computed: {
    ...mapGetters(['storeCart']),
    totalQuantity() {
     return this.storeCart.reduce((a, b) => a + b.qty*b.price_new, 0)
    }
  },

  methods: {
    modelCartShow() {
      var modelCart = document.querySelector(".model-cart");
      modelCart.classList.toggle('active');
    },
    modelCartHidden(){
      var modelCart = document.querySelector(".model-cart");
      modelCart.classList.remove("active")
    },

    // click button
     ...mapActions(["addQty", "reduceQty", "removeItem"])
  }
};
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10%;

  .logo {
    text-decoration: none;
    font-size: 2rem;
    color: #333;
  }

  #btn-cart {
    padding: 1rem;
    font-size: 1.7rem;
    position: relative;

    .count-item {
      position: absolute;
      background: #f4b301;
      color: #fff;
      width: 1.7rem;
      height: 1.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1rem;
      border-radius: 100%;
      right: 0.3rem;
      top: 0.1rem;
      z-index: 99999;
    }

    &:hover {
      cursor: pointer;
    }
  }
}

.model-cart{
  position: fixed;
  top: -100%;
  left: 0;
  right: 0%;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0,0,0, .3);
  box-shadow: 0 .5rem 1rem rgab(0,0,0, .3);
  z-index: 99999;
  display: flex;
  align-items: center;
  visibility: hidden;
  opacity: 1;overflow: auto;

  &.active {
    top: 0;
    visibility: visible;
    opacity: 1;
    transition: .2s ease;
  }

  .box-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    bottom: 0%;
    margin: auto;
    background: #fff;
    width: 45rem;
    box-shadow: 0 .5rem 1rem rgba(0,0,0, .3);


    #btn-close {
      position: absolute;
      top: 3rem;
      right: 1rem;
      font-size: 2rem;
      padding: .5rem;

      &:hover {
        cursor: pointer;
      }
    }

    h3{
      padding: 1rem;
      font-size: 2rem;
      text-transform:uppercase ;
    }

    .free-ship {
      padding: 1rem 0;
      background: #8e9095;
      text-align: center;

      span{
        color: #fff;
        font-size: 1.3rem;
        margin-left: .5rem;
        margin-bottom: .3rem;
      }
    }

    .list-cart{
      height: 50%;
    }

    .button-pay{  
      border: none;
      outline: none;
      display: inline-block;
      text-align: center;
      margin: 1rem;
      width: 94%;
      padding: 1.3rem 0;
      background: #ffc107;
      font-size: 1.6rem;
      font-weight: bolder;
      color: #fff;
      border-radius: 0.3rem;

      &:hover {
        cursor: pointer;
      }
    }

    // List items
    .list-item {
      padding: 1.5rem 1rem;
      background: #fff;

      .box{
        margin-bottom: 1rem;
        position: relative;
        display: flex;
        line-height: 2;



        #btn-remove{
          position: absolute;
          top: -1rem; right: .5rem;
          padding: .5rem;

          &:hover {
            cursor: pointer;
          }
        }

        img{
          width: 10rem;
        }


        .description{
          margin: 1rem 0 0 1rem;

          .name{
            font-weight: bolder;
            font-size: 1.7rem;
          }
        }

        .quantity{
          padding:  3rem;

          button {
            border: none;
            font-size: 2rem;
            border-radius: .5rem;
            margin:  0 1rem;

            &:hover {
              cursor: pointer;
            }
          }
          span {
            text-align: center;
          }
        }
      }
    }
  }
}

</style>
