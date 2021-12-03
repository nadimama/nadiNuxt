<template>
    <section :id="tag" class="coverflowsection" :if="visible">

<div class="is-fullheight less-left-right no-top-pad" id="cover-carousel">
<h4 class="noselect">{{header}}</h4>
    <p class="description-para hide-mobile" style="text-align:left;margin-top: 20px;">{{descriptionbody}}</p>
   <template v-if="upserveSections.length === 0">
     <div class="container text-center pt20 white-text" style="height: 550px;margin-top: 100px;position: relative;">
       <div class="loading-box">
       Loading...
       </div>
     </div>
     </template>
         <template v-else>

              <template v-if="upserveSectionsRendered">
             <!-- <VueAspectRatio ar="6:7" width="100%" class="">   -->
        <carousel :lazyLoad="true" @changed="changed($event)" :items="1" :touchDrag="false" :autoplay="true"  :mouseDrag="false"  :loop="true" :dots="true" :nav="false" v-if="upserveSections" style="height: 550px;margin-top: 16px;">
                                 <template class="subprev" slot="prev">
                <span class="prev">
                    <Prev />
            </span>
          </template>
            <!-- <template v-for="item in upserveSections" v-if="item.name === 'Feature - Tuesday'||item.name === 'Feature - Wednesday'||item.name === 'Feature - Thursday'||item.name === 'Feature - Friday'||item.name === 'Feature - Saturday'"> -->
           
<!-- beggining -->
<!-- beggining -->
<!-- beggining -->
<!-- beggining -->
            <!-- <template v-for="item in upserveSections"> -->
            <template v-for="item in upserveSections" v-if="item.name === 'featured item'">
            <!-- <template v-for="item in upserveSections"> -->
            <!-- <template v-for="item in upserveSections"> -->
            <div v-for="(piece,index) in item.item_ids" :key="Math.random() + index + Math.random()">  
                    <template v-for="serve in upserve">
            <div v-if="serve.id === piece" class="inline-block full-height-slide" :data="serve.restaurant" style="height:400px;">  
            <!-- <template v-if="serve.images"> -->
               <template>
     <div class="outside-slideshow" @click="goToRestaurant(serve.restaurant)" style="background-color: #1daeef;">
      
<!-- #06bff9 -->

<!-- <template v-if="serve.item_images.length > 0">
<img v-if="serve.item_images[0]" :src="serve.item_images[0].url" alt="" style="height: 100%;position: absolute;top: 0px;left: 0px;width: 100% !important;filter: blur(4px);transform: scale(1.5);opacity: .9;">
</template> -->


<div v-if="serve.restaurant === 'Mamnoon Street'" class="top-bar mamnoonstreetcolors">
  <!-- {{item.name.replace('Feature - ', '')}} -->
{{serve.restaurant}}
  </div>
  <div v-if="serve.restaurant === 'Mamnoon'" class="top-bar">
  <!-- {{item.name.replace('Feature - ', '')}} -->
{{serve.restaurant}}
  </div>


  <div v-if="serve.restaurant === 'Mbar'" class="top-bar mbarcolors">
  <!-- {{item.name.replace('Feature - ', '')}} -->
{{serve.restaurant}}
  </div>




<template v-if="serve.item_images.length > 0">
<img v-if="serve.item_images[0]" :src="serve.item_images[0].url" alt="" style="height: 329px;margin: 5px auto;position: absolute;z-index: 10;left: 50%;transform: translate(-50%, 0);top: 53px;">
</template>
<template v-else>
<NadiIcon style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -55%);" />
</template>




<template v-if="serve.restaurant === 'Mamnoon Street'">
 <div
                                class="food-description bottom-bar mamnoonstreetcolors">
                                <span class="desc-desk">
                                 {{serve.name}}<span v-if="serve.description">: {{serve.description | truncate(140, '...')}}</span>
                                </span>

                                <span class="desc-mob">
                                {{serve.name}}<span v-if="serve.description">: {{serve.description | truncate(90, '...')}}</span>
                                </span>
                                </div>
