<template>
  <section :id="tag" class="section hero is-primary is-fullheight position-relative mb-80" v-if="!showHide">
        <h4 class="mob-bottom-margin">{{header}}</h4>
   
        <p class="description-para noselect hide-mobile">{{description}}</p>

        <carousel :lazyLoad="true" :autoplay="true"  :items="1" :loop="true" :dots="false" :nav="false">
            <template class="subprev" slot="prev">
                <span class="prev">
                    <Prev />
            </span>
          </template>
<div v-for="item in data" :key="item.testimonial.author">
            <div class="height-100">
              <div class="l-col">
                <div class="quote-container">
                  <div class="md">{{ item.testimonial.quote }} - {{ item.testimonial.author }}</div>
                </div>
              </div>
            </div>
  </div>
          <!-- <template v-if="index === 0 || index === 1" slot="next"></template> -->
          <template class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
        </carousel>
</section>
</template>

<script>



import carousel from "vue-owl-carousel";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";


export default {
    components:{
        carousel,
        Next,
        Prev
    },
    name: 'testimonials',
    props: ['data','header','tag','description','showHide']
    }
</script>



<style lang="scss">

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


#testimonials .owl-stage .owl-item:nth-child(odd) {
    background: #f58e58 !important;
    background: #fff367 !important;
  }


#testimonials .owl-stage .owl-item:nth-child(even) {
    background: #f58e58 !important;
    background: #fff367 !important;
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
  // font-size: 18px;
  // font-size: 38px;


font-size: 18px;

}
.lg {
  font-size: 64px;
}

.height-100{
  height: 100px;
}


#testimonials .quote-container .md{
  position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 50%;
    width: 100%;
    font-size: 20px;
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
  // font-size: 18px;
  // font-size: 38px;


font-size: 18px;

}
.lg {
  font-size: 64px;
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
    }
}

}


@media only screen and (max-width: 768px) {
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
      font-size: 12px !important;
      font-size: 14px !important;
    
    }
}

}
}



</style>

