<template v-if="renderComponent">
  <div id="upserveolo" class="shopRetail" :key="componentKey">


<section>
<PackagesAdmin />



  </section>


<section>


     <AllShippingTransactions />

</section>


    <section>


      <div class="container pt20">

       <div class="row">
          <div class="col-md-12 col-lg-12">
<button @click="importNewItems()">
  import new items
</button>
<br><br>

          </div>
          </div>
        <div class="row">
          <div class="col-md-12 col-lg-12">
     


   <template v-if="1 === 0">
     <div class="container text-center pt20">
       Loading...
     </div>
     </template>
         <template v-else>
   

</template>
<div class="container online-menu">
<h4>items</h4>
</div>

   <template v-if="1 === 0">
     <div class="container text-center pt20">
       Loading...
     </div>
     </template>
         <template v-else>





<div class="container">

<div class="row">

              <template v-if="1 === 1">
                <template v-if="1 === 1">
                <template v-if="1 === 1">
                <div class="col-6 col-md-3 shop-item no-lr-pad" style="display: contents;">
                    <template v-for="serve in upserveList">
                      <template v-if="1 === 1">
                        

                        <div class="itemContainer" :class="{ visibleItem: serve.visible }" style="width: 25%;">
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
                      {{serve.category}}
                              <div>{{serve.name}}</div>
                         <!-- {{item.name}} -->
                              <!-- <div
                                v-if="serve.description"
                              >{{serve.description}}</div> -->
                              <div class="food-price">
                            
                                ${{ serve.price_cents.toFixed(2)/100}}
                              </div>



<div class="row">


<div class="col-6">


<label for="lbs">lbs</label>&nbsp;<span>{{serve.lbs}}</span>
<input id="lbs" type="number" v-model="editNumberLbs" class="lbs-input" :class="{visible: editLbs === serve.id }">
<button @click="updateRetailItemLbs(serve.id,editNumberLbs)" class="submit-lbs-input" :class="{visible: editLbs === serve.id }">submit {{editNumberLbs}}</button>
<button @click="editLbs = serve.id" class="edit-lbs-input" :class="{invisible: editLbs === serve.id }">edit</button>
</div>
<div class="col-6">
<label for="oz">oz</label>&nbsp;<span>{{serve.oz}}</span>
<input id="oz" type="number" v-model="editNumberOz" class="oz-input" :class="{visible: editOz === serve.id }">
<button @click="updateRetailItemOz(serve.id,editNumberOz)" class="submit-oz-input" :class="{visible: editOz === serve.id }">submit, {{editNumberOz}}</button>
<button @click="editOz = serve.id" class="edit-oz-input" :class="{invisible: editOz === serve.id }">edit</button>

</div>
<div class="col-6">

<label for="height">height</label>&nbsp;<span>{{serve.height}}</span>
<input id="height" type="number" v-model="editNumberHeight" class="height-input" :class="{visible: editHeight === serve.id }">
<button @click="updateRetailItemHeight(serve.id,editNumberHeight)" class="submit-height-input" :class="{visible: editHeight === serve.id }">submit, {{editNumberHeight}}</button>
<button @click="editHeight = serve.id" class="edit-height-input" :class="{invisible: editHeight === serve.id }">edit</button>

</div>
<div class="col-6">



<label for="width">width</label>&nbsp;<span>{{serve.width}}</span>
<input id="width" type="number" v-model="editNumberWidth" class="width-input" :class="{visible: editWidth === serve.id }">
<button @click="updateRetailItemWidth(serve.id,editNumberWidth)" class="submit-width-input" :class="{visible: editWidth === serve.id }">submit, {{editNumberWidth}}</button>
<button @click="editWidth = serve.id" class="edit-width-input" :class="{invisible: editWidth === serve.id }">edit</button>

</div>
<div class="col-6">


<label for="length">length</label>&nbsp;<span>{{serve.length}}</span>
<input id="length" type="number" v-model="editNumberLength" class="length-input" :class="{visible: editLength === serve.id }">
<button @click="updateRetailItemLength(serve.id,editNumberLength)" class="submit-length-input" :class="{visible: editLength === serve.id }">submit, {{editNumberLength}}</button>
<button @click="editLength = serve.id" class="edit-length-input" :class="{invisible: editLength === serve.id }">edit</button>


</div>
<div class="col-6">



