<template>
  <section :id="tag" class="section hero is-primary is-fullheight position-relative mb-80">
        <h4 class="mob-bottom-margin">{{header}}</h4>
        <p class="description-para noselect hide-mobile">{{description}}</p>
        <div class="width-container alacarte-width-container">

                         <router-link to="/mamnoon">
                         <!-- mamnoon -->
               <Mamnoon1 :caviarLink="false" />
            </router-link>
              <router-link to="/mamnoonstreet">
    
  
            <MamnoonStreet1 :caviarLink="false" />
                          </router-link>



              <router-link to="/mbar">
          <!-- <div style="pointer-events:none;opacity:1;display: inline;"> <MamnoonStreet1 :caviarLink="false" /> -->
            <Mbar3 :caviarLink="false" />
                          </router-link>
<!-- </div> -->
        </div>
    </section>
</template>

<script>

import Mamnoon1 from '@/components/svgIcons/Mamnoon1.vue'
import MamnoonStreet1 from '@/components/svgIcons/MamnoonStreet1.vue'
import Mbar3 from '@/components/svgIcons/Mbar3.vue'
export default {
    components:{
        Mamnoon1,
        MamnoonStreet1,
        Mbar3
    },
    name: 'alacarte',
    props: ['data','header','tag','description'],
    data () {
        return {

        }
    }
}

</script>


<style lang="scss" scoped>
.alacarte-width-container{
      height: 150px;
          background: #fff367;
          overflow: hidden;
a{
   display: inline;
}
}

@media only screen and (max-width: 768px) {
.alacarte-width-container{
        overflow: hidden;
  height: auto;
a{
display: flex;
}
}



}
 


</style>


