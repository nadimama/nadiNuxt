<template>
<div>
<div class="container pad-yellow-background module-header">account info</div>


  <div class="container">
        <div class="row">

<div class="col-sm-6">
  <br>
  <b>email:</b><br>
<template v-if="user && user.user && user.user.email">
{{user.user.email}}
</template>
<br><br>
  </div>
    </div>
    
    
    <div class="row">


      

<div class="col-sm-6">

      <div class="address" v-if="!updateDelivery">
<!-- <b>delivery address:</b><br> -->
<b>guest info:</b><br>
<template v-if="user && user.user.deliveryAddress">
{{user.user.deliveryAddress.name}}<br>
{{user.user.deliveryAddress.phone}}<br>
<!-- {{user.user.deliveryAddress.addressLine1}}<br> -->
<!-- {{user.user.deliveryAddress.addressLine2}}<br> -->
<!-- {{user.user.deliveryAddress.city}}&nbsp;{{user.user.deliveryAddress.state}}&nbsp;{{user.user.deliveryAddress.zip}} -->
</template>
<br><br>
<button class="sm-button" @click="updateDeliveryClick()">update guest info</button>
<br><br>
</div>

<form class="infoForm" @submit.prevent="checkForm" v-if="updateDelivery">
  <!-- <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li :key="error" v-for="error in errors">{{ error }}</li>
    </ul>
  </p> -->

<b>guest info:</b>
 <br>
  <p>
    <input
      id="name"
      v-model="deliveryAddress.name"
      type="text"
      name="name"
      placeholder="add name"
      class="add-name-field"
    >
    <br>
    <input
      id="phone"
      v-model="deliveryAddress.phone"
      type="text"
      name="phone"
      placeholder="(555) 555-5555"
      class="add-phone-field"
    >
    <br>
    <!--
    <br>

    <input
      id="addressLine1"
      v-model="deliveryAddress.addressLine1"
      type="text"
      name="addressLine1"
      placeholder="add address line 1"
      class="add-addressLine1-field"
    >
    <br>
        <input
      id="addressLine2"
      v-model="deliveryAddress.addressLine2"
      type="text"
      name="addressLine2"
      placeholder="add address line 2"
      class="add-addressLine2-field"
    >
    <br>
    <input
      id="city"
      v-model="deliveryAddress.city"
      type="text"
      name="city"
      placeholder="add city"
      class="add-city-field"
    >
    <br>
      <input
      id="state"
      v-model="deliveryAddress.state"
      type="text"
      name="state"
      placeholder="add state"
      class="add-state-field"
    >
    <br>
      <input
      id="state"
      v-model="deliveryAddress.zip"
      type="text"
      name="zip"
      placeholder="add zip"
      class="add-zip-field"
    >
-->

    &nbsp;&nbsp;&nbsp;
    <br>
    <button class="sm-button add-delivery-address-button" type="submit" value="Submit">
   submit
      </button>
<button class="sm-button" v-if="updateDelivery" @click="updateDelivery = false">cancel</button>
  </p>
</form>

<br><br>
    </div>

    <div class="col-sm-6">




      <div class="address" v-if="!updateBilling">
<b>billing address:</b> <br />
<template v-if="user && user.user.billingAddress">
{{user.user.billingAddress.name}}<br>
{{user.user.billingAddress.addressLine1}}<br>
{{user.user.billingAddress.addressLine2}}<br>
{{user.user.billingAddress.city}}&nbsp;{{user.user.billingAddress.state}}&nbsp;{{user.user.billingAddress.zip}}
</template>
<br><br>
<button class="sm-button" @click="updateBillingClick()">update billing address</button>
<br><br>
</div>

<form class="infoForm" @submit.prevent="checkFormBilling" v-if="updateBilling">
<b>billing address:</b>
 <br />

  <p>
    <input
      id="nameBilling"
      v-model="billingAddress.name"
      type="text"
      name="name"
      placeholder="add name"
      class="add-name-field"
    >
    <br>

  
    <input
      id="addressLine1Billing"
      v-model="billingAddress.addressLine1"
      type="text"
      name="addressLine1"
      placeholder="add address line 1"
      class="add-addressLine1-field"
    >
    <br>
        <input
      id="addressLine2Billing"
      v-model="billingAddress.addressLine2"
      type="text"
      name="addressLine2"
      placeholder="add address line 2"
      class="add-addressLine2-field"
    >
    <br>
    <input
      id="cityBilling"
      v-model="billingAddress.city"
      type="text"
      name="city"
      placeholder="add city"
      class="add-city-field"
    >
    <br>
      <input
      id="stateBilling"
      v-model="billingAddress.state"
      type="text"
      name="state"
      placeholder="add state"
      class="add-state-field"
    >
    <br>
      <input
      id="zipBilling"
      v-model="billingAddress.zip"
      type="text"
      name="zip"
      placeholder="add zip"
      class="add-zip-field"
    >


    &nbsp;&nbsp;&nbsp;
