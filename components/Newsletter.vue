<template>

  <section id="newsletter" class="section hero is-primary is-fullheight position-relative mb-80 black-background" :if="visible" style="display:none;">
        <h4 class="mob-bottom-margin">{{header}}</h4>
       <p class="description-para noselect hide-mobile">{{body}}</p>

<div class="width-container text-center translate40">
<!-- <div v-for="item in data" :key="item.restaurant_title">
  <Mbar v-if="item.restaurant_title === 'mbar'" />
  <Mamnoon v-else-if="item.restaurant_title === 'mamnoon'" />
</div> -->
  <CampaignMonitor />
  <br>
</div>
</section>
</template>



<script>

import CampaignMonitor from '@/components/CampaignMonitor.vue'

import Send from '@/components/Send.vue'

export default {
props: ['title', 'description','header','body','visible'],
components: {
    Send,
    CampaignMonitor
},
  created(){
    let recaptchaScriptModal = document.createElement('script')
      recaptchaScriptModal.setAttribute('src', 'https://js.createsend1.com/javascript/copypastesubscribeformlogic.js')
      document.head.appendChild(recaptchaScriptModal)
  }


};
</script>



<style lang="scss">
#newsletter{
    margin-bottom: 100px;
    padding: 0;
    display: inline-block;
    width: 100%;
    padding-top: 20px;
    background: black;
}



.newsletter-section{
    width: 50%;

float: left;
    h4{
        text-align: left;
    }
    .pad-cont{
           padding: 20px 30px;
    }

        .pad-cont-bottom{
           padding: 20px 30px;
    }

&:nth-child(2){
       .pad-cont{
        padding-top: 30px;
       }

       .pad-cont-bottom{
        padding-top: 30px;
       }

}


}

@media only screen and (max-width: 960px) {
.newsletter-section{
    width: 100%;
    display: inline-block;
    text-align: left;
    padding-bottom: 0px;
    h4{
        text-align: left;
    }
    .pad-cont{
        padding: 20px 30px;
    }


    &:first-child{
        .pad-cont{
            padding-bottom:0;
            p{
                margin-bottom: 0;
            }
        }

        .pad-cont-bottom{
            padding-bottom:0;
            p{
                margin-bottom: 0;
            }
        }

    }

&:nth-child(2){
       .pad-cont{
        padding-bottom: 15px;
        padding-top: 15px;
       }

       .pad-cont-bottom{
        padding-bottom: 15px;
        padding-top: 15px;
       }

}

}



}


    .description-para-left {
        color: white;
        margin-bottom: 0;
        text-align: left;
    }


.overflow-hidden{
    overflow: hidden;
    padding-top: 0 !important;
}



.translate40{
    transform: translate(20px, 0px);
}

@media only screen and (max-width: 992px){

.description-para-left{
    width: 90%;
    font-size: 12px;
}

 .pad-cont{
     padding: 10px 10px 0px 15px !important;
}
 
        .pad-cont-bottom{
              padding: 10px 10px 10px 15px !important;
    }







}




@media only screen and (max-width: 640px){
    .lap-right-pad {
    border: 0;
    color: #000;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    letter-spacing: 0.25px;
    padding: 12px 35px 12px 10px;
    // width: 200px;
        width: 60%;
}
}

@media only screen and (max-width: 400px){
    .lap-right-pad {

    width: 180px;
}
}

</style>