<template>
<div>
  <main>
    <!-- <div class=""> -->
      <div class="container mt-5 mobilePage">
      <!-- <h2 class="intro-paragraph-header">Welcome!</h2> -->
      <!-- <p class="intro-paragraph">Nadi Mama is a one stop shop for all things The Mama Group has to offer. Order food, purchase retail items, make a reservation or simply stay up to date with our offerings.</p> -->
    <!-- </div> -->
    <!-- </div> -->
<div style="display:none;position: fixed;top:100px;z-index:10000;width: 100%;background: pink;">
{{visibility}}
</div>
  <div v-for="item in pageData" :key="item.acf_fc_layout">

   <CoverFlowCarousel :visible="visibility.planahead" v-if="item.acf_fc_layout === 'meal_calendar'" :header="item.header" :feature="item.feature" :descriptionbody="item.description" :data="item.meal_calendar" :tag="item.tagname" />





  </div>
  </div>

  </main>
  </div>
</template>

<script type="text/javascript">


import CoverFlowCarousel from "@/components/CoverFlowCarousel";

export default {
  components: {
    CoverFlowCarousel
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    names() {
      return this.$store.state.names;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  data() {
    return {
      pageData: null,
      testimonials: null,
      inventory: this.$store.state.inventory,
      blockedBody: this.apiData,
      upserve: null,
      upserveCategories: [],
      currentlyFiltered: [],
      visibility: {
        testimonials: false,
        planahead: false,
        reservations: false,
        shop: false,
        finefoods: false,
        fullonlinemenu: false,
        newsletter: false
      

      }
    };
  },
  props: ['apiData', 'blok'],
  methods: {
 isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 },
visibilityChanged (isVisible, entry) {
  this.isVisible = isVisible
  ///console.log(entry.target.id)
  //console.log(entry.isIntersecting)
///console.log(entry)

// this.visibility[entry.target.id] = true


this.visibility[entry.target.id] = entry.isIntersecting


},

  async individualRestaurant(){
   
    let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)
    let AcfBlock = responseAcf
    this.pageData = AcfBlock.data.acf.content_fields

},
    filterByCat(cat){
      this.currentlyFiltered = []
      for(let i = 0;i<this.upserve.length;i++){
        if(this.upserve[i].category === cat){
        this.currentlyFiltered.push(this.upserve[i])
        }
      }
    },
    dayChange(e) {
      this.currentDay = e + 1;
    },
    toggle: function(event) {
      if (event.target.classList.contains("is-open")) {
        this.$store.commit("decrement");


        
        event.target.classList.remove("is-open");
      } else {
        event.target.classList.add("is-open");
        this.$store.commit("increment");
      }
    },
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    increment2(name) {
      this.$store.commit("increment2", { name });
    },
    removeFromCart(price) {
      this.$store.commit("removeFromCart", { price });
    },
    confirmOrder(timeslot) {
      if (event.target.classList.contains("reserved")) {
        this.$store.commit("unreserveFamilyMeal", { timeslot });

      } else {
        this.$store.commit("reserveFamilyMeal", { timeslot });
      }
    },
    changedAlert() {
      console.log("changed");
    }
  },
  created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    this.currentDay = dd;
  },
  mounted(){
    this.individualRestaurant()
        // this.upserves()
  }
};

</script>