</template>
<template v-if="serve.restaurant === 'Mamnoon'">
 <div
                                class="food-description bottom-bar">
                                <span class="desc-desk">
                                 {{serve.name}}<span v-if="serve.description">: {{serve.description | truncate(140, '...')}}</span>
                                </span>

                                <span class="desc-mob">
                                {{serve.name}}<span v-if="serve.description">: {{serve.description | truncate(90, '...')}}</span>
                                </span>
                                </div>
</template>
<template v-if="serve.restaurant === 'Mbar'">
 <div
                                class="food-description bottom-bar mbarcolors">
                                <span class="desc-desk">
                                 {{serve.name}}<span v-if="serve.description">: {{serve.description | truncate(140, '...')}}</span>
                                </span>

                                <span class="desc-mob">
                                {{serve.name}}<span v-if="serve.description">: {{serve.description | truncate(90, '...')}}</span>
                                </span>
                                </div>
</template>



                    </div>
                </template>
        
                         
                        
                         </div>
                    </template>
         </div>
          </template>

<!-- end -->
<!-- end -->
<!-- end -->
<!-- end -->
<!-- end -->
<!-- end -->


<!--// one-->
<!--// one-->

<div v-for="slide in feature">
<div class="inline-block full-height-slide" style="height:400px;"> 

     <div class="outside-slideshow" @click="goToLink(slide.slide.link)" style="background: #1daeef;">


<!--<template v-if="slide.slide.image">
<img :src="slide.slide.image" alt="" style="height: 100%;position: absolute;top: 0px;left: 0px;width: 100% !important;filter: blur(4px);transform: scale(1.5);opacity: .9;">
</template>-->

         <div class="top-bar" :class="{mamnoonstreetcolors: slide.slide.restaurant === 'Mamnoon Street', mbarcolors: slide.slide.restaurant === 'Mbar'}">
                       {{slide.slide.restaurant}}
            </div>













<template v-if="slide.slide.image">
<img :src="slide.slide.image" alt="" style="height: 329px;margin: 5px auto;position: absolute;z-index: 10;left: 50%;transform: translate(-50%, 0);top: 53px;">
</template>
<template v-else>
<NadiIcon style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -55%);" />
</template>
      <div class="food-description bottom-bar" :class="{mamnoonstreetcolors: slide.slide.restaurant === 'Mamnoon Street', mbarcolors: slide.slide.restaurant === 'Mbar'}">
                        <span class="desc-desk">
                                {{slide.slide.title}}<span v-if="slide.slide.description">: {{slide.slide.description | truncate(140, '...')}}</span>
                                </span>

                                <span class="desc-mob">
                                {{slide.slide.title}}<span v-if="slide.slide.description">: {{slide.slide.description | truncate(90, '...')}}</span>
                                </span>
                                  </div>
</div>
</div>
</div>














<!--// one-->







<!--// one-->




















































                    <template class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
            </carousel>
              <!-- </VueAspectRatio>   -->
              </template>
</template>




</div>
  <div>
   <div>
      <div class="bottom-button" style="text-align: center;">
        <router-link v-if="currentOrderButton === 'Mamnoon'" to="/mamnoon">
          <OrderStar /> 
        </router-link>
        <router-link v-else-if="currentOrderButton === 'Mamnoon Street'" to="/mamnoonstreet">
          <OrderStarMamnoonStreet /> 
        </router-link>
        <router-link v-else-if="currentOrderButton === 'Mbar'" to="/mbar">
          <OrderStarMbar /> 
        </router-link>

      </div>
    </div>
  </div>
  </section>
</template>


<script>
import OrderStar from "@/components/svgIcons/OrderStar";
import OrderStarMbar from "@/components/svgIcons/OrderStarMbar";
import OrderStarMamnoonStreet from "@/components/svgIcons/OrderStarMamnoonStreet";
import PickupStar from "@/components/svgIcons/PickupStar";
import DeliveryStar from "@/components/svgIcons/DeliveryStar";

import UpserveFeatured from "@/components/UpserveFeatured";





import NadiIcon from "@/components/svgIcons/NadiIcon";

