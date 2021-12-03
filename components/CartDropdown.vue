<template>

    <div>
    <div @click="toggleDropdown()">
        carts
    </div>
    <div v-if="dropdownVisible" class="dropdownCarts">
        <div class="closeCartMenu" @click="toggleDropdown()"><CloseModalRed2 /></div>
<ul>

<li v-if="$store.state.storeCurrentOrderUpdateRetail.charges.items.length > 0">
        <router-link to="/retail">
    retail ({{$store.state.storeCurrentOrderUpdateRetail.charges.items.length}})
           </router-link>
    </li>
<li v-if="$store.state.storeCurrentOrderUpdateMamnoon.charges.items.length > 0">
          <router-link to="/mamnoon">
    mamnoon ({{$store.state.storeCurrentOrderUpdateMamnoon.charges.items.length}})
          </router-link>
    </li>
<li v-if="$store.state.storeCurrentOrderUpdateMbar.charges.items.length > 0">
          <router-link to="/mbar">
    mbar ({{$store.state.storeCurrentOrderUpdateMbar.charges.items.length}})
          </router-link>
    </li>
<li v-if="$store.state.storeCurrentOrderUpdateStreet.charges.items.length > 0">
          <router-link to="/mamnoonstreet">
    mamnoon street ({{$store.state.storeCurrentOrderUpdateStreet.charges.items.length}})
          </router-link>
    </li>
 </ul>
</div>
</div>
</div>


</template>    


<script>
import CloseModalRed2 from "@/components/svgIcons/CloseModalRed2";

export default {
    components:{
        CloseModalRed2
    },
    data(){
        return{
            dropdownVisible: false
        }
    },
    methods: {
toggleDropdown(){


this.dropdownVisible = !this.dropdownVisible

}
    }
}
</script>


<style lang="scss">
.dropdownCarts{
    background: #fff367;
    position: absolute;
    width: 190px;
    top: 92px;
    // top: 112px;
        // top: 112px;
    left: 0px;


ul{
list-style-type: none;
    padding: 10px 25px;
margin-bottom: 0;

    li{
        height: 40px;
        line-height: 40px;
         a{
        color: #F05D5B !important;
        height: 40px;
        line-height: 40px;
        font-size: .8rem;
        font-weight: 400;
        &:hover{
         color: #F05D5B;
         text-decoration: underline;   
        }
    }}
}
}
 .closeCartMenu{
        display: none;
 }

@media only screen and (max-width: 992px) {


    .closeCartMenu{
        display: block;
    position: absolute;
    top: 6px;
    right: 18px;
}

.dropdownCarts{
    background: #fff367;
    position: fixed;
    width: 100%;
    top: 92px;
        top: 112px;
    left: 0px;


ul{
list-style-type: none;
    padding: 10px 25px;
margin-bottom: 0;

    li{
        height: 40px;
        line-height: 40px;
         a{
        color: #F05D5B;
        height: 40px;
        line-height: 40px;
            color: #f05d5b;
                font-weight: 400;

        &:hover{
         color: #F05D5B;
         text-decoration: underline;   
        }
    }}
}
}


}





</style>