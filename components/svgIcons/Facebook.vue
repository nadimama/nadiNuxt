<template>
<div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.55 38.31" :width="this.width ? this.width :'20px'">
<defs></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path :fill="color" d="M38.55,19.27a19.28,19.28,0,1,0-22.29,19V24.84H11.37V19.27h4.89V15c0-4.83,2.88-7.5,7.28-7.5a29.47,29.47,0,0,1,4.32.38v4.74H25.43c-2.4,0-3.14,1.48-3.14,3v3.61h5.34l-.85,5.57H22.29V38.31A19.28,19.28,0,0,0,38.55,19.27Z"/></g></g></svg>
</div>
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