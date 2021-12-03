<template>
<div>
              <form class="mb20" @submit="checkForm">

<div v-if="shippingOption">

                <div v-if="this.currentOrder.fulfillment_info.type === 'delivery'" style="margin-top: 10px;">
                 
                  <span v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1">
                    {{currentOrder.fulfillment_info.delivery_info.address.address_line1}}</span>
                    <span v-if="currentOrder.fulfillment_info.delivery_info.address.address_line2 !== ''">,</span>
                  <span v-if="currentOrder.fulfillment_info.delivery_info.address.address_line2">
                    {{currentOrder.fulfillment_info.delivery_info.address.address_line2}}
                    <!-- <br /> -->
                  </span>
                            <br v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''" />
          <span
                    v-if="currentOrder.fulfillment_info.delivery_info.address.city"
                  >{{currentOrder.fulfillment_info.delivery_info.address.city}},</span>
                  <!-- <span v-if="currentOrder.fulfillment_info.delivery_info.address.state">{{currentOrder.fulfillment_info.delivery_info.address.state}}<br></span> -->
                  <span v-if="currentOrder.fulfillment_info.delivery_info.address.zip_code">
                    {{currentOrder.fulfillment_info.delivery_info.address.zip_code}}
                    <br v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''" />
                  </span>



                  <span  :class="{attention: attention}" v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''">floor/unit?</span>&nbsp;&nbsp;
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
                  </div>



</div>
             
               <h4 v-if="currentOrder.fulfillment_info.type === 'pickup'" class="customer-info text-left mt10">guest info<span class="edit-link" v-if="user.user"><router-link to="/profile">&nbsp;(<span class="edit">edit</span>)</router-link></span></h4>
                <h4 v-else-if="currentOrder.fulfillment_info.type === ''" class="customer-info text-left mt10">guest info<span class="edit-link" v-if="user.user"><router-link to="/profile">&nbsp;(<span class="edit">edit</span>)</router-link></span></h4>
                <h4 v-else class="text-left mt10">guest info<span class="edit-link" v-if="user.user"><router-link to="/profile">&nbsp;(<span class="edit">edit</span>)</router-link></span></h4>


                <label class="smblk" for="name">name:</label>
                <br />
                <div v-if="user.user && user.user.name !== ''" style="margin-bottom: 10px;">{{user.user.name}}</div>
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
                  v-model="emailComputed"
                />


                <!-- <br /> -->

               <label class="smblk" for="phone">phone:</label>
                <br />
                     <div v-if="user.user && user.user.deliveryAddress.phone !== ''" style="margin-bottom: 10px;">{{user.user.deliveryAddress.phone}}</div>
                <input v-else
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="(555) 555-5555"
                  v-model="currentOrder.fulfillment_info.customer.phone"
                />

            <input style="display:none;width: auto;margin-right: 10px;transform: translateY(1px);" type="checkbox" id="sms" name="sms" value="sms" v-model="currentOrder.sms">
  <label class="smblk" for="sms">enable SMS order updates </label>
<!-- billing info -->

          <h4 class="customer-info text-left mt10">billing info</h4>
         
         
         <!-- <template v-if="currentOrder.fulfillment_info.type === 'delivery'">  -->
          <!-- <div style="clear: both;width: 100%;margin-bottom: 10px;height: 20px;" v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''"> -->

              <!-- <div style="float: left;width: 15px;height: 20px;margin-right: 5px;padding-top: 2px;">
              <input type="checkbox" id="checkbox" v-model="checked" />
              </div> -->

              <!-- <div style="float: left; height: 20px;">
              <label class="smblk" for="checkbox">same as delivery address</label>
              </div> -->
<!-- </div> -->
       <!-- </template> -->


<!-- <div v-if="checked === false"> -->
                <label class="smblk" for="name">name:</label>
                <br />
     <div v-if="user.user && user.user.billingAddress.name !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.name}}</div>
                <input v-else
                  type="text"
                  id="name-billing"
                  name="name"
                  placeholder="name"
                  v-model="currentOrder.billing.billing_name"
                />
                <label class="smblk" for="address">billing address:</label>
                <br />
     <div v-if="user.user && user.user.billingAddress.addressLine1 !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.addressLine1}}&nbsp;{{user.user.billingAddress.addressLine2}}</div>
                <input v-else
                  type="text"
                  id="address"
                  name="address"
                  placeholder="address"
                  v-model="currentOrder.billing.billing_address"
                />

                <label class="smblk" for="postal_code">billing postal code:</label>
                <br />
                     <div v-if="user.user && user.user.billingAddress.zip !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.zip}}</div>
                <input v-else
                  type="text"
                  id="postal_code"
                  name="postal_code"
                  placeholder="postal code"
                  v-model="currentOrder.billing.billing_postal_code"
                />

<!-- </div> -->


              </form>

</div>
</template>

<script>  


 
export default {
    props: ["user","currentOrder","checked","email","emailAddress","shippingOption","title","attention"],
data() {
return{
  emailComputed: this.email
}
},
watch: {
emailComputed:{
  handler(val){

        let storeCurrentOrderUpdateMamnoonEmail = this.emailComputed;
        this.$store.commit("upserveOrderCurrentOrderUpdateMamnoonEmail", { storeCurrentOrderUpdateMamnoonEmail });	
 




  }
}
},
    methods: {
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
    
},
mounted(){
        let storeCurrentOrderUpdateMamnoonEmail = '';
        this.$store.commit("upserveOrderCurrentOrderUpdateMamnoonEmail", { storeCurrentOrderUpdateMamnoonEmail });	
}
}

</script>  