<template>
  <div id="upserveolo" :class='{smallerBoxes: currentItem && currentItem.name === "mamnoon @ home" }'>
      <!-- <div id="upserveolo"> -->
    <section>

<div v-if="editInfoVisible === true" class="editInfoModalBg">
</div>
<div v-if="editInfoVisible === true" class="editInfoModal">
        <div class="container online-menu order-modal-width full-width-modal-header">
          <div @click="editInfoVisible = false" class="close closeModal">
            <CloseModal />
          </div>
          <h4>edit info</h4>
        </div>






<div class="cIEdit">



      <div class="address" v-if="!updateCI">
<b>customer info:</b> <br />
<template v-if="user && user.user && user.user.deliveryAddress">
{{user.user.deliveryAddress.name}}<br>
{{user.user.deliveryAddress.phone}}<br>
</template>
<br>
<button class="sm-button" @click="updateCI = true">update customer info</button>
<br>
</div>



<form class="infoForm" @submit.prevent="checkFormCustomerInfo" v-if="updateCI && user && user.user && user.user.deliveryAddress">

<b>customer info:</b>
 <br>
  <p>
    <input
      id="name"
      v-model="user.user.deliveryAddress.name"
      type="text"
      name="name"
      placeholder="add name"
      class="add-name-field"
    >
    <br>
    <input
      id="phone"
      v-model="user.user.deliveryAddress.phone"
      type="text"
      name="phone"
      placeholder="(555) 555-5555"
      class="add-phone-field"
    >
    <br>




    &nbsp;&nbsp;&nbsp;
    <br>
    <button class="sm-button add-delivery-address-button" type="submit" value="Submit">
   submit
      </button>
<button class="sm-button" v-if="updateCI" @click="updateCI = false">cancel</button>
  </p>
</form>



</div>





<div class="billingEdit">



      <div class="address" v-if="!updateBilling">
<b>billing info:</b> <br />
<template v-if="user && user.user && user.user.billingAddress">
{{user.user.billingAddress.name}}<br>
{{user.user.billingAddress.addressLine1}}<br>
{{user.user.billingAddress.addressLine2}}<br>
{{user.user.billingAddress.city}}&nbsp;{{user.user.billingAddress.state}}&nbsp;{{user.user.billingAddress.zip}}
</template>
<br><br>
<button class="sm-button" @click="updateBilling = true">update billing info</button>
<br><br>
</div>



<form class="infoForm" @submit.prevent="checkFormBilling" v-if="updateBilling && user && user.user && user.user.billingAddress">
<b>billing address:</b>
 <br />

  <p>
    <input
      id="nameBilling"
      v-model="user.user.billingAddress.name"
      type="text"
      name="name"
      placeholder="add name"
      class="add-name-field"
    >
    <br>

  
    <input
      id="addressLine1Billing"
      v-model="user.user.billingAddress.addressLine1"
      type="text"
      name="addressLine1"
      placeholder="add address line 1"
      class="add-addressLine1-field"
    >
    <br>
        <input
      id="addressLine2Billing"
      v-model="user.user.billingAddress.addressLine2"
      type="text"
      name="addressLine2"
      placeholder="add address line 2"
      class="add-addressLine2-field"
    >
    <br>
    <input
      id="cityBilling"
      v-model="user.user.billingAddress.city"
      type="text"
      name="city"
      placeholder="add city"
      class="add-city-field"
    >
    <br>
      <input
      id="stateBilling"
      v-model="user.user.billingAddress.state"
      type="text"
      name="state"
      placeholder="add state"
      class="add-state-field"
    >
    <br>
      <input
      id="zipBilling"
      v-model="user.user.billingAddress.zip"
      type="text"
      name="zip"
      placeholder="add zip"
      class="add-zip-field"
    >
<br>

    &nbsp;&nbsp;&nbsp;
<br>
<button class="sm-button add-billing-address-button" type="submit" value="Submit">
   submit
      </button>
<button class="sm-button" v-if="updateBilling" @click="updateBilling = false">cancel</button>
  </p>
</form>

</div>









  </div>


<OrderConfirmationModal :orderConfirmationModal="orderConfirmationModal" :orderCMR="orderCMR" />
      <div v-if="modalOpen" class="order-modal">
        <div class="container online-menu order-modal-width">
          <div @click="closeModal()" class="close closeModal">
            <CloseModal />
          </div>
          <h4>{{currentItem.name}}</h4>
        </div>
        <div class="container modal-body order-modal-width order-modal-body">
          <template v-if="currentItem.name !== 'mamnoon @ home'">
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
          </template>
   

  
          <p class="item-description-p" :class="{noTopMarge: currentItem.name === 'mamnoon @ home'}">
                            <template v-if="currentItem.name === 'mamnoon @ home'">
                     <b>{{currentItem.name}}</b><br>
                     </template>
                     {{currentItem.description}}</p>
        <b>${{currentItem.price_cents.toFixed(2)/100}}</b>
                    <hr />



          <template v-if="currentItem.modifier_group_ids">
          <div v-if="currentItem.modifier_group_ids.length >= 1">
        <h4 v-if="currentItem.name === 'mamnoon @ home'" class="text-left">options</h4>
            <h4 v-else class="text-left">add ons</h4>
            <div v-for="(modifieritem,i) in currentItem.modifier_group_ids" :key="'A'+ i">
              <div v-for="(modifier,i) in modifierGroups" :key="'B'+ i">
                <template v-if="modifieritem === modifier.id">
                  <div class="displayInlineBlock">
                  <!--<div v-if="modifier.minimum_required === 0">
                    <div v-if="modifier.name !== 'Promotions'">(add ons not required)</div>
                  </div>
                  <div v-else>
                    minimum_required: {{modifier.minimum_required}}
                    maximum_required: {{modifier.maximum_required}}
                  </div>-->
                  <!-- minimum_required: {{modifier.minimum_required}}
                  maximum_required: {{modifier.maximum_required}} -->
             
                <template v-if="currentItem.name === 'mamnoon @ home'">
                    <div class="optionHeader">{{modifier.name.replace(" : choose 1", "")}} (select one)</div>
                  </template>
                    <!-- <template v-else> -->
                    <!-- <div class="optionHeader">{{modifier.name}}</div> -->
                  <!-- </template> -->
                  <!-- d -->

<!-- {{allOptionsSelected}} -->
                  <!-- <pre>{{currentModifiers}}</pre> -->
                  <div class="fw">
                  <div class="option-choices row row-eq-height">
                                              <!-- <div v-if="modifier.name === 'Promotions'">{{modifier.name}}</div> -->
                                              <template v-for="(mod,i) in modifierItems">
                                                <!-- <template v-for="(mod,i) in modifierItems" :key="'C'+ i"> -->
                                                <template v-for="(m,i) in modifier.modifier_ids">
                                                    <!-- <div v-for="(m,i) in modifier.modifier_ids" :key="'D'+ i"> -->
                                                  
                                                  <template v-if="currentItem.name === 'mamnoon @ home'">
                                                  <div v-if="m === mod.id" class="box" @click="selectedOption(m, modifier, mod, modifieritem)" :class="{selected: currentModifiers.findIndex(p => p.option === m) > -1 }">
                                                    <div class="box-inner">
                                                            <div v-if="currentItem.name === 'mamnoon @ home'" class="hide-on-mob square">
                                                            <div class="content">
                                                                      <div style="width:100%;position: relative;">
                                                            <template v-if="currentItem.name === 'mamnoon @ home'">
                                                                        <div style="position: absolute;top:0;width:100%">
                                                                              <NadiIconxx />
                                                                        </div>
                                                                        <div style="position: absolute;top:0;width:100%;">
                                                                            <div>
                                                                            <template v-for="(piece,i) in upserveList">
                                                                            <template v-if="piece.name.toLowerCase().replace(' ','').replace('mamnoon','') === mod.name.toLowerCase().replace(' ','').replace('mamnoon','')">
                                                                          <template v-if="piece.images">
                                            <div class="square" style="background-size: cover;background-position: center center" :style="{ backgroundImage: `url(${piece.images.online_ordering_menu.main})` }">
                                                                            <div class="content">.</div>
                                                                            </div>  </template> </template></template>  </div> </div>  </template></div></div></div>
                                                                          <div class="pad-10">
                                                                          <span class="title-bolder"> {{mod.name}}</span>
                                                                          <br />
                                                                        <b v-if="mod.price > 0">+${{mod.price}}</b>
                                                                          </div>
                                                                          <div v-if="modifier.name.includes(': choose 1')">
                                                                                  <div v-for="(piece,i) in upserveList" :key="'E'+ i">
                                                                                    <div v-if="piece.name.toLowerCase() === mod.name"><div class="pad-10"><p>{{piece.description}}</p></div></div>
                                                                                  </div>
                                                                                </div>
                                                                                <div v-else class="mt10">
                                                                <div class="pad-10" style="padding-bottom: 10px;">
            
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  </template>
                                                <template v-else>
                                                <div v-if="m === mod.id && mod.id !== '7d6b8ea8-4bc7-4716-b8f8-44b5d5184f79'" class="box normal" :id="'toggle-' + mod.id" @click="toggleAddOn(mod,modifieritem)" :class="{selected: currentModifiers.findIndex(p => p.option === m) > -1 }">
                                                    <div class="box-inner">
                                                     



                                                                          <div class="pad-10 leftmodbuttons">


                                                                            <!-- {{mod.id}} -->
                                                                          <span class="title-bolder">{{mod.name.replace('add ','')}}</span>
                                                                          <br />
                                                                        <b v-if="mod.price != 0.0"><span class="thin">+</span>${{mod.price}}</b>
                                                                          </div>
                                                                          <div v-if="modifier.name.includes(': choose 1')">
                                                                                  <div v-for="(piece,i) in upserveList" :key="'E'+ i">
                                                                                    <div v-if="piece.name.toLowerCase() === mod.name"><div class="pad-10"><p>{{piece.description}}</p></div></div>
                                                                                  </div>
                                                                                </div>
                                                                                <div v-else class="mt10 modbuttons">
                                                                <div class="pad-10" style="padding-bottom: 10px;">
                                                        <!-- <button @click="addAddOn(mod,modifieritem)" :id="'add-' + mod.id">+</button>&nbsp;&nbsp;
                                                        <button
                                                          @click="removeAddOn(mod,modifieritem)"
                                                          :id="'remove-' + mod.id"
                                                          disabled
                                                        >-</button> -->
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </template>








                                                </template>
                                              </template> 



<!-- end container -->
</div>
         </div>
                  </div>
                </template>
              </div>
            </div>
          </div>



          </template>
            <textarea
            type="text"
            placeholder="special instructions"
            v-model="textdescription"
            style="margin-top: 10px;"
            />
          <!-- <hr /> -->

          <button v-if="currentItemQuanity > 1" @click="decrementCurrentItem()">-</button>
          <button v-else disabled>-</button>
          &nbsp;&nbsp;
          <span id="value">{{currentItemQuanity}}</span>&nbsp;&nbsp;
          <button @click="incrementCurrentItem()">+</button>
          <div class="add-to-order-footer">
            item total: <b>${{computedAddition * currentItemQuanity }}</b>
            
            <template v-if="currentItem.name === 'mamnoon @ home'">
                <template v-if="allOptionsSelected">
                  <button
                  class="float-right"
                  @click="addToOrder(currentItem)"
                  >add to order</button>
                </template>
                <template v-else>
                  <button
                  class="float-right"
                  disabled>select 1 option from each course</button>
                </template>

            </template>
            <template v-else>
              <button
                class="float-right"
                @click="addToOrder(currentItem)"
              >add to order</button>
            </template>

          </div>
        </div>
      </div>


      <div class="container pt20 no-bot-pad">
        <div class="row no-lr-margin">
          <div class="col-md-12 grey-text">


            <!-- {{emailAddress}} -->
             <!-- <h1 class="text-center">{{title}}</h1> -->
             <template v-if="openDays">
         <span v-if="currentRestaurantHours !== ''">{{title.toLowerCase()}}, {{openDays[0] }}-{{openDays[openDays.length-1]}}, <span v-for="(time,index) in currentRestaurantHours.information.open_time_range" :key="'F'+ index"><span v-if="index === 1">,</span>&nbsp;&nbsp;{{time.time_slot.open | formatAmPmFirst}}-{{time.time_slot.close | formatAmPm}}</span></span>
         </template><br>
         
         <span v-if="dates_additional_information">{{dates_additional_information}}</span>
         <br v-if="dates_additional_information">
    <span v-if="this.title === 'Mamnoon'"><a class="weblink" href="https://mamnoonrestaurant.com/" target="_blank">mamnoon's website</a></span>
 <span v-if="this.title === 'Mamnoon Street'"><a class="weblink" href="https://mamnoonstreet.com/" target="_blank">mamnoon street's website</a></span>
<span v-if="this.title === 'Mbar'"><a class="weblink" href="http://mbarseattle.com/" target="_blank">mbar's website</a></span>



        </div>
      </div>
      </div>

      <div class="container pt20">
        <div class="row no-lr-margin">
        
<div class="col-md-12 col-lg-8">

          <div class="container no-lr-pad">

<!-- {{selectedDate}} -->
<!-- {{selectedTime}} -->


