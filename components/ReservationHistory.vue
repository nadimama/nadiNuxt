<template>
<div>
<div class="container pad-yellow-background module-header"> reservation history</div>
<div class="container pad-yellow-background">

<div id="order-history">

<table class="w100">
    <th class="w100">
       <td class="hide-mob"><div>restaurant</div></td>
        <td class="w-5 hide-mob"><div>date and time</div></td>
                <td class="w-5 hide-mob"><div># of guests</div></td>
        <td class="w-20"><div>items</div></td>
 
</th> 

<template v-if="reservations">
<tr class="w100" v-for="reservation in reservations" :key="reservation.date">
   <td class="hide-mob"><div>mbar</div></td>
        <td class="w-5 hide-mob"><div>{{reservation.date}}
            <br>
 {{reservation.reservationsList.roomsinfo.allInfo.arrival_time}}



            </div></td>
                    <td class="w-5 hide-mob"><div>

  {{reservation.reservationsList.roomsinfo.allInfo.max_guests}}
            </div></td>
<td class="hide-mob"><div>
            
                        


                        <!-- {{reservation.upserveInfo.upserveInfo}} -->
               <ul class="order-items">
<li v-for="item in reservation.upserveInfo.upserveInfo.items" :key="item.cartId">

{{item.name}}&nbsp;{{item.price}}
</li>
<li><br>
    <b>tip:</b> {{reservation.upserveInfo.upserveInfo.tip_amount}}</li>
<li><b>total:</b> {{reservation.upserveInfo.upserveInfo.amount}}</li>

</ul>
               
               
                
                </div></td>
  </tr>
</template>
<template v-if="reservationsmamnoon">
<tr class="w100" v-for="reservation in reservationsmamnoon" :key="reservation.date">
   <td class="hide-mob"><div>mamnoon</div></td>
        <td class="w-5 hide-mob"><div>{{reservation.date}}
            <br>
 {{reservation.reservationsList.roomsinfo.allInfo.arrival_time}}
            </div></td>
<td class="hide-mob"><div>
            
               <ul class="order-items">
<li v-for="item in reservation.upserveInfo.upserveInfo.items" :key="item.cartId">

{{item.name}}&nbsp;{{item.price}}
</li>
</ul>
               
               
                
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
        reservationsmamnoon: null,
        reservations: null,
        response: null
        }
    },
    name: 'ReservationHistory',
    props: ['currentUser','emailAddress'],
    methods: {

    retrieveReservationsMamnoon() {
        console.log('retrieve reservations')
    let self = this
        this.$http.get(`/reservation/retrievemamnoon/${this.currentUser.currentUserEmail}`).then(function (response) {
// this.$http.get(`/order/email/${this.$auth._data.user.email}`).then(function (response) {



console.log(response.data.reservations)

        self.reservationsmamnoon = response.data.reservations
    })
    },


    retrieveReservations() {
        console.log('retrieve reservations')
    let self = this
        this.$http.get(`/reservation/retrieve/${this.currentUser.currentUserEmail}`).then(function (response) {
// this.$http.get(`/order/email/${this.$auth._data.user.email}`).then(function (response) {



console.log(response.data.reservations)

        self.reservations = response.data.reservations
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
   
        this.retrieveReservations()
           
        this.retrieveReservationsMamnoon()
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


