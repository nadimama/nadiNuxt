<template>
<div>
      <template>
<template v-for="savedCard in savedCards">
<button v-if="savedCard.primary ===  true" class="mt10 fw" :class="{disabled: disabled}" style="margin-top:20px;" @click="tokenizedPayment(orderTotal,savedCard.approvalData.uniqueTransId)">Use Stored Card<br>({{savedCard.approvalData.maskedAccount}})
</button> 
</template>
</template>


</div>
</template>

<script>
export default {
    name: 'SavedCard',
    props:['emailAddress','disabled','orderTotal','title'],
    data(){
        return {
        savedCards: null
    }
    },
    mounted(){
        this.getCreditCards()
    },
    methods:{
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


  
          self.currentOrder.id = Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29)
          self.currentOrder.confirmation_code = "mamnoon-" + Math.random().toString(36).substr(2, 29)
          let newDate = new Date();
          self.currentOrder.time_placed = newDate;
          self.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;
          self.$store.commit("orderCMR", { orderCMR });
          self.$router.push("/orderconfirmation");

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
        async tokenizedPayment(orderTotal,transId){

      try {
        let response = await this.$http.post("/credit/tokenizedpayment/",{
            orderTotal,
            transId
        });
        console.log(response.data)



console.log('transasction success')
   if(title === 'Mamnoon'){

              if($store.state.storeCurrentOrderUpdateMamnoon.preorder === true){
                this.scheduleAnOrder($store.state.storeCurrentOrderUpdateMamnoon,response.data,null);
              }
              
              if($store.state.storeCurrentOrderUpdateMamnoon.preorder === false){
                this.doAnOrder($store.state.storeCurrentOrderUpdateMamnoon,response.data,null);
              }



    }else if(title === 'Mamnoon Street'){


              if($store.state.storeCurrentOrderUpdateStreet.preorder === true){
                this.scheduleAnOrder($store.state.storeCurrentOrderUpdateStreet,response.data,null);
              }
              
              if($store.state.storeCurrentOrderUpdateStreet.preorder === false){
                this.doAnOrder($store.state.storeCurrentOrderUpdateStreet,response.data,null);
              }



    }else if(title === 'Mbar'){


              if($store.state.storeCurrentOrderUpdateMbar.preorder === true){
                this.scheduleAnOrder($store.state.storeCurrentOrderUpdateMbar,response.data,null);
              }
              
              if($store.state.storeCurrentOrderUpdateMbar.preorder === false){
                this.doAnOrder($store.state.storeCurrentOrderUpdateMbar,response.data,null);
              }

    }







 
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
    }
}
</script>


<style>
.disabled{
    border: 1px solid #999999 !important;
    background-color: #cccccc !important;
    color: #666666 !important;
    pointer-events: none;
}
</style>