<!--          <template v-if="valid">
          we are open
          </template>
          <template v-else>
          we are currently closed
          </template>-->

              <template v-if="valid">
              <div class="toggleLr">
                <div>
 <button @click="preOrderToggle(true)" :class="{ selected: preOrderToggleState }">preorder</button> 
                  <!-- <button @click="preOrderToggle(false)" :class="{ selected: !preOrderToggleState }">get it now</button> -->

                  <!-- <h2 v-if="!preOrderToggleState">Get it now (or <u>preorder</u>)</h2> -->
                  <!-- <h2 v-if="preOrderToggleState">Preorder</h2> -->



                  </div> 
                <div>
                  <button @click="preOrderToggle(false)" :class="{ selected: !preOrderToggleState }">get it now</button>
                  <!-- <button @click="preOrderToggle(true)" :class="{ selected: preOrderToggleState }">preorder</button>  -->


                  <!-- <button v-if="preOrderToggleState" @click="preOrderToggle(false)" :class="{ selected: !preOrderToggleState }">get it now</button> -->
                  </div> 
              </div>
              </template>
              <template v-else>
              <div class="mb16"> 
              Now accepting preorders for pick up.
              </div> 
              </template>


<!-- {{selectedTime}} -->
<!-- {{selectedDate}} -->
              <template v-if="valid">
                  <template v-if="preOrderToggleState">
                  <div class="leftDropdown">
                  <v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
                  </div>
                  <div class="rightDropdown" v-if="selectedDate !== null">
                  <v-select v-if="rendered" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
                  </div>
                </template>
              </template>
              <template v-else>
                  <template>
                      <div class="leftDropdown">
                      <v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select></div>
                      <div class="rightDropdown" v-if="selectedDate !== null">
                      <v-select v-if="rendered" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
                      </div>
                  </template>
            </template>





</div>


<!-- <div v-if="item.timing_mask && currentlyAvailable(item.timing_mask.start_time,item.timing_mask.end_time,item.timing_mask.rules,nowDate,nowTime) || !item.timing_mask" class="container menu-line"> -->

<div class="container online-menu">
              <h4>featured</h4>
            </div>
   <template v-if="upserveSections.length === 0">
     <div class="container text-center pt20">
       Loading...
     </div>
     </template>
         <template v-else>
   
<div id="online-menu" class="is-fullheight no-top-pad" style="position: relative;">
        <carousel :lazyLoad="true" :autoplay="true"  id="FourThree" :items="1" :loop="true" :dots="false" :nav="false"  v-if="upserveSections">
              <template class="subprev" slot="prev">
              <span class="prev">
              <Prev />
              </span>
              </template>
       
            <!-- <template v-for="item in upserveSections" v-if="item.name === 'Feature - Tuesday'||item.name === 'Feature - Wednesday'||item.name === 'Feature - Thursday'||item.name === 'Feature - Friday'||item.name === 'Feature - Saturday'"> -->
            <!-- <template v-for="item in upserveSections"> -->
          <template v-for="item in upserveSections" v-if="item.name === 'mamnoon @ home' || item.name == 'featured item'">
                     <!-- {{item.name}} -->
            <div class="pieces" v-for="piece in item.item_ids"> 
                    <template v-if="upserve" v-for="serve in upserve">
                      <div v-if="serve.id === piece" class="inline-block full-height-slide">
           
                        <div @click="openModal(serve,item.timing_mask)">
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
          </template>
                   <template class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
            </carousel>
</div>
</template>
      <br>
      <div class="container online-menu">
      <h4>order from the full menu</h4>
<!--{{emailAddress}}-->

<!--<button @click="handleClickSignInForCard()">button</button>-->
      </div>
      <div>
      </div>


      

          <template v-if="valid">
          <!-- we are openc  {{!preOrderToggleState}} -->
          </template>
          <template v-else>
          <!-- we are currently closed, so no food is available. please select a date and time in the future to see what is available -->
          </template>








<!-- <h1>begin new filter for use when open</h1> -->
 <!-- beggin 00 -->

 <template v-if="valid && !preOrderToggleState">
<template v-for="item in upserveSections">
  <!-- beggin 0 -->
  <template v-if="noFiltering">
    <!-- beggin 1 -->
      <template>
         <!-- <div class="container menu-line"> -->
<!-- <template v-if="nowTime && nowDate"> 
{{nowTime,nowDate}}
</template>  -->
              <div v-if="item.timing_mask && currentlyAvailable(item.timing_mask.start_time,item.timing_mask.end_time,item.timing_mask.rules,nowDate,nowTime) || !item.timing_mask" class="container menu-line">
                
                                                <div
                                                  :id="'drawertop-'+ item.id"
                                                  @click="expandChild(item.id)"
                                                  class="display-block row no-lr-margin"
                                                >
                                                  <h2 class="menu-header">
                                                    <span :id="'plus-'+ item.id" class="expand-contract plus visible">+</span>
                                                    <span :id="'minus-'+ item.id" class="expand-contract minus">-</span>
                                                    {{item.name.replace('- To Go', '').replace('To Go', '')}}
                                                    <!-- {{item.timing_mask}} -->
                                                  </h2>
                                                </div>
                                        <div :data="'drawer' + item.id" class="hidden-drawer row no-lr-margin">
                                            <div class="filtree-full" v-for="piece in item.item_ids" :key="piece">
                                                    <template v-for="serve in upserveList" class="grey-bg">
                                                                  <template v-if="serve.id === piece" class="inline-block">
                                                                                <div class="yellow-bg" @click="openModal(serve,item.timing_mask)">
                                                                                            <div class="half-width2left">
                                                                                                      <div class="content-box">
                                                                                                          <div class="name">{{serve.name}}</div>
                                                                                                          <div
                                                                                                            v-if="serve.description"
                                                                                                            class="food-description"
                                                                                                          >{{serve.description | truncate(140, '...')}}</div>
                                                                                                          <div class="food-price">
                                                                                                            ${{ serve.price_cents.toFixed(2)/100}}
                                                                                                          </div>
                                                                                                          <br />
                                                                                                        </div>
                                                                                            </div>
                                                                                              <div class="half-width2right">
                                                                                                <template v-if="serve.images">
                                                                                                  <div
                                                                                                    v-if="serve.images.online_ordering_menu"
                                                                                                    class="backgroundImage"
                                                                                                    v-bind:style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }"
                                                                                                  ></div>
                                                                                              </template>
                                                                                                <template v-else>
                                                                                                  <div class="backgroundImage"
                                                                                                    v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
                                                                                                  >     <NadiIconSmX style="height:140px;" /></div>
                                                                                                </template>
                                                                                              </div>
                                                                                </div>
                                                                  </template>
                                                    </template>
                                            </div>
                                      </div>
                                    </div>
      </template>
      <!-- end 1 -->
  </template>
  <!-- end 0 -->
</template>
</template>
<!-- end 00 -->

<!--// <h1>end new</h1>-->







<!-- <h1>begin new filter for use when open</h1> -->
 <!-- beggin 00 -->

 <template v-if="!valid">

<template v-for="item in upserveSections">
  <!-- beggin 0 -->
  <template v-if="noFiltering">
    <!-- beggin 1 -->
                                 <div class="container menu-line">
                   
                                                <div
                                                  :id="'drawertop-'+ item.id"
                                                  @click="expandChild(item.id)"
                                                  class="display-block row no-lr-margin"
                                                >
                                                  <h2 class="menu-header">
                                                    <span :id="'plus-'+ item.id" class="expand-contract plus visible">+</span>
                                                    <span :id="'minus-'+ item.id" class="expand-contract minus">-</span>
                                                    {{item.name.replace('- To Go', '').replace('To Go', '')}}
                                                    <!-- {{item.timing_mask}} -->
                                                  </h2>
                                                </div>
                                        <div :data="'drawer' + item.id" class="hidden-drawer row no-lr-margin">
                                            <div class="filtree-full" v-for="piece in item.item_ids" :key="piece">
                                                    <template v-for="serve in upserveList" class="grey-bg">
                                                                  <template v-if="serve.id === piece" class="inline-block">
                                                                                <div class="yellow-bg" @click="openModal(serve,item.timing_mask)">
                                                                                            <div class="half-width2left">
                                                                                                      <div class="content-box">
                                                                                                          <div class="name">{{serve.name}}</div>
                                                                                                          <div
                                                                                                            v-if="serve.description"
                                                                                                            class="food-description"
                                                                                                          >{{serve.description | truncate(140, '...')}}</div>
                                                                                                          <div class="food-price">
                                                                                                            ${{ serve.price_cents.toFixed(2)/100}}
                                                                                                          </div>
                                                                                                          <br />
                                                                                                        </div>
                                                                                            </div>
                                                                                              <div class="half-width2right">
                                                                                                <template v-if="serve.images">
                                                                                                  <div
                                                                                                    v-if="serve.images.online_ordering_menu"
                                                                                                    class="backgroundImage"
                                                                                                    v-bind:style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }"
                                                                                                  ></div>
                                                                                              </template>
                                                                                                <template v-else>
                                                                                                  <div class="backgroundImage"
                                                                                                    v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
                                                                                                  >     <NadiIconSmX style="height:140px;" /></div>
                                                                                                </template>
                                                                                              </div>
                                                                                </div>
                                                                  </template>
                                                    </template>
                                            </div>
                                      </div>
                                    </div>

      <!-- end 1 -->
  </template>
<template v-else>
<!-- else -->
<!-- {{selectedDate}} -->
<!-- {{selectedTime}} -->
              <div v-if="item.name !== 'featured item' && item.timing_mask && currentlyAvailable(item.timing_mask.start_time,item.timing_mask.end_time,item.timing_mask.rules,selectedDate,selectedTime) || !item.timing_mask" class="container menu-line">
            <!-- this is available at the started time -->
            
              <div
                :id="'drawertop-'+ item.id"
                @click="expandChild(item.id)"
                class="display-block row no-lr-margin"
              >
              <!-- {{selectedTime}} -->

              <!-- {{item.timing_mask}} -->
                <h2 class="menu-header">
                  <span :id="'plus-'+ item.id" class="expand-contract plus visible">+</span>
                  <span :id="'minus-'+ item.id" class="expand-contract minus">-</span>
                  {{item.name.replace('- To Go', '').replace('To Go', '')}}
                </h2>
              </div>
              <div :data="'drawer' + item.id" class="hidden-drawer row no-lr-margin">
                <div class="filtree-full" v-for="piece in item.item_ids" :key="piece">
                    <template v-for="serve in upserveList" class="grey-bg">
                      <template v-if="serve.id === piece" class="inline-block">
                        <div class="yellow-bg" @click="openModal(serve,item.timing_mask)">
                          <div class="half-width2left">
                            <div class="content-box">
                              <div class="name">{{serve.name}}</div>
                              <div
                                v-if="serve.description"
                                class="food-description"
                              >{{serve.description | truncate(140, '...')}}</div>
                              <div class="food-price">
                                ${{ serve.price_cents.toFixed(2)/100}}
                              </div>
                              <br />
                            </div>
                          </div>
                          <div class="half-width2right">
                            <template v-if="serve.images">
                              <div
                                v-if="serve.images.online_ordering_menu"
                                class="backgroundImage"
                                v-bind:style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }"
                              ></div>
                              <div
                                v-else
                                class="backgroundImage"
                                v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
                              >     <NadiIconSm /></div>
                            </template>
                          </div>
                        </div>
                      </template>
                    </template>
                </div>
              </div>
              </div>

















</template>
  <!-- end 0 -->
</template>


</template>
<!-- end 00 -->

<!--// <h1>end new</h1>-->



































































 
<template v-if="preOrderToggleState">
   <template v-if="upserveSections.length === 0">
     <div class="container text-center pt20">
       Loading...
     </div>
     </template>
         <template v-else>
            <template v-for="item in upserveSections">
            <div style="display:none;" v-if="item.name === 'Feature - Tuesday'||item.name === 'Feature - Wednesday'||item.name === 'Feature - Thursday'||item.name === 'Feature - Friday'||item.name === 'Feature - Saturday'"></div>
            <template v-else>


 <!-- beggin 0 -->
    <template v-if="noFiltering && item.name !== 'featured item'">

              <!-- <br />  -->
              <!-- no filtering -->
                  <!-- beggin 1 -->
                                <template v-if="item.timing_mask === item.timing_mask">
                                  <div class="container menu-line">
                                    
                                                <div
                                                  :id="'drawertop-'+ item.id"
                                                  @click="expandChild(item.id)"
                                                  class="display-block row no-lr-margin"
                                                >
                                                  <h2 class="menu-header">
                                                    <span :id="'plus-'+ item.id" class="expand-contract plus visible">+</span>
                                                    <span :id="'minus-'+ item.id" class="expand-contract minus">-</span>
                                                    {{item.name.replace('- To Go', '').replace('To Go', '')}}
                                                    <!-- {{item.timing_mask}} -->
                                                  </h2>
                                                </div>
                                        <div :data="'drawer' + item.id" class="hidden-drawer row no-lr-margin">
                                            <div class="filtree-full" v-for="piece in item.item_ids" :key="piece">
                                
                                                    <template v-for="serve in upserveList" class="grey-bg">
                                                                  <template v-if="serve.id === piece" class="inline-block">
                                                                                <div class="yellow-bg" @click="openModal(serve,item.timing_mask)">
                                                                                            <div class="half-width2left">
                                                                                                      <div class="content-box">
                                                                                                          <div class="name">{{serve.name}}</div>
                                                                                                          <div
                                                                                                            v-if="serve.description"
                                                                                                            class="food-description"
                                                                                                          >{{serve.description | truncate(140, '...')}}</div>
                                                                                                          <div class="food-price">
                                                                                                            ${{ serve.price_cents.toFixed(2)/100}}
                                                                                                          </div>
                                                                                                          <br />
                                                                                                        </div>
                                                                                            </div>
                                                                                              <div class="half-width2right">
                                                                                                <template v-if="serve.images">
                                                                                                  <div
                                                                                                    v-if="serve.images.online_ordering_menu"
                                                                                                    class="backgroundImage"
                                                                                                    v-bind:style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }"
                                                                                                  ></div>
                                                                                              </template>
                                                                                                <template v-else>
                                                                                                  <div class="backgroundImage"
                                                                                                    v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
                                                                                                  >     <NadiIconSmX style="height:140px;" /></div>
                                                                                                </template>
                                                                                              </div>
                                                                                </div>
                                                                  </template>
                                                    </template>
                                            </div>
                                      </div>
                                    </div>
                                </template>
                  <!-- end 1 -->



      <!-- end 0 - this one below -->
      </template>
      <template v-else>

