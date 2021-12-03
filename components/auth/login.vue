<template>
  <div class="container nav-acc-header" style="padding-top: 100px;">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="loginUser"
        >
          <input
            type="text"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-model="login.email"
            required
          />

          <!-- Password -->
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="login.password"
            required
          />

          <!-- <p>
            Dont have an account??&nbsp;<router-link to="/register"
              >click here</router-link
            >
          </p> -->

          <!-- Sign in button -->
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
              Sign in
            </button>
          </center>
        </form>


        
      </div>
    </div>
  </div>
</template>

<script>
import swal from "vue-sweetalert2";
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  methods: {
    async loginUser() {
      //  loginUser() {
      //  this.$router.push("/home");
      try {
 
       let response = await this.$http.post("/user/login", this.login);
       console.log(response)
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          // swal("Success", "Login Successful", "Error");
          this.$router.push("/transactions");
        }
      } catch (err) {
        swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
    }
  
}
}

</script>