import carousel from "vue-owl-carousel";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";

import VueAspectRatio from "vue-aspect-ratio";


export default {
  name: "coverflow",
  components: {
    OrderStar,
    OrderStarMamnoonStreet,
    OrderStarMbar,
    PickupStar,
    DeliveryStar,
    Prev,
    Next,
    UpserveFeatured,
    VueAspectRatio,
    carousel,
    NadiIcon
  },
  data() {
    return {
      currentOrderButton: '',
      familyMeals: null,
      coverFlowIndex: 0,
      dotsLength: 0,
      productsList: this.familyMeals,
      date: null,
      link: null,
      tockPanelVisible: false,
      delivery: true,
      upserve: [],
      upserveSections: [],
      structureForCover: [],
      helpArray: [],
      upserveSectionsRendered: false
    };
  },
  computed: {
    count() {
      return this.familyMeals;
    },
    upserveSectionsComputed(){
            let helpArray = []
              
for(let i; i < this.upserveSections.length; i++){
  if(this.upserveSections[i].name === 'Feature - Tuesday'|| this.upserveSections[i].name === 'Feature - Wednesday'|| this.upserveSections[i].name === 'Feature - Thursday'|| this.upserveSections[i].name === 'Feature - Friday'|| this.upserveSections[i].name === 'Feature - Saturday'){
    for(let j;j<this.upserveSections[i].item_ids.length;j++){
    for(let k;k<this.upserve.length;k++){
//serv
if(this.upserve[k].name === this.upserveSections[i].name){
helpArray.push({
  dayName: this.upserveSections[i].name,
  mealItem: this.upserve[k]
})
}
}
}
}
}
      return helpArray

    }
  },
  watch: {
       upserveSections(){
for(let i = 0; i < this.upserveSections.length; i++){ 
  // if(this.upserveSections[i].name === 'Feature - Tuesday' || this.upserveSections[i].name === 'Feature - Wednesday' || this.upserveSections[i].name === 'Feature - Thursday' || this.upserveSections[i].name === 'Feature - Friday' || this.upserveSections[i].name === 'Feature - Saturday'){

 if(this.upserveSections[i].name === 'Mezze - To Go'){

    for(let j = 0;j<this.upserveSections[i].item_ids.length;j++){
    for(let k = 0;k<this.upserve.length;k++){
  
    if(this.upserve[k].id === this.upserveSections[i].item_ids[j]){

      this.helpArray.push({
        dayName: this.upserveSections[i].name,
        mealItem: this.upserve[k]
    })
    }
    }
    }
  }
}
// console.log(this.helpArray)
// console.log('upserveSections updated')

this.upserveSectionsRendered = false
      setTimeout(() => {
this.upserveSectionsRendered = true
      }, 100)
    },
    count(newCount, oldCount) {
    // console.log('newCount')
    // console.log(newCount)
    }
  },
  mounted() {


    console.log(1234);
    this.dumpAcf()
    // this.upserves();
    // this.streetupserves();
    // this.mbarupserves();
    this.upservesMongo();
    this.streetupservesMongo();
    // this.mbarupservesMongo();
    window.scrollTo(0, 0);
    // window.addEventListener("scroll", this.lazyLoad);

  },
  props: ["data","header","tag","descriptionbody","feature","visible"],
  methods: {
goToLink(link){
window.open(link);
},
goToRestaurant(link){
console.log('122')
      let linkstripped = '/' + link.toLowerCase().replace(" ","")

      this.$router.push(linkstripped);


},
    changed($event){

// console.log(this.upserve[$event.page.index].restaurant)
this.currentOrderButton = this.upserve[$event.page.index].restaurant
    },
  lazyLoad: function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;
    if (active === false) {
      active = true;
      setTimeout(() => {
        lazyImages.forEach(function (lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImages = lazyImages.filter(function (image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              window.removeEventListener("scroll", this.lazyLoad);
            }
          }
        });
        active = false;
      }, 200)

    }
  },
  async upservesMongo() {

      let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoon`);
      let upserveProducts = responseUpserve.data.doc[0].menu.items;
upserveProducts.forEach(function (element) {
  element.restaurant = 'Mamnoon';
});



// console.log(upserveProducts)

    this.upserve = this.upserve.concat(upserveProducts);
    this.upserveSections = this.upserveSections.concat(responseUpserve.data.doc[0].menu.sections);
    this.currentOrderButton = this.upserve[0].restaurant
    },
        async mbarupservesMongo() {

      let responseUpserve = await this.$http.get(`product/upserve_mongo/mbar`);
      let upserveProducts = responseUpserve.data.doc[0].menu.items;
upserveProducts.forEach(function (element) {
  element.restaurant = 'Mbar';
});

// console.log(upserveProducts)

    this.upserve = this.upserve.concat(upserveProducts);
    this.upserveSections = this.upserveSections.concat(responseUpserve.data.doc[0].menu.sections);
    this.currentOrderButton = this.upserve[0].restaurant
},
async streetupservesMongo() {


         let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoonstreet`);
      let upserveProducts = responseUpserve.data.doc[0].menu.items;

upserveProducts.forEach(function (element) {
  element.restaurant = 'Mamnoon Street';
});

// console.log(upserveProducts)



    this.upserve = this.upserve.concat(upserveProducts);
    this.upserveSections = this.upserveSections.concat(responseUpserve.data.doc[0].menu.sections);
    this.currentOrderButton = this.upserve[0].restaurant
},
async upserves() {
      let responseUpserve = await this.$http.get(
        "/product/upserveolo"
      );
      let upserveProducts = responseUpserve.data.body.items;
upserveProducts.forEach(function (element) {
  element.restaurant = 'Mamnoon';
});
    this.upserve = this.upserve.concat(upserveProducts);
    this.upserveSections = this.upserveSections.concat(responseUpserve.data.body.sections);
    this.currentOrderButton = this.upserve[0].restaurant
    },
        async mbarupserves() {
      let responseUpserve = await this.$http.get(
        "/product/upserveolombar"
      );
      let upserveProducts = responseUpserve.data.body.items;
upserveProducts.forEach(function (element) {
  element.restaurant = 'Mbar';
});
    this.upserve = this.upserve.concat(upserveProducts);
    this.upserveSections = this.upserveSections.concat(responseUpserve.data.body.sections);
    this.currentOrderButton = this.upserve[0].restaurant
},
async streetupserves() {
      let responseUpserve = await this.$http.get(
        "/product/upserveolostreet"
      );
      let upserveProducts = responseUpserve.data.body.items;

upserveProducts.forEach(function (element) {
  element.restaurant = 'Mamnoon Street';
});
    this.upserve = this.upserve.concat(upserveProducts);
    this.upserveSections = this.upserveSections.concat(responseUpserve.data.body.sections);
    this.currentOrderButton = this.upserve[0].restaurant
},
dumpAcf(){
  this.familyMeals = this.helpArray
},
    returnProducts(index) {
        this.title = this.familyMeals[index].mealItem.name;
        this.date = this.familyMeals[index].mealItem.name.replace('Feature - ', '');
        this.description = this.familyMeals[
          index
        ].mealItem.description;
   
    },
  
  },
};
</script>


