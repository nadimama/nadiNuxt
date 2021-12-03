<template>
<div class="container pad-yellow-background pd50">
<!-- {{currentUser.currentUserEmail}} -->
<br>
shipping order history:
<hr>
<br>
<!-- {{response}} -->
<template v-if="orderhistory">
  <template v-if="orderhistory.user">
<template v-for="order in orderhistory.user.slice().reverse()">
  <template v-if="order.shippingOrder">
  {{order.orderInfo.confirmation_code}}
                            <pre>
                          {{order.orderInfo.fulfillment_info.customer.first_name}}
                          {{order.orderInfo.fulfillment_info.customer.email}}
                          {{order.orderInfo.fulfillment_info.customer.phone}}
                          {{order.orderInfo.fulfillment_info.delivery_info.address}}

                          </pre>
<!-- {{order.payInfo.externalTransactionId}} -->
                        <button class="fl-right" v-if="!order.shipped" @click="markAsShipped(order._id,order)">not shipped, mark as shipped</button>
                        <button class="fl-right" v-else disabled>shipped</button>
                        <br>

                        <br>
                        <!-- <pre> -->
                        <!-- {{order}} -->
                        <!-- </pre> -->

                        <!-- <pre>
                        {{order.shippingInfo}}
                        </pre> -->
                        <br>
                        <br>
                        <template v-if="order.payInfo.externalTransactionId">
                        debit/credit purchase (id: {{order.payInfo.externalTransactionId}})
                        </template>
                        <template v-else>
                        giftcard purchase
                        </template>
                          <br>  
                          <ul class="no-left-pad">
                          <li v-for="item in order.orderInfo.charges.items" :key="item.cartId" style="margin-bottom:30px;">
                          {{item.name}}&nbsp;&nbsp;&nbsp;<b>${{item.price.toFixed()/100}}</b>&nbsp;&nbsp;&nbsp;

                          </li>
                          </ul>
                          <br>

                          <hr>
</template>
</template>
</template>
</template>


</div>
</template>

<script>  

export default {
    data() {
    return {
        orderhistory: null,
        response: null
        }
    },
    name: 'OrderHistory',
    props: ['currentUser'],
    methods: {
    retrieveOrders() {
    let self = this
        this.$http.get(`/order/orderhistory/`).then(function (response) {
        self.orderhistory = response.data
    })
    },
    markAsShipped(uniqueTransIdString, order){
  
console.log('mark as shipped')

  var r = confirm("are you sure this item has been shipped?"); 
  if (r == true) {
      console.log(uniqueTransIdString)
      this.$http
        .post("/order/mark-as-shipped", {
            uniqueId: uniqueTransIdString,
            order: order
          }
          )
        .then((response) => {
        console.log(response)



this.retrieveOrders()

        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
  }







    }
    },
    mounted(){
        this.retrieveOrders()
    }

}

</script>

<style lang="scss">
.position-relative{


h1{
    position: absolute;
    right: 0;
    top: 0;
}

}



.no-left-pad{
  padding-left: 0;
}

</style>



