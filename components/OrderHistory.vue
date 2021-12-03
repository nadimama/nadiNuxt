<template>
<div>
<div class="container pad-yellow-background module-header"> food order history</div>
<div class="container pad-yellow-background">

<div id="order-history">
<table class="w100">
    <th class="w100">
       <td class="hide-mob"><div>restaurant</div></td>
        <td class="w-5 hide-mob"><div>date</div></td>
        <td class="w-20"><div>items</div></td>
        <td><div class="text-right-mob"> price</div></td>
        <td class="hide-mob"><div>pay method</div></td>
        <!-- <td><div>delivery/pickup</div></td> -->
       <td class="hide-mob w-5"><div style="text-align: right;">status</div></td>

                <td><div style="text-align: right;">actions</div></td>
</th>   

<template v-if="orderhistory">
<tr class="w100" v-for="order in orderhistory.user.slice().reverse()" :key="order._id">
 <td class="hide-mob">
    <div>
    <b> {{order.orderInfo.restaurant.toLowerCase()}}</b>
    </div>
</td>
 <td class="w-5 hide-mob"><div>
    <span class="smblk">
{{order.orderInfo.time_placed | formatDate}}
</span>
</div></td>
 <td class="w-20"><div>
    <b class="mobile orderDetail"> {{order.orderInfo.restaurant.toLowerCase()}}</b> <i class="small-message grey orderDetail">{{order.orderInfo.time_placed | formatDate}}</i>
<ul class="order-items">
<li v-for="item in order.orderInfo.charges.items" :key="item.cartId">
    {{item.quantity}} x
{{item.name}} <span class="smblk">(${{item.price_cents.toFixed(2)/100}})</span>


<div v-if="item.modifiers.length > 0"> 
<div class="small-message grey" v-for="mod in item.modifiers">
{{mod.name}} +${{mod.price | showToFixed}}
</div>
</div>
</li>
</ul>
</div></td>



<td>
    <div class="text-right-mob">
        <span class="smblk">
<div class="small-message grey">subtotal: ${{ order.orderInfo.charges.preTotal/100 | toFixed}}</div>
<div class="small-message grey">tax: ${{ order.orderInfo.charges.taxes/100 | toFixed}}</div>
<div class="small-message grey">tip: ${{ order.orderInfo.charges.tip.amount/100 | toFixed}}</div>
    <b>total: ${{ order.orderInfo.charges.total/100 | toFixed}}</b>
    </span>
    </div></td>
<td class="hide-mob">
    
    <div  v-if="order.payInfo.TransmissionID">
<!-- {{order.payInfo}} -->
gift card
   </div>
       <div v-else>
debit/credit
   </div>
   </td> 

<!-- <td><div>
{{order.orderInfo.fulfillment_info.type}}
   </div></td>  -->
<td class="hide-mob w-5"><div style="text-align: right;">
{{order.status}}
   </div></td> 

    <td><div>


      <!-- {{order.orderInfo.restaurant}} -->

<button v-if="order.orderInfo.restaurant === 'Mamnoon' || order.orderInfo.restaurant === 'Mamnoon Street'" class="fl-right sm-button mr-0" @click="reorder(order.orderInfo)">order</button>
<!-- <pre>{{order.orderInfo}}</pre> -->
</div></td>
</tr>
</template>

</table>
</div>
</div>
</div>
</template>

<script>  

import moment from 'moment'
import tz from 'moment-timezone'

export default {
    data( ) {
    return {
        orderhistory: null,
        response: null
        }
    },
    name: 'OrderHistory',
    props: ['currentUser','emailAddress'],
    methods: {
        reorder(order){

            let storeCurrentOrder = order
            this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });	

            // let drawerTrue = true

// this.$store.commit("drawerTrue", { drawerTrue });


if(order.restaurant === 'Mamnoon'){
     this.$router.push("/mamnoon");
            //    location.reload();
}else{
     this.$router.push("/mamnoonstreet");
            //    location.reload();
}


        },
    retrieveOrders() {
        console.log('retriev orders frome end')
    let self = this
        this.$http.get(`/order/email/${this.currentUser.currentUserEmail}`).then(function (response) {
// this.$http.get(`/order/email/${this.$auth._data.user.email}`).then(function (response) {





        self.orderhistory = response.data
    })
    },
        },
            filters: {
toFixed(value){
    return value.toFixed(2)
},
    formatDate(value) {
  if (value) {
        let order = moment(String(value));
        return order.tz('America/Los_Angeles').format('MM/DD');
  }
},
reverseArray(value) {
  // slice to make a copy of array, then reverse the copy
  return value.slice().reverse();
},
showToFixed: function (value) {
    let decvalue = value/100

    return decvalue.toFixed(2)
}
  },


    
    mounted(){
        this.retrieveOrders()

    }

}

</script>



<style lang="scss">
.fl-right{
    float: right;
}


#order-history{
table{
    border-collapse:collapse;
    padding:0;
    display: table
}

table th,table tr{
    // display:table-cell;
    vertical-align:top;
}



table td{
    display:table-cell;
    vertical-align:top;
}

table td div{
    height:100%;
}

.w100{
  width: 100%;
    display: inline-table;
}

.w100{

  td.sm-cell{
    width: 5%;
        // display: inline-block;
  }

  td.lg-cell{
    width: 25%;
        // display: inline-block;
  }


  td{
    width: 15%;
        // display: inline-block;
  }
}

tr{
        border-bottom: 1px solid #cacaca;
}

tr td{
    
    padding: 18px 5px 10px 0px;
    // height: 56px;
    margin-bottom: 0;
    display:table-cell;
    vertical-align:top;

&.primary{
    background: #bfebbf;

}
&:last-child{
padding-right: 0;



}

}
}

.smblk{
    color: #000;
    font-size: .9rem;
}


ul.order-items{
    padding-left: 0;
    color: #000;
    font-size: .9rem;
    list-style: none;
}

.mr-0{
    margin-right: 0;
}


@media only screen and (max-width: 768px) {

.hide-mob{
display: none !important;

}


.text-right-mob{
  text-align: right !important;
}

}


.pad-yellow-background{
    // background: #fff367;
    padding: 20px 30px;
    margin-bottom: 20px;
}

.container.pad-yellow-background{
  padding-left: 0 !important;
  padding-right: 0 !important;


@media only screen and (max-width: 768px) {

  padding-left: 15px !important;
  padding-right: 15px !important;


}

}


.giftcard-item.w100 td:first-child{
    padding-left: 0;
}



#order-history tr:last-child {
    border-bottom: 0;
}

.w-20{
    width: 20% !important;
}

.w-5{
    width: 5% !important;
}

.small-message{
    color: #f05d5b;
    color: #f58e58;
    font-size: .9rem;
    font-style: italic;

    &.grey{
      color: #343a40;
      font-size: .8rem;
    }
}



@media only screen and (max-width: 768px) {
.w-20{
    width: 30% !important;
}
}

.orderDetail{
        display: none;
    }

@media only screen and (max-width: 768px) {

.orderDetail{
        display: inline;
    }
}


</style>


