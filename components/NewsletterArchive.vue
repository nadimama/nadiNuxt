<template>
<div class="container pad ff">
    <div class="row"><div class="col-md-12 mb20"><h1>Newsletter Archive</h1></div></div>
    <div class="row"><div class="col-md-12 mb20"><div id="gist" class="gist"></div></div></div>
</div>
</template> 
<script>
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'
export default {  
  name: 'Gist-Example',
  mounted: function () {  



    postscribe('#gist', `<script src="https://mamnoonrestaurant.createsend.com/t/i/p/ethth/0/1/0/1/1/"><\/script>`)





setTimeout(function(){ 
var elements = document.getElementsByClassName("gist");
for (var i = 0; i < elements.length; i++) {
  elements[i].innerHTML = elements[i].innerHTML.replace(/,/g,'');
  console.log('done')
}
  }, 1000);


  }
}
</script>


<style lang="scss">
.pad {
    padding-top: 50px;
    padding-bottom: 50px;
}


#gist {
  ul{
    padding-left: 0;
    li a{
    display: block;
    }
  }
}
</style>