<label for="girth">girth</label>&nbsp;<span>{{serve.girth}}</span>
<input id="girth" type="number" v-model="editNumberGirth" class="girth-input" :class="{visible: editGirth === serve.id }">
<button @click="updateRetailItemGirth(serve.id,editNumberGirth)" class="submit-girth-input" :class="{visible: editGirth === serve.id }">submit, {{editNumberGirth}}</button>
<button @click="editGirth = serve.id" class="edit-girth-input" :class="{invisible: editGirth === serve.id }">edit</button>

</div>







</div>






shippable? {{serve.shippable}}<br>
<template v-if="serve.shippable">

<button @click="shippableEdit(serve.id,false)">make not shippable</button>

</template>
<template v-else>

<button @click="shippableEdit(serve.id,true)">make shippable</button>
</template>
<br>  <br>  

<!--{{typeof(serve.lbs)}}
{{serve.oz}}
{{serve.height}}
{{serve.width}}
{{serve.length}}-->
<template v-if="serve.lbs !== undefined && serve.oz !== undefined && serve.height !== undefined && serve.width !== undefined && serve.length !== undefined">
visible? {{serve.visible}}<br>
<template v-if="serve.visible">
<button @click="visibleEdit(serve.id,false)">make not visible</button>
</template>
<template v-else>
<button @click="visibleEdit(serve.id,true)">make visible</button>
</template>
</template>
<template v-else>

<div class="small-message">please enter item dimensions and weight</div>
<br>


</template>



<button @click="deleteItem(serve.id)">delete item</button>


                              </div>
                        
                          
                 

                        </div>
                      </template>
                    </template>
               
                </div>

         </template>

   
           

 </template>

     </template>


</div></div>
  </template>


          </div>

       
        </div>
        <div>
</div></div>
    </section>

  </div>
</template>

<script>




import CloseModal from "@/components/svgIcons/CloseModal";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";
import CloseModalSm from "@/components/svgIcons/CloseModalSm";
import AllShippingTransactions from "@/components/AllShippingTransactions";

