<template>
  <div id="upserveolo" class="shopRetail">

        <section>
<OrderConfirmationModal :orderConfirmationModal="orderConfirmationModal" :orderCMR="orderCMR" :retail="true" />
      <div v-if="modalOpen" class="order-modal">
        <div class="container online-menu order-modal-width">
          <div @click="closeModal()" class="close closeModal">
            <CloseModal />
          </div>
          <h4>{{currentItem.name}}</h4>
        </div>
        <div class="container modal-body order-modal-width order-modal-body">
          <div
            class="item-image-container"
            v-if="currentItem.images"
            :style="{'background-image': currentItem.images.online_ordering_menu.main}"
          >
            <img :src="currentItem.images.online_ordering_menu.main" />
          </div>
          <div class="item-image-container" v-else>
            <NadiIcon />
            </div>

          <p class="item-description-p">{{currentItem.description}}</p>
        <b>${{currentItem.price_cents.toFixed(2)/100}}</b>
                    <hr />
          <div v-if="currentItem.modifier_group_ids.length >= 1">
            <h4 class="text-left">add ons</h4>
            <div v-for="modifieritem in currentItem.modifier_group_ids" :key="modifieritem">
              <div v-for="modifier in modifierGroups" :key="modifier.name">
                <div v-if="modifieritem === modifier.id" class="displayInlineBlock">
        
                  <div v-if="modifier.name === 'Promotions'">{{modifier.name}}</div>
                  <div v-for="mod in modifierItems" :key="mod.id">

                    <div v-for="m in modifier.modifier_ids" :key="m">
                      <div v-if="m === mod.id" class="box">
                        <div class="box-inner">
                          {{mod.name}}
                          <br />
                          
                          <i class="small" v-if="mod.price==='0.0'">no extra charge</i>
                          <b v-else>{{mod.price}}</b>


                          <div v-if="modifier.name === 'Promotions'">
                            <div v-for="piece in upserveList" :key="piece.name">
                              <div v-if="piece.name === mod.name">
                                <img v-if="piece.images" :src="piece.images.online_ordering_menu.main" />
                              </div>
                            </div>
                          </div>
                          <!-- loop through and get image -->


                          <div class="mt10" v-if="modifier.name === 'Promotions'">

              
                           
                            <button @click="addToOrderDontCloseModal(mod)" :id="'add-' + mod.id">+</button>&nbsp;&nbsp;
                            <button @click="removeFromOrderDontCloseModal(mod)" :id="'remove-' + mod.id"
                              disabled>-</button>
                          </div>

                          <div v-else class="mt10">

                           

                            <button @click="addAddOn(mod,modifieritem)" :id="'add-' + mod.id">+</button>&nbsp;&nbsp;
                            <button
                              @click="removeAddOn(mod,modifieritem)"
                              :id="'remove-' + mod.id"
                              disabled
                            >-</button>
                          </div>



                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <!-- <hr /> -->

          <button v-if="currentItemQuanity > 1" @click="decrementCurrentItem()">-</button>
          <button v-else disabled>-</button>
          &nbsp;&nbsp;
          <span id="value">{{currentItemQuanity}}</span>&nbsp;&nbsp;
          <button @click="incrementCurrentItem()">+</button>
          <div class="add-to-order-footer">
            item total: <b>${{currentItem.price_cents.toFixed(2)/100 * currentItemQuanity }}</b>
           
          <div v-if="shippingOption">
         <button
            v-if="currentItem.shippable === true"
              class="float-right"
              @click="addToOrder(currentItem)"
            >add to cart</button>
              <button v-else class="float-right" disabled>not available for shipping</button>

</div>
<div v-else>
            <button
              class="float-right"
              @click="addToOrder(currentItem)"
            >add to cart</button>
</div>



          </div>
        </div>
      </div>



      <div class="container pt20 no-bot-pad">
        <div class="row no-lr-margin">
          <div class="col-md-12 grey-text">

                    
             <!-- <h1 class="text-center">{{title}}</h1> -->
             <template v-if="openDays">
         <span v-if="currentRestaurantHours !== ''">{{title}}, {{openDays[0] | capitalizeFirstLetter }}-{{openDays[openDays.length-1] | capitalizeFirstLetter}}, <span v-for="(time,index) in currentRestaurantHours.information.open_time_range" :key="'F'+ index"><span v-if="index === 1">,</span>&nbsp;&nbsp;{{time.time_slot.open | formatAmPmFirst}}-{{time.time_slot.close | formatAmPm}}</span></span>
         </template>
        </div>
      </div>
      </div>



     <div class="container pt20">
        <div class="row no-lr-margin">
          <div class="col-md-12 col-lg-8">
     

<div class="container online-menu">
<h4>online shop</h4>
</div>


         <template>


<!-- {{upserveListCategories}} -->

<div style="background: #f58e58;text-align:center;padding: 10px; margin-bottom: 10px;">
 <ul class="filters">
      <li @click="currentFilter = 'All'">All</li>
            <template v-for="item in upserveListCategories">
              <li @click="currentFilter = item">{{item}}</li>
            </template>
            </ul>
</div>


<div class="container">

<div class="row">
      <!-- <template v-for="item in upserveListCategories"> -->
            <!-- <template v-for="item in upserveSections">
              <template v-if="item.name === 'Spices'||item.name === 'Retail'"> -->

                <!-- <template> -->
                <!-- <template v-if="item.timing_mask === null"> -->

        

                <!-- <template v-for="piece in item.item_ids"> -->
   <!-- {{item}} -->
                    <template v-for="serve in upserveList">
      <!-- <template v-if="currentFilter === 'All' || currentFilter === serve.category"> -->

<!-- {{serve.category}} -->
                      <!-- <template v-if="serve.id === piece"> -->
                          <!-- {{serve}} -->
<!-- <div class="col-6 col-md-4 shop-item no-lr-pad" v-if="serve.visible"> -->
     <template v-if="serve.visible">
                <div class="col-6 col-md-6 shop-item no-lr-pad" v-if="currentFilter === 'All' || currentFilter === serve.category">
  <div class="itemContainer" @click="openModal(serve)">
                            <template v-if="serve.images">
                              <div
                                v-if="serve.images"
                                class="backgroundImageSquare"
                                v-bind:style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }"
                              ></div>
                            </template>
                            <template v-else>
     <div class="backgroundImageSquare">   
                              <div class="content">

                               <NadiIconSm />
                              </div>
                              
                              
                              </div>

                            </template>
        
                    <div class="description-panel">
                              <div>{{serve.name}}</div>
                         <!-- {{item.name}} -->
                              <!-- <div
                                v-if="serve.description"
                              >{{serve.description}}</div> -->
                              <!-- {{serve.shippable}} -->
                              <div class="food-price">
                                ${{ serve.price_cents.toFixed(2)/100}} <span class="pick-up-only" v-if="serve.shippable === false">pickup only. </span><span class="weight" v-if="serve.lbs > 0">{{serve.lbs}}lbs</span>&nbsp;<span class="weight" v-if="serve.oz > 0">{{serve.oz}}oz</span>
                              </div>

                          
                              </div>
                            </div>
                          </div>
                       </template>
                    </template>
                <!-- </template> -->
   
   
           

 <!-- </template> -->

     <!-- </template>

            </template> -->
</div></div>
  </template>

<br><br>

          </div>


          <div class="col-sm-4 drawer-on-mobile" :class="{expanded: toggledDrawer}">
            <div class="right-column">


<button v-if="toggledDrawer" @click="toggleDrawer()" class="toggle narrowed">
<span><CloseModalSm2 /></span>
</button>
<button v-else @click="toggleDrawer()" class="toggle">
<span><CartIcon /> {{cartItems}}</span>
</button>



<div class="container mb10"> 
<div class="filehalf" style="pointer-events: none;width: 100%;background-color: rgb(240, 93, 91);color: rgb(255, 255, 255);padding: 10px 0 6px 0;">
      <template v-if="valid">
          <h4>your order</h4>
  </template>
      <template v-else>
          <h4>your pre order</h4>
  </template>


  </div>
</div>

<div v-if="panelShow === 'customerInfo'" class="container mb5"> 
<button @click="panelShowChoose('yourOrder')" class="filehalf" style="width: 100%;font-size: 24px;padding-top: 3px;margin-top:6px;">edit order</button>
</div>



<div v-if="panelShow === 'customerInfo'" class="container text-center" style="margin-bottom:0px;">
 
              <template v-if="valid">


                
<!-- <div v-if="shippingOption === false" class="mb5 button-container"> -->
  <div class="mb5 button-container">
    <div class="button-third">
  <button @click="preOrderFalse()" :class="{ selected: this.currentOrder.preorder === false && this.currentOrder.ship === false }">pickup now</button></div> 
   
   

   
   <div class="button-third">



 <button @click="preOrderToggleTrue()" :class="{ selected: preOrderToggleState === true }">schedule</button> 

    </div> 
   <div class="button-third">
    <button @click="shipOption(true)" :class="{ selected: shippingOption && this.currentOrder.ship === true }">ship</button> 
    </div> 