<br>
<button class="sm-button add-billing-address-button" type="submit" value="Submit">
   submit
      </button>
<button class="sm-button" v-if="updateBilling" @click="updateBilling = false">cancel</button>
  </p>
</form>

<br><br>
    </div>











    <div class="row" style="display:none;">
     <pre>
      {{user}}
     </pre>
    </div>
 </div>  </div>
    </div>
</template>


<script type="text/javascript">
import Submit from "@/components/svgIcons/Submit";
import Check from "@/components/svgIcons/Check";
import swal from "vue-sweetalert2";
export default {
    computed:{
    ccBillingNameValid(){
      if(this.ccBillingName == null){
        return false
      }else{
        return true
      }
    },
    ccBillingAddressValid(){
      if(this.ccBillingAddress == null){
        return false
      }else{
        return true
      }
    },
    ccBillingPostalCodeValid(){

      return /^\d{5}(-\d{4})?$/.test(this.ccBillingPostalCode);

 
    },
    ccSaveFieldsValid(){

      if(this.ccBillingNameValid && this.ccBillingAddressValid && this.ccBillingPostalCodeValid){
        return false
      }else{
        return true
      }



    }
  },
  components: {
    Check,
    Submit
  },
  data() {
    return {
            savedCards:[],
    ccBillingName: null,
    ccBillingAddress: null,
    ccBillingPostalCode: null,
      user: {},
      updateBilling: false,
      updateDelivery: false,
      savedDeliveryAddress: {},
      savedBillingAddress: {},
      user: null,
      listBalance: "",
      currentBalance: "",
      amountUse: "",
      cardNumberInput: "",
      showInsufficientFunds: false,
      errors: [],
      giftcards: null,
      messageBody: {
        number: null,
        email: this.emailAddress
    },
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
  preferredGiftCard: ""
    }
    },
props: ['emailAddress'],
  methods: {
  updateBillingClick(){
        this.updateBilling = true

      this.billingAddress.name = this.user.user.billingAddress.name
      this.billingAddress.addressLine1 = this.user.user.billingAddress.addressLine1
      this.billingAddress.addressLine2 = this.user.user.billingAddress.addressLine2
      this.billingAddress.city = this.user.user.billingAddress.city
      this.billingAddress.state = this.user.user.billingAddress.state
      this.billingAddress.zip = this.user.user.billingAddress.zip





  },
    updateDeliveryClick(){
        this.updateDelivery = true



      this.deliveryAddress.name = this.user.user.deliveryAddress.name
      this.deliveryAddress.phone = this.user.user.deliveryAddress.phone
      this.deliveryAddress.addressLine1 = this.user.user.deliveryAddress.addressLine1
      this.deliveryAddress.addressLine2 = this.user.user.deliveryAddress.addressLine2
      this.deliveryAddress.city = this.user.user.deliveryAddress.city
      this.deliveryAddress.state = this.user.user.deliveryAddress.state
      this.deliveryAddress.zip = this.user.user.deliveryAddress.zip



    },
    async checkFormBilling() {
          this.updateBilling = false
        try {
        let response = await this.$http.post("/user/submitbillingaddress", {
          email: this.emailAddress,
          billingAddress: this.billingAddress
          });
 console.log(response)
          this.savedBillingAddress = response.data.user.billingAddress
          // this.updateBilling = false

       
         } catch (err) {
        console.log(err.response);
      }
        this.getUser()
    },

async checkForm() {
 this.updateDelivery = false
        try {
        let response = await this.$http.post("/user/submitdeliveryaddress", {
          email: this.emailAddress,
          deliveryAddress: this.deliveryAddress
          });
this.savedDeliveryAddress = response.data.user.deliveryAddress
         } catch (err) {
        console.log(err.response);
      }

 this.getUser()
    },


        getUser() {
let self = this
      this.$http
        .get("/user/email/" + this.emailAddress)
        .then(function (response) {
          let userInfo = response.data;
          // console.log(userInfo);
          self.user = userInfo
self.cardNumberInput = userInfo.user.giftcard
self.preferredGiftCard = userInfo.user.giftcard
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getUser()

  },
};
</script>


<style lang="scss">
.sm-button.disabled{
  background: #eeeeee;
  color: #bbbbbb;
  border: 1px solid #bbbbbb; 
}

.address,
form{
  display: block;
    width: 100%;
}

.container.pad-yellow-background.module-header,
.module-header {
  width: 100%;
  display: block;
  background: #f05d5b !important;
  text-align: center;
  color: #fff367;
  padding: 15px;
  font-weight: 500;
  margin-bottom: 0;
}
.buttonStyle {
  border: 0;
  background: transparent;
  outline: none;
  padding-left: 0;
  padding-right: 0;
}
.buttonStyle:active,
.buttonStyle:visited,
.buttonStyle:focus {
  outline: none;
}
.placeholder {
  padding: 10px 10px 14px 10px;
  border: 0;
  border-radius: 0;
  font-weight: bold;
  // width: 250px;
      width: 300px;
}
.currBalance {
  padding: 20px;
  background: white;
  font-weight: bold;
}
.placeholder-balance {
    pointer-events: none;
    border: 0;
    width: 144px;
    padding: 10px 8px 10px 15px;
    font-size: 30px;
    font-weight: bold;
    color: black;
}
.button-panel {
  width: 100%;
&.bottom{
  width: 50%;
  margin: 0 auto;
}
&.top{
  width: 80%;
  margin: 0 auto;
}
.button-box {
    width: 50%;
    display: inline-block;
    text-align: center;
    &.text-left{
      text-align: left;
    }
  }
}
.placeholder::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #f58e58;
  opacity: 1; /* Firefox */
}

.placeholder:-ms-input-placeholder,
.placeholder::-ms-input-placeholder { /* Microsoft Edge */
  color: #f58e58;
}

.thick-grey{
  color: #49494a;
  font-size: 18px;
  font-weight: 600;
}

.container.pad-yellow-background.pd50,
.pd50{
  padding: 50px;
}

.pl50{
  padding-left: 50px;
}

@media only screen and (max-width: 1080px) {

.button-panel {
  width: 100%;
&.bottom{
  width: 100%;
  margin: 0 auto;
}

&.top{
  width: 100%;
  margin: 0 auto;
}

.button-box {

    width: 100%;
    display: inline-block;
    text-align: center;

    &.text-left{
      text-align: left;
    }

  }
}


.placeholder {
  width: 220px;
  margin: 0 auto;
  text-align: center !important;
}

.button-panel .button-box.text-center{
    text-align: center !important;
}



.button-panel .button-box.text-left{
   text-align: center !important;
}


.container.pad-yellow-background.pd50,
.pd50{
  padding: 50px 15px;
}


.moneytotal{
  padding-top: 40px;
}

.pl50{
  padding-left: 0;
}

}



@media only screen and (max-width: 480px){
.placeholder {
    width: 160px;

}
}

li{
// font-size: 10px;

 p{
  margin-bottom: 0;
}
}



.giftcards-list{
ul{
  max-height: 400px;
  border: 1px solid black;
  overflow: scroll;
  width: 90%;
  margin-top: 20px;
  padding-bottom: 40px;
  padding-top: 20px;
}
}

.module-header{
  width: 100%;
  display: block;
  background:#F05D5B;
  text-align: center;
  color: #fff367;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 0;


  font-size:24px;
font-weight:500;
}


.buttonStyle{
    border: 0;
    background: transparent;
    outline: none;
}


.giftcard-item{
  // margin-bottom: 10px;
}

.cardnumber{
    padding: 10px 10px 14px 10px;
    border: 0;
    border-radius: 0;
    font-weight: bold;
}



#gift-card-table{

table{
    border-collapse:collapse;
    padding:0;
}
table td{
    // display:table-cell;
    vertical-align:top;

&:last-child{
padding-right: 0;



}



}

table td div{
    height:100%;
}

.w100{
  width: 100%;
      display: inline-table;
}

.w100{
  td{
    width: 33.33%;
        // display: inline-block;
  }
}


tr{
    border-bottom: 1px solid #cacaca;
}

tr td{
    padding: 15px 10px 15px 10px;
    height: 56px;
    margin-bottom: 0;


        display:table-cell;
    vertical-align:top;

&.primary{
    // background: #ddffdd;
    

}

}
}
.fl-right{
    float: right;
}



.disabled-b{

  background: #ffffff;
  color: #f05d5b;
  // border: 1px solid #f05d5b;


  margin-right: 10px !important;
}


.mr10{
   margin-right: 10px !important; 
}

@media only screen and (max-width: 768px) {

.hide-mob{
display: none !important;

}


.text-right-mob{
  text-align: right !important;
}

}



.add-giftcard-field{
    padding: 10px;
    border-radius: 10px;
    box-shadow: none;
    border: 1px solid grey;
}

.add-giftcard-button{
    padding: 3px 10px;
    border-radius: 4px;
    box-shadow: none;
    border: 1px solid transparent;
}



.giftcard-item.w100 td:first-child{
    padding-left: 0 !important;
}


th.w100{
  border-bottom: 1px solid #cacaca;
  padding-bottom: 20px;

  td{
    padding-bottom: 20px;  
  }
}



#gift-card-table tr:last-child {
    border-bottom: 0;
}



.mt20{
  margin-top: 20px;
}

.infoForm{
  input{
    padding:5px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #bbb;
    width: 60%;
  }
}

</style>