<!-- filtering -->
<!-- {{item.timing_mask}} -->

         <template v-if="item.timing_mask === null">
           <!-- no timing mask -->
                <div class="container menu-line">
                  
              <div
                :id="'drawertop-'+ item.id"
                @click="expandChild(item.id)"
                class="display-block row no-lr-margin"
              >
                <h2 class="menu-header">
                  <span :id="'plus-'+ item.id" class="expand-contract plus visible">+</span>
                  <span :id="'minus-'+ item.id" class="expand-contract minus">-</span>
                  {{item.name.replace('- To Go', '').replace('To Go', '')}}
                  {{item.timing_mask}}
                </h2>
              </div>
              <div :data="'drawer' + item.id" class="hidden-drawer row no-lr-margin">
                <div class="filtree-full" v-for="piece in item.item_ids" :key="piece">
              
                    <template v-for="serve in upserveList" class="grey-bg">
                      <template v-if="serve.id === piece" class="inline-block">
                        <div class="yellow-bg" @click="openModal(serve,item.timing_mask)">
                          <div class="half-width2left">
                            <div class="content-box">
                              <div class="name">{{serve.name}}</div>
                              <div
                                v-if="serve.description"
                                class="food-description"
                              >{{serve.description | truncate(140, '...')}}</div>
                              <div class="food-price">
                                ${{ serve.price_cents.toFixed(2)/100}}
                              </div>
                              <br />
                            </div>
                          </div>
                          <div class="half-width2right">
                            <template v-if="serve.images">
                              <div
                                v-if="serve.images.online_ordering_menu"
                                class="backgroundImage"
                                v-bind:style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }"
                              ></div>
                           </template>
                            <template v-else>
                              <div class="backgroundImage"
                                v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
                              >     <NadiIconSmX style="height:140px;" /></div>
                            </template>
                          </div>
                        </div>
                      </template>
                    </template>
               
                </div>
              </div>
              </div>
                </template>
                <template v-else>



              <div v-if="currentlyAvailable(item.timing_mask.start_time,item.timing_mask.end_time,item.timing_mask.rules,selectedDate,selectedTime)" class="container menu-line">
                
            <!-- this is available at the started time -->
              <div  
                :id="'drawertop-'+ item.id"
                @click="expandChild(item.id)"
                class="display-block row no-lr-margin"
              >
                <h2 class="menu-header">
                  <span :id="'plus-'+ item.id" class="expand-contract plus visible">+</span>
                  <span :id="'minus-'+ item.id" class="expand-contract minus">-</span>
                  {{item.name.replace('- To Go', '').replace('To Go', '')}}
                </h2>
              </div>
              <div :data="'drawer' + item.id" class="hidden-drawer row no-lr-margin">
                <div class="filtree-full" v-for="piece in item.item_ids" :key="piece">
                    <template v-for="serve in upserveList" class="grey-bg">
                      <template v-if="serve.id === piece" class="inline-block">
                        <div class="yellow-bg" @click="openModal(serve,item.timing_mask)">
                          <div class="half-width2left">
                            <div class="content-box">
                              <div class="name">{{serve.name}}</div>
                              <div
                                v-if="serve.description"
                                class="food-description"
                              >{{serve.description | truncate(140, '...')}}</div>
                              <div class="food-price">
                                ${{ serve.price_cents.toFixed(2)/100}}
                              </div>
                              <br />
                            </div>
                          </div>
                          <div class="half-width2right">
                            <template v-if="serve.images">
                              <div
                                v-if="serve.images.online_ordering_menu"
                                class="backgroundImage"
                                v-bind:style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }"
                              ></div>
                              <div
                                v-else
                                class="backgroundImage"
                                v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
                              >     <NadiIconSm /></div>
                            </template>
                          </div>
                        </div>
                      </template>
                    </template>
                </div>
              </div>
              </div>
  </template>
  </template>
  </template>
  </template>
  </template>



</template>
          </div>



          <div class="col-sm-4 drawer-on-mobile" :class="{expanded: toggledDrawer}">


<div class="right-column">
<button @click="toggleDrawer()" class="toggle">
<span v-if="toggledDrawer">hide order</span>
<span v-else>view order</span>
</button>

<div class="container mb10 hide-on-mob"> 
<div @click="panelShowChoose('yourOrder')" class="filehalf" style="pointer-events: none;width: 100%;background-color: rgb(240, 93, 91);color: rgb(255, 255, 255);padding: 10px 0 6px 0;">
      <template v-if="valid">
         <h4>{{title.toLowerCase()}} order</h4>
  </template>
      <template v-else>
          <h4>{{title.toLowerCase()}} pre order</h4>
  </template>

  
  </div>
  </div>


<!-- {{panelShow}} -->



<!-- preorder edit here -->

<div v-if="panelShow !== 'customerInfo'" class="container text-center">

              <template v-if="valid">
              <div class="toggleLr hide-on-desktop">
                <div>
                  <button @click="preOrderToggle(false)" :class="{ selected: !preOrderToggleState }">get it now</button></div> 
                <div>
                  <button @click="preOrderToggle(true)" :class="{ selected: preOrderToggleState }">preorder</button> 
                  </div> 
              </div>
              </template>
              <template v-else>
              <div class="mb16 if-mobile"> 
              Now accepting preorders for pick up.
              </div> 
              </template>
  <div class="if-mobile">
              <template v-if="valid">
                  <template v-if="preOrderToggleState">
                  <div class="leftDropdown" style="width: 100%;padding: 0 0 10px 0;">
                  <v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
                  </div>
                  <div class="rightDropdown" style="width: 100%;padding: 0 0 0px 0;" v-if="selectedDate !== null">
                  <v-select v-if="rendered" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
                  </div>
                </template>
              </template>
              <template v-else>
                  <template>
                      <div class="leftDropdown">
                      <v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select></div>
                      <div class="rightDropdown" v-if="selectedDate !== null">
                      <v-select v-if="rendered" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
                      </div>
                  </template>
            </template>

</div>
</div>

<!-- preorder edit here -->






<div v-if="currentOrder && panelShow === 'customerInfo'" class="container text-center">











<button v-if="panelShow === 'customerInfo'" @click="panelShowChoose('yourOrder')" class="filehalf" style="width: 100%;font-size: 24px;padding-top: 3px;margin-top:0px;"><span v-if="currentOrder.preorder === true">edit pre order</span><span v-else>edit order</span></button>

<template v-if="this.currentOrder.charges && this.currentOrder.charges.items.length > 0">
  <br>
</template>


<div style="display:none;">
<template v-if="valid">
<template v-if="preOrderToggleState">
  <div style="margin-top:15px;">
<v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
</div>
<div style="margin-top:15px;" v-if="selectedDate !== null">
<v-select v-if="rendered" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
</div>
</template>
</template>
  <template v-else>
      <template v-if="this.currentOrder.charges && this.currentOrder.charges.items.length > 0">
      <br>  
      <v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
      <div style="margin-top:15px;" v-if="selectedDate !== null">
      <v-select v-if="rendered" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
      </div>

</template>
</template>
</div>


</div>

<div v-if="panelShow === 'customerInfo'">
  <div class="container">
      <hr />
  </div>
            <div v-if="currentOrder" class="container  mt10">
  <h4 v-if="currentOrder.fulfillment_info.type === 'delivery'" class="address-info text-left mt10">address</h4>
<div v-if="currentOrder.fulfillment_info.type === 'delivery'">
<div class="small-message" v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 === ''">please enter a valid delivery address</div>
</div>
              <div v-if="currentOrder.fulfillment_info.type === 'delivery'" class="delivery-box mt10">
               
                <div class="updateAddress">
                  <button
                    v-if="this.currentOrder.fulfillment_info.type === 'delivery'"
                    @click="refreshGoogle()"
                  >update address</button>
                </div>

                <div class="googleValidate">
                  <GoogleValidate
                    class="pointer-all"
                    :key="renderKey"
                    v-if="this.currentOrder.fulfillment_info.type === 'delivery'"
                  />
                </div>
              </div>
              <form class="mb20" @submit="checkForm">
                <div v-if="this.currentOrder.fulfillment_info.type === 'delivery'" style="margin-top: 10px;">
                  <span v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1">
                    {{currentOrder.fulfillment_info.delivery_info.address.address_line1}}</span>
                    <span v-if="currentOrder.fulfillment_info.delivery_info.address.address_line2 !== ''">,</span>
                  <span v-if="currentOrder.fulfillment_info.delivery_info.address.address_line2">
                    {{currentOrder.fulfillment_info.delivery_info.address.address_line2}}
                  </span>
                  <br v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''" />
                  <span v-if="currentOrder.fulfillment_info.delivery_info.address.city"
                  >{{currentOrder.fulfillment_info.delivery_info.address.city}},</span>
                  <span v-if="currentOrder.fulfillment_info.delivery_info.address.zip_code">
                    {{currentOrder.fulfillment_info.delivery_info.address.zip_code}}
                    <br v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''" />
                  </span>

                  <span :class="{attention: attention}" v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''">floor/unit?</span>&nbsp;&nbsp;
                  <input
                    v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''"
                    type="text"
                    id="address_l2"
                    name="address_l2"
                    placeholder="unit/floor"
                    class="formatted"
                    :class="{attention: attention}"
                    autocomplete="no"
                    @click="removeAttention()"
                    v-model="currentOrder.fulfillment_info.delivery_info.address.address_line2"
                  />
  

                  <div class="address-fields display-none">
                    <label class="smblk" for="address_l1">address line 1</label>
                    <br />
                    <input
                      type="text"
                      id="address_l1"
                      name="address_l1"
                      placeholder="address line 1"
                      v-model="currentOrder.fulfillment_info.delivery_info.address.address_line1"
                    />
                    <br />
                    <label class="smblk" for="address_l2">address line 2</label>
                    <br />
                    <input
                      type="text"
                      id="address_l2"
                      name="address_l2"
                      placeholder="address line 2"
                      v-model="currentOrder.fulfillment_info.delivery_info.address.address_line2"
                    />
                    <br />

                    <label class="smblk" for="city">city:</label>
                    <br />
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="city"
                      v-model="currentOrder.fulfillment_info.delivery_info.address.city"
                    />
                    <br />

                    <label class="smblk" for="state">state:</label>
                    <br />
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="state"
                      v-model="currentOrder.fulfillment_info.delivery_info.address.state"
                    />
                    <br />

                   <label class="smblk" for="zip">zip:</label>
                    <br />
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="10001"
                      v-model="currentOrder.fulfillment_info.delivery_info.address.zip_code"
                    />
                  </div>
                  <hr />
                  <label class="smblk">special instructions:</label>
                  <br />
                  <textarea
                    type="text"
                    id="specialinstructions"
                    name="specialinstructions"
                    placeholder="eg, leave on doorstep"
                    v-model="currentOrder.fulfillment_info.instructions"
                  />

                     </div>
            <input style="width: auto;margin-right: 10px;transform: translateY(1px);" type="checkbox" id="cutlery" name="cutlery" value="cutlery" v-model="currentOrder.fulfillment_info.no_tableware">
  <label class="smblk" for="cutlery">don't include disposable cutlery </label>
                  <br />
                <h4 v-if="currentOrder.fulfillment_info.type === 'pickup'" class="customer-info text-left mt10">customer info<span class="edit-link" v-if="user && user.user"><div @click="editInfo()">&nbsp;(<span class="edit">edit</span>)</div></span></h4>
                <h4 v-else-if="currentOrder.fulfillment_info.type === ''" class="customer-info text-left mt10">customer info<span class="edit-link" v-if="user && user.user"><div @click="editInfo()">&nbsp;(<span class="edit">edit</span>)</div></span></h4>
                <h4 v-else class="text-left mt10">customer info<span class="edit-link" v-if="user && user.user"><div @click="editInfo()">&nbsp;(<span class="edit">edit</span>)</div></span></h4>





                <label class="smblk" for="name">name:</label>
                <br />

              <div v-if="user && user.user && user.user.deliveryAddress && user.user.deliveryAddress.name && user.user.deliveryAddress.name !== ''" style="margin-bottom: 10px;">{{user.user.deliveryAddress.name}}</div>
             <input v-else
              type="text"
              id="name"
              name="name"
              placeholder="name"
              v-model="currentOrder.fulfillment_info.customer.first_name"
              />
               <label class="smblk" for="email">email:</label>
                <br />
                <div v-if="emailAddress" style="margin-bottom: 10px;">{{emailAddress}}</div>
                <input
                v-else
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  v-model="email"
                />

               <label class="smblk" for="phone">phone:</label>
                <br />
                     <div v-if="user && user.user && user.user.deliveryAddress && user.user.deliveryAddress.phone && user.user.deliveryAddress.phone !== ''" style="margin-bottom: 10px;">{{user.user.deliveryAddress.phone}}</div>
                <input v-else
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="(555) 555-5555"
                  v-model="currentOrder.fulfillment_info.customer.phone"
                />

            <input style="width: auto;margin-right: 10px;transform: translateY(1px);display:none;" type="checkbox" id="sms" name="sms" value="sms" v-model="currentOrder.sms">
  <label class="smblk" for="sms" style="display:none;">enable SMS order updates </label>