</div>
</template>
<template v-else>
<div class="text-left sm-text mt10 mb10"> 
Come and pick up your items during store hours or get them shipped to your door via usps!
</div> 
  <div class="mb5 button-container">
    <div class="button-third">
      <!-- 1 -->
      <button v-if="valid" class="disabled" disabled>get it now</button>
      <button v-else class="disabled" disabled>get it now</button>
      </div>
          <div class="button-third">
      <!-- 2 -->
      <button @click="preOrderToggleTrue()" :class="{ selected: preOrderToggleState === true }">schedule</button> 
      </div>
    <div class="button-third">
    <button @click="shipOption(true)" :class="{ selected: shippingOption }">ship</button> 


      </div>
      </div>

  <div class="mb5 button-container" style="display:none;">
    <div class="button-third">
    <button class="disabled" disabled>get it now</button></div> 
   <div class="button-third">
<button @click="preOrderToggleTrue()" :class="{ selected: preOrderToggleState === true }">schedule</button> 





    </div> 
   <div class="button-third">
    <button @click="shipOption(true)" :class="{ selected: shippingOption }">ship</button> 
    </div> 
  </div> 
</template>
<!-- time select -->
<!-- time select -->
     <template v-if="panelShow === 'customerInfo'">
        <template v-if="valid">
          <template v-if="preOrderToggleState">
            <template v-if="shippingOption === false">
            <div style="margin-top:20px;">
              <v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
            </div>
            <div style="margin-top:20px;" v-if="selectedDate !== null">
              <v-select v-if="rendered" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
            </div>
            </template>
          </template>
        </template>
        <template v-else>
          <template v-if="currentOrder.charges.items.length > 0">
            <template v-if="shippingOption === false">
            <div style="margin-top:20px;">
              <v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
            </div>
            <div style="margin-top:20px;" v-if="selectedDate !== null">
              <v-select v-if="rendered" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
            </div>
            </template>
          </template>
        </template>
  </template>
<!-- time select -->
<!-- time select -->
</div>
<div v-if="panelShow === 'customerInfo'">
  <div class="container">
      <hr />
  </div>
            <div v-if="currentOrder" class="container  mt10">
                    <div v-if="shippingOption">
                            <h4 v-if="currentOrder.fulfillment_info.type === 'delivery'" class="address-info text-left mt10">shipping address</h4>
                            <div v-if="currentOrder.fulfillment_info.type === 'delivery'">
                              <div class="small-message" v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 === ''">please enter a valid shipping address</div>
                            </div>
                            <div v-if="currentOrder.fulfillment_info.type === 'delivery'" class="delivery-box mt10">
                                        <div class="updateAddress">
                                          <button
                                            v-if="currentOrder.fulfillment_info.type === 'delivery'"
                                            @click="refreshGoogle()"
                                          >update address</button>
                                        </div>
                                        <div class="googleValidate">
                                          <GoogleValidate
                                            class="pointer-all"
                                            :key="renderKey"
                                            v-if="currentOrder.fulfillment_info.type === 'delivery'"
                                          />
                                        </div>
                            </div>
                    </div>

<orderForm :title="title" :user="user" :currentOrder="currentOrder" :checked="checked" :email="email" :emailAddress="emailAddress" :shippingOption="shippingOption" />






</div>
      </div>



<div class="container mt10">



              <ul class="order-sidebar" v-if="panelShow === 'yourOrder'">
                <li v-for="order in currentOrder.charges.items" :key="order.cartId" class="smblk">
            


                  <button class="removeClose" @click="removeFromOrder(order)">
                        <CloseModalRedSm />
                     
                  </button>
<div class="mt8">

                  <b>{{order.quantity}}</b> {{order.name}}&nbsp;&nbsp;&nbsp;&nbsp;
                  <b>${{order.price_cents.toFixed(2)/100 * order.quantity}}</b>


<div class="weight">{{order.lbs}}lbs, {{order.oz}}oz </div> 
<div v-if="!order.shippable">pickup only</div>


                  <div v-if="order.instructions !== ''" class="order-instructions">
             
                    <i>{{order.instructions}}</i>
            
                  </div>
                  <div v-else>
          
                  </div>
                  </div>
                </li>
              </ul>

<!-- start panel -->
<!-- start panel -->
<!-- start panel -->
<!-- <div v-if="shippingOption"> 
<button v-if="validPostal(currentOrder.billing.billing_postal_code)" @click="shippingPrice('98122', String(currentOrder.billing.billing_postal_code),String(totalWeight),'0')">
calculate shipping
</button>
</div> -->



<template v-if="currentOrder.charges.items.length > 0">
              <!-- <div class="mt10" v-if="total > 0"> -->


<div class="small-message" v-if="weightShipping.lbs > 70">
  package cannot be more than 70lbs
</div>

              <div class="mt10">
                &nbsp;
                <currency-input class="custom-tip-button" currency="USD" v-if="customTipVisible === true" v-model="currentAmountToAddCustom" />
              </div>
             <span v-if="shippingOption"> weight: {{formattedWeight}}lbs</span>
              <br v-if="shippingOption" />
              <!-- <hr />   -->
              <span v-if="panelShow === 'customerInfo'">subtotal: ${{currentOrder.charges.preTotal | showToFixed}}</span>
              <span v-else><b>subtotal: ${{currentOrder.charges.preTotal | showToFixed}}</b></span>
              <br />
             <span v-if="panelShow === 'customerInfo'"> tax: ${{currentOrder.charges.taxes | showToFixed}}</span>
             <div v-if="shippingOption && shippingAmount > 0 && panelShow === 'customerInfo'">   
              usps priority shipping: ${{shippingAmount}}
               </div>  

             <hr v-if="panelShow === 'customerInfo'" />
              <!-- ${{currentOrder.charges.total | showToFixed }} -->






              <b v-if="panelShow === 'customerInfo'">order total: ${{currentOrder.charges.total + currentOrder.charges.shipping*100 | showToFixed}}</b>
<br />
</template>
<template v-else>
<div v-if="panelShow === 'yourOrder'" class="text-center cart-empty-class" style="margin-top: 10px;">

cart empty

</div>

</template>
<!-- start panel -->
<!-- start panel -->
<!-- start panel -->
<!-- </div> -->
<template v-if="panelShow === 'yourOrder'">
 <button @click="panelShowChoose('customerInfo')" class="mt10 fw filehalf deactivated" disabled="disabled" style="width:100%;margin-top: 15px;pointer-events:none;display:none;" v-if="currentOrder.charges.items.length === 0">guest info</button>
 <button style="width: 100%;font-size: 24px;padding-top: 3px;width:100%;" @click="panelShow = 'customerInfo'" class="mt10 fw filehalf" v-else>checkout</button>
</template>
     
     


     



     
     
     
              <template v-if="panelShow === 'customerInfo'">


            <template v-if="giftCardPanel ===  false">
             


                     <template v-if="giftCardPanel ===  false">




         <template v-if="shippingOption && shippingAmount > 0">
<ErrorMessages :currentOrder="currentOrder" :selectedTime="selectedTime" />


<!-- shipping option -->
<!-- {{currentOrder.fulfillment_info.customer.email}} -->
<!-- dsdd -->
       <button class="mt10 fw" style="margin-top:20px;"
                v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== '' && weightShipping.lbs < 70 && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" 
                id="cip-pay-btn"
                @click="cippaybutton"
              >Credit/Debit Pay</button>
              <button class="mt10 fw" style="margin-top:20px;"
              v-else disabled>Credit/Debit Pay</button>
     </template>
     <template v-else-if="currentOrder.preorder === true">
<!-- preorder true -->

<!-- {{currentOrder.fulfillment_info.customer.email}} -->


<ErrorMessages :currentOrder="currentOrder" :selectedTime="selectedTime" />

<!-- dsd --->
<button v-if="selectedTime !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" 
                class="mt10 fw" style="margin-top:20px;" id="cip-pay-btn" 
                @click="cippaybutton"
              >Credit/Debit Pay</button>
              <button class="mt10 fw" style="margin-top:20px;"
              v-else disabled>Credit/Debit Pay</button>
          </template>
     <template v-else>
<!-- else (get it now) true -->
<ErrorMessages :currentOrder="currentOrder" :selectedTime="selectedTime" />
  <button v-if="currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" class="mt10 fw" style="margin-top:20px;" id="cip-pay-btn" 
                @click="cippaybutton"
              >Credit/Debit Pay</button>
              <button class="mt10 fw" style="margin-top:20px;"
              v-else disabled>Credit/Debit Pay</button>

          </template>
        </template>       
        </template>

<template v-if="giftCardPanel ===  false">

     <template v-if="currentOrder.preorder === true">
      <button v-if="selectedTime !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" 
      @click="showGiftcard()" id="cip-pay-btn" class="fw" style="margin-bottom: 20px;margin-top: 15px;">Use Giftcard</button>
      <button 
      v-else id="cip-pay-btn" class="fw" style="margin-bottom: 20px;margin-top: 15px;" disabled>Use Giftcard</button>
          </template>
     <template v-else>

  <button v-if="currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''"
      @click="showGiftcard()" id="cip-pay-btn" class="fw" style="margin-bottom: 20px;margin-top: 15px;">Use Giftcard</button>
      <button 
      v-else id="cip-pay-btn" class="fw" style="margin-bottom: 20px;margin-top: 15px;" disabled>Use Giftcard</button>
      </template>
