<template>
<div>
<template v-if="shippingOption === false">
<div style="margin-top:20px;">
<v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
</div>
<div style="margin-top:20px;" v-if="selectedDate !== null">
<v-select v-if="rendered" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
</div>
</template>
</div>
</template>

<script>  

import vSelect from "vue-select";


export default{
    props: ['shippingOption','rendered','dropDownDays','selectedDate','selectedTime','attention'],
    components:{
        vSelect
    },
    watch:{
        selectedDate(){

      this.currentOrder.scheduled_time = null


      this.selectedTime = null

},
    selectedTime(){
this.currentOrder.scheduled_time = this.selectedTime.time
    }
    }
}

</script>  