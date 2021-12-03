<template>
<div>
<div class="small-message" v-if="currentOrder.ship === false && currentOrder.preorder === true && selectedTime === null">please select a date and time at the top of this panel</div>
<div class="small-message" v-if="currentOrder.charges.total === 0">please add some items to your cart</div>
<div class="small-message" v-if="currentOrder.fulfillment_info.customer.first_name === ''">please enter a guest name</div>
<div class="small-message" v-if="currentOrder.fulfillment_info.customer.email === ''">please enter a guest email address</div>
<div class="small-message" v-if="currentOrder.fulfillment_info.customer.phone === ''">please enter a guest phone number</div>
<div class="small-message" v-if="currentOrder.billing.billing_name === ''">please enter a billing name</div>
<div class="small-message" v-if="currentOrder.billing.billing_address === ''">please enter a billing address</div>
<div class="small-message" v-if="currentOrder.billing.billing_postal_code === ''">please enter a billing postal code</div>
</div>
</template>

<script>  
export default{
    props: ['currentOrder','selectedTime']
}

</script>  