</template>



<template v-if="giftCardPanel ===  true">
<template v-if="user.user && user.user.email">
<!-- <template v-if="$store.state.loggedIn"> -->

   <br>
    <h4 v-if="showInsufficientFunds === true" class="error" style="text-align:left">insufficient funds</h4>
  <input maxlength="16" @change="validator(cardNumberInput)" v-model="cardNumberInput" style="margin-top: 20px;" class="giftcardinput" placeholder="enter your giftcard number">
<div v-if="validNumber === false" class="small-message">invalid giftcard number</div>
<!-- <br> -->
              <button class="mt10 fw" style="margin-bottom: 20px;margin-top:10px;"
                v-if="validNumber && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== ''"
                id="cip-pay-btn"
                @click="useGiftCardBalance()"
              >Pay With Giftcard</button>
              <button class="mt10 fw" style="margin-bottom: 20px;margin-top:10px;" 
               v-else disabled>Pay With Giftcard</button>
</template>
  <template v-else>
  <!-- <input v-model="cardNumberInput" style="margin-top: 20px;" class="giftcardinput" placeholder="enter your giftcard number"> -->
<br>

    <h4 v-if="showInsufficientFunds === true" class="error" style="text-align:left">insufficient funds</h4>
  <input maxlength="16" @change="validator(cardNumberInput)" v-model="cardNumberInput" style="margin-top: 20px;" class="giftcardinput" placeholder="enter your giftcard number">
<div v-if="validNumber === false" class="small-message">invalid giftcard number</div>

                <button class="mt0 fw" style="margin-top:10px;margin-bottom: 20px;" 
                v-if="validNumber && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== ''"
                id="cip-pay-btn"
                @click="useGiftCardBalance()"
              >Pay With Giftcard</button>
              <button class="mt0 fw" style="margin-bottom: 20px;margin-top:10px;" v-else disabled>Pay With Giftcard</button>
    </template>
</template>
<template v-if="giftCardPanel ===  true">
<br>
<u style="cursor:pointer;color:#f05d5b;" @click="hideGiftcard()">
  <span style="color:#F1765B;">  
  use debit/credit instead
  </span>
  </u>
</template>







              </template>
              <br />
              <br />
              <br />
      </div>
   

                  </div>
          </div>
   
        </div>
</div>
    </section>



<pre style="display: none;">{{$store.state.storeCurrentOrderUpdateRetail}}</pre>
  </div>
</template>

<script>

import vSelect from "vue-select";
import carousel from "vue-owl-carousel";
import GoogleValidate from "@/components/GoogleValidate";
import CloseModal from "@/components/svgIcons/CloseModal";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";
import CloseModalSm from "@/components/svgIcons/CloseModalSm";



import OrderConfirmationModal from "@/components/OrderConfirmationModal"
import OnlineMenuCarousel from "@/components/OnlineMenuCarousel";

import CloseModalRedSm from "@/components/svgIcons/CloseModalRedSm";

import VueAspectRatio from "vue-aspect-ratio";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";

import NadiIcon from "@/components/svgIcons/NadiIcon";
import NadiIconSm from "@/components/svgIcons/NadiIconSm";


import moment from 'moment'
import tz from 'moment-timezone'

import swal from "vue-sweetalert2";



import ErrorMessages from "@/components/subs/ErrorMessages";
import vSelects from "@/components/subs/vSelects";
import orderForm from "@/components/subs/orderForm";

import CartIcon from "@/components/svgIcons/CartIcon";
import CloseModalSm2 from "@/components/svgIcons/CloseModalSm2";

