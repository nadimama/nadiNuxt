<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script type="text/javascript">


export default {
    metaInfo: {
      name: 'App',
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'nadi mama',
      // all titles will be injected into this template
      titleTemplate: '%s | mamnoon | mbar | mamnoon street | anar',
                  meta: [
                { name: 'Nadi Mama', content:  'Welcome to Nadi Mama, the home for all things the Mama Group has to offer. Swipe through to see some of our latest special offerings hand-curated by our lead chef, browse the full menu and order items individually, peruse our new retail items, learn more about wholesale resale opportunities of our house made products, make reservations for a special night at one of our locations, or simply stay in touch with us!'},
                { property: 'og:title', content: "Nadi Mama - Home for all things the Mama Group has to offer."},
                { property: 'og:site_name', content: 'Nadi Mama'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
    }
}




        



</script>

<style lang="scss">


  $nadi-red-color: #f05d5b;




html, body{
    // overflow-x: hidden;
}

#preview-coverflow,
#preview{
      border: 0 !important;
    outline: none;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.section-pad{
  margin-top: 50px;
  margin-bottom: 50px;

  border-bottom: 1px solid rgba(0,0,0,.1) !important;
  padding-bottom: 40px;
}
h4.error{
  color: red
}
.mb-80{
  margin-bottom: 80px;
}


.is-fullheight,
.familymeal,
.narrow {
  background-color: #f05d5b;
  h4 {
    color: #fff367;
  }
}

.position-relative{
  position: relative;
}


.mb-80{
  margin-bottom: 80px;
}







.sm-button{
padding: 2px 9px;
margin: 0;
border: 0;
// background-color: #f05d5b;
background-color: #f58e58;
color: white;
border-radius: 4px;
margin: 0 10px 0 0;

&:hover{
  color: #fff367;
}
}


#upserveolo{
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
  left: 0;
}

li {
  border-bottom:  1px solid #d4d0d0;
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
  border: 1px solid #d4d0d0;
    // border-bottom: 1px solid rgba(0,0,0,.51) !important;
}

button {

  border: 1px solid #f05d5b;
    border: 1px solid #f58e58;
   background-color: #f05d5b;

  color: #ffffff;
  padding: 5px 10px;
  border-radius: 4px;
  // border: 2px solid #f05d5b !important;
  // border: 2px solid #f58e58 !important;
    border: 2px solid transparent;

//border: 2px solid #f05d5b;
    

      &.deactivated{
             border: 2px solid #999999 !important;
      }
}
transition: all .5s ease;
button:hover {
  // border: 1px solid #f05d5b;
  // border: 1px solid #f58e58;
  background-color: #f05d5b;
  background-color: #f58e58;
  background-color: #f05d5b4a;
  color: #f05d5b;
  padding: 5px 10px;
}

button:disabled,
button[disabled="true"] {
  border: 1px solid #999999 !important;
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
    padding: 10px 0;
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
  border-bottom: 0 solid #ddd;
  padding: 10px 0 6px;
  margin: 6px 0;
}

h2.menu-header {
  // padding: 0 18px;
  font-size: 18px;
  font-weight: 400;
      margin-bottom: 10px;
}


@media only screen and (max-width: 992px) {
h2.menu-header {
  font-size: 16px;
}

}



@media only screen and (max-width: 600px) {
h2.menu-header {
//  padding-left: 10px;
     padding-right: 10px;
     line-height: 1.4;
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
     border: 2px solid #f05d5b;
    background: #fff;
        background: #f05d5b;
        
    color: #f05d5b;
    color: #ffffff;
    padding-top: 5px;
  &.selected {
    background: #f05d5b;
        background: #f58e58;
    color: #ffffff;
  border: 2px solid #f05d5b;
   border: 2px solid #f58e58;
    padding-top: 5px;
  }

&.deactivated{
    border: 1px solid transparent;
    background-color: #cccccc;
    color: #666666;

}
  transition: background-color .1s ease;


&:hover{
  //  color: #fff367;
  background-color: #f05d5b4a;
  color: #F05D5B;
 border: 2px solid transparent;
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
      // margin-bottom: 6px;
          margin-bottom: 4px;
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

}

.filtree-full-testing {
  width: calc(50% - 0px);
  float: left;
  height: 140px;
  background: transparent;
  padding: 0px;
  overflow: hidden;
  margin-bottom: 5px;
  // border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
}

@media only screen and (max-width: 768px) {
  .filtree-full-testing {
  width: calc(100%);
}
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
    color: rgb(118, 118, 118);
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
    font-weight: 500;
  }

  .food-description {
    font-size: 1rem;
    margin-bottom: 0px;
  }

  // height: 120px;
height: 140px;
transition: all .5s ease;
&:hover{
  // background: #f05d5b;
  // color: #ffffff;
}

}


.text-left {
  text-align: left;
}

.online-menu {
  background-color: #f05d5b;
  padding: 20px 0 15px;
  padding: 0 !important;
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
  right: 11px;
}

.box {
  width: 33.33%;
  // border: 1px solid red;
  float: left;


    width: 20%;
    float: left;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 15px;

}

.box-inner {
  margin: 10px 0;
  // width: 25%;
  padding: 0px;

  border: 0px solid red;
  float: left;

    box-sizing: border-box;
    border: 1px solid #ddd;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    width: 90%;

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


@media only screen and (max-width: 640px) {
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
    height: 200px;
  }




}





.item-image-container > div > svg {
    // height: 100px;
 
}
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
    width: calc(33% - 2px);
    border: 2px solid #f05d5b;
    border: 2px solid transparent;
    background-color: #ffffff;
    background-color: #f58e58;
    background-color: #f05d5b;
    color: #f05d5b;
    color: #f58e58;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 4px;


transition: background-color .1s ease;
    &:hover{
        border: 2px solid #f05d5b4a;
        border: 2px solid #f05d5b4a;
        


background-color: #f05d5b4a;
    color: #F05D5B;

   border: 2px solid transparent;
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
    top:0px;
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

    // .toggle{
    //     display: block;
    //     position: fixed;
    //     bottom: 10px;
    //     right: 10px;
    //     z-index: 100;


    // width: 100%;
    // bottom: 0;
    // left: 0;
    // border-radius: 0;
    // padding: 15px 10px;

    // }


 .toggle{
    display: block;
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 100;
    /* width: 50px; */
    bottom: 0;
    /* left: 0; */
    border-radius: 0;
    /* padding: 15px 10px; */
    width: 50px;
        width: 80px;
    right: 10px;
    bottom: 70px;
    border-radius: 25px;
    height: 50px;
    border: 1px solid #fff;

    bottom: 10px;
// transition: all .5s ease;

    &:focus{
      outline: none;
    }


    &.narrowed{
      width: 50px;
    }
    span{
      font-weight: 600;font-size:18px;
    }
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

  height: 140px;
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
    //color: #f58e58;
    font-size: .9rem;
    font-style: italic;

    &.grey{
      color: #343a40;
      font-size: .8rem;
    }
}


.smblk{
    color: #000;
    font-size: .9rem;
}



.fw{
width: 100%;
// margin-top: 20px;
// margin-top: 10px;

}




.removeClose{
    height: 27px;
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
  top: 110px;
    top: -55px;
    // position: 
  left: 20%;
    left: 30%;
        left: 35%;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    left: 5%;
    top: 102px;
    top: -55px;
  }
}
.is-fullheight [id^="carousel_next_"] {
  position: absolute;
  top: 110px;
    top: -55px;
  right: 20%;
    right: 30%;
    right: 35%;

  cursor: pointer;
  @media only screen and (max-width: 768px) {
    right: 5%;
    top: 102px;
    top: -55px;
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
  background-color: #f58e58 !important;
  padding: 5px 7px;
&:active,
&:hover,
&:focus{
  outline: none;
}

  svg{
    &:active,
&:hover,
&:focus{
  outline: none;
}

      width: 10px;
    margin: 4.5px auto 10px
  
  }
}



.removeClose:hover{
    // background-color: #f05d5b;
      padding: 5px 7px;
  svg{
        width: 10px;


.cls-1closeModalRed {
    fill: #fff367 !important;
}
  }
}

.customer-info,
.address-info{
font-size: 1.2rem
}

label {
    display: inline-block;
    // margin-bottom: 0.5rem;
        margin-bottom: 0.2rem;
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

&.disabled{
  pointer-events: none;
  background: #666666;
  border: 2px solid #666666;
  color: #fff367;

}

}


@media only screen and (max-width: 1280px) {
.tipButton.quarter {
    margin-bottom: 5px;
    // width: calc(25% - 3.5px);


    width: calc(33% - 2.5px);
    // width: calc(33% - 1.4px);
    padding: 5px 5px !important;
    font-size: 12px;
}
}
@media only screen and (max-width: 992px) {
  .tipButton.quarter {
    width: calc(33% - 1.4px);
  }
}

@media only screen and (max-width: 640px) {
  .tipButton.quarter {
    width: calc(32.2%);
}
}

.mt8{
margin-top: 8px;
}

.mt5{
margin-top: 5px;
}


.mb20{
  margin-bottom: 20px;
}

.mb40{
  margin-bottom: 40px;
}

.mb60{
  margin-bottom: 60px;
}

.pt20{
  padding: 20px 0;
}

.pt40{
  padding: 40px 0;
}

@media only screen and (max-width: 768px) {
  .pt40{
  padding: 20px 0;
}
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
//   width: 100%;
//   background-size: 110% 100%;

//   filter: blur(4px);
    // transform: scale(1.2);
    // overflow: hidden;


    width: 100%;
    background-size: 110% 100%;
    filter: blur(4px);
    overflow: hidden;
    height: 100%;
    position: absolute;



}


.slide-show-image{
    // position: absolute;
    // top: 0px;
    // left: 50%;
    // height: 440px;
    // width: auto !important;
    // transform: translate(-50%);



    position: absolute;
    top: 0px;
    left: 50%;
    height: 440px;
    width: auto !important;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    width: 50% !important;
    background-size: 100%;
    background-position: center;
    color: transparent;

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



   i.small{
     font-size: 12px;
   }




#SixSeven{
    display: none;   
}
// #FourThree{
//     display: block;
// }

#FourThree{
    display: block;
}


@media only screen and (max-width: 768px) {

  .filtree-full,
    .filtree-full-testing,
.half-width2right,
.half-width2left,
.half-width2left{
    height: 240px !important;
}

svg#nadiIconSm{
    width: 100%;
    // height: 240px !important;
}

#SixSeven{
    display: none;
}
#FourThree{
    display: block !important;
}

}




}