<!-- billing info -->
          <h4 class="customer-info text-left mt10">billing info
          
               <span class="edit-link" v-if="user && user.user"><div @click="editInfo()">&nbsp;(<span class="edit">edit</span>)</div></span>
          
          </h4>         
         <template v-if="currentOrder.fulfillment_info.type === 'delivery'"> 
          <div style="clear: both;width: 100%;margin-bottom: 10px;height: 20px;" v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''">

              <div style="float: left;width: 15px;height: 20px;margin-right: 5px;padding-top: 2px;">
              <input type="checkbox" id="checkbox" v-model="checked" />
              </div>

              <div style="float: left; height: 20px;">
              <label class="smblk" for="checkbox">same as delivery address</label>
              </div>
</div>
       </template>
<!-- <div v-if="checked === false"> -->
                <label class="smblk" for="name">name:</label>
                <br />
  
   <div v-if="user && user.user && user.user.billingAddress && user.user.billingAddress.name !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.name}}</div>
                <input v-else
                  type="text"
                  id="name-billing"
                  name="name"
                  placeholder="name"
                  v-model="currentOrder.billing.billing_name"
                />
                <label class="smblk" for="address">billing address:</label>
                <br />
     <div v-if="user && user.user && user.user.billingAddress && user.user.billingAddress.addressLine1 !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.addressLine1}}&nbsp;{{user.user.billingAddress.addressLine2}}</div>
                <input v-else
                  type="text"
                  id="address"
                  name="address"
                  placeholder="address"
                  v-model="currentOrder.billing.billing_address"
                />

                <label class="smblk" for="postal_code">billing postal code:</label>
                <br />
                     <div v-if="user && user.user && user.user.billingAddress && user.user.billingAddress.zip !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.zip}}</div>
                <input v-else
                  type="text"
                  id="postal_code"
                  name="postal_code"
                  placeholder="postal code"
                  v-model="currentOrder.billing.billing_postal_code"
                />
              </form>
            </div>
            </div>
<div class="container mt10">
              <ul class="order-sidebar" v-if="panelShow === 'yourOrder'">
                <template v-if="currentOrder.charges">
                <li v-for="order in currentOrder.charges.items" :key="order.cartId" class="smblk">
                    <button class="removeClose" @click="removeFromOrder(order)">
                        <CloseModalRedSm />           
                  </button>
<div class="mt5">
                  <b>{{order.quantity}}</b>
                  {{order.name}}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  ${{order.price_cents.toFixed(2)/100 * order.quantity}}
<div v-if="order.modifiers.length > 0"> 
<div class="small-message grey" v-for="mod in order.modifiers">
{{mod.name}} <b v-if="mod.price > 0">+${{mod.price | showToFixed}}</b>
</div>
</div>
                  <div v-if="order.instructions !== ''" class="order-instructions">
             
                    <i>{{order.instructions}}</i>
            
                  </div>
                  <div v-else>
          
                  </div>
                  </div>
                </li>
                </template>
              </ul>

<!-- start panel -->
<!-- start panel -->
<!-- start panel -->
<template v-if="this.currentOrder.charges && this.currentOrder.charges.items.length > 0">
              <!-- <div class="mt10" v-if="total > 0"> -->
                <template v-if="panelShow === 'customerInfo'">
              <div class="mt10">
                <button id="noTip" class="tipButton quarter" style="display:none;" @click="setTip(0)"><b>no tip</b><br>(0)</button>&nbsp;
                <button
                  id="tipOption1"
                  class="tipButton quarter"
                  :class="{ disabled: currentOrder.tipSelected === 1 }"
                  @click="setTip(1)">
                  <b>18%</b>
                  <br>
                  (${{tip1 | showToFixed }})  
                  </button>&nbsp;
                <button
                  id="tipOption2"
                  class="tipButton quarter"
                 :class="{ disabled: currentOrder.tipSelected === 2 }"
                  @click="setTip(2)">
                  <b>22%</b>
                  <br>
                  (${{tip2 | showToFixed }})  
                  </button>&nbsp;
                <button
                  id="tipOption3"
                  class="tipButton quarter"
                  :class="{ disabled: currentOrder.tipSelected === 3 }"
                  @click="setTip(3)"><b>25%</b>
                  <br>
                  (${{tip3 | showToFixed }})  
                  </button>&nbsp;
                <br>
               <button
                  id="customTip"
                  class="tipButton customtip"
                  :class="{activated: this.customTipVisible, disabled: currentOrder.tipSelected === 4 }"
                  @click="setTip(4)"
                >custom</button>
                &nbsp;
                <currency-input class="custom-tip-button" currency="USD" v-if="customTipVisible === true" v-model="currentAmountToAddCustom" />
              </div>
              <hr />
              </template>


<span v-if="panelShow === 'customerInfo'&& currentOrder.preorder === true && this.currentOrder.scheduled_time !== null">
scheduled time:<br><b>{{currentOrder.scheduled_time | formatDate}}</b><br><br>
</span>


                <span v-if="panelShow === 'customerInfo'">subtotal: ${{currentOrder.charges.preTotal | showToFixed}}</span>
              <span v-else><b>subtotal: ${{currentOrder.charges.preTotal | showToFixed}}</b></span>

              <br />
             <span  v-if="panelShow === 'customerInfo'">tax: ${{currentOrder.charges.taxes | showToFixed}}</span>
            <!-- <div v-if="custom === true"> -->
            <!-- custom tip: ${{ Number(currentAmountToAdd).toFixed(2)/100  }} -->
            <!-- </div> -->
            <div v-if="panelShow === 'customerInfo'">
             tip: ${{currentOrder.charges.tip.amount | showToFixed }}
            </div>
              <hr v-if="panelShow === 'customerInfo'" />
              <b v-if="panelShow === 'customerInfo'">order total: ${{currentOrder.charges.total | showToFixed }}</b>





<br v-if="panelShow === 'customerInfo'"/>
</template>
<template v-else>
<div class="text-center cart-empty-class">
cart empty
</div>
</template>

<template v-if="panelShow === 'yourOrder'">
<button @click="panelShowChoose('customerInfo')" class="mt10 fw filehalf deactivated" disabled="disabled" style="width:100%;margin-top: 15px;pointer-events:none;display:none;" v-if="this.currentOrder.charges && this.currentOrder.charges.items.length === 0">customer info</button>
 <button style="width: 100%;font-size: 24px;padding-top: 3px;width:100%;" @click="panelShowChoose('customerInfo')" class="mt10 fw filehalf" v-else>checkout</button>
</template>
<template v-if="panelShow === 'customerInfo'">
<template v-if="giftCardPanel ===  false">

<template v-if="currentOrder.preorder === true">


  <div class="small-message" v-if="selectedTime === null">please select a date and time at the top of this page</div>
  <div class="small-message" v-if="currentOrder.charges.total === 0">please add some items to your cart</div>
  <div class="small-message" v-if="currentOrder.fulfillment_info.customer.first_name === ''">please enter a customer name</div>
<template v-if="this.$store.state.loggedIn">

  <div class="small-message" v-if="currentOrder.fulfillment_info.customer.email === ''">please enter a customer email address</div>


</template>
<template v-else>
  <div class="small-message" v-if="currentOrder.fulfillment_info.customer.email === ''">please enter a customer email address</div>

</template>
  <div class="small-message" v-if="currentOrder.fulfillment_info.customer.phone === ''">please enter a customer phone number</div>
  <div class="small-message" v-if="currentOrder.billing.billing_name === ''">please enter a billing name</div>
  <div class="small-message" v-if="currentOrder.billing.billing_address === ''">please enter a billing address</div>
  <div class="small-message" v-if="currentOrder.billing.billing_postal_code === ''">please enter a billing postal code</div>


<template v-if="this.$store.state.loggedIn && panelShow === 'customerInfo'">

<template v-if="selectedTime !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone && currentOrder.fulfillment_info.customer.phone !== ''">
<!-- <SavedCard :orderTotal="currentOrder.charges.total" :disabled="false" :emailAddress="emailAddress" :title="title" /> -->


  <template v-if="$store.state.currentUserEmail">
<template v-for="savedCard in savedCards">
<button v-if="savedCard.primary ===  true" class="mt10 fw" :class="{disabled: disabled}" style="margin-top:20px;" @click="tokenizedPayment(currentOrder.charges.total,savedCard.approvalData.uniqueTransId)">Use Stored Card<br>({{savedCard.approvalData.maskedAccount}})
</button> 
</template>
</template>
</template>
<template v-else>

  <template v-if="$store.state.currentUserEmail">
<template v-for="savedCard in savedCards">
<button v-if="savedCard.primary ===  true" class="mt10 fw disabled" style="margin-top:20px;" @click="tokenizedPayment(currentOrder.charges.total,savedCard.approvalData.uniqueTransId)">Use Stored Card<br>({{savedCard.approvalData.maskedAccount}})
</button> 
</template>
</template>


<!-- <SavedCard :orderTotal="currentOrder.charges.total" :disabled="true" :emailAddress="emailAddress" :title="title" /> -->
</template>


</template>























<template v-if="this.$store.state.loggedIn">

        <button v-if="selectedTime !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" class="mt10 fw" style="margin-top:20px;" id="cip-pay-btn" @click="cippaybutton">Credit/Debit Pay</button> 
            <button v-else class="mt10 fw" style="margin-top:20px;" id="cip-pay-btn" @click="cippaybutton" disabled>Credit/Debit Pay</button> 

</template>
<template v-else>
        <button v-if="selectedTime !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" class="mt10 fw" style="margin-top:20px;" id="cip-pay-btn" @click="cippaybutton">Credit/Debit Pay</button> 
            <button v-else class="mt10 fw" style="margin-top:20px;" id="cip-pay-btn" @click="cippaybutton" disabled>Credit/Debit Pay</button> 
</template>

</template>
<template v-else>
<!-- {{user}} -->






  <div class="small-message" v-if="currentOrder.charges.total === 0">please add some items to your cart</div>
  <div class="small-message" v-if="currentOrder.fulfillment_info.customer.first_name === ''">please enter a customer name</div>

<template v-if="this.$store.state.loggedIn">

  <div class="small-message" v-if="currentOrder.fulfillment_info.customer.email === ''">please enter a customer email address</div>


</template>
<template v-else>
  <div class="small-message" v-if="currentOrder.fulfillment_info.customer.email === ''">please enter a customer email address</div>

</template>

  <div class="small-message" v-if="currentOrder.fulfillment_info.customer.phone === ''">please enter a customer phone number</div>
  <div class="small-message" v-if="currentOrder.billing.billing_name === ''">please enter a billing name</div>
  <div class="small-message" v-if="currentOrder.billing.billing_address === ''">please enter a billing address</div>
  <div class="small-message" v-if="currentOrder.billing.billing_postal_code === ''">please enter a billing postal code</div>








<template v-if="this.$store.state.loggedIn && panelShow === 'customerInfo'">

<template v-if="currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''">
<!-- <SavedCard :orderTotal="currentOrder.charges.total" :disabled="false" :emailAddress="emailAddress" :title="title" /> -->


  <template v-if="$store.state.currentUserEmail">
<template v-for="savedCard in savedCards">

<button v-if="savedCard.primary ===  true" class="mt10 fw" :class="{disabled: disabled}" style="margin-top:20px;" @click="tokenizedPayment(currentOrder.charges.total,savedCard.approvalData.uniqueTransId)">Use Stored Card<br>({{savedCard.approvalData.maskedAccount}})
</button> 
</template>
</template>


</template>
<template v-else>


  <template v-if="$store.state.currentUserEmail">
<template v-for="savedCard in savedCards">
<button v-if="savedCard.primary ===  true" class="mt10 fw disabled" style="margin-top:20px;" @click="tokenizedPayment(currentOrder.charges.total,savedCard.approvalData.uniqueTransId)">Use Stored Card<br>({{savedCard.approvalData.maskedAccount}})
</button> 
</template>

</template>
<!-- <SavedCard :orderTotal="currentOrder.charges.total" :disabled="true" :emailAddress="emailAddress" :title="title" /> -->
</template>


</template>






<template v-if="this.$store.state.loggedIn">
<!-- you are logged in -->
<button v-if="currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" class="mt10 fw" style="margin-top:20px;" id="cip-pay-btn" @click="cippaybutton">Credit/Debit Pay</button> 
<button v-else class="mt10 fw" style="margin-top:20px;" id="cip-pay-btn" @click="cippaybutton" disabled>Credit/Debit Pay</button> 


</template>
<template v-else>
<!-- you are not logged in -->

<button v-if="currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" class="mt10 fw" style="margin-top:20px;" id="cip-pay-btn" @click="cippaybutton">Credit/Debit Pay</button> 
<button v-else class="mt10 fw" style="margin-top:20px;" id="cip-pay-btn" @click="cippaybutton" disabled>Credit/Debit Pay</button> 


</template>









</template>
</template>

<template v-if="giftCardPanel ===  false">
  

      <!--////-->
      <template v-if="currentOrder.preorder === true">
      <button 
      v-if="selectedTime !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''"
      @click="showGiftcard()" id="cip-pay-btn" class="fw" style="margin-bottom: 20px;margin-top: 15px;">Use Giftcard</button>
      <button 
      v-else id="cip-pay-btn" class="fw" style="margin-bottom: 20px;margin-top: 15px;" disabled>Use Giftcard</button>
      </template>
      <template v-else>
      <button 
      v-if="currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''"
      @click="showGiftcard()" id="cip-pay-btn" class="fw" style="margin-bottom: 20px;margin-top: 15px;">Use Giftcard</button>
      <button 
      v-else id="cip-pay-btn" class="fw" style="margin-bottom: 20px;margin-top: 15px;" disabled>Use Giftcard</button>


      </template>
      <!--////-->



