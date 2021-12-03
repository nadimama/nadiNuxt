<template>
    <div class="container home-page">
        <div class="row">
          <div class="col-md-12">
    <section :id="tag" class="section hero is-primary is-fullheight position-relative mb-80">
        <h4 class="mob-bottom-margin">
          
             <router-link to="/retail">
                    {{header}}
             </router-link>
          </h4>





















                <p class="description-para noselect hide-mobile">{{description}}</p>
        <carousel
        :autoplay="true"  
          :responsive=" {0:{items:1},480:{items:2},1080:{items:3}}"
          :items="1"
          :loop="true"
          :dots="false"
          :nav="false"
          :key="refresh"
        >
           <template class="subprev" slot="prev">
            <span class="prev">
              <Prev />
            </span>
          </template>


<!-- <div @click="goToRetail()" class="text-center" style="" v-if="upserveList2 !== []" v-for="item in upserveList2" :key="item.id">
<div v-if="item.images" class="squareAspect" :style="{'backgroundImage': 'url('+item.images.online_ordering_menu.main +')'}">
  </div>
<div v-else>

<NadiIconSmInv />
</div>

              <div class="order-bottom">
                {{item.name}}
              </div>
        </div> -->




<div @click="goToRetail()" class="text-center" v-for="item in data">
<img class="lazy" width="100%" :src="item.shop_item.image" />
              <div class="order-bottom">
                {{item.shop_item.name}}
              </div>
        </div>



          <!-- <template v-if="index === 0 || index === 1" slot="next"></template> -->
          <template class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
        </carousel>
      <div class="text-center mb-perfect">
        <router-link to="/retail">
       <ShowAll />
        </router-link>
        </div>


    </section>
    </div></div></div>
</template>
<script>
import carousel from "vue-owl-carousel";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";
import ShowAll from "@/components/svgIcons/ShowAll";
import Order from "@/components/svgIcons/Order";

import NadiIconSm from "@/components/svgIcons/NadiIconSm";
import NadiIconSmInv from "@/components/svgIcons/NadiIconSmInv";
export default {
    data() {
      return {
          refresh: 0,
        upserve: [],
        upserveList: [],
        upserve2: [],
        upserveList2: [],
        upserveSections: [],
        retailItems: []
      }
    },
    components:{
      NadiIconSmInv,
        carousel,
        Next,
        Prev,
        ShowAll,
        Order
    },
    name: 'onlineshop',
    props: ['data','header','tag','description'],
    methods: {
          async upservesMongo2() {

      let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoonretail`);
      let upserveProducts = responseUpserve.data.doc[0].menu;
      this.upserve2 = upserveProducts;
      this.upserveList2 = upserveProducts;

    },
      goToRetail(){
 this.$router.push("/retail");
      },
       async upservesMongo() {
      let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoon`);
      let upserveProducts = responseUpserve.data.doc[0].menu.items;
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      this.upserveSections = responseUpserve.data.doc[0].menu.sections;



let upserveSectionsRetail = this.upserveSections.filter(item => item.name === 'Spices'||item.name === 'Holiday Retail'||item.name === 'Pantry Items').map(x => x.item_ids).flat();
// console.log(upserveSectionsRetail)
// console.log(this.upserveList)

      this.retailItems = this.upserveList.filter(x=>upserveSectionsRetail.includes(x.id))
    // console.log(this.retailItems)
    
      this.refresh++;
    },



async upserves() {




      let responseUpserve = await this.$http.get('/product/upserveolo');
      let upserveProducts = responseUpserve.data.body.items;
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      this.upserveSections = responseUpserve.data.body.sections;



let upserveSectionsRetail = this.upserveSections.filter(item => item.name === 'Spices'||item.name === 'Holiday Retail'||item.name === 'Pantry Items').map(x => x.item_ids).flat();
// console.log(upserveSectionsRetail)
// console.log(this.upserveList)

      this.retailItems = this.upserveList.filter(x=>upserveSectionsRetail.includes(x.id))
    // console.log(this.retailItems)
    
      this.refresh++;
    },


    },
    mounted(){
// this.upserves()
this.upservesMongo2()
this.upservesMongo()
    }
}
</script>


<style lang="scss">
.mb-perfect{
  margin-bottom: 0px;
  height: 90px;
}


.mob-bottom-margin a{
color: #fff367;
}



.squareAspect {
  position: relative;
  width: 100%;
  background-position: center center;
  background-size: cover;
}

.squareAspect:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}


// .owl-stage>div{
//     width: 100% !important;
// }



// .text-center{
//   width: 33.33%
// }
</style>