.vs__dropdown-menu {
    padding: 5px 0 0;
}
.vs__dropdown-option {
    padding: 7px 10px !important;
}



@media only screen and (max-width: 992px) {


.half-width2right{
  display: none;
}
#upserveolo .half-width2left{
    width: 100% !important;
    float: left;
    // height: 90px!important;
    overflow: hidden;
}


.half-width2left .food-description{
  // display: none !important;
}

#upserveolo .filtree-full,
#upserveolo .filtree-full-testing{
    height: 140px!important;
}

#upserveolo .content-box {
    padding: 5px 9px;
    padding: 3px 9px;
}

}


@media only screen and (max-width: 992px) {


#upserveolo .filtree-full,
#upserveolo .filtree-full-testing{
    height: 140px!important;


.yellow-bg-test{
      height: 140px!important;
}

}



.hide-mobile{
  display: none;
}

.mob-bottom-margin{
      margin-bottom: 22px;
}


svg#show-all{
    // margin-top: 20px !important;
}

}





@media only screen and (max-width: 768px) {

#SixSeven{
    display: block !important;
}
#FourThree{
    display: none !important;
}


}


input.custom-tip-button{
  border: 1px solid #b8b8b8;
  }

  #customTip{
    padding: 7px !important;
    margin-bottom: 0 !important;
    transform: translate(0px, -2px);
        margin-top: 2px;
  }

