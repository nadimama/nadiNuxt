<template>
  <div class="">
      <!-- v-if="!isSignIn" -->
<a class="hide-on-desktop"
  v-if="!$store.state.loggedIn">
  <span @click="handleClickSignIn">
  
  <!--sign in
 --> 
  
  
  <div class="profile-button">
<svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity:.4;transform: translateY(-22px);">

<circle cx="23.5" cy="15.6875" r="8.8125" fill="#050000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.8125 41.8156V35.25C8.8125 29.8422 13.1964 25.4583 18.6042 25.4583H27.4167C32.8244 25.4583 37.2083 29.8422 37.2083 35.25V41.8156C33.3739 45.0504 28.4198 47 23.0104 47C17.601 47 12.6469 45.0504 8.8125 41.8156Z" fill="#060000"/>
<circle cx="23.5" cy="25.5" r="21.5" stroke="black" stroke-width="2"/>
<path d="M23.5 22C27.0899 22 30 18.866 30 15H17C17 18.866 19.9101 22 23.5 22Z" fill="white"/>
</svg>


</div>
  
  </span>
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
     <!-- // sign in-->

<div class="profile-button">
<svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity:.4;transform: translateY(-22px);">

<circle cx="23.5" cy="15.6875" r="8.8125" fill="#050000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.8125 41.8156V35.25C8.8125 29.8422 13.1964 25.4583 18.6042 25.4583H27.4167C32.8244 25.4583 37.2083 29.8422 37.2083 35.25V41.8156C33.3739 45.0504 28.4198 47 23.0104 47C17.601 47 12.6469 45.0504 8.8125 41.8156Z" fill="#060000"/>
<circle cx="23.5" cy="25.5" r="21.5" stroke="black" stroke-width="2"/>
<path d="M23.5 22C27.0899 22 30 18.866 30 15H17C17 18.866 19.9101 22 23.5 22Z" fill="white"/>
</svg>


</div>

    </a>
    <a
      class="hide-on-mobile"
      type="primary"
      icon="fas fa-edit"
      @click="toggleDropdown2()"
      v-if="$store.state.loggedIn"
      :disabled="!isInit"
    >


<!--    <div class="character-icon">-->
    



<div class="profile-button">
<svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: translateY(-22px);">

<circle cx="23.5" cy="15.6875" r="8.8125" fill="#050000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.8125 41.8156V35.25C8.8125 29.8422 13.1964 25.4583 18.6042 25.4583H27.4167C32.8244 25.4583 37.2083 29.8422 37.2083 35.25V41.8156C33.3739 45.0504 28.4198 47 23.0104 47C17.601 47 12.6469 45.0504 8.8125 41.8156Z" fill="#060000"/>
<circle cx="23.5" cy="25.5" r="21.5" stroke="black" stroke-width="2"/>
<path d="M23.5 22C27.0899 22 30 18.866 30 15H17C17 18.866 19.9101 22 23.5 22Z" fill="white"/>
</svg>


</div>

<!--      {{$store.state.currentUserEmail.charAt(0).toUpperCase()}}-->
    <!--</div>-->
    <div class="dropdown" style="top:67px;" v-if="dropdown">
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
    top: 67px;
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


.profile-button{
    width: 47px;
    height: 48px;
    border-radius: 24px;
    background: white;
    position: absolute;
    color: transparent;
    font-size: 0;
/*// right: 20px;*?
    // top: 20px;
*/

}

</style>



<style lang="scss">
      .dropdown{
      background: white;
      position: absolute;
      width: 190px;
      top: 66px;
      left: -48px;
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