</template>



<template v-if="giftCardPanel ===  true">
<template v-if="user && user.user && user.user.email">

<br>


    <h4 v-if="showInsufficientFunds === true" class="error" style="text-align:left">insufficient funds</h4>
  <input maxlength="16" @change="validator(cardNumberInput)" v-model="cardNumberInput" style="margin-top: 20px;" class="giftcardinput" placeholder="enter your giftcard number">
<div v-if="validNumber === false" class="small-message">invalid giftcard number</div>



              <button class="mt10 fw" style="margin-bottom: 20px;margin-top:10px;"
                v-if="validNumber && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== ''"
                id="cip-pay-btn"
                @click="useGiftCardBalance()"
              >Pay With Giftcard</button>
              <button class="mt10 fw" style="margin-bottom: 20px;margin-top:10px;" 
               v-else disabled>Pay With Giftcard</button>
</template>
  <template v-else>
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
  <span style="color:#f58e58;">  
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
<!--      // end of right col-->

      </div>
      <!--<h1>ccc</h1>-->   
      </div>
      <div>

      </div>
      
      
      </div>
      </section>
 <!--  <pre v-if="this.title === 'Mamnoon'">{{this.$store.state.storeCurrentOrderUpdateMamnoon}}</pre>-->
 <!-- <pre v-if="this.title === 'Mamnoon Street'">{{this.$store.state.storeCurrentOrderUpdateStreet}}</pre> -->
<!-- <pre v-if="this.title === 'Mbar'">{{this.$store.state.storeCurrentOrderUpdateMbar}}</pre> -->


   <!--// ccc-->



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
import SavedCard from "@/components/SavedCard";
import CloseModalRedSm from "@/components/svgIcons/CloseModalRedSm";

import VueAspectRatio from "vue-aspect-ratio";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";

import NadiIconxx from "@/components/svgIcons/NadiIconxx";
import NadiIcon from "@/components/svgIcons/NadiIcon";
import NadiIconSm from "@/components/svgIcons/NadiIconSm";
import NadiIconSmX from "@/components/svgIcons/NadiIconSmX";

import moment from 'moment'
import tz from 'moment-timezone'

import swal from "vue-sweetalert2";
export default {
      metaInfo: {
      name: 'UpserveOlo',
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'order online',
      // all titles will be injected into this template
      titleTemplate: '%s | nadi mama'
    },
  name: "UpserveOlo",
  props: ["data","emailAddress","oloEndpoint","menuEndpoint","title","userData"],
  components: {
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
    NadiIconxx,
    NadiIconSm,
    NadiIconSmX,
    SavedCard
  },
  computed: {	
computedAddition(){
  

  //  {{currentItemModifierArray}}


  let addOn = 0
  this.currentItemModifierArray.forEach(function(x){
    addOn = addOn + x.price
  })
  let combo = addOn + this.currentItem.price_cents
  return combo/100

},
correctTipSelected(i){
return this.currentOrder.tipSelected === i
},
    customAmountAddition(){
      return this.currentAmountToAddCustom
    },
    googleAddress() {	
      return this.$store.state.googleAddress;	
    },
    tip0() {	

    if(this.title === 'Mamnoon'){
      return Number(this.$store.state.storeCurrentOrderUpdateMamnoon.charges.preTotal) * 0;	
    }else if(this.title === 'Mamnoon Street'){
      return Number(this.$store.state.storeCurrentOrderUpdateStreet.charges.preTotal) * 0;	
    }else if(this.title === 'Mbar'){
      return Number(this.$store.state.storeCurrentOrderUpdateMbar.charges.preTotal) * 0;	
    }

    },	
    tip1() {	

    if(this.title === 'Mamnoon'){
      return Number(this.$store.state.storeCurrentOrderUpdateMamnoon.charges.preTotal) * 0.18;	
    }else if(this.title === 'Mamnoon Street'){
      return Number(this.$store.state.storeCurrentOrderUpdateStreet.charges.preTotal) * 0.18;	
    }else if(this.title === 'Mbar'){
      return Number(this.$store.state.storeCurrentOrderUpdateMbar.charges.preTotal) * 0.18;		
    }
    },	
    tip2() {	

    if(this.title === 'Mamnoon'){
      return Number(this.$store.state.storeCurrentOrderUpdateMamnoon.charges.preTotal) * 0.22;	
    }else if(this.title === 'Mamnoon Street'){
      return Number(this.$store.state.storeCurrentOrderUpdateStreet.charges.preTotal) * 0.22;	
    }else if(this.title === 'Mbar'){
      return Number(this.$store.state.storeCurrentOrderUpdateMbar.charges.preTotal) * 0.22;		
    }


    },	
    tip3() {	

    if(this.title === 'Mamnoon'){
      return Number(this.$store.state.storeCurrentOrderUpdateMamnoon.charges.preTotal) * 0.25;	
    }else if(this.title === 'Mamnoon Street'){
      return Number(this.$store.state.storeCurrentOrderUpdateStreet.charges.preTotal) * 0.25;	
    }else if(this.title === 'Mbar'){
      return Number(this.$store.state.storeCurrentOrderUpdateMbar.charges.preTotal) * 0.25;		
    }



      
    }
  },	
  watch: {	
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

// console.log('updateing useing')
// console.log(this.currentOrder.fulfillment_info.customer.email)
// console.log(this.user.user.email)

if(this.currentOrder.fulfillment_info.customer && this.user.user){
this.currentOrder.fulfillment_info.customer.email = this.user.user.email
}
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

      for(var item of curOr.charges.items){

        let modifierAmount = 0

            for(var mod of item.modifiers){
              modifierAmount = modifierAmount + mod.price
            }
          // console.log(modifierAmount)
          let price = item.price + modifierAmount
          let itemAddition = item.quantity * price
          preTotal = preTotal + itemAddition
      }

      curOr.charges.preTotal = preTotal
      let currentTax = Number(preTotal) * Number(this.upserveTaxRate)


      // console.log('this.upserveTaxRate')
      // console.log(Number(this.upserveTaxRate))
      // console.log('preTotal')
      // console.log(Number(preTotal))

      // console.log('currentTax')
      // console.log(currentTax)



      curOr.charges.taxes = Math.round(currentTax)
      
      curOr.charges.tip.amountOptions[0] = curOr.charges.preTotal * 0
      curOr.charges.tip.amountOptions[1] = curOr.charges.preTotal * 0.18
      curOr.charges.tip.amountOptions[2] = curOr.charges.preTotal * 0.22
      curOr.charges.tip.amountOptions[3] = curOr.charges.preTotal * 0.25
      curOr.charges.tip.amountOptions[4] = this.customAmountAddition * 100
    
      curOr.charges.tip.amount = curOr.charges.tip.amountOptions[curOr.tipSelected]
      curOr.charges.total = curOr.charges.preTotal + curOr.charges.taxes + curOr.charges.tip.amount
      curOr.payments.payments[0].amount = curOr.charges.total
      curOr.currentAmountToAddCustom = this.customAmountAddition * 100
  //  }

    if(this.title === 'Mamnoon'){
        let storeCurrentOrderUpdateMamnoon = curOr;
        this.$store.commit("upserveOrderCurrentOrderUpdateMamnoon", { storeCurrentOrderUpdateMamnoon });	
    }else if(this.title === 'Mamnoon Street'){
        let storeCurrentOrderUpdateStreet = curOr;
        this.$store.commit("upserveOrderCurrentOrderUpdateStreet", { storeCurrentOrderUpdateStreet });	
    }else if(this.title === 'Mbar'){
        let storeCurrentOrderUpdateMbar = curOr;
        this.$store.commit("upserveOrderCurrentOrderUpdateMbar", { storeCurrentOrderUpdateMbar });	
    }
    // console.log(curOr)
    
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

if(this.selectedDate === null && this.selectedTime === null){
this.noFiltering = true
}else{
  this.noFiltering = false
}

let itemsToRemove = []

if(this.currentOrder.charges){
for (var value of this.currentOrder.charges.items) {
  // console.log(moment(this.selectedTime.time).format('HH:mm:ss'))
  if(value.timing_mask){
    // console.log(value.timing_mask.rules)
    // console.log(this.selectedDate.dayLabel.substring(0,3).toLowerCase())
  if(!value.timing_mask.rules.includes(this.selectedDate.dayLabel.substring(0,3).toLowerCase())){
    this.removeFromOrder(value)
    itemsToRemove.push(value)
  }
  }
}
}
let removalItems = []
if(itemsToRemove.length > 1){
removalItems = itemsToRemove.map(x => ' ' + x.name.slice(0, -1) )
}else{
removalItems = itemsToRemove.map(x => ' ' + x.name )
}

if(removalItems.length === 2){
  removalItems[removalItems.length - 1] = " and" + removalItems[removalItems.length - 1]
  removalItems = removalItems.toString().replace(',','');
}else if(removalItems.length > 2){
  removalItems[removalItems.length - 1] = " and" + removalItems[removalItems.length - 1]
}

if(itemsToRemove.length === 1){


        this.$swal({ 
           text: removalItems + ' is not available at the new day you have selected and has been removed from your order.'
          });



}else if(itemsToRemove.length>1){


        this.$swal({ 
           text: removalItems + ' are not available at the new day you have selected and have been removed from your order.'
          });



}

this.currentOrder.scheduled_time = null

this.selectedTime = null

},
selectedTime(){

if(this.selectedDate === null && this.selectedTime === null){
this.noFiltering = true
}else{
  this.noFiltering = false

// console.log(this.selectedDate)
// console.log(this.selectedTime)


}

let itemsToRemove = []

if(this.currentOrder.charges){
for (var value of this.currentOrder.charges.items) {
if(value.timing_mask){
if(!this.isBetween(value.timing_mask.start_time,value.timing_mask.end_time,moment(this.selectedTime.time).format('HH:mm:ss'))){
// console.log(value + " not available")
this.removeFromOrder(value)
itemsToRemove.push(value)
}}}
}
let removalItems = []
if(itemsToRemove.length > 1){
removalItems = itemsToRemove.map(x => ' ' + x.name.slice(0, -1) )
}else{
removalItems = itemsToRemove.map(x => ' ' + x.name )
}


if(removalItems.length === 2){
  removalItems[removalItems.length - 1] = " and" + removalItems[removalItems.length - 1]
  removalItems = removalItems.toString().replace(',','');
}else if(removalItems.length > 2){
  removalItems[removalItems.length - 1] = " and" + removalItems[removalItems.length - 1]
}

if(itemsToRemove.length === 1){




        this.$swal({ 
           text: removalItems + ' is not available at the new day you have selected and has been removed from your order.'
          });



}else if(itemsToRemove.length>1){

        this.$swal({ 
           text: removalItems + ' are not available at the new day you have selected and have been removed from your order.'
          });


}

  if(this.selectedTime){
    this.currentOrder.scheduled_time = this.selectedTime.time
  }else{
    this.currentOrder.scheduled_time = null
  }

},
    email(){
        this.currentOrder.fulfillment_info.customer.email = this.email.toLowerCase();
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
      googleAddressObject.route = newAddress.address_components.filter(	
        (obj) => {	
          return obj.types[0] === "route";	
        }	
      )[0].long_name;	
}	
if(newAddress){	
      googleAddressObject.streetNumber = newAddress.address_components.filter(	
        (obj) => {	
          return obj.types[0] === "street_number";	
        }	
      )[0].long_name;	
}	
if(newAddress){	
      googleAddressObject.locality = newAddress.address_components.filter(	
        (obj) => {	
          return obj.types[0] === "locality";	
        }	
      )[0].long_name;	
}	
if(newAddress){	
      googleAddressObject.state = newAddress.address_components.filter(	
        (obj) => {	
          return obj.types[0] === "administrative_area_level_1";	
        }	
      )[0].long_name;	
}	
if(newAddress){	
      googleAddressObject.zip = newAddress.address_components.filter((obj) => {	
        return obj.types[0] === "postal_code";	
      })[0].long_name;	
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

    }
    },
  data() {
  return {
          savedDeliveryAddress: {},
      savedBillingAddress: {},
    updateCI: false,
    updateBilling: false,
    editInfoVisible: false,
    savedCards: null,
    resizeIndex: 1,
    nowTime: null,
    nowDate: null,
    allOptionsSelected: false,
    currentModifiers: [],
    // test: 'testing',
    test: 'not testing',
    validNumber: false,
      updateBilling: false,
      updateDelivery: false,
      savedDeliveryAddress: {},
      savedBillingAddress: {},
      deliveryAddress: {
        name: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: ''
      },
      billingAddress: {
        name: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: ''
      },
      user: {},
      noFiltering: true,
      currentRestaurantHours: '',
      nextOpen: '',
      preOrderToggleState: false,
      currentRestaurantDays: [],
      rendered: false,
      timeslotsCreated: [],
      openTimesUpdated: [],
      openTimes: [],
      openDays: [],
      dates_additional_information: null,
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
      upserveTaxRate: 0.101,
      modalOpen: false,
      currentItem: null,
      currentItemQuanity: 1,
      cartTotal: 0,
      textdescription: "",
      blockedBody: this.data,
      upserve: null,
      upserveList: null,
      upserveSections: [],
      upserveCategories: [],
      currentlyFiltered: [],
      currentOrder: { 
        timeStamp: null,
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
          total: 0,
          preTotal: 0,
          fees: 0,
          taxes: 0,
          tip: {
            amountOptions: [],
            amount: 0,
            // payment_type: "Generic Online Ordering Integrated",
            payment_type: "Nadi Mama"
          },
          items: [],
        },
        fulfillment_info: {
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
              // payment_type: "Generic Online Ordering Integrated",
              payment_type: "Nadi Mama",
              amount: null,
            },
          ],
        },
      },
    };
  },
  filters: {
  formatDate(value) {
  if (value) {
        let order = moment(String(value));
        return order.tz('America/Los_Angeles').format('LLLL').replace(', 2020', ', at');
  }
},
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
    return decvalue.toFixed(2).replace('.00', '')
}
  },
  methods: {
    async checkFormBilling() {
          this.updateBilling = false
        try {
        let response = await this.$http.post("/user/submitbillingaddress", {
          email: this.emailAddress,
          billingAddress: this.user.user.billingAddress
          });
 console.log(response)
          this.savedBillingAddress = response.data.user.billingAddress
          // this.updateBilling = false

       
         } catch (err) {
        console.log(err.response);
      }
        this.getUser()
    },
async checkFormCustomerInfo() {
 this.updateCI = false
        try {
        let response = await this.$http.post("/user/submitdeliveryaddress", {
          email: this.emailAddress,
          deliveryAddress: this.user.user.deliveryAddress
          });
this.savedDeliveryAddress = response.data.user.deliveryAddress
         } catch (err) {
        console.log(err.response);
      }

 this.getUser()
    },
    editInfo(){

       this.editInfoVisible = true 


    },
    clearOrderAndReRoute(){


          this.currentOrder.id = Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29)
          this.currentOrder.confirmation_code = "mamnoon-" + Math.random().toString(36).substr(2, 29)
          let newDate = new Date();
          this.currentOrder.time_placed = newDate;
          this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;
          this.$store.commit("orderCMR", { orderCMR });
          this.$router.push("/orderconfirmation");


    },
    handleClickSignInForCard(emailAddress,approvalData) {
      let self = this
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          var profile = GoogleUser.getBasicProfile();

          // console.log("Email: " + profile.getEmail());

          // console.log(this.$gAuth.isAuthorized)
          // console.log(profile)
          // this.showUserInfo(profile.getEmail())
          self.isSignIn = self.$gAuth.isAuthorized;

          self.$store.commit("logIn");

          let currentUserEmail = profile.getEmail();
          // console.log(profile)
          // console.log(currentUserEmail)
          self.$store.commit("setCurrentUserEmail", { currentUserEmail });
          // location.reload()
          self.checkAndSend(self.emailAddress,approvalData)

          self.clearOrderAndReRoute()
        })
        .catch((error) => {
          //on fail do something
          console.error(error);
        });
    },
    async checkAndSend(email,approvalData){
      console.log('check credit card')

    try {
      let response = await this.$http.post('/credit/checkcreditcard/',{
        email,
        approvalData
      }) 
      console.log('check credit card length')


      console.log(response.data.user)
     if(response.data.user.length > 0){


 this.$swal({ 
    title: "this card has already been saved to your account"
  });


               this.ccBillingPostalCode = null
               this.ccBillingAddress = null
               this.ccBillingName = null

    this.showAddCardFormVisible = false

      }else{







    this.sendApprovalDataToMongo(email, approvalData)
      }
     
 

    } catch (err) {

 this.$swal({ 
    title: "Error"
  });

       
        console.log(err);
      }




   

    },
  sendApprovalDataToMongo(email, approvalData){


console.log('send approval ')

console.log(email, approvalData)


    let infoForPay = {
          approvalData: approvalData,
         email: email
        }
    let infoForPayStringify = infoForPay      
     this.$http
        .post("/credit/creditsavemongo", infoForPayStringify)
        .then((response) => {



 this.$swal({ 
    title: "success! card has been saved."
  });




          this.ccBillingPostalCode = null
          this.ccBillingAddress = null
          this.ccBillingName = null

          this.showAddCardFormVisible = false
          this.setPrimaryIfOnlyOne(email)
          this.getCreditCards();



        })
        .catch((e) => {x
          console.log("errors");
          console.log(e);
        });
  },
    setPrimaryIfOnlyOne(email){
      console.log('spio1')
        let self = this;
        let emailBody = {
          email
        }
      this.$http
        .post("/credit/setprimaryifonlyone", emailBody)
        .then((response) => {

          console.log(response)
          self.getCreditCards();
        })
        .catch((e) => {
          console.log("errors");
          console.log(e);
        });


  },
            async tokenizedPayment(orderTotal,transId){
console.log(orderTotal)

console.log(transId)

      try {
        let response = await this.$http.post("/credit/tokenizedpayment/",{
            orderTotal,
            transId
        });
        console.log(response.data)



console.log('transasction success')
   if(this.title === 'Mamnoon'){

              if(this.$store.state.storeCurrentOrderUpdateMamnoon.preorder === true){
                this.scheduleAnOrder(this.$store.state.storeCurrentOrderUpdateMamnoon,response.data,null);
              }
              
              if(this.$store.state.storeCurrentOrderUpdateMamnoon.preorder === false){
                this.doAnOrder(this.$store.state.storeCurrentOrderUpdateMamnoon,response.data,null);
              }



    }else if(this.title === 'Mamnoon Street'){


              if(this.$store.state.storeCurrentOrderUpdateStreet.preorder === true){
                this.scheduleAnOrder(this.$store.state.storeCurrentOrderUpdateStreet,response.data,null);
              }
              
              if(this.$store.state.storeCurrentOrderUpdateStreet.preorder === false){
                this.doAnOrder(this.$store.state.storeCurrentOrderUpdateStreet,response.data,null);
              }



    }else if(this.title === 'Mbar'){


              if(this.$store.state.storeCurrentOrderUpdateMbar.preorder === true){
                this.scheduleAnOrder($store.state.storeCurrentOrderUpdateMbar,response.data,null);
              }
              
              if(this.$store.state.storeCurrentOrderUpdateMbar.preorder === false){
                this.doAnOrder($store.state.storeCurrentOrderUpdateMbar,response.data,null);
              }

    }



this.toggledDrawer = false



 
         } catch (err) {
        console.log(err.response);
      }



        },
                async getCreditCards() {
      // console.log('get credit cards')
      try {
        let response = await this.$http.get("/credit/getcreditcards/" + this.emailAddress);
        console.log(response.data)
        this.savedCards = response.data.usercreditcards
 
         } catch (err) {
        console.log(err.response);
      }

    },
 setResizeIndex(){
  this.resizeIndex = Math.random();
 },
  showCurrentlyAvailable(){

  },
    selectedOption(id, modifier, mod, modifieritem){

// console.log(mod.price)
      let index = this.currentModifiers.findIndex(p => p.option === id)

      if(index > -1){
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === modifier.id)].option = null
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === modifier.id)].selected = false
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === modifier.id)].price = 0
         this.removeAddOnOne(mod,modifieritem)
      }else{
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === modifier.id)].option = id
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === modifier.id)].selected = true
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === modifier.id)].price = mod.price_cents
        this.addAddOnOne(mod,modifieritem)
      }