export default {
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'retail',
      // all titles will be injected into this template
      titleTemplate: '%s | nadi mama'
  },
  name: "UpserveOloRetail",
  props: ["data","emailAddress","oloEndpoint","menuEndpoint","title"],
  components: {
    orderForm,
    vSelects,
    ErrorMessages,
    OrderConfirmationModal,
    OnlineMenuCarousel,
    CloseModal,
    CloseModalRed,
    CloseModalSm,
    CloseModalRedSm,
    GoogleValidate,
    carousel,
    VueAspectRatio,
    Next,
    Prev,
    NadiIcon,
    NadiIconSm,
    CartIcon,
    CloseModalSm2
  },
  computed: {	
        cartItems(){

          return this.$store.state.storeCurrentOrderUpdateRetail.charges.items.length;


    },
    upserveListCategories(){
if(this.upserveList){
      const catArray = this.upserveList.map(function(x){
        return x.category
      })

      const uniqueSet = new Set(catArray)

        return [...uniqueSet]
    }
    },

    weightShipping(){
      let weight = {
        lbs:0,
        oz:0
      }

      for(var item in this.currentOrder.charges.items){
          weight.lbs = Number(weight.lbs) + Number(this.currentOrder.charges.items[item].lbs)
          weight.oz = Number(weight.oz) + Number(this.currentOrder.charges.items[item].oz)
      }

      this.currentOrder.fulfillment_info.weight = weight
      // let storeCurrentOrder = this.currentOrder;	
      // this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });

      return weight
    },
totalWeight(){
      let cost = 0
      for(var item in this.currentOrder.charges.items){
        cost = cost + this.currentOrder.charges.items[item].price
      }

      return cost
    },
    orderTotalWithShipping(){

      let shippingAmountToAdd = Number(this.shippingAmount) * 100
      return Number(this.total) + Number(this.currentTax) + Number(this.tip) + Number(this.currentAmountToAdd) + shippingAmountToAdd

    },  
    orderTotal(){

      let shippingAmountToAdd = Number(this.shippingAmount) * 100
      return Number(this.total) + Number(this.currentTax) + Number(this.tip) + Number(this.currentAmountToAdd) + shippingAmountToAdd

    },  
    googleAddress() {	
      return this.$store.state.googleAddress;	
    },	
    currentTax(){

        let currentTax = Number(this.total) * Number(this.upserveTaxRate);
console.log('currentTax')
console.log(currentTax)
      return Math.round(currentTax)
    }
  },	
  watch: {
  shippingAmount:{
    handler(val){
      this.currentOrder.charges.shipping =  this.shippingAmount
    }
  },
      cardNumberInput:{
        handler(val){
             if(this.cardNumberInput){
        if(this.cardNumberInput.length === 16){
          // console.log('is 16')
          this.lookupBalance()
          // this.validNumber = true
        }else{
          // console.log('not 16')
        this.validNumber = false
        }
             }
        }
      },
    user:{
handler(val){

console.log('updateing useing')



if(this.user.user){
this.currentOrder.fulfillment_info.customer.email = this.user.user.email
}else{
 this.currentOrder.fulfillment_info.customer.email = this.currentOrder.fulfillment_info.customer.email 
}


console.log('ffe ' + this.currentOrder.fulfillment_info.customer.email)
console.log('ue ' + this.user.user.email)


let storeCurrentOrderUpdateRetail = this.currentOrder;
this.$store.commit("upserveOrderCurrentOrderUpdateRetail", { storeCurrentOrderUpdateRetail });	

console.log('do this')

          }, deep: true
    },
customAmountAddition: {
      handler(val){
        // if(this.currentOrder.charges){
this.currentOrder.charges.tip.amountOptions[4] = this.customAmountAddition
this.currentOrder.charges.tip.amount = this.customAmountAddition
      // }

      },
        deep: true
},  


 currentOrder: {
     handler(val){
      let preTotal = 0


      let curOr = this.currentOrder
      curOr.restaurant = this.title
  //  if(this.currentOrder.charges){


if(this.user){
  // console.log('this.user')
// console.log(this.user)
  // console.log(this.user.user.email)
}


if(this.user.user){
this.currentOrder.fulfillment_info.customer.email = this.user.user.email
}else{
 this.currentOrder.fulfillment_info.customer.email = this.currentOrder.fulfillment_info.customer.email 
}

      for(var item of curOr.charges.items){
          let itemAddition = item.quantity * item.price
          preTotal = preTotal + itemAddition
      }

if(curOr.ship === true){
this.shippingOption = true
curOr.getNow = false
curOr.schedule = false

}
if(curOr.getNow === true){
this.shippingOption = false
curOr.ship = false
curOr.schedule = false
}

if(curOr.schedule === true){
this.shippingOption = false
curOr.getNow = false
curOr.ship = false
}




      curOr.charges.preTotal = preTotal
      let currentTax = Number(preTotal) * Number(this.upserveTaxRate)
      curOr.charges.taxes = Math.round(currentTax)
      
      curOr.charges.tip.amountOptions[0] = curOr.charges.preTotal * 0
      curOr.charges.tip.amountOptions[1] = curOr.charges.preTotal * 0.18
      curOr.charges.tip.amountOptions[2] = curOr.charges.preTotal * 0.22
      curOr.charges.tip.amountOptions[3] = curOr.charges.preTotal * 0.25
      curOr.charges.tip.amountOptions[4] = this.customAmountAddition * 100
    
      curOr.charges.tip.amount = curOr.charges.tip.amountOptions[curOr.tipSelected]

      // console.log(curOr.charges.shipping * 100)

let shipToAdd = curOr.charges.shipping * 100




  
if(this.shippingOption === true){
curOr.charges.total = curOr.charges.preTotal + curOr.charges.taxes + curOr.charges.tip.amount
// curOr.charges.total = curOr.charges.preTotal + curOr.charges.taxes + curOr.charges.tip.amount + shipToAdd
curOr.payments.payments[0].amount = curOr.charges.total
}else{
  curOr.charges.total = curOr.charges.preTotal + curOr.charges.taxes + curOr.charges.tip.amount
  curOr.payments.payments[0].amount = curOr.charges.total
}



    curOr.currentAmountToAddCustom = this.customAmountAddition * 100
//  }
// console.log('calculate shipping')
// console.log(this.currentOrder)
// console.log(String(this.weightShipping.lbs))
// console.log(String(this.weightShipping.oz))
      if(this.shippingOption === true && this.validPostal(this.currentOrder.billing.billing_postal_code)){
      this.shippingPrice(this.currentOrder,String(this.weightShipping.lbs),String(this.weightShipping.oz))

      }

        this.weightShippingAmount()

        let storeCurrentOrderUpdateRetail = curOr;
        this.$store.commit("upserveOrderCurrentOrderUpdateRetail", { storeCurrentOrderUpdateRetail });	



    },
     deep: true
  },

openTimesUpdated(){
  this.dropDown();
},
openTimes(){
  this.openTimesUpdated = this.openTimes
},
selectedDate(){

      this.currentOrder.scheduled_time = null


      this.selectedTime = null

},
    selectedTime(){
this.currentOrder.scheduled_time = this.selectedTime.time
    },
    email(){

      if(this.email){
        this.currentOrder.fulfillment_info.customer.email = this.email.toLowerCase();
      }
    },
    checked(){	
      if(this.checked){	
      this.currentOrder.billing.billing_name = this.currentOrder.fulfillment_info.customer.first_name	
      	
      this.currentOrder.billing.billing_address = this.currentOrder.fulfillment_info.delivery_info.address.address_line1 + ' ' +  this.currentOrder.fulfillment_info.delivery_info.address.address_line2	
      this.currentOrder.billing.billing_postal_code = this.currentOrder.fulfillment_info.delivery_info.address.zip_code	
      var input = document.getElementById("name-billing");	
      	
      input.focus();	
      }else{	
        this.currentOrder.billing.billing_name = ''	
        this.currentOrder.billing.billing_address = ''	
        this.currentOrder.billing.billing_postal_code = ''	
      }	


console.log(this.checked)
this.shippingPrice(this.currentOrder,String(this.weightShipping.lbs),String(this.weightShipping.oz))




    },	
    googleAddress(newAddress, oldAddress) {	
      this.googleAddressView = newAddress;	
      let googleAddressObject = {	
        streetNumber: "",	
        route: "",	
        locality: "",	
        state: "",	
        zip: "",	
      };	
if(newAddress){	
    let routeArray = newAddress.address_components.filter(	
    (obj) => {	
    return obj.types[0] === "route";	
    }	
    )
    if(routeArray.length > 0){
    googleAddressObject.route = routeArray[0].long_name;	
    }
}	
if(newAddress){	
    let streetArray = newAddress.address_components.filter(	
    (obj) => {	
    return obj.types[0] === "street_number";	
    }	
    )
    if(streetArray.length > 0){
    googleAddressObject.streetNumber = streetArray[0].long_name;	
    }    
}	
if(newAddress){	

  let localityArray = newAddress.address_components.filter(	
        (obj) => {	
          return obj.types[0] === "locality";	
        }	
      )

      if(localityArray.length > 0){
      googleAddressObject.locality = localityArray[0].long_name;
      
      }
}	
if(newAddress){	

 let stateArray = newAddress.address_components.filter(	
        (obj) => {	
          return obj.types[0] === "administrative_area_level_1";	
        }	
      )

    if(stateArray.length > 0){
      googleAddressObject.state = stateArray[0].long_name;
    }

}	
if(newAddress){	

let zipArray = newAddress.address_components.filter((obj) => {	
        return obj.types[0] === "postal_code";	
      })
    if(zipArray.length > 0){
      googleAddressObject.zip = zipArray[0].long_name;
    }

}	
      this.googleAddressObject = googleAddressObject;	
      this.currentOrder.fulfillment_info.delivery_info.address.city =	
        googleAddressObject.locality;	
      this.currentOrder.fulfillment_info.delivery_info.address.state =	
        googleAddressObject.state;	
      this.currentOrder.fulfillment_info.delivery_info.address.zip_code =	
        googleAddressObject.zip;	
      this.currentOrder.fulfillment_info.delivery_info.address.address_line1 =	
        googleAddressObject.streetNumber + " " + googleAddressObject.route;	

console.log(this.currentOrder)
this.shippingPrice(this.currentOrder,String(this.weightShipping.lbs),String(this.weightShipping.oz));
// let storeCurrentOrder = this.currentOrder;	
// this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });	

    },	
	    },
  data() {
    return {
      getItNow: false,
      formattedWeight: 0,
      validNumber: false,
      currentRestaurantHours: '',
      nextOpen: '',
      currentRestaurantDays: [],
      user: {},
      weight: 0,
      shippingAmount: 0,
      shippingOption: false,
      nextOpen: '',
      preOrderToggleState: false,
      currentFilter: 'All',
      currentRestaurantDays: [],
      rendered: false,
      timeslotsCreated: [],
      openTimesUpdated: [],
      openTimes: [],
      openDays: [],
      futureDay:null,
      futureTime:null,
      valid: false,
      selectedDate: null,
      selectedTime: null,
      dropDownDays: [],
      email: '',
      giftCardPanel: false,
      preferredGiftCard: '',
      showInsufficientFunds: false,
      amountUse: "",
      cardNumberInput: "",
      panelShow: 'yourOrder',
      checked: false,
      currentAmountToAddCustom: 0,
      custom: false,
      errors: [],
      attention: true,
      tipSelected: 0,
      toggledDrawer: false,
      currentAmountToAdd: 0,
      customTipVisible: false,
      tip: 0,
      googleAddressObject: {},
      googleAddressView: this.$store.state.googleAddress,
      renderKey: 0,
      googVPresent: true,
      orderConfirmationModal: false,
      orderCMR: "",
      total: 0,
      modifiers: [],
      currentItemModifierArray: [],
      modifierItems: [],
      modifierGroups: [],
      upserveTaxRate: "0.101",
      modalOpen: false,
      currentItem: null,
      currentItemQuanity: 1,
      cartTotal: 0,
      textdescription: "",
      blockedBody: this.data,
      upserve: null,
      upserveList: null,
      upserveSections: null,
      upserveCategories: [],
      currentlyFiltered: [],
      currentOrder: { 
        getNow: false,
        schedule: false,
        ship: false,
        tipSelected: 0,
        currentAmountToAddCustom: 0,
        sms: false,
        restaurant: this.title,
        billing:{
          billing_name: '',
          billing_address: '',
          billing_postal_code: ''
        },
        id:
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29),
        // items: [],
        preorder: false,
        scheduled_time: null,
        time_placed: null,
        confirmation_code:
          "mamnoon-" + Math.random().toString(36).substr(2, 29),
        charges: {
          shipping: 0,
          total: 0,
          preTotal: 0,
          fees: 0,
          taxes: 0,
          tip: {
            amount: 0,
            payment_type: "Generic Online Ordering Integrated",
          },
          items: [],
        },
        fulfillment_info: {
          weight: 0,
          type: "pickup",
          estimated_fulfillment_time: null,
          customer: {
            email: this.emailAddress,
            phone: "",
            first_name: "",
          },
          instructions: "",
          no_tableware: false,
          delivery_info: {
            is_managed_delivery: false,
            address: {
              city: "",
              state: "",
              zip_code: "",
              address_line1: "",
              address_line2: "",
            },
          },
        },
        payments: {
          payments: [
            {
              payment_type: "Generic Online Ordering Integrated",
              amount: null,
            },
          ],
        },
      },
    };
  },
  filters: {
    capitalizeFirstLetter(string) {
  if(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
},
formatAmPm(value) {
  if (value) {
return moment(value, 'HH:mm:ss').format('h:mm:ssa').replace(':00','');
  }
},
formatAmPmFirst(value) {
  if (value) {
return moment(value, 'HH:mm:ss').format('h:mm:ss').replace(':00','');
  }
},
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
showToFixed: function (value) {
    let decvalue = value/100

    return decvalue.toFixed(2)
}
  },
  methods: {
    emptyCart(){

      this.currentOrder.charges.items = []
      
      if(this.$store.state.loggedIn){

        this.currentOrder.fulfillment_info.customer.email = this.user.user.email

      }


        let storeCurrentOrderUpdateRetail = this.currentOrder
        this.$store.commit("upserveOrderCurrentOrderUpdateRetail", { storeCurrentOrderUpdateRetail });	


    },
        resetCart(){
this.currentOrder = this.$store.state.storeCurrentOrderUpdateStreet

this.currentOrder = this.$store.state.storeCurrentOrderUpdateMamnoon

this.currentOrder = this.$store.state.storeCurrentOrderUpdateMbar




    },
        checkForm: function (e) {
      this.errors = [];
      if (!this.currentOrder.fulfillment_info.customer.first_name) {
        this.errors.push("Name required.");
         


        this.$swal({ 
           text: 'Name required.'
          });


      }

      if (!this.currentOrder.fulfillment_info.customer.phone) {
        this.errors.push("Phone required.");
        this.$swal({ 
           text: 'Phone required.'
          });

      }
      
      if (!this.currentOrder.fulfillment_info.customer.email) {
        this.errors.push('Email required.');
       

      this.$swal({ 
           text: 'Valid email required.'
          });

      } else if (!this.validEmail(this.currentOrder.fulfillment_info.customer.email)) {
        this.errors.push('Valid email required.');
         this.$swal({ 
           text: 'Valid email required.'
          });

      }

      if (!this.currentOrder.billing.billing_postal_code) {
        this.errors.push('invalid postal code');
      this.$swal({ 
           text: 'invalid postal code'
          });


      } else if (!this.validPostal(this.currentOrder.billing.billing_postal_code)) {
         this.errors.push('invalid postal code');
      this.$swal({ 
           text: 'invalid postal code'
          });
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

   validPostal: function (postal_code) {
      var re = /^[0-9]{5}(?:-[0-9]{4})?$/;
      return re.test(postal_code);
    },



    
  weightShippingAmount(){

let ounces = this.weightShipping.oz
let convertedToPounds = ounces/16
let formatWeight = this.weightShipping.lbs + convertedToPounds
this.formattedWeight = formatWeight.toFixed(2)

},
validator(input){
console.log(input)
},
removeNonShippables(){                                      

for (var value of this.currentOrder.charges.items) {
// console.log(value.shippable)

if(value.shippable === false){


        this.$swal({ 
           text: value.name + ' is not available for shipping and has been removed from your order.'
          });

  this.removeFromOrder(value)
}


}



      },


  async shippingPrice(order_info,lb,oz){

// console.log(JSON.stringify(order_info))


    let responseAcf = await this.$http.get(`/shippingcalculation`, { params: { orderInfo: order_info, Pounds: lb, Ounces: oz } })
    // console.log(responseAcf.data[0].Rate[0])
  // console.log(responseAcf.data.rates.filter(word => word.attributes.includes('CHEAPEST')));
// console.log(responseAcf)
let cheapest = responseAcf.data.rates.filter(word => word.servicelevel.token === "usps_priority")


// console.log(cheapest)

console.log(cheapest)

    this.shippingAmount = cheapest[0].amount
    this.currentOrder.charges.shipping = cheapest[0].amount




},
shipOption(c){

console.log('clicked ship option')
console.log(c)
  this.shippingOption = c




  c === true ? this.currentOrder.fulfillment_info.type = 'delivery' : this.currentOrder.fulfillment_info.type = 'pickup'



if(c === true){
 this.currentOrder.preorder = false 

this.preOrderToggleState = false
//  this.getItNow = false
this.shippingOption = true
console.log(c)
 this.currentOrder.fulfillment_info.delivery_info.address.address_line2 = ''
 

  console.log('remove non shippables')
  this.removeNonShippables()

}


if(c === false){
 this.currentOrder.preorder = true
 this.shippingOption = false


this.preOrderToggleState = true
//  this.getItNow = false

  this.shippingAmount = 0
  this.currentOrder.charges.shipping = 0

}



console.log(this.shippingOption)


this.currentOrder.ship = c



  },
  preOrderTrue(){
  this.currentOrder.preorder = true
  this.panelShow = 'customerInfo'
  },
  preOrderFalse(){
  this.currentOrder.preorder = false
  this.panelShow = 'customerInfo'

  this.currentOrder.ship = false


this.preOrderToggleState = false
this.shippingOption = false


  },
 preOrderToggleTrue(){

  this.currentOrder.preorder = true
  this.panelShow = 'customerInfo'
  this.preOrderToggleState = true
  // this.shippingOption = false


  this.shipOption(false)

},
  async getHours(){

    let self = this
   
    let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)
    let AcfBlock = responseAcf
    this.hours = AcfBlock.data.acf.content_fields.find(o => o.acf_fc_layout === 'timeranges');   

    this.currentRestaurantHours = this.hours.restaurant_hours[0].restaurant_name.find(o => o.name === this.title.toLowerCase());
    this.openDays = this.currentRestaurantHours.information.days_of_week
    let curRest = this.currentRestaurantHours.information.open_time_range



    for(let i = 0; i < curRest.length; i++){
          this.showTimeInterVals(curRest[i].time_slot.open.split(':')[0],curRest[i].time_slot.close.split(':')[0])
    }

  let today = new Date()
  let todayDay = today.getDay()
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let subdays = days.map(function(x){
    return x.substring(0,3).toLowerCase()
  })

if(this.openDays.includes(subdays[todayDay].substring(0,3).toLowerCase())){
    for(let i = 0; i < curRest.length; i++){
      if(self.returnAvailableNow(curRest[i].time_slot.open,curRest[i].time_slot.close)){
      // console.log('it returned true so break')
      this.valid = true
      // this.getItNow = true
      this.preOrderToggleState = false
       this.currentOrder.preorder = false
      break
    }else{
     this.currentOrder.preorder = true


     if(this.currentOrder.ship === false){
     this.preOrderToggleState = true
     }else{
            this.preOrderToggleState = false
     }

      // this.getItNow = false
      }
    }
  }else{
      this.currentOrder.preorder = true
}
},
currentlyavailable(startTime,endTime,rules,futureDay,futureTime){

    let weekday = ['mon','tue','wed','thu','fri','sat','sun']

            if(!futureDay && !futureTime){

                let currentDate = new Date();   

                let startDate = new Date(currentDate.getTime());
                // console.log(startDate)
                startDate.setHours(startTime.split(":")[0]);
                startDate.setMinutes(startTime.split(":")[1]);

                let endDate = new Date(currentDate.getTime());
                endDate.setHours(endTime.split(":")[0]);
                endDate.setMinutes(endTime.split(":")[1]);

                if(rules.includes(weekday[currentDate.getDay()])){
                    return startDate < currentDate && endDate > currentDate
                }
            }
          if(futureDay){
          if(!futureTime){
              if(rules.includes(futureDay.dayLabel.substring(0,3).toLowerCase())){
                  return true
              }
          }else{
              let currentDate = Date.parse(futureTime.time) 
              let startDate2 = new Date(currentDate);
              let startDate3 = moment(startDate2)._i
              // console.log(startDate3)
              startDate3.setHours(startTime.split(":")[0]);
              startDate3.setMinutes(startTime.split(":")[1]);
              let endDate2 = new Date(currentDate);
              let endDate3 = moment(endDate2)._i
              endDate3.setHours(endTime.split(":")[0]);
              endDate3.setMinutes(endTime.split(":")[1]);
              return startDate3 < currentDate && endDate3 > currentDate
          }
          }
},
          returnAvailableNow(startTime,endTime){

              if(startTime && endTime){

              let currentDate = new Date()   

              let startDate = new Date(currentDate.getTime());
              startDate.setHours(startTime.split(":")[0]);
              startDate.setMinutes(startTime.split(":")[1]);
              startDate.setSeconds(startTime.split(":")[2]);

              let endDate = new Date(currentDate.getTime());
              endDate.setHours(endTime.split(":")[0]);
              endDate.setMinutes(endTime.split(":")[1]);
              endDate.setSeconds(endTime.split(":")[2]);

              let tF = startDate < currentDate && endDate > currentDate
              // this.valid = startDate < currentDate && endDate > currentDate
              // console.log(tF)
              return tF          
      }
    },
hideGiftcard(){
  this.giftCardPanel = false
},
showGiftcard(){
  this.giftCardPanel = true
  this.lookupBalance()
},
            getUser() {

            if(this.emailAddress){

              let self = this
              this.$http
              .get("/user/email/" + this.emailAddress)
              .then(function (response) {
              let userInfo = response.data;
              self.user = userInfo
              self.cardNumberInput = userInfo.user.giftcard
              self.preferredGiftCard = userInfo.user.giftcard


              self.currentOrder.billing.billing_name = userInfo.user.billingAddress.name
              self.currentOrder.billing.billing_address = userInfo.user.billingAddress.addressLine1 + ' ' + userInfo.user.billingAddress.addressLine2
              self.currentOrder.billing.billing_postal_code = userInfo.user.billingAddress.zip

self.currentOrder.fulfillment_info.customer.phone = userInfo.user.deliveryAddress.phone
self.currentOrder.fulfillment_info.customer.first_name = userInfo.user.deliveryAddress.name
self.currentOrder.fulfillment_info.delivery_info.address.city = userInfo.user.deliveryAddress.city
self.currentOrder.fulfillment_info.delivery_info.address.state = userInfo.user.deliveryAddress.state
self.currentOrder.fulfillment_info.delivery_info.address.zip_code = userInfo.user.deliveryAddress.zip
self.currentOrder.fulfillment_info.delivery_info.address.address_line1 = userInfo.user.deliveryAddress.addressLine1
self.currentOrder.fulfillment_info.delivery_info.address.address_line2 = userInfo.user.deliveryAddress.addressLine2

     


              })
              .catch(function (error) {
              console.log(error);
              });

    }
    },
    async lookupBalance() {

      let giftcardLookup = await this.$http.post("/user/lookupgiftcard", {
        cardNumber: this.cardNumberInput,
      });
      let giftcardResponse = giftcardLookup.data;

      if(giftcardResponse.resSendData.Responses[0].SvInquiry[0].ErrorID[0] === "10001"){
          this.validNumber = false
      }else{
             this.validNumber = true
      }
      this.currentBalance =
        giftcardResponse.resSendData.Responses[0].SvInquiry[0].CurrentBalance[0];
    },
    useGiftCardBalance() {
      let self = this;
      // first check if the balance is available
      // console.log('use balance')
      this.$http
        .post("/user/lookupgiftcard", {
          cardNumber: self.cardNumberInput
        })
        .then(function (response) {

      let balanceCheck = self.$store.state.storeCurrentOrderUpdateRetail.charges.total.toFixed(2)/100

          

          if (
            Number(
              response.data.resSendData.Responses[0].SvInquiry[0]
                .CurrentBalance[0]
            ) >= balanceCheck
          ) {
            self.showInsufficientFunds = false;
            self.$http
              .post("/user/usegiftcard", {
                cardNumber: self.cardNumberInput,
                useAmount: self.orderTotal.toFixed(2)/100
              })
              .then(function (response) {
                    //  console.log(response)
                self.currentBalance =
                  response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0];
                  
                if(self.$store.state.storeCurrentOrderUpdateRetail.preorder === true){
                  self.scheduleAnOrder(self.$store.state.storeCurrentOrderUpdateRetail,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
                
                
               if(self.$store.state.storeCurrentOrderUpdateRetail.preorder === false){
                  self.doAnOrder(self.$store.state.storeCurrentOrderUpdateRetail,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
        
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            self.showInsufficientFunds = true;
            setTimeout(function () {
              self.showInsufficientFunds = false;
            }, 3000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
panelShowChoose(info){

// alert(info)
if(info === 'yourOrder'){
this.panelShow = 'yourOrder'
}else if(info === 'customerInfo'){
this.panelShow = 'customerInfo'
}else{

}

},
    showingCustom(e){


      if(e === true){
this.custom = true
      }else{
this.custom = false
      }

    },
 removeAttention(){
this.attention = false
},
    toggleDrawer(){
this.toggledDrawer = !this.toggledDrawer
    },
    refreshGoogle() {
      this.currentOrder.fulfillment_info.delivery_info.address.address_line2 = ''
    this.shippingAmount = 0
    this.currentOrder.charges.shipping = 0



      this.renderKey++;

      this.googleAddressObject = {};
      let googleAddress = {};

      this.currentOrder.fulfillment_info.delivery_info.address = {
        city: "",
        state: "",
        zip_code: "",
        address_line1: "",
        address_line2: "",
      };
this.attention = true
      this.$store.commit("googleAddress", { googleAddress });

    },
    cippaybutton() {
      // this.checkForm()
      let self = this;
      this.getToken().then(function (transactionToken) {
        emergepay.open({
          transactionToken: transactionToken,
          onTransactionSuccess: function (approvalData) {
            // console.log("Approval Data", approvalData);
            emergepay.close();

            

              if(self.$store.state.storeCurrentOrderUpdateRetail.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeCurrentOrderUpdateRetail,approvalData,null);
              }
              
              if(self.$store.state.storeCurrentOrderUpdateRetail.preorder === false){
                self.doAnOrder(self.$store.state.storeCurrentOrderUpdateRetail,approvalData,null);
              }
          
          },
          onTransactionFailure: function (failureData) {
            // console.log("Failure Data", failureData);
          },
          onTransactionCancel: function () {
            console.log("transaction cancelled!");
          },
        });
      });
    },
    getToken() {
      let self = this;

      console.log(self.$store.state.storeCurrentOrderUpdateRetail);
      return new Promise(function (resolve, reject) {
        $.ajax({
          // url: "https://enigmatic-savannah-11908.herokuapp.com/order/start-transaction-retail",
           url: "https://young-hamlet-03679.herokuapp.com/order/start-transaction-retail",
          // url: "http://localhost:4000/order/start-transaction-retail",
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(self.$store.state.storeCurrentOrderUpdateRetail),
        })
          .done(function (data) {
            if (data.transactionToken) resolve(data.transactionToken);
            else reject("Error getting transaction token");
          })
          .fail(function (err) {
            reject(err);
          });
      });
    },
    // deliveryOption(choice) {
    //   if (choice === "delivery") {
    //     this.currentOrder.fulfillment_info.type = "delivery";
    //     this.refreshGoogle();
    //   } else {
    //     this.currentOrder.fulfillment_info.type = "pickup";
    //   }

    //   let storeCurrentOrder = this.currentOrder;
    //   this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
    // },
    addAddOn(mod, modifieritem) {
      let modAddition = {
        id: mod.id,
        modifier_group_id: modifieritem,
        price: mod.price_cents,
      };
      // this.currentItemModifierArray.push(modAddition);

      this.currentItem.price_cents = Number(this.currentItem.price_cents) + Number(mod.price_cents);
    //   console.log(this.currentItem)
      document.getElementById("add-" + mod.id).disabled = true;
      document.getElementById("remove-" + mod.id).disabled = false;
    //   console.log('reset upserves')

    },
    removeAddOn(mod, modifieritem) {
      let updatedItems = this.currentItemModifierArray.filter(
        (item) => item.id !== mod.id
      );
      this.currentItemModifierArray = updatedItems;
      this.currentItem.price_cents =
        Number(this.currentItem.price_cents) - Number(mod.price_cents);
      document.getElementById("add-" + mod.id).disabled = false;
      document.getElementById("remove-" + mod.id).disabled = true;
    },

    removeFromOrderDontCloseModal(removal) {


     document.getElementById("add-" + removal.id).disabled = false;
      document.getElementById("remove-" + removal.id).disabled = true;
    //   console.log('reset upserves')



// console.log(removal)

      let currentItems = this.currentOrder.charges.items;
      let updatedItems = currentItems.filter(
        (item) => item.item_id !== removal.id
      );


      let removals = currentItems.filter(
        (item) => item.item_id === removal.id
      );

  let newArray = removals.map(a => ({...a}));
  newArray.shift()

  let updatedNewItems = updatedItems.map(a => ({...a}));
  updatedNewItems.concat(newArray);

  let concatenated = updatedNewItems.concat(newArray);



// console.log(removal)


      this.currentOrder.charges.items = concatenated;

      let removeCost = removal.price_cents;

      this.total = this.total - removeCost;

      let storeCurrentOrder = this.currentOrder;






    },


removeFromOrder(removal) {
      let currentItems = this.currentOrder.charges.items;
      let updatedItems = currentItems.filter(
        (item) => item.cartId !== removal.cartId
      );


    console.log('upt ' + currentItems)
        console.log('cur ' + updatedItems)

      this.currentOrder.charges.items = updatedItems;
      let removeCost = removal.price * removal.quantity;
      this.total = this.total - removeCost;
      let storeCurrentOrder = this.currentOrder;




    },
    incrementCurrentItem() {
      this.currentItemQuanity++;
    },
    decrementCurrentItem() {
      this.currentItemQuanity--;
    },
    closeModal() {
      this.modalOpen = false;
      this.currentItem = null;
      this.currentItemQuanity = 1;
      this.textdescription = "";
    },
    closeConfirmationModal() {
      this.orderConfirmationModal = false;
      this.orderCMR = "";
    },
    openModal(serve) {


      let current = Object.assign({}, serve);

      // let current = serve
      

      this.modalOpen = true;
      this.currentItem = current;
    },
    expandChild(drawer) {
      var container = document.getElementById("drawertop-" + drawer)
        .nextSibling;
      var button = document.querySelector("button");

      /** Slide down. */
      if (!container.classList.contains("active")) {
        document.getElementById("plus-" + drawer).classList.remove("visible");
        document.getElementById("minus-" + drawer).classList.add("visible");
        /** Show the container. */
        container.classList.add("active");
        container.style.height = "auto";
        /** Get the computed height of the container. */
        var height = container.clientHeight + "px";
        /** Set the height of the content as 0px, */
        /** so we can trigger the slide down animation. */
        container.style.height = "0px";
        /** Do this after the 0px has applied. */
        /** It's like a delay or something. MAGIC! */
        setTimeout(() => {
          container.style.height = height;
        }, 0);

        /** Slide up. */
      } else {
        /** Set the height as 0px to trigger the slide up animation. */
        container.style.height = "0px";

        /** Remove the `active` class when the animation ends. */
        container.addEventListener(
          "transitionend",
          () => {
            container.classList.remove("active");
          },
          { once: true }
        );

        document.getElementById("plus-" + drawer).classList.add("visible");
        document.getElementById("minus-" + drawer).classList.remove("visible");
      }
    },
    addToOrder(item) {
      let modifierPriceTotal = 0;
      for (let i = 0; i < this.currentItemModifierArray.length; i++) {
        modifierPriceTotal =
          modifierPriceTotal + this.currentItemModifierArray[i].price_cents;
      }

      let itemToAdd = {
        name: item.name,
        cartId:
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29),
        item_id: item.id,
        price: item.price_cents,
        price_cents: item.price_cents,
        quantity: this.currentItemQuanity,
        instructions: this.textdescription,
        modifiers: this.currentItemModifierArray,
        sides: [],
        lbs: item.lbs * this.currentItemQuanity,
        oz: item.oz * this.currentItemQuanity,
        shippable: item.shippable,
        height: item.height,
        width: item.width,
        length: item.length,
        girth: item.girth,
        visible: true
      };

        this.currentOrder.charges.items.push(itemToAdd);

          this.total =
            Number(this.total) + Number(item.price_cents * this.currentItemQuanity);


          // let newDate = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
          let newDate = new Date();
          this.currentOrder.time_placed = newDate;
          this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;

          //then close the modal
          this.currentItemModifierArray = [];
          this.closeModal();



    },



    addToOrderDontCloseModal(item) {


      document.getElementById("add-" + item.id).disabled = true;
      document.getElementById("remove-" + item.id).disabled = false;
    //   console.log('reset upserves')



      let modifierPriceTotal = 0;
      for (let i = 0; i < this.currentItemModifierArray.length; i++) {
        modifierPriceTotal =
          modifierPriceTotal + this.currentItemModifierArray[i].price_cents;
      }

      let itemToAdd = {
        name: item.name,
        cartId:
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29),
        item_id: item.id,
        price: item.price_cents,
        price_cents: item.price_cents,
        quantity: this.currentItemQuanity,
        instructions: this.textdescription,
        modifiers: this.currentItemModifierArray,
        sides: [],
      };

        this.currentOrder.charges.items.push(itemToAdd);

          this.total =
            Number(this.total) + Number(item.price_cents * this.currentItemQuanity);


          // let newDate = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
          let newDate = new Date();
          this.currentOrder.time_placed = newDate;
          this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;

          //then close the modal
          this.currentItemModifierArray = [];
          // this.closeModal();
          // let storeCurrentOrder = this.currentOrder;

  





      // this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });


    },


    filterByCat(cat) {
      this.currentlyFiltered = [];
      for (let i = 0; i < this.upserve.length; i++) {
        if (this.upserve[i].category === cat) {
          this.currentlyFiltered.push(this.upserve[i]);
        }
      }
    },
    async upserves() {

      let responseUpserve = await this.$http.get(this.menuEndpoint);
      let upserveProducts = responseUpserve.data.body.items;
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      this.upserveSections = responseUpserve.data.body.sections;

      console.log(responseUpserve.data.body);
      this.upserveTaxRate =
        responseUpserve.data.body.tax_rates[0].percentage_rate;

        console.log('upserveTaxRate')
        console.log(upserveTaxRate)
      this.modifierGroups = responseUpserve.data.body.modifier_groups;
      this.modifiers = responseUpserve.data.body.modifiers;
      this.modifierItems = responseUpserve.data.body.modifiers;

      // let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoon`);
      // let upserveProducts = responseUpserve.data.doc[0].menu.items;
    },
    async upservesMongo() {

      let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoonretail`);
      let upserveProducts = responseUpserve.data.doc[0].menu;
      // console.log(upserveProducts)
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      // this.upserveSections = responseUpserve.data.doc[0].menu.sections;

        console.log(responseUpserve.data)
               console.log('upserveTaxRate')


this.upserveTaxRate =
        responseUpserve.data.doc[0].menu.tax_rates[0].percentage_rate;

        console.log(upserveTaxRate)
      // this.modifierGroups = responseUpserve.data.doc[0].menu.modifier_groups;
      // this.modifiers = responseUpserve.data.doc[0].menu.modifiers;
      // this.modifierItems = responseUpserve.data.doc[0].menu.modifiers;

      // let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoon`);
      // let upserveProducts = responseUpserve.data.doc[0].menu.items;
    },
    scheduleAnOrder(currentOrder,approvalData,giftcardbalance) {


      let self = this;
      // this.$http
      //   .post(this.oloEndpoint, currentOrder)
      //   .then((response) => {
      //     console.log(response);
      //     self.orderConfirmationModal = true;
      //     self.giftcardbalance = giftcardbalance
      //     self.orderCMR = response.data;
      //     let orderCMR = response.data;
      //     orderCMR.giftcardbalance = giftcardbalance
      //     self.$store.commit("orderCMR", { orderCMR });
      //     this.$router.push("/orderconfirmation");
      //     self.currentOrder.id = Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29)
      //     self.currentOrder.confirmation_code = "mamnoon-" + Math.random().toString(36).substr(2, 29)
      //     let newDate = new Date();
      //     self.currentOrder.time_placed = newDate;
      //     self.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;
      //     let storeCurrentOrder = self.currentOrder
      //     self.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
      //   })
      //   .catch((e) => {
      //     // this.errors.push(e);
      //     console.log("errors");
      //     console.log(e);
      //   });
  
      this.$http.post("/confirmationemail",currentOrder)
      .then((response) => {
        //   console.log('confirmation email sent')
      }).catch((e) => {
        //   console.log("errors");
        //   console.log(e);
        });


    let infoForPay = {
          payInfo: approvalData,
          orderInfo: currentOrder
        }
    let infoForPayStringify = infoForPay      
     this.$http
        .post("/order/addorder", infoForPayStringify)
        .then((response) => {
        //   console.log('add to mongo emerge pay front end')
// console.log(currentOrder);
// console.log(currentOrder)
          self.orderConfirmationModal = true;
          self.giftcardbalance = giftcardbalance
          self.orderCMR = currentOrder;
          let orderCMR = currentOrder;
          orderCMR.giftcardbalance = giftcardbalance

          self.emptyCart();

          self.$store.commit("orderCMR", { orderCMR });
         self.$router.push("/orderconfirmation");


        })
        .catch((e) => {
          console.log("errors");
          console.log(e);
        });
      },
doAnOrder(currentOrder,approvalData,giftcardbalance) {
      let self = this;
      this.$http
        .post(this.oloEndpoint, currentOrder)
        .then((response) => {
        //   console.log(response);
          self.orderConfirmationModal = true;
          self.giftcardbalance = giftcardbalance
          self.orderCMR = response.data;
          let orderCMR = response.data;
        //   console.log(response.data)
          orderCMR.giftcardbalance = giftcardbalance


   
   self.emptyCart();

          self.$store.commit("orderCMR", { orderCMR });
          self.$router.push("/orderconfirmation");
          self.currentOrder.id = Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29)
          self.currentOrder.confirmation_code = "mamnoon-" + Math.random().toString(36).substr(2, 29)
          let newDate = new Date();
          self.currentOrder.time_placed = newDate;
          self.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;
          // let storeCurrentOrder = self.currentOrder
          // self.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });

        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
  
    let infoForPay = {
          payInfo: approvalData,
          orderInfo: currentOrder
        }
    let infoForPayStringify = infoForPay      
     this.$http
        .post("/order/addorder", infoForPayStringify)
        .then((response) => {
          console.log(response);
          console.log('add to mongo emerge pay front end')
        })
        .catch((e) => {
          console.log("errors");
          console.log(e);
        });
      },
    issueReturn() {
      this.$http
        .post("/issue-return")
        .then((response) => {
        let prestring = JSON.stringify(response.data.transactionToken)
        let token = prestring.replace(/['"]+/g, '')
        emergepay.open({
          // (required) Used to set up the modal
          transactionToken: token,
          // (optional) Callback function that gets called after a successful transaction
          onTransactionSuccess: function (approvalData) {
            console.log("Approval Data", approvalData);
            emergepay.close();
          },
          // (optional) Callback function that gets called after a failure occurs during the transaction (such as a declined card)
          onTransactionFailure: function (failureData) {
            console.log("Failure Data", failureData);
          },
          // (optional) Callback function that gets called after a user clicks the close button on the modal
          onTransactionCancel: function () {
            console.log("transaction cancelled!");
          },
        });


        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
    },

thanksgiving(m,dy) {
  let d = new Date();
  let n = d.getFullYear();
  let  days = {sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}
  ,dat = new Date(n+'/'+m+'/1')
  ,currentmonth = m
  ,firstday = false;
  while (currentmonth === m){
    firstday = dat.getDay() === days[dy] || firstday;
    dat.setDate(dat.getDate()+(firstday ? 7 : 1));
    currentmonth = dat.getMonth()+1 ;
  }
  dat.setDate(dat.getDate()-7);
  return dat;
},
showTimeInterVals(startTime,endTime){


let items = [];
for (var hour = startTime; hour < endTime; hour++) {
  items.push([parseInt(hour), 0]);
  items.push([parseInt(hour), 15]);
  items.push([parseInt(hour), 30]);
  items.push([parseInt(hour), 45]);
}

const date = new Date();
const formatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: false
});

const range = items.map(time => {
  const [hour, minute] = time;
  date.setHours(hour);
  date.setMinutes(minute);
  return formatter.format(date);
});

this.openTimes = this.openTimes.concat(items)


},
dropDown(){

     let today = new Date()
     var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

         let subdays = days.map(function(x){
           return x.substring(0,3).toLowerCase()
          })

        let self2 = this
        let tFs = subdays.map(function(x){
        return self2.openDays.includes(x)
        })


         for(let i = 0;i<7;i++){
          let tomorrow = new Date(today)
          tomorrow.setDate(tomorrow.getDate() + i)

        if('January 1st' === moment(String(tomorrow)).format('MMMM Do') || 'December 25th' === moment(String(tomorrow)).format('MMMM Do') || !tFs[tomorrow.getDay()] || moment(String(this.thanksgiving(11,'thu'))).format('MMMM Do YYYY') === moment(String(tomorrow)).format('MMMM Do YYYY')){
              
            let timeslotsCreated = [];

            for(let i = 1; i < this.openTimesUpdated.length; i++){ 
              timeslotsCreated.push({
              time: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)),
              timelabel: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)).toLocaleTimeString().replace(":00","")
              })
            } 
              
            this.dropDownDays.push({
            dayLabel: days[tomorrow.getDay()] + ' (closed)',
            dayName: days[tomorrow.getDay()],
            closed: true,
            dateData: days[tomorrow.getDay()] + moment(String(tomorrow)).format(' MMM Do'),
            dateFormatted: tomorrow.toISOString().slice(0,10),
            timeslots: timeslotsCreated
            })
                            
            }else{

            let timeslotsCreated = [];

            for(let i = 1; i < this.openTimesUpdated.length; i++){ 
              timeslotsCreated.push({
              time: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)),
              timelabel: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)).toLocaleTimeString().replace(":00","")
              })
            } 
            this.dropDownDays.push({
            dayLabel: days[tomorrow.getDay()],
            dayName: days[tomorrow.getDay()],
            closed: false,
            dateData: days[tomorrow.getDay()] + moment(String(tomorrow)).format(' MMM Do'),
            dateFormatted: tomorrow.toISOString().slice(0,10),
            timeslots: timeslotsCreated
            })
            }
        }





   this.rendered = true;
    },
        validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

   validPostal: function (postal_code) {
      var re = /^[0-9]{5}(?:-[0-9]{4})?$/;
      return re.test(postal_code);
    }
  },
  mounted() {

    this.getHours();

      // this.returnAvailableNow();
    this.getUser();
    // this.upserves();
    this.upservesMongo();
    emergepay.init();



// cached timestap








      let ffAgo = Date.now() - 2700000
      // let ffAgo = Date.now() - 10000

      if(this.$store.state.storeCurrentOrderUpdateRetail.timeStamp === null){
        this.$store.state.storeCurrentOrderUpdateRetail.timeStamp = Date.now()
      }

      let cachedTimeStamp = this.$store.state.storeCurrentOrderUpdateRetail.timeStamp
      let decider = cachedTimeStamp - ffAgo
      if(decider < 0){
        console.log('the cached time stamp is more than forty five minutes old, empty the cart.give the cart a new timestamp.')
        this.emptyCart()
      }else{
        // console.log('not empty yet')
      }



    




console.log(this.currentOrder.ship)

console.log(this.shippingOption)

if(this.shippingOption === true){
this.preOrderToggleState = false
// }



  this.removeNonShippables()
}
























// cached timestamp



    this.currentOrder = this.$store.state.storeCurrentOrderUpdateRetail
    // this.setTip(this.$store.state.storeCurrentOrderUpdateRetail.tipSelected)
    this.currentAmountToAddCustom = this.$store.state.storeCurrentOrderUpdateRetail.currentAmountToAddCustom/100


    // this.$store.state.storeCurrentOrder = {};
    this.$store.state.orderCMR = {};
    this.$store.state.orderConfirmationModalResponse = {};
//reset

if(this.$store.state.openDrawerOnLoad === true){
  this.toggleDrawer()
  let drawerTrue = false
  this.$store.commit("drawerTrue", { drawerTrue });
}
    // this.dropDown();



  



  },
  created(){
    let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBwegA6SBLg8wfP47WBd-bj-_ghO9kRTs8&libraries=geometry,places&callback=initMap')
      document.head.appendChild(recaptchaScript)


      let recaptchaScriptModal = document.createElement('script')
      recaptchaScriptModal.setAttribute('src', 'https://assets.emergepay.chargeitpro.com/cip-hosted-modal.js')
      document.head.appendChild(recaptchaScriptModal)



      let recaptchaScriptJquery = document.createElement('script')
      recaptchaScriptJquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
      document.head.appendChild(recaptchaScriptJquery)





  }
};
</script>


<style lang="scss">

.toggleLr{
  div{
    width: 50%;
    display: inline-block;

      &:first-child{
      //  padding-right: 1%;
       float: left;
      }
            &:last-child{
      //  padding-left: 1%;
       float: right;
      }

    button{
      width: 98%;
      margin: 0 auto;
float: left;

&.fl-right{
  float: right;
}
    }



  }
}


button.selected{
 
  box-sizing: border-box;
color: #666666 !important;
}


#upserveolo.shopRetail{
  
  ul.filters{
      border-bottom: 0px solid rgba(0, 0, 0, 0.1);
      position: relative;
      display: inline;
      margin-bottom: 0;
      padding-left: 0;
      li{
        border-bottom: 0px solid rgba(0, 0, 0, 0.1);
        color: #fff367;
        font-weight: 500;
        margin: 0 10px;
        text-transform: lowercase;
            display: inline;
      }  
      }

}


.no-lr-pad{
  padding-left: 0;
  padding-right: 0;
}


.col-sm-4.shop-item{
  margin-bottom: 10px;
}

.backgroundImageSquare{
width: 100%;
    background-size: 150%;
    background-position: center;

position: relative;
.content {
  background: #f05d5b;
  position: absolute;
  width: 100%;
  height: 100%;
}

}

  .backgroundImageSquare:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}


