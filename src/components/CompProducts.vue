<template>
    <section class="products" id="products">

        <div class="heading"> 
            <img src="./images/new-6.svg" alt="">
        </div>

        <div class="box-container">

             <div v-for="item in products"
            :key="item.id"
            :class="item.cl"
            >
                <div class="image">
                    <img :src="item.image" alt="">
                </div>
                <div class="box-content">
                    <h3 class="title"> {{item.name}} </h3>

                    <div class="shopping">
                        <div class="price">
                            <span class="price-new"> {{item.price_new}} </span>
                            <span class="price-old"> {{item.price_old}} </span>
                        </div>

                        <button class="shopping-cart" @click="addToCart(item)">
                            <ThemifyIcon icon="shopping-cart" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

// import carousel from 'vue-owl-carousel'
import ThemifyIcon from "vue-themify-icons";
import { mapActions, mapGetters } from 'vuex';
export default {
    name:'comp-products',

    data() {
      return {
        responsive: {
          0:{items:1,nav:false},
          600:{items:3,nav:true},
          900:{items:4,nav:true}
          }
      }
    },

    computed: {
        ...mapGetters(["products"]),
    },

    methods: {
        ...mapActions(["getProducts", "addToCart"])
    },
    
    mounted() {
        this.getProducts();
    },



    components: {ThemifyIcon},
}
</script>

<style lang="scss">

.products {
//   margin-top:4rem;
    background: url(../components/images/bg_socials.jpg) no-repeat;
    .heading{
        img{
            display: flex;
            margin: 0 auto;
            width: 25rem;
            height: auto;
        }
    }

   .box-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
        gap: 1rem;
        
        .box{
            background: #fff;
            border-radius: .5rem;

            .image{
                img{
                    border-top-right-radius: .5rem;
                    border-top-left-radius: .5rem;
                }
            }

            .box-content{
                padding: 2rem 1rem;

                .title{
                    font-size: 1.5rem;
                }
                
                .shopping{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .price{
                        .price-new{
                            font-size: 1.7rem;
                        }

                        .price-old{
                            font-size: 1.4rem;
                            text-decoration: line-through;
                            font-weight: bolder;
                        }
                    }

                    .shopping-cart{
                        padding: 1rem;
                        border-radius: 5rem;
                        border: .2rem solid #333;

                        i{
                            font-size: 1.7rem;
                        }

                        &:hover {
                            cursor: pointer;
                            background: #005756;
                            color: #fff;
                        }
                    }
                }
            }
        }
   }


  .owl-theme .owl-nav {
    display: none;
  }

  .owl-theme {
      .owl-dots {
          .owl-dot{
            margin-top: 1rem;
              &.active{
                  span{
                      background: #ffc107;
                    //   background: #005756;
                      margin-top: 1.5rem;
                      width: 1rem;
                      height: 1rem;
                  }
              }

              span{
                  height: 1rem;
              }
          }
      }
  }
  

}
</style>