<style lang="scss">
.reserved {
  background: red;
}
.not-available {
  background: #666666;
  color: #ffffff;
  pointer-events: none;
}
.order-button {
  width: 33.33%;
  padding: 20px 0;
}
h4 {
  text-align: center;
}
.is-fullheight,
.familymeal,
.narrow {
  background-color: #f05d5b;
  h4 {
    color: #fff367;    font-weight: bold;
  }
}
.section.hero.familymeal {
  width: 88%;
  margin: 0 auto;
}
.is-fullheight [id^="carousel_prev_"] {
  position: absolute;
  top: 14px;
  //  top: 110px;
  left: 20%;
    left: 30%;
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    left: 5%;
  }
}
.is-fullheight [id^="carousel_next_"] {
  position: absolute;
  top: 14px;
    //  top: 110px;
  right: 20%;
    right: 30%;
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    right: 5%;
  }
}
.is-fullheight {
  padding: 20px 0 0 0;
  // overflow: hidden;
}
.familymeal {
  padding: 0 0 0 0;
}
.order-bottom {
  background: #fff367;
  padding: 10px 0;
  color: black;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: lowercase;
}
.order-bottom.order-top {
  background: #f58e58;
  min-height: 90px;
  text-align: center;
}
.order-panel {
  padding: 10px 0;
}
#mama-dummy-button {
  width: 70px;
  margin: 0 auto;
}
.carousel {
  margin-bottom: 80px;
}
#testimonials .owl-item {
  color: #ffffff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
  margin-top: 10px;
  &:nth-child(odd) {
    background: #f58e58;
  }
  &:nth-child(even) {
    background: #f58e58;
  }
}
.owl-stage {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.owl-item {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: auto !important;
}
#testimonials .owl-item .l-col {
  padding: 20px;
  text-align: left;
  padding-top: 15px;
  width: 100%;
  float: left;
}
#testimonials .owl-item .r-col {
  padding: 0px;
  // width: 50%;
  float: left;
  img {
    width: 100%;
  }
}
#testimonials .owl-item > div > div {
  text-align: left;
}
.xs {
  // font-size: 16px;
  font-size: 18px;
}
.sm {
  // font-size: 22px;
  font-size: 18px;
}
.md {
  font-size: 18px;
}
.lg {
  font-size: 64px;
}
.days {
  margin: 10px auto 5px;
  width: 80%;
}
.days span {
  color: white;
  display: inline-block;
  font-style: italic;
  margin-left: 5px;
  margin-right: 5px;
  line-height: 30px;
  cursor: pointer;
}
.month {
  color: white;
  display: inline-block;
  font-style: italic;
  margin-left: 5px;
  margin-right: 5px;
  // line-height: 30px;
  cursor: pointer;
}
.insideHeader {
  margin-bottom: 20px;
  margin-top: -15px;
}
button.snipcart-add-item {
  border: 0;
  background: transparent;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
}
.snipcart-modal__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 110 !important;
  background-color: #f0f5f6;
  // top: 140px !important;
  top: 90px !important;
    top: 0 !important;
}
.top-widget {
  width: 100%;
  height: 500px;
  background: green;
}
.coverflowsection {
  padding: 0 0 20px 0;
  margin-bottom: 80px;
  background-color: #f05d5b;
  overflow: hidden;
  position: relative;
  h4 {
    color: #fff367;
    font-weight: bold;
  }
  p {
    color: white;
    width: 80%;
    margin: 10px auto 10px;
    text-align: center;
  }

    // margin-top: 90px;

    width: 70%;

    margin-left: auto;
    margin-right: auto;

}
@media only screen and (max-width: 960px) {
  .coverflowsection {
        // height: 660px;
        // height: 880px;
           width: 100%;
  }
}
@media only screen and (max-width: 640px) {
  .coverflowsection {
      // height: 660px;
      // height: 800px
      //  height: 880px;
  }
}
@media only screen and (max-width: 480px) {
  .coverflowsection {

      // height: 880px;
      // height: 804px;
  }
}
.bottom-button {

  // position: absolute;
  // bottom: 0;
  // background: #FFF367;
  // width: 100%;
  // padding: 10px 0;

  position: absolute;
  bottom: 0;
  background: #fff367;
  width: 100%;
  padding: 10px 0;
  // height: 120px;
  height: 110px;
  a {
    position: absolute;
    // width: 100%;
  }
  display: none;
}
.width-container {
  width: 100%;
  overflow: auto;
}
section {
  clear: both;
}
.shortcarousel {
  margin-bottom: 80px;
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

.quote-container {
  // position: relative;
  // height: 100%;
  // width: 100%;
  // padding-bottom: 80px;
  position: relative;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  // padding-bottom: 80px;
  text-align: center;

}
.quote-author {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff367;
}
.itemDescription{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff367b5;
    top: 0;
    opacity: 0;
    transition: all .5s ease;
.text-box{
      width: 80%;
      margin: 0 auto;
      font-weight: 100;
      font-size: 36px;
      margin-top: 100px;
}
}
.relative-pos{
  position: relative;
  overflow: hidden;  
    &:hover{
      .itemDescription{
        opacity: 1;
      }
    }
}


.tesstimonialItem{
  text-align:center;
  margin-top: 0px;
  width: 100% !important;
  
}



#mama-shop .carousel{
    margin-bottom: 20px;
}



.owl-item > div{
  width: 100%
}


#testimonials{
  .owl-carousel {
    margin-top: -10px;
  }
}


#testimonials{
  .quote-container {
    // height: 200px;
        min-height: 60px;
    position: relative;

    .md, .xs{
      position: absolute;
      top: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      left: 50%;
      width: 100%;
      font-size: 20px;
      color: #f05d5b;
    }
}

}

ul.upserve-cats li{
  display: inline;
}

.filtree-half{

    width: 50%;
    float: left;
    // height: 300px;
    // height: 220px;
    height: 140px;
    background: transparent;
    // margin: 5px;
    padding: 0px;
    overflow: hidden;

@media only screen and (max-width: 768px) {
  width: 100%
}


.grey-bg{
    //  padding: 5px;
      // background: #fff367;
            background: #ffffff;
            // padding: 10px 5px;
      
}
}
.filtree{
//   width: 50%;
//   float: left;
//   height: 300px;
// background: #ddd;
// margin: 5px;
// padding: 5px;


width: 30%;
    float: left;
    height: 300px;
    background: #ddd;
    margin: 5px;
    padding: 5px;
    overflow: hidden;



@media only screen and (max-width: 1080px) {
width: 50%
}


@media only screen and (max-width: 768px) {

width: 100%





}



}




@media only screen and (max-width: 1200px) {

.coverflowsection{

    // height: 814px;
}
}

@media only screen and (max-width: 768px) {





.coverflowsection,
.mb-80{
  margin-bottom: 40px;
}
}




@media only screen and (max-width: 768px) {


.coverflowsection{

    // height: 745px;
}



}

.intro-paragraph-header{
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  color: #f05d5b;
}

.intro-paragraph{
      font-size: 14px;
    color: #f05d5b;
}
.rollbar{
  position: fixed;
    width: 100%;
    min-height: 90px;
    background: green;
    top: 142px;
    left: 0;
    z-index: 100;
    padding: 10px 0; 
}

@media only screen and (max-width: 1080px) {
.rollbar{
    top: 92px;

}
}

@media only screen and (max-width: 992px) {


.rollbar{
    top: 92px;

}

}


.orange-button{
  padding:20px;
  background: #f58e58;
  display: block;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  transition: all .5s ease;
  &:hover{
    text-decoration: none;
  }
}


.container.mt-5.mobilePage{
    margin-top: 3rem!important;
    padding-top: 100px;

    @media only screen and (max-width: 992px) {
            // padding-top: 0px;



              margin-top: 1rem!important;
    }
}





</style>