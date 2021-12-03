<template>
<button class="sm-button full-width-button" @click="cippaybuttoncreditsave">add new card</button>
</template>


<script type="text/javascript">
import swal from "vue-sweetalert2";
export default {
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

  preferredGiftCard: ""
    }
    },
props: ['emailAddress'],
  methods: {
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



    cippaybuttoncreditsave() {

      let self = this;
      this.getCreditSaveToken().then(function (transactionToken) {
        emergepay.open({
          transactionToken: transactionToken,
          onTransactionSuccess: function (approvalData) {
            console.log("Approval Data", approvalData);
            emergepay.close();
            console.log('proceeed with order now you have a transaction');




          },
          onTransactionFailure: function (failureData) {
            console.log("Failure Data", failureData);
            console.log('proceeed with order now you have a transaction');
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


  },
  mounted() {
    this.getUser()

  },
};
</script>


<style lang="scss">



.full-width-button{
  width: 100%;
}

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


