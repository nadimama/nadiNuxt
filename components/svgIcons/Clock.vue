<template>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" :style="{'width': this.width ? this.width :'20px'}">
<circle cx="19.6522" cy="19.6522" r="17.6522" fill="transparent" :stroke="color" stroke-width="4"/>
<rect x="17.8652" y="7.14624" width="3.57312" height="14.2925" rx="1.78656" :fill="color"/>
<path d="M27.7475 25.2208C28.4451 25.9185 28.4451 27.0497 27.7475 27.7474C27.0498 28.4451 25.9186 28.4451 25.2209 27.7474L18.3958 20.9223L20.9223 18.3957L27.7475 25.2208Z" :fill="color"/>
</svg>
</template>


<script>
export default{
  props: ['color', 'width']
}

</script>


<style>
</style>