<template>
      <div v-if="orderConfirmationModal" class="order-confirmation-modal">
        <div class="container online-menu order-modal-width" style="padding: 10px;">
          <!-- <div @click="closeConfirmationModal()" class="close closeModal"> -->
          <div class="close closeModal closeModalConfirmation">
                 <router-link to="/">  
            <CloseModal2 />
                 </router-link>
          </div>
          <h4 class="order-conf-header">order confirmation</h4>
        </div>
        <div class="container modal-body order-modal-width order-modal-body">
          <h2 v-if="orderCMR.preorder">your order has been scheduled.</h2>
          <div class="mb-15" v-if="orderCMR.preorder">it will be ready on <b>{{orderCMR.scheduled_time | formatDate}}</b><br></div>
          <h2 v-else>thank you for your order.</h2>
          <div>
  <b>{{orderCMR.fulfillment_info.customer.email}}</b>  <br />  
<b>{{orderCMR.fulfillment_info.customer.phone}}</b>
<ul class="no-left-pad" v-if="orderCMR.charges.items">
  <li class="modal-item" v-for="item in orderCMR.charges.items" :key="item.name">
    {{item.name}}
  </li>
  </ul>  
    {{retail}}
<b v-if="retail">tip: ${{orderCMR.charges.tip.amount.toFixed(2)/100}}</b>

<br />  

<b>taxes: ${{orderCMR.charges.taxes.toFixed(2)/100}}</b>
<br />  


<b>total: ${{orderCMR.charges.total.toFixed(2)/100}}</b>
<br /><b v-if="orderCMR.charges.shipping > 0">shipping: ${{orderCMR.charges.shipping}}</b>
<br />
<br />
<hr />

<span v-if="orderCMR.giftcardbalance">current giftcard balance: {{orderCMR.giftcardbalance}}</span>
<span v-else>credit transaction</span>

<!-- <div v-if="orderCMR.giftcardBalance">
current giftcard balance: ${{orderCMR.giftcardBalance}}
</div> -->

          </div>
        </div>
      </div>



</template>


<script>

import CloseModal2 from "@/components/svgIcons/CloseModal2";
import moment from 'moment'
import tz from 'moment-timezone'
export default {
    name: 'OrderConfirmationModal',
props: ['orderConfirmationModal','orderCMR','retail'],
components: {

    CloseModal2
},
methods:{
        closeConfirmationModal() {
      this.orderConfirmationModal = false;
      this.orderCMR = "";
    }
},
filters: {
    formatDate(value) {
  if (value) {
        let order = moment(String(value));
        return order.tz('America/Los_Angeles').format('LLLL').replace(', 2020', ', at');
  }
}
}
}
</script>

<style scoped lang="scss">
img.itemimage {
  width: 100%;
}

.container {
  display: block;
}

.order-confirmation-modal,
.order-modal {
  position: fixed;
  z-index: 100;
  z-index: 200;
  background: #ffffff99;
  height: 100vh;
  width: 100%;
  top: 0;
}

li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}

li button {
  position: absolute;
  right: 0;
  top: 20px;
      top: 50%;
    transform: translateY(-50%);
}

.modal-body {
  background: white;
  padding: 15px;
  border-radius: 0px;
  border: 1px solid grey;
}

button {
  border: 1px solid #f05d5b;
  background-color: #f05d5b;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 4px;
}

button:hover {
  border: 1px solid #f05d5b;
  background-color: #f05d5b;
  color: #ffffff;
  padding: 5px 10px;
}

button:disabled,
button[disabled="true"] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

div {
  // padding: 5px 10px;
}

.closeModal {
  opacity: 1;
  cursor: pointer;
}

.order-sidebar {
  padding-left: 0;
  li {
 
    font-size: .9rem;
    list-style-type: none;
    padding: 18px 0 22px;
    
  }
}

.hidden-drawer {
  // display: none;
  padding: 0;
  height: 0;
  transition: all 0.5s ease;
  overflow: hidden;
  &.expanded-drawer {
    transition: all 0.5s ease;
    // display: inline-block;
    // width: 100%;
    height: 100%;
  }
}

