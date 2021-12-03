<template>
<div>
<div class="container pad-yellow-background module-header">saved credit cards for {{emailAddress}}</div>


  <div class="container pad-yellow-background">
    
    <div class="row no-lr-margin">


<div class="col-sm-6 no-lr-pad">

      <div class="save-button" v-if="!updateDelivery">
<button class="sm-button" @click="cippaybuttoncreditsave">add new card</button>
<!-- <button class="sm-button disabled" v-else disabled>add new card</button> -->
<div class="bg-modal-2" v-if="showAddCardFormVisible"></div>
<div class="modal-2" v-if="showAddCardFormVisible">

<div class="modalheader">
  add new card
  <div class="closeM" @click="showAddCardFormVisible = false"><CloseModalSm /></div>
</div>
<div class="modal-body">
<label>name:</label>
<input v-model="ccBillingName" />
<label>billing address:</label>
<input v-model="ccBillingAddress" />
<label>postal code:</label>
<input v-model="ccBillingPostalCode" />
<br>

<!-- <button class="mt10 fw mt20 sm-button disabled" v-if="!ccSaveFieldsValid" disabled>complete fields to enter card number</button> -->
<!-- <button class="mt10 fw mt20 sm-button" id="cip-pay-btn" @click="cippaybuttoncreditsave" v-else>click here to enter card number</button> -->
<br><br>



</div>
</div>

</div>

</div>

<template v-if="savedCards && savedCards.length > 0">
<div id="credit-save-table" class="col-12 col-lg-12 creditcards-list no-lr-pad">
<table class="w100">

<th class="w100 no-bot-pad">
<!-- <td>
   <div>
  name
   </div>
  </td> -->
  <td>
       <div>
    number
     </div>
    </td><td>
         <div>
      expires
       </div>
      </td><td>
           <div>
        actions
        </div>
        </td>
</th>





<tr class="w100" v-for="card in savedCards">
  <!-- <td> {{card.approvalData.billingName}} </td> -->
  <td>


<span>
  <span v-if="card.approvalData.accountCardType === 'VS'" class="visa-xs"></span>
<span v-else-if="card.approvalData.accountCardType === 'MC'" class="mastercard-xs"></span>
<span v-else-if="card.approvalData.accountCardType === 'JC'" class="jcb-xs"></span>
<span v-else-if="card.approvalData.accountCardType === 'DN'" class="dinersclub-xs"></span>
<span v-else-if="card.approvalData.accountCardType === 'DC'" class="discover-xs"></span>
<span v-else-if="card.approvalData.accountCardType === 'AX'" class="amex-xs"></span>
<span class="desktop">ends in</span>  {{card.approvalData.maskedAccount.replace('************','')}}

<br>
<!-- <span class="amex-xs"></span>
<span class="dinersclub-xs"></span>
<span class="discover-xs"></span>
<span class="jcb-xs"></span>
-->

</span>
</td>

<td>
{{card.approvalData.accountExpiryDate.slice(0,2)}}/{{card.approvalData.accountExpiryDate.slice(2,4)}}
</td>


<td>
<button class="sm-button fl-right hide-mob" @click="removeCreditCard(card._id,card.email)">remove</button>
        &nbsp;&nbsp;&nbsp;
  
        <button class="sm-button fl-right mr-10" v-if="!card.primary" @click="primaryCreditCard(card._id,card.email)">primary</button>
        <button class="sm-button disabled-b fl-right" v-else disabled style="pointer-events:none;">(primary)</button>
</td>

</tr>

</table>
</div>
  </template>
  <template v-else>
