
<template>
<div>

  <swiper class="swiper" ref="mySwiperRef" :options="swiperOption">


          <template v-for="item in upserveSections" v-if="item.name === 'mamnoon @ home' || item.name == 'featured item'">
              <swiper-slide>
                     <!-- {{item.name}} -->
            <div class="pieces" v-for="piece in item.item_ids"> 
                    <template v-if="upserve" v-for="serve in upserve">
                      <div v-if="serve.id === piece" class="inline-block full-height-slide">
           
                        <div>
                            <template v-if="serve.images">
                             <div class="square-green">
   <div class="content" :style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }">
                               </div>
                             </div>
                          
                            </template>
                            <template v-else>
                              <div v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
                              >
                              <NadiIcon  style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -65%);" />
                              </div>
                            </template>
                              <div class="content-box-upper">
                              <div class="name">
                                <!-- {{item.name.replace('Feature - ', '')}}<br> -->
                              {{serve.name}}
                              </div>
                              
                              <div
                                v-if="serve.description"
                                class="food-description hide-on-mob"
                              >{{serve.description}}</div>
                              <div class="food-price">
                                ${{ serve.price_cents.toFixed(2)/100}}
                              </div>
                            </div></div>
                            </div>
                    </template>
         </div>
         </swiper-slide>
          </template>


          <template v-for="item in upserveSections" v-if="item.name === 'mamnoon @ home' || item.name == 'featured item'">
              <swiper-slide>
                     <!-- {{item.name}} -->
            <div class="pieces" v-for="piece in item.item_ids"> 
                    <template v-if="upserve" v-for="serve in upserve">
                      <div v-if="serve.id === piece" class="inline-block full-height-slide">
           
                        <div>
                            <template v-if="serve.images">
                             <div class="square-green">
   <div class="content" :style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }">
                               </div>
                             </div>
                          
                            </template>
                            <template v-else>
                              <div v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
                              >
                              <NadiIcon  style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -65%);" />
                              </div>
                            </template>
                              <div class="content-box-upper">
                              <div class="name">
                                <!-- {{item.name.replace('Feature - ', '')}}<br> -->
                              {{serve.name}}
                              </div>
                              
                              <div
                                v-if="serve.description"
                                class="food-description hide-on-mob"
                              >{{serve.description}}</div>
                              <div class="food-price">
                                ${{ serve.price_cents.toFixed(2)/100}}
                              </div>
                            </div></div>
                            </div>
                    </template>
         </div>
         </swiper-slide>
          </template>

          <template v-for="item in upserveSections" v-if="item.name === 'mamnoon @ home' || item.name == 'featured item'">
              <swiper-slide>
                     <!-- {{item.name}} -->
            <div class="pieces" v-for="piece in item.item_ids"> 
                    <template v-if="upserve" v-for="serve in upserve">
                      <div v-if="serve.id === piece" class="inline-block full-height-slide">
           
                        <div>
                            <template v-if="serve.images">
                             <div class="square-green">
   <div class="content" :style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }">
                               </div>
                             </div>
                          
                            </template>
                            <template v-else>
                              <div v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
                              >
                              <NadiIcon  style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -65%);" />
                              </div>
                            </template>
                              <div class="content-box-upper">
                              <div class="name">
                                <!-- {{item.name.replace('Feature - ', '')}}<br> -->
                              {{serve.name}}
                              </div>
                              
                              <div
                                v-if="serve.description"
                                class="food-description hide-on-mob"
                              >{{serve.description}}</div>
                              <div class="food-price">
                                ${{ serve.price_cents.toFixed(2)/100}}
                              </div>
                            </div></div>
                            </div>
                    </template>
         </div>
         </swiper-slide>
          </template>


    <!-- <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide> -->
    <div class="swiper-pagination" slot="pagination"></div>

  </swiper>
      </div>
</template>

<script>
  // import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    // import 'swiper/swiper.min.css'

// import SwiperCore, {
  // Navigation
// } from 'swiper/core';

// install Swiper modules
// SwiperCore.use([Navigation]);

  export default {
    name: 'swiper-example-carousel-mode',
    title: 'Auto slides per view / Carousel mode',
    components: {
      // Swiper,
      // SwiperSlide
    },
    props: ['upserveSections','upserve'],
    data() {
      return {
                modalOpen: false,
                      currentItem: null,
        swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
        }
      }
    },
    methods:{
            openModal(serve,timing_mask) {

      let current = Object.assign({}, serve);
      current.timing_mask = timing_mask

      // console.log(current.modifier_group_ids)




      this.currentModifiers = current.modifier_group_ids.map(function(x){
        return { name: x,
                selected: false,
                option: null,
                price: 0
              }
      })


      this.modalOpen = true;
      this.currentItem = current;

    }
    }
  }
</script>

<style lang="scss" scoped>
//   @import './base.scss';

  .swiper-slide {
    width: 80%;
  }
  .swiper-slide:nth-child(2n) {
    width: 60%;
  }
  .swiper-slide:nth-child(3n) {
    width: 40%;
  }
</style>