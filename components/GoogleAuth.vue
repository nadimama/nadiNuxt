<template>
  <div class="">
      <!-- v-if="!isSignIn" -->
<a class="hide-on-desktop"
  v-if="!$store.state.loggedIn">
  <span @click="handleClickSignIn">sign in</span>
</a>
<a class="hide-on-desktop"
  v-if="$store.state.loggedIn"
@click="handleClickSignOut"
:disabled="!isInit">
  sign out of {{$store.state.currentUserEmail.replace('@gmail.com','')}}
</a>



<!-- {{this.$store.state.loggedIn}} -->


<!--desktop-->
    <!-- <a
    class="hide-on-mobile"
      type="primary"
      icon="fas fa-edit"
      @click="handleClickSignIn"
      :disabled="!isInit"
       v-if="$store.state.currentUserEmail === null"
    >
      sign in
    </a>
    <a
      class="hide-on-mobile"
      type="primary"
      icon="fas fa-edit"
      @click="toggleDropdown2()"
      v-if="$store.state.currentUserEmail"
      :disabled="!isInit"
    > -->

    <a
    class="hide-on-mobile"
      type="primary"
      icon="fas fa-edit"
      @click="handleClickSignIn"
      :disabled="!isInit"
       v-if="!$store.state.loggedIn"
    >
      sign in
    </a>
    <a
      class="hide-on-mobile"
      type="primary"
      icon="fas fa-edit"
      @click="toggleDropdown2()"
      v-if="$store.state.loggedIn"
      :disabled="!isInit"
    >


    <div class="character-icon">

      {{$store.state.currentUserEmail.charAt(0).toUpperCase()}}
    </div>
    <div class="dropdown" v-if="dropdown">
      <ul>
      <li>
        <router-link to="/profile">
            profile
        </router-link>
      </li>
      <li>
        <span @click="handleClickSignOut">
          sign out
        </span>
      </li>
</ul>
</div>
    </a>
<!--desktop-->


  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "GoogleAuth",
  props: {
    msg: String,
  },
  data() {
    return {
      isInit: false,
      isSignIn: false,
      dropdown: false
    };
  },
  methods: {
    toggleDropdown2(){

        this.dropdown = !this.dropdown

    },
    handleClickLogin() {
      this.$gAuth
        .getAuthCode()
        .then((authCode) => {
          //on success
          // console.log("authCode", authCode);
        })
        .catch((error) => {
          //on fail do something
          console.error(error);
        });
    },
    showUserInfo(email) {
      let self = this;
      this.$http
        .get("/api/user/email/" + email)
        .then(function (response) {
          //  console.log(response)

          ////

          ////

          let currentUserInfo = response.data;
          console.log(currentUserInfo);
          self.$store.commit("updateCurrentUser", { currentUserInfo });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleClickSignIn() {
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          var profile = GoogleUser.getBasicProfile();

          // console.log("Email: " + profile.getEmail());

          // console.log(this.$gAuth.isAuthorized)
          // console.log(profile)
          // this.showUserInfo(profile.getEmail())
          this.isSignIn = this.$gAuth.isAuthorized;

          this.$store.commit("logIn");

          let currentUserEmail = profile.getEmail();
          // console.log(profile)
          // console.log(currentUserEmail)
          this.$store.commit("setCurrentUserEmail", { currentUserEmail });
          location.reload()
        })
        .catch((error) => {
          //on fail do something
          console.error(error);
        });
    },
    handleClickSignOut() {
      localStorage.clear();


console.log(this.$store.state)
this.$store.commit("removeUserInfo");
      this.$store.commit("logOut");
      this.$gAuth
        .signOut()
        .then(() => {
          //on success do something
          this.isSignIn = this.$gAuth.isAuthorized;
          // this.isSignIn = false
          // location.reload()
          // clear user current email and clear user info
          this.$store.commit("clearCurrentUser");

          // if (this.$router.currentRoute.fullPath === "/") {
          // } else {
          //   this.$router.push("/");
          // }
          location.reload();
        })
        .catch((error) => {
          //on fail do something
          console.error(error);
        });
    },

    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    },
  },

  created() {
    let that = this;
    let checkGauthLoad = setInterval(function () {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}


.character-icon{
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: white;
    color: black;
    margin-top: 22px;
    line-height: 52px;
}


.dropdown{
    background: #fff;
    position: absolute;
    width: 190px;
    top: 92px;
    left: 0px;
left: -42px;


ul{
list-style-type: none;
    padding: 10px 25px;
margin-bottom: 0;

    li{
        height: 40px;
        line-height: 40px;
         a{
        color: #F05D5B !important;
        height: 40px;
        line-height: 40px;
        font-size: .8rem;
        font-weight: 400;
        &:hover{
         color: #F05D5B;
         text-decoration: underline;   
        }
    }}
}


}

</style>



<style lang="scss">
      .dropdown{
      background: #fff;
      position: absolute;
      width: 190px;
      top: 92px;
      left: 0px;
left: -42px;

      ul{
      list-style-type: none;
      padding: 10px 25px;
      margin-bottom: 0;

      li{
      height: 40px;
      line-height: 40px;
                  color: #f05d5b;
              font-weight: 400;
              span{
                    font-size: 0.8rem;
              }
        a{
      color: #F05D5B !important;
      height: 40px;
      line-height: 40px;
      font-size: .8rem;
      font-weight: 400;
      &:hover{
        color: #F05D5B;
        text-decoration: underline;   
      }
      }}
      }
      }

@media only screen and (max-width: 992px) {



.dropdown{
    background: #fff;
    position: fixed;
    width: 100%;
    top: 92px;
    left: 0px;
left: -42px;

ul{
list-style-type: none;
    padding: 10px 25px;
margin-bottom: 0;

    li{
        height: 40px;
        line-height: 40px;
                    color: #f05d5b;
                font-weight: 400;


        span{
                    font-size: 0.8rem;
              }

         a{
        color: #F05D5B;
        height: 40px;
        line-height: 40px;
            color: #f05d5b;
                font-weight: 400;

        &:hover{
         color: #F05D5B;
         text-decoration: underline;   
        }
    }}
}
}


}





</style>