<button class="mt10 fw mt20 sm-button disabled" style="border:0;padding: 10px 0;" disabled>no saved cards</button>
</template>
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
import CloseModalSm from "@/components/svgIcons/CloseModalSm";
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
        return true
      }else{
        return false
      }



    },
       debouncedOnSubmit() {
   const submit = this.showAddCardForm
   return debounce(submit, 1000)
 },
    showAddCardForm(){
      if(this.showAddCardFormVisible === true){
        this.showAddCardFormVisible = false
      }else{
        this.showAddCardFormVisible = true
      }
    }
  },
  components: {
    Check,
    Submit,
CloseModalSm
  },
  data() {
    return {
      showAddCardFormVisible: false,
      savedCards:null,
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



    async primaryCreditCardTrue(id){

    try {

        let response = await this.$http.post("/credit/primarycreditcardtrue", {
          id
        });
console.log('response from true')
console.log(response)
         } catch (err) {
        console.log(err.response);
      }

 this.getCreditCards();

    },
    async primaryCreditCard(id,email){

    try {

        let response = await this.$http.post("/credit/primarycreditcardfalse", {
          id,
          email
        });
console.log('response from false')
console.log(response)
        this.primaryCreditCardTrue(id)

         } catch (err) {
        console.log(err.response);
      }






},
        async removeCreditCard(creditCardId,email){



    try {
      let response = await this.$http.post('/credit/deletecreditcard/', {
      creditCardId
      }) 
     
      console.log(response)
            this.setPrimaryIfOnlyOne(email)
 this.getCreditCards();
    } catch (err) {
               swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
      

    
    },
    async checkAndSend(email,approvalData){
      console.log('check credit card')

    try {
      let response = await this.$http.post('/credit/checkcreditcard/',{
        email,
        approvalData
      }) 



     if(response.data && response.data.user && response.data.user.length > 0){
      swal("this card has already been saved to your account");
               this.ccBillingPostalCode = null
               this.ccBillingAddress = null
               this.ccBillingName = null
                this.showAddCardFormVisible = false

      }else{
    this.sendApprovalDataToMongo(email, approvalData)
      }
     
 

    } catch (err) {
               swal("Error", "Something Went Wrong", "error");
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

            this.ccBillingPostalCode = null
            this.ccBillingAddress = null
            this.ccBillingName = null



    this.showAddCardFormVisible = false


      this.setPrimaryIfOnlyOne(email)

 this.getCreditCards();
        })
        .catch((e) => {
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
    cippaybuttoncreditsave() {

      let self = this;
      this.getCreditSaveToken().then(function (transactionToken) {
        emergepay.open({
          transactionToken: transactionToken,
          onTransactionSuccess: function (approvalData) {
            console.log("Approval Data", approvalData);
            emergepay.close();

console.log('store card name and information')

    self.checkAndSend(self.emailAddress,approvalData)


   self.getCreditCards()
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
    getCreditSaveToken() {
      let self = this;
      let dataToSend = {
      billing:{
        billing_name: this.ccBillingName,
        billing_address: this.ccBillingAddress,
        billing_postal_code: this.ccBillingPostalCode
      }
      }


      return new Promise(function (resolve, reject) {
        $.ajax({
          url: "https://young-hamlet-03679.herokuapp.com/order/start-credit-save",
          //url: "http://localhost:4000/order/start-credit-save",
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
    },
    async getCreditCards() {
      // console.log('get credit cards')
      try {
        let response = await this.$http.get("/credit/getcreditcards/" + this.emailAddress);
        // console.log(response.data)
        this.savedCards = response.data.usercreditcards
 
         } catch (err) {
        console.log(err.response);
      }

    },



  },
  mounted() {
    this.getUser()
        this.getCreditCards()

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



.creditcards-list{
  padding-left: 0;
  padding-right: 0;
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



#credit-save-table{

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

&:first-child{
padding-left: 0;



}



}

table td div{
    height:100%;
}

.w100{
  width: 100%;
      // display: inline-table;
    // display: inline;
}

.w100{
  td{


            width: 33.33% !important;
    display: inline-block;
  }
}


tr{
    border-bottom: 1px solid #cacaca;
}

tr td{
    padding: 15px 10px 15px 10px;
    height: 56px;
    margin-bottom: 0;


        // display:table-cell;
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


@media only screen and (max-width: 768px) {
  display: block;
    margin-bottom: 10px;
    width: 100%;
}


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
  // padding-bottom: 20px;

  td{
    padding-bottom: 20px;  
  }
}



#credit-save-table tr:last-child {
    border-bottom: 0;
}

.mt20{
  margin-top: 20px;
}



.bg-modal-2{
width: 100%;
height: 100vh;
position: fixed;
top: 0;
left: 0;
z-index: 999;
background-color: rgba(0,0,0,.5)
}
.modal-2{
width: 500px;
position: absolute;
z-index: 1000;
background: white;
// border-radius: 10px;
left: 50%;
top: 50%;

.modal-body{
  padding: 20px 20px;


label{
  display: block;
}

}

input{
  border: 1px solid #7d7d82;
    border-radius: 6px;
    padding: 9px;
    font-size: 15px;
    box-sizing: border-box;
    /* border: 0; */
    color: #4e4e55;
    margin-bottom: 10px;
}

button{
      padding: 5px;
}

}


.closeM{
  float: right;
  padding: 0 10px;
  cursor: pointer;
}


.modalheader{
background: #f05d5b !important;
    text-align: center;
    color: #fff367;
    padding: 10px;
}


.save-button{
  margin-bottom: 10px;

}


.no-lr-margin{
  margin-left: 0 !important;
  margin-right: 0 !important;
}


.no-lr-pad{
  padding-left: 0 !important;
  padding-right: 0 !important;
}


.w100.no-bot-pad{
  padding-bottom: 0;
}

td:last-child{
  text-align: right;
  padding-right: 10px;
}
</style>


