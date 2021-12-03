<template>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.55 31.32"  :width="this.width ? this.width :'20px'"><defs></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path :fill="color" d="M12.13,31.32c14.54,0,22.5-12,22.5-22.5q0-.51,0-1a16,16,0,0,0,3.95-4.1A15.55,15.55,0,0,1,34,5,8,8,0,0,0,37.49.57a16,16,0,0,1-5,1.92A7.93,7.93,0,0,0,19,9.7a22.53,22.53,0,0,1-9-2.39A22.48,22.48,0,0,1,2.69,1.45,7.9,7.9,0,0,0,5.13,12a7.91,7.91,0,0,1-3.58-1v.1A7.92,7.92,0,0,0,7.9,18.87,8,8,0,0,1,4.33,19a7.93,7.93,0,0,0,7.38,5.5,15.82,15.82,0,0,1-9.82,3.38A17.11,17.11,0,0,1,0,27.77,22.48,22.48,0,0,0,12.13,31.32Z"/></g></g></svg>
</template>


<script>

export default{

    data(){
return{
    fillColor: this.color
}
    },
    props: ['color','width']
}
</script>


<style>
</style>