.display-block {
  display: block;
}

h2 {
  cursor: pointer;
}

.menu-line {
  border-bottom: 1px solid #ddd;
  padding: 10px 0 6px;
  margin: 6px 0;
}


.menu-line-testing {
  border-bottom: 0px solid #ddd;
  padding: 10px 0 6px;
  margin: 6px 0;
}

h2.menu-header {
  // padding: 0 18px;
  font-size: 18px;
  font-weight: 400;
}

@media only screen and (max-width: 600px) {
h2.menu-header {
 padding-left: 10px;
}

}


button.delivery-option {
    width: 49%;

    border-radius: 4px;
    border: 2px solid #f05d5b;
    background: #fff;
    color: #f05d5b;
    padding-top: 5px;
  &.selected {
    background: #f05d5b;
    color: #ffffff;
  border: 2px solid #f05d5b;
    padding-top: 5px;
  }
}

button.filehalf {
    width: 49%;

    border-radius: 4px;
    border: 2px solid #f05d5b;
    background: #fff;
    color: #f05d5b;
    padding-top: 5px;
  &.selected {
    background: #f05d5b;
    color: #ffffff;
  border: 2px solid #f05d5b;
    padding-top: 5px;
  }

&.deactivated{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;

}



}

form input,
form textarea,
.giftcardinput {
  width: 100%;
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  // margin-bottom: 10px;
      margin-bottom: 6px;
}

.backgroundImage {
  background-position: center center;
  background-size: cover;

  // height: 140px;
  // background-size: 129%;

  height: 100%;
}

.inline-block {
  display: inline-block;
  width: 100%;
}

.yellow-bg, .yellow-bg-test {
  background: #fff367;
  width: 100%;
  display: inherit;
  height: 140px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.7;
  }

  position: relative;
  overflow: hidden;
}

.half-width2left {
  width: 65%;
  float: left;
  height: 140px;
  overflow: hidden;
}

.half-width2right {
  width: 35%;
  float: left;
  height: 140px;
  overflow: hidden;
}

.grey-bg {
  height: 140px;
}

.filtree-half {
  width: calc(50% - 0px);
  float: left;
  height: 140px;
  background: transparent;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 5px;
}

.filtree-full {
  width: calc(100% - 0px);
  float: left;
  height: 140px;
  background: transparent;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 5px;
}

@media only screen and (max-width: 768px) {
  .filtree-half {
    width: calc(100% - 0px);
    float: left;
    height: 140px;
    background: transparent;
    padding: 5px;
    overflow: hidden;
    margin-bottom: 5px;
  }
}

.content-box {
  // margin: 10px;


      position: inherit;
    bottom: 0;
    background: #fff367;
    padding: 10px;
    // width: 100%;  

  .name {
  }

  .food-description {
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
}


.content-box-upper {
  // margin: 10px;


      position: absolute;
    bottom: 0;
    background: #fff367;
    padding: 12px 20px;
    width: 100%;  

  .name {
  }

  .food-description {
    font-size: 1rem;
    margin-bottom: 0px;
  }
}


.text-left {
  text-align: left;
}

.online-menu {
  background-color: #f05d5b;
  padding: 20px 0 15px;
  text-align: center;
  position: relative;
  h4 {
    color: #fff367;
    font-size: 1.5rem;
    text-align: center;
  }
}

.food-price {
  font-size: 0.9rem;
  font-weight: 600;
}

.no-lr-margin {
  margin-left: 0;
  margin-right: 0;
}

.expand-contract {
  display: none;
  &.visible {
    display: inline-block;
  }
}

.closeModal {
  position: absolute;
  top: 11px;
  right: 15px;
}

.box {
  width: 33.33%;
  // border: 1px solid red;
  float: left;
}

.box-inner {
  margin: 10px 0;
  // width: 25%;
  padding: 0px;

  border: 0px solid red;
  float: left;
}

.order-modal-width {
  width: 700px;

  img {
    width: 100% !important;
  }
}

@media only screen and (max-width: 768px) {
  .order-modal-width {
    width: 100% !important;
    max-width: 96% !important;
  }
}

.order-modal-body {
  // max-height: 70vh;
  // max-height: 85vh;
    //  max-height: 65vh;
        max-height: 60vh;
  overflow-y: scroll;
border-top: 0;
  textarea {
    width: 100%;
    margin: 0px 0;
    margin-bottom: 10px;
    height: 50px;
  }
}

.container.online-menu.order-modal-width {
  margin-top: 24px;
      margin-top: 5px;
}

.float-right {
  float: right;
}

.item-image-container {
  text-align: center;

  background-position: 0;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 300px;
  z-index: 1;

  background: #f0ecec;

  img, svg {
    width: auto !important;
    height: 300px;
  }


div{
  svg{
    height: 300px;
  }
}

}





.item-image-container > div > svg {
    height: 300px;
 
}


.add-to-order-footer {
  padding: 15px 0 20px 0;
  padding: 8px 0 0px 0;
    width: 100%;

}

#value {
  margin: 5px;
  font-weight: 600;
}

