<template>


<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="42.9px"
	 height="32.2px" :style="{'width': this.width ? this.width :'20px'}"  viewBox="0 0 42.9 32.2" style="enable-background:new 0 0 42.9 32.2;" xml:space="preserve">

<defs>
</defs>
<path fill="none" :stroke="color" :stroke-width="4" d="M5,2h32.9c1.7,0,3,1.3,3,3v22.2c0,1.7-1.3,3-3,3H5c-1.7,0-3-1.3-3-3V5C2,3.3,3.3,2,5,2z"/>
<path fill="none" :stroke="color" :stroke-width="4"  d="M2.7,4.6L19,18.5c1.5,1.3,3.7,1.3,5.2,0L40.6,4.6"/>
</svg>


</template>


<script>
export default{
  props: ['color', 'width']
}

</script>


<style>
</style>