// currentModifiers
//  {{currentItemModifierArray}}
// remove it from currentMOdifier array if it doenst exist in top one (current modifiers)

let self = this
let filteredCurrent = this.currentItemModifierArray.filter(function(x){
 return self.currentModifiers.findIndex(p => p.option === x.id) > -1

});

this.currentItemModifierArray = filteredCurrent

// console.log(this.currentModifiers.every( (val, i, arr) => val.selected === true ))
      if(this.currentModifiers.every( (val, i, arr) => val.selected === true ) ){
          this.allOptionsSelected = true
        }else{
          this.allOptionsSelected = false
        }


    },
    emptyCart(){

      this.currentOrder.charges.items = []
      
      if(this.$store.state.loggedIn){
        if(this.currentOrder.fulfillment_info.customer && this.user.user){
        this.currentOrder.fulfillment_info.customer.email = this.user.user.email
        }
      }

    if(this.title === 'Mamnoon'){
        let storeCurrentOrderUpdateMamnoon = this.currentOrder
        this.$store.commit("upserveOrderCurrentOrderUpdateMamnoon", { storeCurrentOrderUpdateMamnoon });	
    }else if(this.title === 'Mamnoon Street'){
        let storeCurrentOrderUpdateStreet = this.currentOrder
        this.$store.commit("upserveOrderCurrentOrderUpdateStreet", { storeCurrentOrderUpdateStreet });	
    }else if(this.title === 'Mbar'){
        let storeCurrentOrderUpdateMbar = this.currentOrder
        this.$store.commit("upserveOrderCurrentOrderUpdateMbar", { storeCurrentOrderUpdateMbar });	
    }



    },
    resetCart(){

    },
addTimes (startTime, endTime) {
  var times = [ 0, 0, 0 ]
  var max = times.length

  var a = (startTime || '').split(':')
  var b = (endTime || '').split(':')

  // normalize time values
  for (var i = 0; i < max; i++) {
    a[i] = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i])
    b[i] = isNaN(parseInt(b[i])) ? 0 : parseInt(b[i])
  }

  // store time values
  for (var i = 0; i < max; i++) {
    times[i] = a[i] + b[i]
  }

  var hours = times[0]
  var minutes = times[1]
  var seconds = times[2]

  if (seconds >= 60) {
    var m = (seconds / 60) << 0
    minutes += m
    seconds -= 60 * m
  }

  if (minutes >= 60) {
    var h = (minutes / 60) << 0
    hours += h
    minutes -= 60 * h
  }

  return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
},
preOrderToggle(c){

this.preOrderToggleState = c


if(c === true){
      this.currentOrder.preorder = true

}else{
      this.currentOrder.preorder = false
this.selectedTime, this.selectedDate = null


}

},
    async upserves() {

      let responseUpserve = await this.$http.get(this.menuEndpoint);
// console.log(responseUpserve)
if(responseUpserve.data.body){
      let upserveProducts = responseUpserve.data.body.items;
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      this.upserveSections = responseUpserve.data.body.sections;

      this.upserveTaxRate = Number(responseUpserve.data.body.tax_rates.filter(x=>x.name === "Sales Tax")[0].percentage_rate)

      this.modifierGroups = responseUpserve.data.body.modifier_groups;
      this.modifiers = responseUpserve.data.body.modifiers;
      this.modifierItems = responseUpserve.data.body.modifiers;
    }
    },
async upserveMongo(){

      let self = this
      let responseUpserve = await this.$http.get(`product/upserve_mongo/${self.title.toLowerCase().replace(' ','')}`);


if(responseUpserve.data.doc[0].menu){

      let upserveProducts = responseUpserve.data.doc[0].menu.items;
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      this.upserveSections = responseUpserve.data.doc[0].menu.sections;

      this.upserveTaxRate = Number(responseUpserve.data.doc[0].menu.tax_rates.filter(x=>x.name === "Sales Tax")[0].percentage_rate)

      this.modifierGroups = responseUpserve.data.doc[0].menu.modifier_groups;
      this.modifiers =responseUpserve.data.doc[0].menu.modifiers;
      this.modifierItems = responseUpserve.data.doc[0].menu.modifiers;
}
},
  async getHours(){


    let self = this
    let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)
    let AcfBlock = responseAcf
    this.hours = AcfBlock.data.acf.content_fields.find(o => o.acf_fc_layout === 'timeranges');   


    this.currentRestaurantHours = this.hours.restaurant_hours[0].restaurant_name.find(o => o.name === this.title.toLowerCase());
    this.openDays = this.currentRestaurantHours.information.days_of_week
    let curRest = this.currentRestaurantHours.information.open_time_range

    this.dates_additional_information = this.currentRestaurantHours.information.additional_information

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
        this.valid = true
        this.currentOrder.preorder = false
        break
        }else{
      this.currentOrder.preorder = true

    }
}
}else{
      this.currentOrder.preorder = true

}



},
currentlyAvailable(startTime,endTime,rules,futureDay,futureTime){




    let weekday = ['mon','tue','wed','thu','fri','sat','sun']

            if(!futureDay && !futureTime){
                let currentDate = new Date();   
                let startDate = new Date(currentDate.getTime());

                startDate.setHours(startTime.split(":")[0]);
                startDate.setMinutes(startTime.split(":")[1]);

                let endDate = new Date(currentDate.getTime());
                endDate.setHours(endTime.split(":")[0]);
                endDate.setMinutes(endTime.split(":")[1]);

                if(rules.includes(weekday[currentDate.getDay()])){
                    return startDate < currentDate && endDate > currentDate
                }
            }

    if(futureDay && !futureTime){
      if(rules.includes(futureDay.dayLabel.substring(0,3).toLowerCase())){
        return true
      }
    }
    if(futureDay && futureTime){

    let currentDate = Date.parse(futureTime.time) 
    let startDate2 = new Date(currentDate);
    let startDate3 = moment(startDate2)._i
    startDate3.setHours(startTime.split(":")[0]);
    startDate3.setMinutes(startTime.split(":")[1]);
    let endDate2 = new Date(currentDate);
    let endDate3 = moment(endDate2)._i
    endDate3.setHours(endTime.split(":")[0]);
    endDate3.setMinutes(endTime.split(":")[1]);
    let validTime = startDate3 < currentDate && endDate3 > currentDate
    let validDay = rules.includes(futureDay.dayLabel.substring(0,3).toLowerCase())

    if(validTime && validDay){
      return true
    }else{
      return false
    }
}




},
isBetween(startTime,endTime,proposedTime){


var format = 'HH:mm'
// var time = moment() gives you current time. no format required.
var time = moment(proposedTime,format),
  beforeTime = moment(startTime, format),
  afterTime = moment(endTime, format);


  // console.log(time,beforeTime,afterTime)
if (time.isBetween(beforeTime, afterTime)) {
  // console.log(true)
  return true
} else {
  //  console.log(false)
  return false
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
              return tF

              }

    },