.pt50 {
  padding-top: 50px;
}

.pt20 {
  padding-top: 20px;
}



.mt10 {
  margin-top: 10px;
}

.item-description-p {
  margin-top: 15px;
  margin-bottom: 5px;
      font-size: 14px;
}

textarea {
  width: 100%;
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  margin-bottom: 10px;
  height: 50px;
}

.displayInlineBlock {
  width: 100%;
  display: inline-block;
}

.delivery-box {
  width: 100%;
  position: relative;
  height: 50px;
}

.updateAddress {
  width: 100%;
  position: relative;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  padding: 5px 0;
}

.googleValidate {
  width: 100%;
  position: relative;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  pointer-events: none;
}

.pointer-all {
  pointer-events: all;
}

.display-none {
  display: none;
}



.tipButton{
  // margin-bottom: 20px;
    margin-bottom: 5px;
    width: calc(33% - 1.8px);
    border: 2px solid #f05d5b;
    background-color: #ffffff;
    color: #f05d5b;
    padding: 5px 10px;
    border-radius: 4px;


transition: background-color .1s ease;
    &:hover{
        border: 2px solid #f05d5b;
    }

    &:disabled{
          &:hover{
        border: 1px solid #999999;
    }
    }

}



    .toggle{
      display: none;
    }

@media only screen and (max-width: 992px) {
.drawer-on-mobile{
    position: fixed;
    left: 100%;
    background: white;
    padding: 10px;
    width: 100%;
    max-width: 100%;
    top: 90px;
    height: 100vh;
    border-left: 1px solid black;
    transition: all .25s ease;

    // border-left: 50px solid #F05D5B;
    z-index: 100;
&.expanded{
      left: 0;
      // border-left: 0px solid #F05D5B;


    .toggle{
    transform: translate(0px);
    }


}

    .toggle{
        display: block;
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 100;


    width: 100%;
    bottom: 0;
    left: 0;
    border-radius: 0;
    padding: 15px 10px;


    }


}}



@media only screen and (max-width: 768px) {


 .backgroundImage {
  background-position: center center;
  background-size: cover;

  // height: 150px;
  // background-size: 129%;
}

.inline-block {
  display: inline-block;
  width: 100%;
}

.yellow-bg, .yellow-bg-test {
  background: #fff367;
  width: 100%;
  display: inherit;
  height: 150px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.7;
  }
}

.half-width2left {
  width: 65%;
  float: left;
  height: 150px;
  overflow: hidden;
}

.half-width2right {
  width: 35%;
  float: left;
  height: 150px;
  overflow: hidden;
}

.grey-bg {

  height: 150px;
}

.filtree-half {
  width: calc(100%);
  float: left;
  height: 150px;
  background: transparent;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 5px;
}


}


input.formatted{
  border: 1px solid #b7b7b7;
  width: 100px;
  margin: 10px 0;


&.attention{
    border: 2px solid #f05d5b;
}

}