#upserveolo button.vs__clear{
  
    background: #F05D5B;
    border-radius: 30px;
    padding: 0 1px;
    width: 26px;
    height: 26px;
    svg{
 
      transform: translate(0px, -3px);
      width: 11px;
      path{
        fill: #ffffff;
      }
    }


    &:hover{

    svg{

     transform: translate(0px, -3px);
      width: 11px;
      path{
        fill: #fff367;
      }
    }
    }

  }



.preorder-bottom-pad{
      margin-bottom: 15px;
}


.halfwidth-yellow1.wider.mbar.mbar1{


svg{
  transform: translate(-50%,-56%);
}

}
@media only screen and (max-width: 768px){


.halfwidth-yellow1.wider.mbar.mbar1{


svg{
    transform: translate(-50%, -77%);
    margin-top: 8px;
}

}

}



.is-fullheight [id^=carousel_prev_]{
  display: block !important;
}



.filehalf h4{
  color: #fff367;
    font-size: 1.5rem;
    text-align: center;
}






// mamnoon @ home styling adjustments

#upserveolo.smallerBoxes .box {
    width: 25%;
        width: 20%;
    float: left;
cursor: pointer;
    font-size: 14px;
    margin-bottom: 15px;
}


.optionHeader{
    padding: 10px 0;
    // margin-bottom: 5px;
    font-weight: 500;

}