<style lang="scss">
.left-button {
  cursor: pointer;
  position: absolute;
  left: 20%;
    left: 30%;
  width: auto;
      bottom: 130px;
}

.right-button {
  cursor: pointer;
  position: absolute;
  width: auto;
  right: 20%;
  right: 30%;
      bottom: 130px;
}


@media only screen and (max-width: 768px) {
  .left-button {
    left: 5%;
  }

  .right-button {
    right: 5%;
  }
}

.position-relative {
  position: relative;
}

.coverflow-text {
  display: none;
}

.title,
.description,
.delivery,
.link {
  color: white;
  text-align: center;
  width: 60%;
  margin: 0 auto;

  a {
    color: white;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
}

@media only screen and (max-width: 1080px) {
  .title,
  .description,
  .delivery,
  .link {
    width: 80%;
  }
}

.title {
  margin-bottom: 6px;
  // margin-top: 12px;
  margin-top: 22px;
  // font-size: 24px;
  font-size: 20px;
}



#container{
  height: 480px;
}

#container.coverflow,
#container.coverflow:focus,
#container.coverflow:active {
  outline: none;
  overflow: hidden;
  // margin-top: 40px;
  margin-top: 20px;
  .coverflow-wrap {
    // transform: scale(1.75);
  }
}

@media only screen and (max-width: 1080px) {
  #container.coverflow,
  #container.coverflow:focus,
  #container.coverflow:active {
    .coverflow-wrap {
      transform: scale(1.5);
    }
  }
}