span.attention{
  color: #f05d5b;
}



ul.no-left-pad{
  padding-left: 0;
}


.mt10{
  margin-top: 10px;
}


.small-message{
    color: #f05d5b;
    color: #f58e58; 
    font-size: .9rem;
    font-style: italic;
}


.smblk{
    color: #000;
    font-size: .9rem;
}



.fw{
      width: 100%;
      margin-top: 20px;

}




.removeClose{
    height: 30px;
    border-radius: 15px;


}


.removeClose > div{
margin-top: -3px;

    
}


.custom-tip-button{
  padding: 4px;
  border-radius: 4px;
    width: 68%;
}


.customtip{
  width: 100%;


&.activated{
  width: 30%
}

}


.full-height-slide{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
        overflow: hidden;
            background: #a5a5a5;
}

.yellow-bg{
      height: 100%;
}


.is-fullheight [id^="carousel_prev_"] {
  position: absolute;
  top: 14px;
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
  right: 20%;
    right: 30%;
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    right: 5%;
  }
}

.is-fullheight{
  padding: 20px 0 0 0;
  // overflow: hidden;


  &.no-top-pad{
    padding-top: 0;
  }
}



.removeClose{
  background-color: transparent!important;
  svg{
    width: 9px;
    margin: 7.5px auto 10px;
  }
}



.removeClose:hover{
    // background-color: #f05d5b;
  svg{
.cls-1closeModalRed {
    fill: #ffffff !important;
}
  }
}

.customer-info,
.address-info{
font-size: 1.2rem
}

label {
    display: inline-block;
    margin-bottom: 0.5rem;
}



form hr{
      margin-top: .75rem;
    margin-bottom: .75rem;

}

.drawer-on-mobile.expanded{
    height: 100%;
    overflow: scroll;
    padding-bottom: 160px;
}

// @
// padding: 5px 5px;

.tipButton.customtip,
.tipButton.quarter {

    font-size: 12px;
}


@media only screen and (max-width: 1280px) {
.tipButton.quarter {
    margin-bottom: 5px;
    // width: calc(25% - 3.5px);


    width: calc(33% - 2px);
    padding: 5px 5px !important;
    font-size: 12px;
}
}


.mt8{
margin-top: 8px;
}


.mb20{
  margin-bottom: 20px;
}


.pt20{
  padding: 20px 0;
}

.no-bot-pad{
  padding-bottom: 0;
}

.cart-empty-class{
  background-color: #f3f3f3;
    padding: 20px 0;
    color: #a6a4a4;
    font-style: italic;
    font-size: 14px;
    border-radius: 5px;
}

li.modal-item{
  list-style-type: none;
  padding: 10px 0;
  font-size: 18px;
}


.slide-show-image-home{
  width: 100%;
  height: 562px;
  background-size: 110% 100%;

  filter: blur(4px);
    // transform: scale(1.2);
    overflow: hidden;
}


.slide-show-image{
    position: absolute;
    top: 0px;
    left: 50%;
    height: 440px;
    width: auto !important;
    transform: translate(-50%);
    }


#online-menu .owl-item{
      background: #a5a5a5 !important;
}

.loading-box{
    width: 500px;
    color: red;
    height: 500px;
    background: #fff;
    padding-top: 240px;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50px);
}

.mb-15{
  margin-bottom: 15px;
}




@media only screen and (max-width: 768px) {
.item-image-container {
  text-align: center;

  background-position: 0;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 200px;
  z-index: 1;

  background: #f0ecec;

  img, svg {
    width: auto !important;
    height: 100px;
  }


div{
  svg{
    height: 100px;
  }
}

}





.item-image-container > div > svg {
    height: 200px;
 
}
}



.order-conf-header{
      padding: 10px;
    margin-bottom: 0;
}


.order-modal-body{
      margin-top: -10px;
}

.closeModalConfirmation{
position: absolute;
    top: 4px !important;
    right: 32px !important; 
}

</style>