.col-6.col-md-6.shop-item.no-lr-pad:nth-child(2n){
.itemContainer{
// background: green;
padding-left: 8px;
padding-right: 0;
}
}
.col-6.col-md-6.shop-item.no-lr-pad:nth-child(2n+1){
.itemContainer{
// background: red;
padding-left: 0;
padding-right: 8px;
}
}

.col-6.col-md-6.shop-item.no-lr-pad:nth-child(2n+2){
.itemContainer{
// background: pink;
padding-left: 4px;
padding-right: 4px;
}
}


.description-panel{
  background: #fff367;
  padding: 10px;
}


.itemContainer{
      margin-bottom: 12px;
}


@media only screen and (max-width: 768px) {

.col-6.col-md-6.shop-item.no-lr-pad:nth-child(odd){
.itemContainer{
// background: green;
padding-left: 0px !important;
padding-right: 0px !important;
width: 100% !important;
    max-width: 100% !important;
        flex: 0 0 100% !important;
}
}
.col-6.col-md-6.shop-item.no-lr-pad:nth-child(even){
.itemContainer{
// background: red;
padding-left: 0px !important;
padding-right: 0px !important;
width: 100% !important;
    max-width: 100% !important;
    flex: 0 0 100% !important;
}
}


.container.pt20{
  padding-left: 20px;
  padding-right: 20px;

}


.col-6.col-md-6.shop-item.no-lr-pad{
  width: 100% !important;
 max-width: 100% !important;
 flex: 0 0 100% !important;
}


}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.itemContainer,
ul li{
  cursor: pointer;
}