@media only screen and (max-width: 768px) {
#upserveolo.smallerBoxes .box {
    width: 50%;
    float: left;
    margin-bottom: 5px;

}

}




#upserveolo.smallerBoxes .box > div {
    width: 90%;
    // padding: 10px;  
    box-sizing: border-box;
    border: 1px solid #ddd;
        // height: 100px;

        transition: all .25s ease;


  
}


#upserveolo.smallerBoxes .box.selected > div {
   // width: 90%;
    // padding: 10px;  
    box-sizing: border-box;
    border: 1px solid #f05d5b;
    background: #f05d5b;
    color: white;




}


.optionHeader{
  width: 100%;
  // text-align: center;
  border-bottom: 1px solid #ddd;
}

.pad-10{
  padding: 10px;
padding-bottom: 0;
  &:first-child{

  }
  p{
    margin-bottom: 0;
        font-size: 12px;
  }


.title-bolder{
  font-weight: bolder;
}

}



.hide-on-desktop{
  display: none;
}

@media only screen and (max-width: 1080px) {

.hide-on-desktop{
display: flow-root;
}



}

@media only screen and (max-width: 992px) {
#upserveolo .box-inner{
  padding-bottom: 10px;
}



#upserveolo.smallerBoxes .box.selected > div {
    //width: 100%;




}



}


.fw{
  width: 100%;
  padding: 0 15px;
}


#upserveolo .item-description-p.noTopMarge,
.noTopMarge{
  margin-top: 0;
      font-size: 14px;
}



.right-column{
    position: -webkit-sticky;
    position: sticky;
    top: 150px;

   @media only screen and (max-width: 992px) {
      top: 0;
    }
 

}


#fine_foods .owl-stage-outer{
  background:#eee;
}


.no-lr-margin{
  margin-left: 0;
  margin-right: 0;
}



.is-fullheight.less-left-right [id^="carousel_prev_"] {
    left: 30%;

   @media only screen and (max-width: 992px) {
    left: 5%;
    }

}
.is-fullheight.less-left-right [id^="carousel_next_"] {
    right: 30%;


       @media only screen and (max-width: 992px) {
    right: 5%;
    }
}





.swal2-popup{
    border-radius: 0 !important;
    padding: 0 !important;
    padding-bottom: 20px !important;
}

.swal2-header{
   background-color: #f05d5b !important;
   padding: 10px !important;
        h2{
            color: #fff367 !important;
            font-size: 16px !important;
            margin-bottom: 4px !important;
        }
    }

.swal2-actions button{
    background: #f58e58 !important;
    color: white !important;
    border-radius: 0 !important;
}




//large screen fix

// body{

@media only screen and (min-width: 1600px) {
  body{
    width: 1600px;
    margin: 0 auto !important;
  }

  .fixed-nav{
 width: 1600px !important;
  }
}


// }

</style>


