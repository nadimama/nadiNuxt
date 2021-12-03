<template>
      <div class="container home-page">
        <div class="row">
          <div class="col-md-12">
  <section :id="tag" class="section hero is-primary is-fullheight position-relative mb-80" :if="visible">
        <h4 class="mob-bottom-margin">{{header}}</h4>
       <p class="description-para noselect hide-mobile">{{description}}</p>

<div class="width-container">
<div v-for="item in data" :key="item.restaurant_title">
  <Mbar :comingsoon="false" v-if="item.restaurant_title === 'mbar'" />
  <Mamnoon v-else-if="item.restaurant_title === 'mamnoon'" />
</div>
</div>
</section>
</div></div></div>
</template>

<script>

import carousel from "vue-owl-carousel";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";
import Mbar from "@/components/svgIcons/Mbar";
import Mamnoon from "@/components/svgIcons/Mamnoon";

export default {
    components:{
        carousel,
        Next,
        Prev,
        Mbar,
        Mamnoon
    },
    name: 'reservations',
    props: ['data','header','tag','description','visible']
}
</script>



<style lang="scss">

#reservations .owl-item {
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

.quote-container {
  position: relative;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  text-align: center;
}


#reservations .owl-item {
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


#reservations .owl-stage .owl-item:nth-child(odd) {
    background: #f58e58 !important;
  }


#reservations .owl-stage .owl-item:nth-child(even) {
    background: #f58e58 !important;
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
#reservations .owl-item .l-col {
  padding: 20px;
  text-align: left;
  padding-top: 15px;
  width: 100%;
  float: left;
}
#reservations .owl-item .r-col {
  padding: 0px;
  float: left;
  img {
    width: 100%;
  }
}
#reservations .owl-item > div > div {
  text-align: left;
}
.xs {
  font-size: 18px;
}
.sm {
  font-size: 18px;
}
.md {
font-size: 18px;
}
.lg {
  font-size: 64px;
}

.height-100{
  height: 100px;
}


#reservations .quote-container .md{
  position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 50%;
    width: 100%;
    font-size: 20px;
}




#reservations .owl-item {
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
#reservations .owl-item .l-col {
  padding: 20px;
  text-align: left;
  padding-top: 15px;
  width: 100%;
  float: left;
}
#reservations .owl-item .r-col {
  padding: 0px;
  // width: 50%;
  float: left;
  img {
    width: 100%;
  }
}
#reservations .owl-item > div > div {
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
  // font-size: 18px;
  // font-size: 38px;


font-size: 18px;

}
.lg {
  font-size: 64px;
}



#reservations{
  .owl-carousel {
    margin-top: -10px;
  }
}


#reservations{
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
    }
}

}

</style>

