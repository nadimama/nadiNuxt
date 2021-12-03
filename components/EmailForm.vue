<template>
<div>
<div class="container pad-yellow-background module-header">
  submit an email
  </div>
 <div class="container nav-acc-header pad-yellow-background">
<div class="row">
<div class="col-6 col-lg-3">

<form id="app" @submit.prevent="checkForm">

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li :key="error" v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
  <p>
    <label for="name">Title</label>
    <br>
    <input
      id="title"
      v-model="messageBody.title"
      type="text"
      name="title"
    >
  </p>
  <p>
    <label for="name">Name</label>
    <br>
    <input
      id="name"
      v-model="messageBody.name"
      type="text"
      name="name"
    >
  </p>
    <p>
    <label for="name">Body</label>
    <br>
    <textarea
      id="body"
      v-model="messageBody.body"
      type="text"
      name="body"
    ></textarea>
  </p>
  <p>
    <button class="buttonStyle" type="submit" value="Submit">
        <Submit />
      </button>
  </p>

</form>

</div>
</div>
</div>

</div>
</template>

<script type="text/javascript">


import Submit from "@/components/svgIcons/Submit";

  


export default {
  components:{
    Submit
  },
name: 'emailform',
data () {
return {
    errors: [],
    testimonials: null,
    messageBody: {
        title: null,
        body: null,
        name: null,
        email: this.emailAddress
    }
    }
  },
props: ['emailAddress'],
methods: {
    async checkForm() {
      try {
        let response = await this.$http.post("/user/submittestimonial", this.messageBody);
        console.log(response.data)
        this.testimonials = response.data.user.testimonials

        this.messageBody = {
          title: null,
          body: null,
          name: null,
          email: this.emailAddress
        }
         } catch (err) {
        console.log(err.response);
      }
    },
    async getTestimonials() {

      try {
        let response = await this.$http.get("/user/gettestimonials/" + this.emailAddress);


       console.log(response.data)

        this.testimonials = response.data.usertestimonials


 
         } catch (err) {
        console.log(err.response);
      }

    },
    async removeTestimonial(testimonialId,userEmail){

      console.log(testimonialId)


    try {
      let response = await this.$http.post('/api/user/deletetestimonial/', {
      testimonialId,
      userEmail
      }) 
     
      console.log(response)

    this.getTestimonials();
    } catch (err) {
               swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }

    },
    handler(){
     console.log('page refresh')     
     
    }
},
mounted () {
  // console.log('mounted')
  this.getTestimonials()
},
created() {
      window.addEventListener('beforeunload', this.handler)
    },
    beforeDestroy(){
      console.log('before destory')
    },
    computed: {
    testimonialList () {
      return this.$store.state.userInfo
	}
    },
    watch: {
          testimonialList (newTestimonial, oldTestimonial) {


console.log('oldTestimonial: ')
console.log(oldTestimonial)


console.log('newTestimonial: ')



console.log(newTestimonial)




	}

    }
}
</script>

<style lang="scss">
li{
// font-size: 10px;

 p{
  margin-bottom: 0;
}
}



.testimonials-list{
  // max-height: 400px;

  // overflow: scroll;
ul{
    max-height: 400px;
  // border: 1px solid black;
    border: 1px solid black;
  overflow: scroll;
  width: 90%;
  margin-top: 20px;
  padding-bottom: 40px;
  padding-top: 20px;
}
}

.module-header{
  width: 100%;
  display: block;
  background:#F05D5B;
  text-align: center;
  color: #fff367;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 0;


  font-size:24px;
font-weight:500;
}


.buttonStyle{
      // width: 100%;
    border: 0;
    background: transparent;
    outline: none;
}

</style>