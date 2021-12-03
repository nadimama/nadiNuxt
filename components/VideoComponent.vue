


<template>


<div>

<video-bg :sources="[`${src}`]">
  <!-- If you want to add content here, a slot is waiting! -->



</video-bg>



<div class="logoVideo">

 <div v-html="logo" class="restaurantLogo2"></div>

</div>


</div>
</template>


<script>
export default{
    name: 'VideoComponent',
props:['src', 'logo']

}
</script>


<style lang="scss">
.logoVideo{

    position: absolute;
    top: 50%;
    z-index: 98;
    left: 50%;
    transform: translateX(-50%);
}



.restaurantLogo2{


width: 300px;
    margin: 0 auto;
    text-align: center;
    height: 100%;

    width: 100%;

svg{

      width: 500px;
      width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}


}



</style>