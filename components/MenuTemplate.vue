<template>
<div>
<Nav3 />

<div id="menus" class="container pt180" :style="{'background-color':background_color,'color': text_color}">
<h1>{{this.$route.params.id}} menu</h1>





<div class="category" @click="filterCategories(category.id)" :style="{'background-color':button_color,'color': button_text_color}">all</div>
<template v-for="category in categories">
<div class="category" :style="{'background-color':button_color,'color': button_text_color}" @click="filterCategories(category.id)">{{category.name}}</div>
</template>



<template v-for="item in menus">

<div v-if="currentCategory === ''">

<template>
{{item.status}}
{{item.name}}<br>
{{item.price}}<br>
{{item.description}}<br>
</template>
</div>


<div v-if="item.category_id === currentCategory">
<b>{{item.name}}</b><br>
<b>{{item.price}}</b><br>
{{item.description}}<br>
</div>
</template>

<br>
<!--menus: <pre>{{menus}}</pre>-->


</div>


</div>
</template>

<script>  

import Nav3 from "@/components/Nav3";

export default{
    components:{
Nav3
    },
    data(){
        return {
currentCategory: '',
     categories: [],
     menus: [],
buttonColors:[],
background_color: '',
button_text_color: '',
background_color: '',
button_color: '',
text_color: ''
        }
    },
    mounted(){
        // this.showMenus()
            //  this.showMenus2()
            //  this.showCategories()


for(let i in this.$store.state.pageData[0].restaurant_repeater){

    if(this.$route.params.id.replace(' ','') === this.$store.state.pageData[0].restaurant_repeater[i].name.replace(' ','')){
 this.showMenus2(this.$route.params.id.replace(' ',''))
this.showCategories(this.$route.params.id.replace(' ',''))


    }
}
    this.individualRestaurant()

    },
    methods:{
        filterCategories(id){
            this.currentCategory = id
        },
        async showMenus2(restName){
      let responseUpserve = await this.$http.get(`/product/menu${restName}`);
//    console.log(responseUpserve);
this.menus = responseUpserve.data.body.objects;
    },
            async showCategories(restName){
  
      let responseUpserve = await this.$http.get(`/product/menu${restName}categories`);
//    console.log(responseUpserve);
this.categories = responseUpserve.data.body.objects;



    },
      async individualRestaurant(){

for(let i = 0; i<this.$store.state.pageData[0].restaurant_repeater.length;i++){
// if(this.$store.state.pageData[0].restaurant_repeater[i].name.replace(' ', '') === this.$route.params.id.replace(' ','')){
//     console.log(this.$store.state.pageData[0].restaurant_repeater.name.replace(' ', ''))
// }

if(this.$store.state.pageData[0].restaurant_repeater[i].name.replace(' ', '') === this.$route.params.id.replace(' ','')){
    console.log(this.$store.state.pageData[0].restaurant_repeater[i].name);


    



this.background_color = this.$store.state.pageData[0].restaurant_repeater[i].background_color;
this.button_text_color = this.$store.state.pageData[0].restaurant_repeater[i].button_text_color;
this.background_color = this.$store.state.pageData[0].restaurant_repeater[i].background_color;
this.button_color = this.$store.state.pageData[0].restaurant_repeater[i].button_color;
this.text_color = this.$store.state.pageData[0].restaurant_repeater[i].text_color









}

}





}

        },

}


</script>


<style lang="scss">

.imp-description.xhcd-9kimp-description{
    // color: green !important;
}


.category{
    padding: 4px;
    cursor: pointer;
    font-weight: bold;
        display: inline-block;
        margin: 10px;
    &:hover{
      opacity: .5;
    }
}
</style>