<style lang="scss">
[class*="icono"] {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: #666;
    color: #F05D5B;
  box-sizing: border-box;
  &:after, &:before {
    content: "";
    box-sizing: border-box;
  }
}
[class*="icono-arrow1"]{
  width: 20px;
  height: 20px;
  border-width: 4px 4px 0 0;
  border-style: solid;
  margin: 10px;
  &:before{
    right: 0;
    top: -3px;
    position: absolute;
    height: 4px;
    box-shadow: inset 0 0 0 32px;
    transform: rotate(-45deg);
    width: 23px;
    transform-origin: right top;
  }
  &[class*="-left"]{
    transform: rotate(45deg);
    &[class*="-up"]{
      transform: none;
    }
    &[class*="-down"]{
      transform: rotate(90deg);
    }
  }
  &[class*="-right"]{
    transform: rotate(-135deg);
    &[class*="-up"]{
      transform: rotate(-90deg);
    }
    &[class*="-down"]{
      transform: rotate(180deg);
    }
  }
  &[class*="-up"]{
    transform: rotate(-45deg);
  }
  &[class*="-down"]{
    transform: rotate(135deg);
  }
}
[class*="icono-arrow2"]{
  width: 0;
  height: 0;
  border-width: 6px;
  border-style: solid;
  border-bottom-color: transparent;
  border-left-color: transparent;
  margin: 10px;
  &:before{
    right: 0;
    top: -3px;
    position: absolute;
    height: 4px;
    box-shadow: inset 0 0 0 32px;
    transform: rotate(-45deg);
    width: 15px;
    transform-origin: right top;
  }
  &[class*="-left"]{
    transform: rotate(45deg);
    &[class*="-up"]{
      transform: none;
    }
    &[class*="-down"]{
      transform: rotate(90deg);
    }
  }
  &[class*="-right"]{
    transform: rotate(-135deg);
    &[class*="-up"]{
      transform: rotate(-90deg);
    }
    &[class*="-down"]{
      transform: rotate(180deg);
    }
  }
  &[class*="-up"]{
    transform: rotate(-45deg);
  }
  &[class*="-down"]{
    transform: rotate(135deg);
  }
}
[class*="icono"] {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: #666;
  color: #F05D5B;
  box-sizing: border-box;
  &:after, &:before {
    content: "";
    box-sizing: border-box;
  }
}
[class*="icono-arrow3"]{
  width: 18px;
  height: 20px;
  border-width: 4px 4px 0 0;
  border-style: solid;
  margin: 10px;
  border-radius: 0 2px 0 0;
  &:before, &:after{
    border-radius: 2px;
    position: absolute;
  }
  &:before{
    right: 0;
    top: -3px;
    width: 23px;
    height: 4px;
    transform: rotate(-45deg);
    transform-origin: right top;
    box-shadow: inset 0 0 0 32px;
  }
  &:after{
    width: 4px;
    height: 4px;
    left: -2px;
    top: -4px;
    box-shadow: inset 0 0 0 32px, 16px 17px;
  }
  &[class*="-left"]{
    transform: rotate(45deg);
    &[class*="-up"]{
      transform: none;
    }
    &[class*="-down"]{
      transform: rotate(90deg);
    }
  }
  &[class*="-right"]{
    transform: rotate(-135deg);
    &[class*="-up"]{
      transform: rotate(-90deg);
    }
    &[class*="-down"]{
      transform: rotate(180deg);
    }
  }
  &[class*="-up"]{
    transform: rotate(-45deg);
  }
  &[class*="-down"]{
    transform: rotate(135deg);
  }
}

[class*="icono-arrow4"]{
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-top: 7px solid;
  border-right: 7px solid;
  margin: 15px;
  border-radius: 4px;
    margin: 13px 10px;
  &[class*="-left"]{
    transform: rotate(45deg);
    &[class*="-up"]{
      transform: none;
    }
    &[class*="-down"]{
      transform: rotate(90deg);
    }
  }
  &[class*="-right"]{
    transform: rotate(-135deg);
    &[class*="-up"]{
      transform: rotate(-90deg);
    }
    &[class*="-down"]{
      transform: rotate(180deg);
    }
  }
  &[class*="-up"]{
    transform: rotate(-45deg);
  }
  &[class*="-down"]{
    transform: rotate(135deg);
  }
}



.amex-lg, .amex-md, .amex-xs, .dinersclub-lg, .dinersclub-md, .dinersclub-xs, .discover-lg, .discover-md, .discover-xs, .jcb-lg, .jcb-md, .jcb-xs, .mastercard-lg, .mastercard-md, .mastercard-xs, .visa-lg, .visa-md, .visa-xs{
	// background-repeat: url(sprites.png) no-repeat;


      background-image: url('/assets/img/sprites.png');
  	background-repeat: no-repeat;
	display: inline-block;

    transform: translateY(6px);
    margin-right: 3px;

}


.amex-lg{
	background-position: 0 0;
	width: 128px;
	height: 84px;
}

.amex-md{
	background-position: -129px 0;
	width: 64px;
	height: 42px;
}

.amex-xs{
	background-position: -130px -44px ;
	width: 32px;
	height: 21px;
}

