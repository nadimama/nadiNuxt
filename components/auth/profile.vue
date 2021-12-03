<template>
  <div class="container nav-acc-header">
    <div class="row text-center">
        <h1>profile</h1>
            </div>
    <div class="row">
<!-- shop -->
<!-- {{ story}} -->
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
    name: 'profile',
  data() {
    return {
        story: {
            content: {
                body: []
        }
      }
    }
    },
  mounted () {
    console.log('loggin?')
    console.log(this.$store.state.loggedIn)
// this.$store.state.loggedIn

  },
methods: {

  }
}
</script>


<style lang="scss">
// .shopthird{
//     width: 33%;
//     float: left;
// margin-bottom: 20px;
//     img{
//         width: 100%;
//     }
// }

</style>