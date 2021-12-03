<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">

        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="addProduct"
        >
          <input
            type="text"
            id="email"
            class="form-control mb-5"
            placeholder="add product"
            v-model="product.name"
          />
          <!-- Sign in button -->
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                    add
            </button>
          </center>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import swal from "vue-sweetalert2";
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
        product: {
        name: "",
        email: this.emailAddress
      }
     }
  },
  props: ['emailAddress'],
  methods: {
    async addProduct() {
      try {
console.log(this.product)
        let response = await this.$http.post("/user/addproduct", this.product);
        console.log(response);
         } catch (err) {
        console.log(err.response);
      }
    }
    // getUserDetails() {
    //   let token = localStorage.getItem("jwt");
    //   let decoded = VueJwtDecode.decode(token);
    //   this.product.id = decoded._id;
    //   console.log(decoded._id)
    // },
  },
  created() {
    // this.getUserDetails();
  }
};
</script>