<template>
<div>

  </div>
</template>

<script type="text/javascript">



import AddToCart from "@/components/svgIcons/AddToCart";

import ShopNow from "@/components/svgIcons/ShopNow";
import CloseModal from "@/components/svgIcons/CloseModal";

import Carousel from "@/components/Carousel";


export default {
  name: "shop",
  components: {
    AddToCart,
    ShopNow,
    CloseModal
  },
  data() {
    return {
  modalOpen: false,
  currentPopupItem: null,
  shopItems: null,
      story: {
        content: {
          body: [],
        },
      },
    };
  },
  mounted () {
this.individualRestaurant()
  },
  methods: {
      async individualRestaurant(){



if(window.location.href === 'http://localhost:8080/'){
    let responseAcf = await this.$http.get(`c`)
}else{
     let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)
}


    let AcfBlock = responseAcf
    let pageData = AcfBlock.data.acf.content_fields

    for(let i = 0;i<pageData.length;i++){
    if(pageData[i].acf_fc_layout === 'online_shop'){
      this.shopItems = pageData[i].online_shop
    }
    }

},
modalPopup(item){

this.modalOpen = true
this.currentPopupItem = item
},
modalClose(){
  this.modalOpen = false
  this.currentPopupItem = null
}
  },
};
</script>


<style lang="scss">

#alacarte{
  border: 5px solid white;
     border-top:0;
    //  border-bottom: 20px;
}
.shopthird {
  width: 33.33333333%;
  float: left;
  margin-bottom: 0px;
  border: 5px solid white;
 
  img {
    width: 100%;
  }


@media only screen and (max-width: 1080px) {
width: 50%
}


@media only screen and (max-width: 768px) {

width: 100%

}



}

.open-modal{
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,.6);
  position: fixed;
top: 92px;
    text-align: center;
    padding-top:20px;
}

.modalContainer{
      background: #fff367;
        border: 5px solid white;
}


.modal-close{
  top: 5px;
  right: 10px;
  position: absolute;
  background: transparent;
  border: 0;
}

.columnblock{
  width: 50%;
  float: left;


@media only screen and (max-width: 768px) {

width: 100%

}

}




.columnblock img{
  width: 100%;
}

.no-padding{
  padding: 0;
  display: inline-block;
}
.text-left{
  text-align: left;
}




button,
button:focus,
button:active{
  outline: none;
}


.pad30{
  padding: 30px;
}


h4.text-left.red{
  color: #f05d5b;
  font-weight: 600;
}



p.thick-grey{
color:#fff367;
  font-weight: 600;

}
</style>