import PackagesAdmin from "@/components/PackagesAdmin";

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
export default {
      metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'retail admin',
      // all titles will be injected into this template
      titleTemplate: '%s | nadi mama'
  },
  name: "UpserveOloRetail",
  props: ["data","emailAddress","oloEndpoint","menuEndpoint","title"],
  components: {
    AllShippingTransactions,
    OrderConfirmationModal,
    OnlineMenuCarousel,
    CloseModal,
    CloseModalRed,
    CloseModalSm,
    CloseModalRedSm,
    VueAspectRatio,
    Next,
    Prev,
    NadiIcon,
    NadiIconSm,
    PackagesAdmin
  },
  computed: {	
    totalWeight(){
      let cost = 0
      for(var item in this.currentOrder.charges.items){
        cost = cost + this.currentOrder.charges.items[item].price
      }

      return cost
    },
    orderTotal(){

      let shippingAmountToAdd = Number(this.shippingAmount) * 100
      return Number(this.total) + Number(this.currentTax) + Number(this.tip) + Number(this.currentAmountToAdd) + shippingAmountToAdd
    },  
    googleAddress() {	
      return this.$store.state.googleAddress;	
    },	
    tip0() {	
      return Number(this.total) * 0;	
    },	
    tip1() {	
      return Number(this.total) * 0.18;	
    },	
    tip2() {	
      return Number(this.total) * 0.22;	
    },	
    tip3() {	
      return Number(this.total) * 0.25;	
    },	
    currentTax(){

        let currentTax = Number(this.total) * Number(this.upserveTaxRate);

      return Math.round(currentTax)
    }
  },	
  watch: {	
 currentOrder: {
     handler(val){
       console.log('currentorder change')
      // do stuff
      if(this.shippingOption === true && this.validPostal(this.currentOrder.billing.billing_postal_code)){
          this.shippingPrice('98122', String(this.currentOrder.billing.billing_postal_code),String(this.totalWeight/100),'0')
      }
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
  // if(this.selectedDate){
  //         console.log(this.selectedDate.dayLabel.substring(0,3))
  // }

      this.currentOrder.scheduled_time = null

      let storeCurrentOrder = this.currentOrder;	
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
      this.selectedTime = null
      },
tipSelected(){

this.currentOrder.tipSelected = this.tipSelected


let storeCurrentOrder = this.currentOrder;	
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });	

},
    selectedTime(){
this.currentOrder.scheduled_time = this.selectedTime.time
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
currentAmountToAddCustom(){	
this.currentAmountToAdd = this.currentAmountToAddCustom * 100	


      this.currentOrder.currentAmountToAddCustom = this.currentAmountToAdd

let storeCurrentOrder = this.currentOrder;	
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });	


},	
    currentAmountToAdd: function(newCurrent,oldCurrent){	
      this.currentOrder.charges.total = this.orderTotal	
      this.currentOrder.payments.payments[0].amount = this.orderTotal
      this.currentOrder.charges.tip.amount = this.currentAmountToAdd	
    },	
    tip: function (newTip, oldTip) {	
      this.currentOrder.charges.tip.amount = this.tip;	
      this.currentOrder.charges.total = this.orderTotal	
      this.currentOrder.payments.payments[0].amount = this.orderTotal

    },	
    total: function (newTotal, oldTotal) {	
      this.currentOrder.charges.taxes = this.currentTax;	
      this.currentOrder.charges.total = this.orderTotal;


      this.currentOrder.charges.preTotal = this.orderTotal - this.currentTax - this.tip;
      this.currentOrder.payments.payments[0].amount = this.orderTotal

      let storeCurrentOrder = this.currentOrder;	
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });	

    },	
    },
  data() {
    return {
      componentKey: 0,
      renderComponent: true,
      renderKey: 0,
      editNumberLbs: 0,
      editNumberOz: 0,
      editNumberHeight: 0,
      editNumberWidth: 0,
      editNumberLength: 0,
      editNumberGirth: 0,
      editLbs: null, 
      editOz: null, 
      editHeight: null, 
      editWidth: null, 
      editLength: null, 
      editGirth: null, 
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
            amount: 0,
            payment_type: "Generic Online Ordering Integrated",
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
              payment_type: "Generic Online Ordering Integrated",
              amount: null,
            },
          ],
        },
      },
    };
  },
  filters: {
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
    async importNewItems(){
      let responseAcf = await this.$http.get(`product/newupdateditems`)
      console.log(responseAcf)    

      location.reload()
      },
    forceRerender() {
this.componentKey += 1
    },
      methodThatForcesUpdate() {
 
      this.$forceUpdate();  // Notice we have to use a $ here
    
    },
async deleteItem(serveid){


let payload = { id: serveid }
console.log(payload)
 this.$http.post("/product/deleteitem", payload)
      .then((response) => {
 console.log(response)
    //  this.upservesMongoLog()
          // this.forceRerender()
                location.reload()
      }).catch((e) => {
          console.log('error')
        });







},
    async visibleEdit(servid,e){


let payload = { id: servid, tf: e }
console.log(payload)
 this.$http.post("/product/visibleedit", payload)
      .then((response) => {
 console.log(response)
     this.upservesMongo()
          this.forceRerender()
      }).catch((e) => {
          console.log('error')
        });
      
          // location.reload()
      
    },

async shippableEdit(servid,e){


let payload = { id: servid, tf: e }

 this.$http.post("/product/shippableedit", payload)
      .then((response) => {
 console.log(response)
     this.upservesMongo()
          this.forceRerender()
      }).catch((e) => {
          console.log('error')
        });
      
          // location.reload()
      
    },
async updateRetailItemLbs(servid,editNumber){



let payload = { id: servid, number: editNumber }

 this.$http.post("/product/retaillbs", payload)
      .then((response) => {
 console.log(response)
           this.editNumberLbs = 0
          this.editLbs = null
          this.forceRerender()
          this.upservesMongo()
      }).catch((e) => {
          console.log('error')
      });



              // location.reload()

},
async updateRetailItemOz(servid,editNumber){

let payload = { id: servid, number: editNumber }

 this.$http.post("/product/retailoz", payload)
      .then((response) => {
 console.log(response)

     this.editNumberOz = 0
      this.editOz = null
      this.forceRerender()
      this.upservesMongo()

      }).catch((e) => {
          console.log('error')
      });

 
        // location.reload()
 
},


async updateRetailItemHeight(servid,editNumber){

let payload = { id: servid, number: editNumber }

 this.$http.post("/product/retailheight", payload)
      .then((response) => {
 console.log(response)

     this.editNumberHeight = 0
      this.editHeight = null
      this.forceRerender()
      this.upservesMongo()

      }).catch((e) => {
          console.log('error')
      });

 
        // location.reload()
 
},


async updateRetailItemWidth(servid,editNumber){

let payload = { id: servid, number: editNumber }

 this.$http.post("/product/retailwidth", payload)
      .then((response) => {
 console.log(response)

     this.editNumberWidth = 0
      this.editWidth = null
      this.forceRerender()
      this.upservesMongo()

      }).catch((e) => {
          console.log('error')
      });

 
        // location.reload()
 
},


async updateRetailItemLength(servid,editNumber){

let payload = { id: servid, number: editNumber }

 this.$http.post("/product/retaillength", payload)
      .then((response) => {
 console.log(response)

     this.editNumberLength = 0
      this.editLength = null
      this.forceRerender()
      this.upservesMongo()

      }).catch((e) => {
          console.log('error')
      });

 
        // location.reload()
 
},




async updateRetailItemGirth(servid,editNumber){

let payload = { id: servid, number: editNumber }

 this.$http.post("/product/retailgirth", payload)
      .then((response) => {
 console.log(response)

     this.editNumberGirth = 0
      this.editGirth = null
      this.forceRerender()
      this.upservesMongo()

      }).catch((e) => {
          console.log('error')
      });

 
        // location.reload()
 
},








  async shippingPrice(orig,dest,lb,oz){
console.log(orig,dest,lb,oz)

    let responseAcf = await this.$http.get(`/shippingcalculation`, { params: { ZipOrigination: orig, ZipDestination: dest, Pounds: lb, Ounces: oz } })
    console.log(responseAcf.data[0].Rate[0])


    this.shippingAmount = responseAcf.data[0].Rate[0]

},
shipOption(c){



  this.shippingOption = c
  c === true ? this.currentOrder.fulfillment_info.type = 'delivery' : this.currentOrder.fulfillment_info.type = 'pickup'

let storeCurrentOrder = this.currentOrder;
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });

  },
    makePickup(){


      this.currentOrder.fulfillment_info.type === 'pickup'
      let storeCurrentOrder = this.currentOrder;
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });

    },
