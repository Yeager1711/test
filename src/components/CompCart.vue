<template>
  <div class="model-cart">

    <div class="box-container">

      <div id="btn-close" @click="modelCartHidden()">
        <ThemifyIcon icon="close" />
      </div>

      <h3>Giỏ hàng của bạn</h3>

      <div class="free-ship">
        <img src="./images/car_ship.svg" alt="">
        <span>Miễn Phí giao hàng đối với đơn hàng trên 500.000đ</span>
      </div>

      <div class="list-cart">

      </div>

      <!-- <button class="button-pay"> Thanh Toán -></button> -->
    </div>
  </div>
</template>

<script>
import ThemifyIcon from "../../node_modules/vue-themify-icons/ThemifyIcon.vue";
export default {
    name: "comp-cart",

    computed: {
      modelCartHidden() {
        return  this.$store.state.modelCartHidden
      },
    },

    components: { ThemifyIcon }
}
</script>

<style lang="scss">
  .model-cart{
    position: fixed;
    top: 0;
    left: 0;
    right: -100%;
    bottom: 0;
    background: rgba(0,0,0, .3);
    box-shadow: 0 .5rem 1rem rgab(0,0,0, .3);
    z-index: 99999;
    display: flex;
    align-items: center;
    visibility: hidden;
    opacity: 0;

    &.active {
      right: 0;
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
      width: 40rem;
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
    }
  }
</style>