.dinersclub-lg{
	background-position: -195px 0;
	width: 128px;
	height: 84px;
}

.dinersclub-md{
	background-position: -325px 0;
	width: 64px;
	height: 42px;
}

.dinersclub-xs{
	background-position: -325px -43px ;
	width: 32px;
	height: 21px;
}

.discover-lg{
	background-position: 0 -87px ;
	width: 128px;
	height: 84px;
}

.discover-md{
	background-position: -130px -87px ;
	width: 64px;
	height: 42px;
}

.discover-xs{
	background-position: -130px -132px ;
	width: 32px;
	height: 21px;
}

.jcb-lg{
	background-position: -196px -89px ;
	width: 128px;
	height: 84px;
}

.jcb-md{
	background-position: -325px -90px ;
	width: 64px;
	height: 42px;
}

.jcb-xs{
	background-position: -326px -134px ;
	width: 32px;
	height: 21px;
}

.mastercard-lg{
	background-position: 0 -176px ;
	width: 128px;
	height: 84px;
}

.mastercard-md{
	background-position: -130px -177px ;
	width: 64px;
	height: 42px;
}

.mastercard-xs{
	background-position: -131px -221px ;
	width: 32px;
	height: 21px;
}

.visa-lg{
	background-position: -196px -177px ;
	width: 128px;
	height: 84px;
}

.visa-md{
	background-position: -326px -179px ;
	width: 64px;
	height: 42px;
}

.visa-xs{
	background-position: -327px -223px ;
	width: 32px;
	height: 21px;
}






@media only screen and (max-width: 992px) {
  .desktop{
    display:none;
  }
}



.block{
  display: block;
}

.vs__search, .vs__search:focus,
.v-select,
.leftDropdown > *,
.vs__selected-options{
  text-transform: lowercase !important;
}



#order-history{
  text-transform: lowercase;
  }


.topCurves{
      border-radius: 4px 4px 0 0 !important;
}


.bottomCurves{
      border-radius: 0 0 4px 4px !important;

      border-radius: 4px !important;
    border-top: 1px solid rgba(0,0,0,.1) !important;




}



.redXCircle{
    width: 30px;
    background:#f05d5b;
    border-radius: 15px;
    }


    .leftDropdown > *,
    .rightDropdown > *,
    .vs__search, .vs__search:focus{
    cursor: pointer !important;
    }

.italicize{
  font-weight: 400;
  font-style: italic;
}

.white-text{
  color: #ffffff;
}


.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.red-background{
      background: #EE5E68;
}



.imp-wrapper-match2 .imp-description{
  // background: orange !important;
}
.imp-wrapper-match2{
  display: none;
}
#menus{
.imp-wrapper-match2{
  display: block;
}
}




#nadiWhiteDesk,
#nadiDesk{
  display: block;
    // margin: 0 auto;
}


#nadiWhiteMob,
#nadiMob{
  display: none;
  height: 64px;
}

	.st0white{fill:#FFFFFF;}




@media only screen and (max-width: 768px) {

#nadiWhiteMob,
#nadiMob{
  display: block;
}

#nadiWhiteDesk,
#nadiDesk{
  display: none;
}
}



.nadi-button{

background-color: #fff;

border: 2px solid #F15D58;
border-radius: 5px;
color: #F15D58;
padding: 5px 20px;

&:hover{
  background-color: transparent;
}
&.dark{

}

&.ml20{
  margin-left: 10px;
}

}







.nadi-button2{

background-color: #F15D58;

border: 0;
border-radius: 5px;
color: #FFF;
padding: 1px 20px 3px;
font-size: 22px;
font-weight: 500;
&:hover{
  background-color: transparent;
  background-color: white;
  color: #F15D58;
}
&.dark{

}

&.ml20{
  margin-left: 20px;
}

}











.secPadMed{
  padding: 28px 0;
}



.mb20{
  margin-bottom: 20px;
}



.mb20mobile{

}

.m15Mob{
    margin: 0 15px;
    }



.noTopPad{
  padding-top: 0;
}


*{
  text-transform: lowercase;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
}

.pt180{
  padding-top: 180px;
}
.pt140{
  padding-top: 140px;
}


.pt100{
  padding-top: 100px;
}


.xhcd-fpimp-price{
  float: right;
}
</style>