preOrderToggle(c){

// this.preOrderToggleState = c


if(c === true){
  this.preOrderToggleState = c
      this.currentOrder.preorder = true
      let storeCurrentOrder = this.currentOrder;
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });


this.panelShow = 'customerInfo'

 

}

if(c === false){
  this.preOrderToggleState = c
      this.currentOrder.preorder = false
      let storeCurrentOrder = this.currentOrder;
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });


this.panelShow, this.currentOrder.fulfillment_info.type = ''

}

if(c === 'shipping'){

  this.preOrderToggleState = 'shipping'
  this.panelShow = 'customerInfo'
this.currentOrder.fulfillment_info.type = 'delivery'
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

//               if(this.valid === true){
// this.currentOrder.preorder = this.valid;
// break;
//               }

              


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

console.log('get user')
console.log(self.user)
              self.cardNumberInput = userInfo.user.giftcard
              self.preferredGiftCard = userInfo.user.giftcard
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

      this.currentBalance =
        giftcardResponse.resSendData.Responses[0].SvInquiry[0].CurrentBalance[0];
    },
    useGiftCardBalance() {
      let self = this;
      // first check if the balance is available
      console.log('use balance')
      this.$http
        .post("/user/lookupgiftcard", {
          cardNumber: self.cardNumberInput
        })
        .then(function (response) {
        //   console.log(response)
          if (
            Number(
              response.data.resSendData.Responses[0].SvInquiry[0]
                .CurrentBalance[0]
            ) >= Number(self.orderTotal.toFixed(2)/100)
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
                  
                if(self.$store.state.storeCurrentOrder.preorder === true){
                  self.scheduleAnOrder(self.$store.state.storeCurrentOrder,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
                
                
               if(self.$store.state.storeCurrentOrder.preorder === false){
                  self.doAnOrder(self.$store.state.storeCurrentOrder,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
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
    checkForm: function (e) {
      this.errors = [];
      if (!this.currentOrder.fulfillment_info.customer.first_name) {
        this.errors.push("Name required.");
                  swal("Name required.");
      }

      if (!this.currentOrder.fulfillment_info.customer.phone) {
        this.errors.push("Phone required.");

        swal("Phone required.");
      }
      
      if (!this.currentOrder.fulfillment_info.customer.email) {
        this.errors.push('Email required.');
          swal('Valid email required.');
      } else if (!this.validEmail(this.currentOrder.fulfillment_info.customer.email)) {
        this.errors.push('Valid email required.');
        swal('Valid email required.');
      }

      if (!this.currentOrder.billing.billing_postal_code) {
        this.errors.push('invalid postal code');
        swal('invalid postal code');

      } else if (!this.validPostal(this.currentOrder.billing.billing_postal_code)) {
         this.errors.push('invalid postal code');
        swal('invalid postal code');
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

              if(self.$store.state.storeCurrentOrder.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeCurrentOrder,approvalData,null);
              }
              
              if(self.$store.state.storeCurrentOrder.preorder === false){
                self.doAnOrder(self.$store.state.storeCurrentOrder,approvalData,null);
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

      return new Promise(function (resolve, reject) {
        $.ajax({
          url: "https://young-hamlet-03679.herokuapp.com/order/start-transaction",
           //url: "http://localhost:4000/order/start-transaction",
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(self.$store.state.storeCurrentOrder),
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




if(this.tipSelected === 0){
  this.currentAmountToAdd = 0
}else if(this.tipSelected === 1){
  this.currentAmountToAdd = this.tip1
}else if(this.tipSelected === 2){
  this.currentAmountToAdd = this.tip2
}else if(this.tipSelected === 3){
  this.currentAmountToAdd = this.tip3
}else{

}



      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });

    },


removeFromOrder(removal) {
      let currentItems = this.currentOrder.charges.items;
      let updatedItems = currentItems.filter(
        (item) => item.cartId !== removal.cartId
      );

      this.currentOrder.charges.items = updatedItems;
      let removeCost = removal.price * removal.quantity;
      this.total = this.total - removeCost;
      let storeCurrentOrder = this.currentOrder;


if(this.tipSelected === 0){
  this.currentAmountToAdd = 0
}else if(this.tipSelected === 1){
  this.currentAmountToAdd = this.tip1
}else if(this.tipSelected === 2){
  this.currentAmountToAdd = this.tip2
}else if(this.tipSelected === 3){
  this.currentAmountToAdd = this.tip3
}else{

}

      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
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
          let storeCurrentOrder = this.currentOrder;

  

          if(this.tipSelected === 0){
            this.currentAmountToAdd = 0
          }else if(this.tipSelected === 1){
            this.currentAmountToAdd = this.tip1
          }else if(this.tipSelected === 2){
            this.currentAmountToAdd = this.tip2
          }else if(this.tipSelected === 3){
            this.currentAmountToAdd = this.tip3
          }else{

          }




      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });


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
          let storeCurrentOrder = this.currentOrder;

  

          if(this.tipSelected === 0){
            this.currentAmountToAdd = 0
          }else if(this.tipSelected === 1){
            this.currentAmountToAdd = this.tip1
          }else if(this.tipSelected === 2){
            this.currentAmountToAdd = this.tip2
          }else if(this.tipSelected === 3){
            this.currentAmountToAdd = this.tip3
          }else{

          }




      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });


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
      this.upserveTaxRate =
        responseUpserve.data.body.tax_rates[0].percentage_rate;
      this.modifierGroups = responseUpserve.data.body.modifier_groups;
      this.modifiers = responseUpserve.data.body.modifiers;
      this.modifierItems = responseUpserve.data.body.modifiers;

      // let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoon`);
      // let upserveProducts = responseUpserve.data.doc[0].menu.items;
    },
    async upservesMongo() {

      let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoonretail`);
      let upserveProducts = responseUpserve.data.doc[0].menu;
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      // this.upserveSections = responseUpserve.data.doc[0].menu.sections;
      // this.upserveTaxRate =
      //   responseUpserve.data.doc[0].menu.tax_rates[0].percentage_rate;
      // this.modifierGroups = responseUpserve.data.doc[0].menu.modifier_groups;
      // this.modifiers = responseUpserve.data.doc[0].menu.modifiers;
      // this.modifierItems = responseUpserve.data.doc[0].menu.modifiers;

      // let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoon`);
      // let upserveProducts = responseUpserve.data.doc[0].menu.items;
    },
    async upservesMongoLog() {

      let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoonretail`);
      let upserveProducts = responseUpserve.data.doc[0].menu;
      console.log(upserveProducts)
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      // this.upserveSections = responseUpserve.data.doc[0].menu.sections;
      // this.upserveTaxRate =
      //   responseUpserve.data.doc[0].menu.tax_rates[0].percentage_rate;
      // this.modifierGroups = responseUpserve.data.doc[0].menu.modifier_groups;
      // this.modifiers = responseUpserve.data.doc[0].menu.modifiers;
      // this.modifierItems = responseUpserve.data.doc[0].menu.modifiers;

      // let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoon`);
      // let upserveProducts = responseUpserve.data.doc[0].menu.items;
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
    }
  },
  mounted() {
    // this.returnAvailableNow();
    this.getUser();
    // this.upserves();
    this.upservesMongo();
    emergepay.init();

    this.$store.state.storeCurrentOrder = {};
    this.$store.state.orderCMR = {};
    this.$store.state.orderConfirmationModalResponse = {};
//reset
//reset



// if(this.title === this.$store.state.storeCurrentOrder.restaurant){
//     this.total = 0
//     this.currentAmountToAddCustom = 0
//     this.tipSelected = 0
//     this.currentAmountToAdd = 0
//     this.tip = 0
//     this.total = 0
//     this.cartTotal = 0
//     this.currentOrder.charges.total = 0
//     this.currentOrder.charges.fees = 0
//     this.currentOrder.charges.taxes = 0
//     this.currentOrder.charges.tip.amount = 0
//     this.currentOrder.payments.payments.amount = null;
//     if(this.$store.state.storeCurrentOrder.charges){
//         this.total = this.$store.state.storeCurrentOrder.charges.preTotal;
//     }
//     this.currentOrder = this.$store.state.storeCurrentOrder;
// }else{
//     this.$store.state.storeCurrentOrder = {};
// }






if(this.$store.state.openDrawerOnLoad === true){
  this.toggleDrawer()
  let drawerTrue = false
  this.$store.commit("drawerTrue", { drawerTrue });
}
    // this.dropDown();
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
 
   background: transparent !important;
    border: 2px solid #f05d5b !important;
    box-sizing: border-box;
    color: #f05d5d !important;

}


#upserveolo.shopRetail{
  
  ul.filters{
  border-bottom: 0px solid rgba(0, 0, 0, 0.1);
position: relative;
display: inline;
        margin-bottom: 0;
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


.col-6.col-md-4.shop-item.no-lr-pad:nth-child(3n){
.itemContainer{
// background: green;
padding-left: 8px;
padding-right: 0;
}
}
.col-6.col-md-4.shop-item.no-lr-pad:nth-child(3n+1){
.itemContainer{
// background: red;
padding-left: 0;
padding-right: 8px;
}
}

.col-6.col-md-4.shop-item.no-lr-pad:nth-child(3n+2){
.itemContainer{
// background: pink;
padding-left: 4px;
padding-right: 4px;
}
}


.description-panel{
  // background: #fff367;
  padding: 10px;
}


.itemContainer{
      margin-bottom: 12px;
}


@media only screen and (max-width: 768px) {

.col-6.col-md-4.shop-item.no-lr-pad:nth-child(odd){
.itemContainer{
// background: green;
padding-left: 0px !important;
padding-right: 4px !important;
}
}
.col-6.col-md-4.shop-item.no-lr-pad:nth-child(even){
.itemContainer{
// background: red;
padding-left: 4px !important;
padding-right: 0px !important;
}
}


.container.pt20{
  padding-left: 20px;
  padding-right: 20px;

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


.submit-oz-input,
.oz-input{
display: none;
&.visible{
display: block;
}
}


.edit-oz-input{
display: block;
&.invisible{
  display: none;
}

}


.submit-lbs-input,
.lbs-input{
display: none;
&.visible{
display: block;
}
}


.edit-lbs-input{
display: block;
&.invisible{
  display: none;
}

}






.submit-height-input,
.height-input{
display: none;
&.visible{
display: block;
}
}


.edit-height-input{
display: block;
&.invisible{
  display: none;
}

}



.submit-width-input,
.width-input{
display: none;
&.visible{
display: block;
}
}


.edit-width-input{
display: block;
&.invisible{
  display: none;
}

}



.submit-length-input,
.length-input{
display: none;
&.visible{
display: block;
}
}


.edit-length-input{
display: block;
&.invisible{
  display: none;
}

}





.submit-girth-input,
.girth-input{
display: none;
&.visible{
display: block;
}
}


.edit-girth-input{
display: block;
&.invisible{
  display: none;
}

}







.itemContainer{
   background: #fff367;
&.visibleItem{
  background-color: #c9ffc9;
}


}



</style>