@media only screen and (max-width: 768px) {
  #container.coverflow,
  #container.coverflow:focus,
  #container.coverflow:active {
    .coverflow-wrap {
      transform: scale(1);
    }
  }
}

.toggleVeg {
  position: absolute;
  right: 10px;
  top: 0;
  position: absolute;
  top: 0;
  z-index: 90;
}

.toggleVegContainer {
  position: absolute;
  right: 10px;
  bottom: 156px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "V";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  content: "M";
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.toggleVeg {
  width: 62px;
  // text-align: left;
  padding: 0;
  border: 0;
  background-color: #6bf7a3;
  border-radius: 15px;

  border: 2px solid transparent;
  border: 1px solid #f05d5b;
  &.redBackground {
    background-color: #f05d5b;
  }

  &:active,
  &:focus {
    outline: none;
  }

  .lrbutton {
    width: 30px;
    background: #fff367;
    border-radius: 15px;
    transition: all 0.5s ease;
    border: 2px solid transparent;

    &.lrExpanded {
      margin-left: 30px;
    }
  }
}

.bottom-button {
  // border: 1px solid #f05d5b;
}

.bottom-button a.full-width {
  width: 100%;
}

.full-width-block {
  width: 100%;
  // background: white;
  min-height: 170px;
  // border: 1px solid #f05d5b;
  margin-top: 0;
  position: relative;
  .description,
  .title,
  .title a,
  a.link {
    color: #f05d5b;
  }
}

.tock-panel {
  border: 1px solid blue;
  padding: 10px;
  position: fixed;
  z-index: 100;
  top: 3%;
  background: #ffffffc7;
  left: 5%;
  width: 90%;
}

.tock-inner {
  overflow: scroll;
  overflow-y: scroll;
  position: relative;
  height: 100vh;
  padding-bottom: 200px;
}

.tockEditField {
  width: 50%;
}

.tockEditImage {
  width: 300px;
  margin-bottom: 20px;
}



ul.dots{
  display: none;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    margin-top: -24px;
        margin-top: -50px;
        z-index: 60;
    position: absolute;
    margin-bottom: 0;
    padding-left: 0;
}

ul.dots li{
    display: inline-block;
cursor: pointer;
    list-style-type: none;
}



ul.dots li div{
  border-radius: 10px;
  background: white;
    // background: transparent;
  width: 20px;
  height: 20px;
  margin: 10px;
  color: transparent;
  // border: 2px solid yellow;
}


.whitedot{
  background: white !important;
}
.yellowdot{
  background: #fff367 !important;
  pointer-events: none;
}



.description,
.title,
.title a{
// color: #fff !important;
    color: #fff367 !important;
    font-weight: 500 !important;
    font-size: 24px;
}



.red-header{
  background-color: #F05D5B;
  padding: 20px 0 15px;
}


#container.coverflow, #container.coverflow:focus, #container.coverflow:active{
  margin-top: 0 !important;
  background-color: transparent !important;
}


a.left-button svg,
a.right-button svg {
    width: 40px;
    height: 40px;
}


.cursor-pointer{
  cursor: pointer;

  a{
    text-decoration: none;
    color: #f05d5b;
    &:hover{
          text-decoration: none;
    color: #f05d5b;
    cursor: pointer;
    }
  }
}


.bottom-rectangle{
  font-size:24px;
  font-weight:500;
  color: #f05d5b;
  text-align:center;
  z-index: 100;
  position: absolute;
  left: 0;bottom: 0;
  width: 100%;
  background: #fff367;
}