hideGiftcard(){
  this.giftCardPanel = false
},
showGiftcard(){
  this.giftCardPanel = true
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
              
// console.log(self.currentOrder.billing)

if(self.currentOrder.billing && userInfo.user.billingAddress){

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

               
                
              }

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
      let balanceCheck
    if(self.title === 'Mamnoon'){
      balanceCheck = self.$store.state.storeCurrentOrderUpdateMamnoon.charges.total.toFixed(2)/100
    }else if(self.title === 'Mamnoon Street'){
      balanceCheck = self.$store.state.storeCurrentOrderUpdateStreet.charges.total.toFixed(2)/100
    }else if(self.title === 'Mbar'){
      balanceCheck = self.$store.state.storeCurrentOrderUpdateMbar.charges.total.toFixed(2)/100
    }
          
          
          if (
            Number(
              response.data.resSendData.Responses[0].SvInquiry[0]
                .CurrentBalance[0]
            ) >= balanceCheck
          ) {


console.log(JSON.stringify(self.cardNumberInput))
console.log(JSON.stringify(balanceCheck))
            self.showInsufficientFunds = false;
            self.$http
              .post("/user/usegiftcard", {
                cardNumber: self.cardNumberInput,
                useAmount: JSON.stringify(balanceCheck)
              })
              .then(function (response) {
console.log('response after giftcard')
console.log(response)

                     
                self.currentBalance =
                  response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0];
                  






    if(self.title === 'Mamnoon'){
    console.log(self.$store.state.storeCurrentOrderUpdateMamnoon)
                    if(self.$store.state.storeCurrentOrderUpdateMamnoon.preorder === true){
                  self.scheduleAnOrder(self.$store.state.storeCurrentOrderUpdateMamnoon,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
                
        
               if(self.$store.state.storeCurrentOrderUpdateMamnoon.preorder === false){
                  self.doAnOrder(self.$store.state.storeCurrentOrderUpdateMamnoon,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
    
    
    }else if(self.title === 'Mamnoon Street'){
    
                     if(self.$store.state.storeCurrentOrderUpdateStreet.preorder === true){
                  self.scheduleAnOrder(self.$store.state.storeCurrentOrderUpdateStreet,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
                
                
               if(self.$store.state.storeCurrentOrderUpdateStreet.preorder === false){
                  self.doAnOrder(self.$store.state.storeCurrentOrderUpdateStreet,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
    
    
    }else if(self.title === 'Mbar'){
    
                  if(self.$store.state.storeCurrentOrderUpdateMbar.preorder === true){
                  self.scheduleAnOrder(self.$store.state.storeCurrentOrderUpdateMbar,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
                
                
               if(self.$store.state.storeCurrentOrderUpdateMbar.preorder === false){
                  self.doAnOrder(self.$store.state.storeCurrentOrderUpdateMbar,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
    
    
    
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
console.log(info)
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
    checkForm: function (e) {
      this.errors = [];
      if (!this.currentOrder.fulfillment_info.customer.first_name) {
        this.errors.push("Name required.");
           


 this.$swal({ 
    title: "Name required."
  });

      }

      if (!this.currentOrder.fulfillment_info.customer.phone) {
        this.errors.push("Phone required.");


 this.$swal({ 
    title: "Phone required."
  });


  
      }
      
      if (!this.currentOrder.fulfillment_info.customer.email) {
        this.errors.push('Email required.');
    
       this.$swal({ 
            title: "Valid email required."
          });



      } else if (!this.validEmail(this.currentOrder.fulfillment_info.customer.email)) {
        this.errors.push('Valid email required.');
    
    this.$swal({ 
            title: "Valid email required."
          });
      }

      if (!this.currentOrder.billing.billing_postal_code) {
        this.errors.push('invalid postal code');
    
       this.$swal({ 
            title: "invalid postal code"
          });

      } else if (!this.validPostal(this.currentOrder.billing.billing_postal_code)) {
         this.errors.push('invalid postal code');
      this.$swal({ 
            title: "invalid postal code"
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


removeAttention(){
this.attention = false
},
    toggleDrawer(){
this.toggledDrawer = !this.toggledDrawer
    },
setTip(index) {



this.currentOrder.tipSelected = index



this.tipSelected = index

if(index === 0){
  this.showingCustom(false)
  this.customTipVisible = false
}else if(index === 1){
  this.showingCustom(false)
  this.customTipVisible = false
}else if(index === 2){
  this.showingCustom(false)
  this.customTipVisible = false
}else if(index === 3){
  this.showingCustom(false)
  this.customTipVisible = false
}else if(index === 4){
  this.showingCustom(true)
  this.customTipVisible = true
}
},
    refreshGoogle() {
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

console.log('transasction success')
   if(self.title === 'Mamnoon'){

              if(self.$store.state.storeCurrentOrderUpdateMamnoon.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeCurrentOrderUpdateMamnoon,approvalData,null);
              }
              
              if(self.$store.state.storeCurrentOrderUpdateMamnoon.preorder === false){
                self.doAnOrder(self.$store.state.storeCurrentOrderUpdateMamnoon,approvalData,null);
              }



    }else if(self.title === 'Mamnoon Street'){


              if(self.$store.state.storeCurrentOrderUpdateStreet.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeCurrentOrderUpdateStreet,approvalData,null);
              }
              
              if(self.$store.state.storeCurrentOrderUpdateStreet.preorder === false){
                self.doAnOrder(self.$store.state.storeCurrentOrderUpdateStreet,approvalData,null);
              }



    }else if(self.title === 'Mbar'){


              if(self.$store.state.storeCurrentOrderUpdateMbar.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeCurrentOrderUpdateMbar,approvalData,null);
              }
              
              if(self.$store.state.storeCurrentOrderUpdateMbar.preorder === false){
                self.doAnOrder(self.$store.state.storeCurrentOrderUpdateMbar,approvalData,null);
              }




    }









          
          },
          onTransactionFailure: function (failureData) {
            console.log("Failure Data", failureData);

            // console.log('transasction success')

          },
          onTransactionCancel: function () {
            console.log("transaction cancelled!");
          },
        });
      });
    },
    getToken() {
      let self = this;
      let dataToSend
   if(self.title === 'Mamnoon'){
      dataToSend = self.$store.state.storeCurrentOrderUpdateMamnoon
    }else if(self.title === 'Mamnoon Street'){
      dataToSend = self.$store.state.storeCurrentOrderUpdateStreet
    }else if(self.title === 'Mbar'){
      dataToSend = self.$store.state.storeCurrentOrderUpdateMbar
  }
// added 
      return new Promise(function (resolve, reject) {
        $.ajax({
          // url: "https://enigmatic-savannah-11908.herokuapp.com/order/start-transaction",
          url: "https://young-hamlet-03679.herokuapp.com/order/start-transaction",
           //url: "http://localhost:4000/order/start-transaction",
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(dataToSend),
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








    addAddOnOne(mod, modifieritem) {


      let modAddition = {
        id: mod.id,
        modifier_group_id: modifieritem,
        price: mod.price_cents,
        name: mod.name
      };

      this.currentItemModifierArray.push(modAddition)
      this.currentItem.price_cents = Number(this.currentItem.price_cents);
      // this.currentItem.price_cents = Number(this.currentItem.price_cents)


      if(document.getElementById("add-" + mod.id)){
        document.getElementById("add-" + mod.id).disabled = true;
      }
      if(document.getElementById("remove-" + mod.id)){
        document.getElementById("remove-" + mod.id).disabled = false;
      }

    },
    removeAddOnOne(mod, modifieritem) {



let updatedItems = this.currentItemModifierArray.filter(
        (item) => item.id !== mod.id
      );
      this.currentItemModifierArray = updatedItems;
      this.currentItem.price_cents = Number(this.currentItem.price_cents);
      // this.currentItem.price_cents = Number(this.currentItem.price_cents)


      if(document.getElementById("add-" + mod.id)){
      document.getElementById("add-" + mod.id).disabled = false;
      }
       if(document.getElementById("remove-" + mod.id)){
      document.getElementById("remove-" + mod.id).disabled = true;
       }

},



toggleAddOn(mod,modifieritem){



let element = document.getElementById("toggle-" + mod.id)

if(element.classList.contains('selectedAddOn')){
element.classList.remove('selectedAddOn');
this.removeAddOn(mod, modifieritem);
}else{
element.classList.add('selectedAddOn');

this.addAddOn(mod, modifieritem);



}


},
addAddOn(mod, modifieritem) {


      let modAddition = {
        id: mod.id,
        modifier_group_id: modifieritem,
        price: mod.price_cents,
        name: mod.name
      };

      this.currentItemModifierArray.push(modAddition)
      this.currentItem.price_cents = Number(this.currentItem.price_cents);
      // this.currentItem.price_cents = Number(this.currentItem.price_cents)


      if(document.getElementById("add-" + mod.id)){
        document.getElementById("add-" + mod.id).disabled = true;
      }
      if(document.getElementById("remove-" + mod.id)){
        document.getElementById("remove-" + mod.id).disabled = false;
      }

    },
    removeAddOn(mod, modifieritem) {



let updatedItems = this.currentItemModifierArray.filter(
        (item) => item.id !== mod.id
      );
      this.currentItemModifierArray = updatedItems;
      this.currentItem.price_cents = Number(this.currentItem.price_cents);
      // this.currentItem.price_cents = Number(this.currentItem.price_cents)


      if(document.getElementById("add-" + mod.id)){
      document.getElementById("add-" + mod.id).disabled = false;
      }
       if(document.getElementById("remove-" + mod.id)){
      document.getElementById("remove-" + mod.id).disabled = true;
       }

},
    removeFromOrderDontCloseModal(removal) {

    document.getElementById("add-" + removal.id).disabled = false;
    document.getElementById("remove-" + removal.id).disabled = true;

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

      this.currentOrder.charges.items = concatenated;

      let removeCost = removal.price_cents;

      this.total = this.total - removeCost;

      // let storeCurrentOrder = this.currentOrder;






    },
removeFromOrder(removal) {
      let currentItems = this.currentOrder.charges.items;
      let updatedItems = currentItems.filter(
        (item) => item.cartId !== removal.cartId
      );

      this.currentOrder.charges.items = updatedItems;
      let removeCost = removal.price * removal.quantity;
      // this.total = this.total - removeCost;
      this.currentOrder.charges.total = this.currentOrder.charges.total - removeCost;
      let storeCurrentOrder = this.currentOrder;


      // this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
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

      this.currentItemModifierArray = [];
    },
    closeConfirmationModal() {
      this.orderConfirmationModal = false;
      this.orderCMR = "";
    },
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
        timing_mask: item.timing_mask
      };

          // console.log(this.currentOrder)
          this.currentOrder.charges.items.push(itemToAdd);

          let newDate = new Date();
          this.currentOrder.time_placed = newDate;
          this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;

          this.currentItemModifierArray = [];
          this.allOptionsSelected = false
          this.closeModal();

    },
    addToOrderDontCloseModal(item) {

console.log(item)
      document.getElementById("add-" + item.id).disabled = true;
      document.getElementById("remove-" + item.id).disabled = false;

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
        timing_mask: item.timing_mask
      };

        this.currentOrder.charges.items.push(itemToAdd);

          this.total =
            Number(this.total) + Number(item.price_cents * this.currentItemQuanity);

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
    scheduleAnOrder(currentOrder,approvalData,giftcardbalance) {
      let self = this;
      this.$http.post("/confirmationemail",currentOrder)
      .then((response) => {
          console.log('confirmation email sent')
      }).catch((e) => {
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

          self.orderConfirmationModal = true;
          self.giftcardbalance = giftcardbalance
          self.orderCMR = currentOrder;
          let orderCMR = currentOrder;
          orderCMR.giftcardbalance = giftcardbalance

          self.currentOrder = self.$store.state.storeCurrentOrderUpdate


    self.emptyCart();



        if(self.$store.state.loggedIn){
          // if (confirm("save card ending in " + approvalData.maskedAccount.replace('************','') + " for future use?")) {
          //     console.log("You pressed OK!");
          //     console.log(approvalData.maskedAccount.replace('************',''))
          //     self.checkAndSend(self.emailAddress,approvalData)
          //     self.clearOrderAndReRoute()
          // }


  this.$swal({ 
    title: "save card ending in " + approvalData.maskedAccount.replace('************','') + " for future use?",
    showDenyButton: true,
    confirmButtonText: `Save`
  }).then((confirmed) => {
    if (confirmed) {
              // console.log("You pressed OK!");
              // console.log(approvalData.maskedAccount.replace('************',''))
              self.checkAndSend(self.emailAddress,approvalData)
              self.clearOrderAndReRoute()

    } else {

    }
  });










        }else{
      



  this.$swal({ 
    title: "log in/create an account and save card ending in " + approvalData.maskedAccount.replace('************','') + " for future use?",
    showDenyButton: true,
    confirmButtonText: `Login And Save`
  }).then((confirmed) => {
    if (confirmed) {



                self.handleClickSignInForCard(self.emailAddress,approvalData)

    } else {

    }
  });



        }








          // self.$store.commit("orderCMR", { orderCMR });
          // self.$router.push("/orderconfirmation");


        })
        .catch((e) => {
          console.log("errors");
          console.log(e);
        });
      },
      doAnOrder(currentOrder,approvalData,giftcardbalance) {

      console.log('do an order')
      let self = this;
      console.log(this.oloEndpoint)
      console.log(currentOrder)
      this.$http.post(this.oloEndpoint, currentOrder)
        .then((response) => {
          console.log('response happen');
          console.log(response);
          self.orderConfirmationModal = true;
          self.giftcardbalance = giftcardbalance
          self.orderCMR = response.data;
          let orderCMR = response.data;
          console.log(response.data)
          orderCMR.giftcardbalance = giftcardbalance


          self.emptyCart();

        if(self.$store.state.loggedIn){
          // if (confirm("save card ending in " + approvalData.maskedAccount.replace('************','') + " for future use?")) {
          //     console.log("You pressed OK!");
          //     console.log(approvalData.maskedAccount.replace('************',''))
          //     self.checkAndSend(self.emailAddress,approvalData)
          //     self.clearOrderAndReRoute()
          // }





  this.$swal({ 
    title: "save card ending in " + approvalData.maskedAccount.replace('************','') + " for future use?",
        showDenyButton: true,
    confirmButtonText: `Save`
  }).then((confirmed) => {
    if (confirmed) {
              // console.log("You pressed OK!");
              // console.log(approvalData.maskedAccount.replace('************',''))
              self.checkAndSend(self.emailAddress,approvalData)
              self.clearOrderAndReRoute()

    } else {

    }
  });


        }else{


  this.$swal({ 
    title: "log in/create an account and save card ending in " + approvalData.maskedAccount.replace('************','') + " for future use?",
    showDenyButton: true,
    confirmButtonText: `Save`
  }).then((confirmed) => {
    if (confirmed) {


self.handleClickSignInForCard(self.emailAddress,approvalData)

    } else {

    }
  });



          // if (confirm("log in/create an account and save card ending in " + approvalData.maskedAccount.replace('************','') + " for future use?")) {
          //   self.handleClickSignInForCard(self.emailAddress,approvalData)
          // }
        }




          // self.currentOrder.id = Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29)
          // self.currentOrder.confirmation_code = "mamnoon-" + Math.random().toString(36).substr(2, 29)
          // let newDate = new Date();
          // self.currentOrder.time_placed = newDate;
          // self.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;
          // self.$store.commit("orderCMR", { orderCMR });
          // self.$router.push("/orderconfirmation");

        })
        .catch((e) => {
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
filterForNow(){


let today = new Date()
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let subdays = days.map(function(x){
return x.substring(0,3).toLowerCase()
})

let self2 = this
let tFs = subdays.map(function(x){
return self2.openDays.includes(x)
})



let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 0)

let timeslotsCreated = [];
console.log(this.openTimesUpdated)
for(let i = 1; i < this.openTimesUpdated.length; i++){ 
timeslotsCreated.push({
time: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)),
timelabel: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)).toLocaleTimeString().replace(":00","")
})
} 
let createdItem = {
dayLabel: days[tomorrow.getDay()],
dayName: days[tomorrow.getDay()],
closed: false,
dateData: days[tomorrow.getDay()] + moment(String(tomorrow)).format(' MMM Do'),
dateFormatted: tomorrow.toISOString().slice(0,10),
timeslots: timeslotsCreated,
time: {
// time: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)),
time: new Date(),
timelabel: new Date().toLocaleTimeString().replace(":00","")
}
}



let createdTime = {
// time: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)),
time: new Date(),
timelabel: new Date().toLocaleTimeString().replace(":00","")
}
console.log('createdTime')
console.log(createdTime)

// console.log(createdItem)
// this.selectedDate = createdItem
// this.selectedTime = createdTime

this.nowTime = createdTime
this.nowDate = createdItem

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
    setTipToZero(){

      console.log('set tip to zero')

this.setTip(0)




    }
  },
  mounted() {

 
   if(this.$store.state.loggedIn){




 this.getCreditCards()
   }
// if(this.valid){
  // console.log('open now so filter to what is available now')
  // this.createSingle()
// }else{
    // console.log('open now so filter to what is available now')
  // this.createSingle()
// }

if(this.valid){
this.filterForNow()
}

// console.log(this.valid)


    this.upserveMongo();
    this.getHours();
    this.getUser();


    this.showCurrentlyAvailable();

    emergepay.init();


      let ffAgo = Date.now() - 2700000
      // let ffAgo = Date.now() - 10000

    if(this.title === 'Mamnoon'){

      if(this.$store.state.storeCurrentOrderUpdateMamnoon.timeStamp === null){
        this.$store.state.storeCurrentOrderUpdateMamnoon.timeStamp = Date.now()
      }


      let cachedTimeStamp = this.$store.state.storeCurrentOrderUpdateMamnoon.timeStamp
      let decider = cachedTimeStamp - ffAgo
      if(decider < 0){
        console.log('the cached time stamp is more than forty five minutes old, empty the cart.give the cart a new timestamp.')
        this.emptyCart()
      }else{
        console.log('not empty yet')
      }


        this.currentOrder = this.$store.state.storeCurrentOrderUpdateMamnoon
        this.setTip(this.$store.state.storeCurrentOrderUpdateMamnoon.tipSelected)
        this.currentAmountToAddCustom = this.$store.state.storeCurrentOrderUpdateMamnoon.currentAmountToAddCustom/100
    }else if(this.title === 'Mamnoon Street'){


if(this.$store.state.storeCurrentOrderUpdateStreet.timeStamp === null){
  this.$store.state.storeCurrentOrderUpdateStreet.timeStamp = Date.now()
}



      let cachedTimeStamp = this.$store.state.storeCurrentOrderUpdateStreet.timeStamp
      let decider = cachedTimeStamp - ffAgo
      if(decider < 0){
        console.log('the cached time stamp is more than forty five minutes old, empty the cart.give the cart a new timestamp.')
          this.emptyCart()
      }else{
        console.log('not empty yet')
      }

        this.currentOrder = this.$store.state.storeCurrentOrderUpdateStreet

        this.setTip(this.$store.state.storeCurrentOrderUpdateStreet.tipSelected)
        this.currentAmountToAddCustom = this.$store.state.storeCurrentOrderUpdateStreet.currentAmountToAddCustom/100
    }else if(this.title === 'Mbar'){

      if(this.$store.state.storeCurrentOrderUpdateMbar.timeStamp === null){
        this.$store.state.storeCurrentOrderUpdateMbar.timeStamp = Date.now()
      }

      let cachedTimeStamp = this.$store.state.storeCurrentOrderUpdateMbar.timeStamp
      let decider = cachedTimeStamp - ffAgo
      if(decider < 0){
          this.emptyCart()
        console.log('the cached time stamp is more than forty five minutes old, empty the cart.give the cart a new timestamp.')
      }else{
        console.log('not empty yet')
      }

        this.currentOrder = this.$store.state.storeCurrentOrderUpdateMbar
     
        this.setTip(this.$store.state.storeCurrentOrderUpdateMbar.tipSelected)
        this.currentAmountToAddCustom = this.$store.state.storeCurrentOrderUpdateMbar.currentAmountToAddCustom/100
    }

    this.$store.state.orderCMR = {};
    this.$store.state.orderConfirmationModalResponse = {};

    if(this.$store.state.openDrawerOnLoad === true){
      this.toggleDrawer()
      let drawerTrue = false
      this.$store.commit("drawerTrue", { drawerTrue });
    }
  
    this.currentOrder.id = Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29)



this.$nextTick(function() {
window.addEventListener(`resize`, this.setResizeIndex);

})


this.currentOrder.scheduled_time = null




  


  },
  created(){
    // let recaptchaScriptModal = document.createElement('script')
    //   recaptchaScriptModal.setAttribute('src', 'https://assets.emergepay.chargeitpro.com/cip-hosted-modal.js')
    //   document.head.appendChild(recaptchaScriptModal)

      let recaptchaScriptJquery = document.createElement('script')
      recaptchaScriptJquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
      document.head.appendChild(recaptchaScriptJquery)
}

};
</script>


<style lang="scss">

.toggleLr{
      display: flow-root;
  div{
    width: 49%;
    display: inline-block;

      &:first-child{
       float: left;
      }
            &:last-child{
       float: right;
      }

    button{
      width: 100%;
      margin: 0 auto;

    }
  }

    margin-bottom: 10px;
    // display: flow-root;

}


.toggleLr.hide-on-desktop{
  display:none;
}


@media only screen and (max-width: 992px) {
  .toggleLr.hide-on-desktop{
    display: flow-root;
  }
}

button.selected{
  box-sizing: border-box;
color: #666666 !important;
}



.mb10{
  margin-bottom: 6px;
}

.mb16{
  margin-bottom: 16px;
}

.red-text{
  color: #f05d5b;
}
.grey-text{
  color: #666666;
  }


.no-lr-pad{
  padding-left: 0;
  padding-right: 0;
}


.leftDropdown{
  cursor: pointer;
  width: 50%;
  display: block;
  padding: 0 6px 15px 0;
  margin-top: 15px;
}


.rightDropdown{
width: 50%;
display: block;
padding: 0 6px 15px 0;
}

.show-on-mob{
  display: none;
}

@media only screen and (max-width: 992px) {


.hide-on-mob{
  display:none;
}


.show-on-mob{
  display: block;
}

}

.if-mobile{
  display: none;
}

@media only screen and (max-width: 992px) {
  .if-mobile{
  display: block;
  }
}

@media only screen and (max-width: 768px) {
.leftDropdown{
    cursor: pointer;
  width: 100%;
  display:block;
  padding:0;
  margin-bottom: 10px;
}


.rightDropdown{
width: 100%;
display:block;
  padding:0;
    margin-bottom: 10px;
}


#upserveolo .online-menu,
.no-lr-pad{
   padding-left: 15px;
   padding-right: 15px;
 }


}

 .edit{
    cursor: pointer;
 }

.edit-link{
      color: #f58e58;
      text-decoration: none;
    font-size: .9rem;
    float: right;
a{
  text-decoration: none;  color:#f58e58;
    font-size: .9rem;
 .edit{
    color: #f05d5b;
    // font-size: .9rem;
    color:#f58e58;

}
  

&:hover{
   .edit{
    color: #f58e58;
    border-bottom: 1px solid #f58e58;
}
  
}

}

}


.square {
  position: relative;
  width: 100%;
}


.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  color: transparent;
  background-size: 100%;
}


.square-green{
      position: absolute;
    width: 100%;

    background: rgb(29, 174, 239);
    left: 50%;
    transform: translate(-50%);
    height: 440px;



    .content{
          position: absolute;
    width: 400px;
    height: 400px;
    color: transparent;
    background-size: 100%;
    left: 50%;
    transform: translateX(-50%);
    // top: 30px;
        top: 20px;
    }
}






.square-green:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}



.pieces{
width:100%;
height: 560px;

}


@media only screen and (max-width: 992px) {

.square-green{
      position: absolute;
    width: 100%;
    background: rgb(29, 174, 239);
    left: 50%;
    transform: translate(-50%);
    height: 270px;



    .content{
    position: absolute;
    width: 140px;
    height: 140px;
    color: transparent;
    background-size: 100%;
    left: 50%;
    transform: translateX(-50%);
    // top: 30px;
        top: 10px;
    }
}



#upserveolo  .content-box-upper{
      height: 90px;
    height: 70px;

//       &:hover{
// background-color: #f05d5b;
//       }
}

.pieces{
  height: 230px;
}

}






#upserveolo.smallerBoxes .box > div{
  height: 100%;
}


#upserveolo .box-inner{
      height: 100%;
}

@media only screen and (max-width: 992px) {



#upserveolo.smallerBoxes .box > div,
#upserveolo.smallerBoxes .box{
  width: 100%;
}
#upserveolo .box-inner{
  margin: 0;
}



}


.option-choices{
// width: 100%;
//   display: flex;
//   width: 100%;
//   // display: table;
//   // width: 100%;

  // display: grid;
  // Essentially switch the default axis
  // grid-auto-flow: column;



    // display: flex;
  // flex-direction: column;
    // border: 1px solid red;
    // display: table;
        // border-spacing: 20px;


}


.option-choices .box{
    // flex: 2;
// width: 25%;
  // display: table-cell;
  // padding: 16px;
// height: 100%;
// width: 25%;



    // display: table-cell;

}

.weblink{
  color: #666666;
  text-decoration: underline;
  &:hover{
    color: #666666;
  }
}


.owl-item{
&:hover{
  cursor: pointer;
}  
}



#upserveolo .box.normal{

@media only screen and (max-width: 992px) {

  width: 50%;



}


.box-inner{
  @media only screen and (max-width: 992px) {

  width: 98%;



}
}


}



  @media only screen and (max-width: 992px) {

    #upserveolo .box.normal{
        .leftmodbuttons{
          width: 55%;
          float: left;
        }

      .modbuttons{
          width: 40%;
          float: right;
          text-align: right;
    }

}



  }


.disabled{
    border: 1px solid #999999 !important;
    background-color: #cccccc !important;
    color: #666666 !important;
    pointer-events: none;
}

.cIEdit,
.billingEdit{
  padding: 20px;
}


.editInfoModalBg{
position: fixed;
z-index:999;
top: 0;
left: 0;
background: rgba(255,255,255,.5);
width: 100%;
height: 100vh;
}

.editInfoModal{
position: fixed;
z-index:1000;
top: 100px;
left: 50%;
transform: translateX(-50%);
background: white;
width: 50%;
    border: 1px solid #f05d5b;
}

@media only screen and (max-width: 992px) {
   .editInfoModal{
      width: 96%;
      top: 20px;
   } 



.container.online-menu.order-modal-width.full-width-modal-header{
       width: 100% !important;
}

}


@media only screen and (max-width: 768px) {
  .container.online-menu.order-modal-width.full-width-modal-header{
       width: 100% !important;
}
}

.full-width-modal-header{
width: 100%!important;
max-width:100%;
margin-top: 0 !important;
}





    // {
    // -webkit-transition: all 0.25s ease;
    // transition: all 0.25s ease;
    // }


.selectedAddOn{


.box-inner{
  background-color: rgb(240, 93, 91);
  .title-bolder,b{
    color: white;
  }
}
  
}


b span.thin{
  font-weight: 100;
}

</style>