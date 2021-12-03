<template>
    <div>
    

<div v-for="product in products">

<h4>{{product.name}}</h4>
{{product._id}}

<p>{{product.description}}</p>

{{product.price}}


<button @click="removeProduct(product._id)">remove</button>

</div>



        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="addProduct"
        >
          <input
            class="form-control mb-5"
            placeholder="Name"
            v-model="product.name"
            required
          />
          <input
            class="form-control mb-5"
            placeholder="description"
            v-model="product.description"
            required
          />

          <!-- Password -->
          <input
            class="form-control mb-5"
            placeholder="price"
            v-model="product.price"
          />
          <p>
          <!-- Sign in button -->
            <center>
              <button class="btn btn-primary btn-block w-75 my-4" type="submit">
               add product
              </button>
            </center>
          </p>
        </form>






    </div>
</template>

<script>




export default {
name: 'Products',
  data () {
    return {
      product: {
          name: '',
          price: '',
          description: ''
      },
      products: ''
    }
  },
methods: {
    async addProduct() {
      try {
        let response = await this.$http.post("/product/addproduct", this.product);

        // console.log(response)

        } catch (err) {
        swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
      this.getAllProducts();
    },
    async getAllProducts() {

         console.log('all productgs listes')
      try {
        let response = await this.$http.get("/product/allproducts");
          this.products = response.data.products

      } catch (err) {
               swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
    },
    async removeProduct(productId){


    try {
      let response = await this.$http.post('/api/product/' + productId) 
     
      console.log(response)

    this.getAllProducts();
    } catch (err) {
               swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }

    },

  },
    created() {
    this.getAllProducts();

  }


}

</script>
