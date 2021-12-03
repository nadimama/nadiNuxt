<template>
    <div class="container nav-acc-header pad-yellow-background bottom-margin">

    <button @click="toggleVegetarian" class="toggleVegButton">
        <span v-if="$store.state.vegetarian === true">
        <!-- <ShowVeg class="half-width" :yellowText="false" />        <ShowAllFood class="half-width" :yellowText="true" /> -->
            </span>
        <span v-else>
        <!-- <ShowVeg class="half-width" :yellowText="true" />        <ShowAllFood class="half-width" :yellowText="false" /> -->
            </span>       
</button>


</div>
</template>

<script type="text/javascript">


import ShowAllFood from "@/components/svgIcons/ShowAllFood.vue";
// import ShowVeg from "@/components/svgIcons/ShowVeg.vue";

export default {
    components:{
        ShowAllFood,
        // ShowVeg
    },
    methods: {
    toggleVegetarian () {
    this.$store.commit('toggleVegetarian')
    }
}
}
</script>

<style>
.toggleVegButton{
width: 100%;
    border: 0;
    background: transparent;
    outline: none;
}

.toggleVegButton:focus,
.toggleVegButton:active{
width: 100%;
    border: 0;
    background: transparent;
    outline: none;
}

.half-width{
    width: 25%;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
}

.bottom-margin{
    margin-bottom: 100px;
}

</style>