.mb20{
  margin-bottom: 20px;
}

.mb10{
  margin-bottom: 10px;
}

.mb5{
    margin-bottom: 5px;
}
.text-left{
  text-align: left;
}

.weight,
.pick-up-only{
font-style: italic;
font-size: .875em;
font-weight: 300;
}





.edit-link{
      color: #f58e58;  text-decoration: none;
    font-size: .9rem;
a{
  text-decoration: none;  color: #f58e58;
    font-size: .9rem;
 .edit{
    color: #f05d5b;
    color: #f58e58;
    // font-size: .9rem;
}
  

&:hover{
   .edit{
    color: #f58e58;
    border-bottom: 1px solid #f58e58;
}
  
}

}

}
.red-text {
    color: #f05d5b;
    }

    .grey-text{
      color: #666666;
    }


@media only screen and (max-width: 992px) {


.hide-on-mob{
  display:none !important;
}
}

.sm-text{
  color: #4a494b;
  font-size: 14px;
  font-style: italic;
}

#upserveolo{
button.disabled.extra{
      pointer-events: none !important;
    background: #666666 !important;
    border: 2px solid #666666 !important;
    color: #fff367 !important;
}
}




.button-container{
  width: 100%;
  .button-half{
    width: 50%;
    display: inline-block;

    &:first-child{
      text-align: left;
          button{
      width: 98%;

    }
    }

    &:last-child{
      text-align: right;
          button{
      width: 98%;

    }
    }


    }



  .button-third{
        width: 33%;
    display: inline-block;


    &:first-child{
      text-align: left;
          button{
      width: 98%;

    }
    }


    &:nth-child(2){
      text-align: center;
          button{
      width: 98%;

    }
    }


    &:last-child{
      text-align: right;
          button{
      width: 98%;

    }
    }



    }

}

</style>