.bottom-rectangle-text{
  font-size: 20px;
  margin: 0 auto;
  padding: 10px;
  width: 90%;
}


.dialog{
font-size:24px;
font-weight:500;
color: #f05d5b;
text-align:center;
z-index: 100;
position: absolute;
left: 0;
top: 0;
width: 100%;
background: #fff367;
padding-bottom:5px;
}


.coverflow-cell img{
  width: 400px;
  height: 400px;

  width:100%;
  position: absolute;
  left: 0;
  top: 0;
}



.coverflow .coverflow-cell{
      width: 400px;
    height: 400px;
    top: -200px;
    left: -200px;
}


.description-para {
  color: white;
  margin: 12px auto 20px;
  width: 80%;
  text-align: center;

@media only screen and (max-width: 992px) {
  width: 90%;
  font-size: 12px;
}

}


.full-height-slide{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}


#cover-carousel{

  // height: 710px;

// height: 674px;
// height: 704px;
.owl-carousel, .owl-item{
  // height: 500px;

      // height: 520px;
          height: 550px;
}

.owl-item > div {
    width: 100%;
    // height: 520px;
        height: 550px;
    // pointer-events: none;
    cursor: pointer;
    
}

.owl-theme .owl-dots .owl-dot span{
  // display: none !important;
      width: 20px;
    height: 20px;
    margin: 5px 7px;
    background: #ffffff;
    display: block;
    -webkit-backface-visibility: visible;
    transition: opacity 200ms ease;
    border-radius: 30px;
}

.owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: 0;
}



.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
    background: orange;
}


// li:nth-child(-n+5) {
//     color: green;   
// }


.owl-stage{
    height: 500px;
    height: 506px;
        height: 516px;

}


.owl-dots .owl-dot {
// display: none;
// outline: none;
}



.owl-dots .owl-dot:nth-child(-n+7) {
display: inline;
}

}


#cover-carousel{
  .owl-carousel .owl-item img {
    display: block;
    width: auto !important;
}
}




.top-bar{

 position: absolute;
 top: 0;
 width: 500px;
 background: #fff367;
 color: rgb(73, 73, 74);
 margin: 0 auto;
 padding: 10px;
 text-align: center;
 font-weight: 500;
 text-transform: lowercase;
    font-size: 1.4em;
&.mamnoonstreetcolors{
   background: #ffffff;
   background: rgb(73, 73, 74);
   color: #f05d5b;
   color: #ffffff;
}

&.mbarcolors{
color: #FFCC3E;
  background: #324144;
}

}

.bottom-bar{
padding: 10px 25px;
position: absolute;
bottom: 0;
width: 500px;
background: #fff367;
color: rgb(73, 73, 74);
font-size: 15px;
line-height: 20px;
height: 83px;
text-align: left;

&.mamnoonstreetcolors{
   background: #ffffff;
   background: rgb(73, 73, 74);
   color: #f05d5b;
   color: #ffffff;
}

&.mbarcolors{
  background: #324144;
color: #FFCC3E;
}


@media only screen and (max-width: 640px) {
  font-size: 13px;
line-height: 18px;
padding: 10px;
}

}

.white-text{
  color: #ffffff;
}



.outside-slideshow{
 height: 512px;
 position: relative;
 width: 500px;
//  margin: 0 auto;
//  background: black;
background: #8c8c8c;
 overflow:hidden;
 height: 482px;
     margin: 10px auto 0;
}


  .desc-desk{
            display: block;
  }
          .desc-mob{
            display: none;
          }



@media only screen and (max-width: 640px) {


    .desc-desk{
            display: none;
  }
          .desc-mob{
            display: block;
          }

.outside-slideshow,
.bottom-bar,
.top-bar{


 width: 100%

}


}




.loading-box{
    width: 500px;
    color: #FFFFFF;
    height: 500px;
    background: #F05D5B;
    padding-top: 240px;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50px);
}




@media only screen and (max-width: 992px) {
.hide-mobile{
  display: none;
}
}



.owl-dot:focus{
  outline: none;
}

</style>