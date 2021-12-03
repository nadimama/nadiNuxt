<template>
    <div>
<section>
  hello
  <ul class="upserve-cats">
    <li v-for="item in upserveCategories" :key="item">
    <button @click="filterByCat(item)">
    {{item}}
    </button>
    </li>
  </ul>

  <div class="container">
    <div class="filtree"  v-for="item in currentlyFiltered" v-bind:key="item.name">
    {{item}}
    <br>  
    </div>
  </div>
</section>

    </div>
</template>

<script>
export default {
    name: 'upservefiltering',
    props: ['data'],
        data() {
            return {
                blockedBody: this.data,
                upserve: null,
                upserveCategories: [],
                currentlyFiltered: []
            }
        },
  methods: {
    filterByCat(cat){
      this.currentlyFiltered = []
      for(let i = 0;i<this.upserve.length;i++){
        if(this.upserve[i].category === cat){
        this.currentlyFiltered.push(this.upserve[i])
        }
      }
    },
    async upserves(){
let responseUpserve = await this.$http.get("/product/upserve");
console.log(responseUpserve)
        let upserveProducts = responseUpserve.data.body.objects
  
        // console.log(upserveProducts)
        this.upserve = upserveProducts

        for(let i = 0;i<upserveProducts.length;i++){
            if(!this.upserveCategories.includes(upserveProducts[i].category)){
                this.upserveCategories.push(upserveProducts[i].category)
            }
}


    }
  },
    mounted(){
    this.upserves()
  }

}


</script>