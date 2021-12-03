<template>
    
<div class="nadi-intro">

<div class="body">
<!-- <p>
Welcome to Nadi Mama, the home for all things the Mama Group has to offer. Swipe through to see some of our latest special offerings hand-curated by our lead chef, browse the full menu and order items individually, peruse our new retail items, learn more about wholesale resale opportunities of our house made products, make reservations for a special night at one of our locations, or simply stay in touch with us!


</p> -->


<NadiIntroSvg />

</div>
    
</div>


</template>



<script>


import NadiIntroSvg from '@/components/NadiIntroSvg'

export default {
    name: 'NadiIntro',
    components:{
        NadiIntroSvg
    }
}
</script>


<style lang="scss">
.nadi-intro{
    
svg{
    margin: 0 auto;
}

}


.logo{
    // width: 20%;
    // margin: 0 auto;

    width: 26%;
    margin: 0 auto;


   @media only screen and (max-width: 992px) {
    width: 40%;
    margin: 0 auto;
   }


   @media only screen and (max-width: 640px) {
    width: 100%;
    margin: 0 auto;
   }



}





.body p{
    width: 80%;
    margin: 20px auto;
    line-height: 2;
    font-size: 24px;
    line-height: 1.6;
    color: #f05d5b;
text-transform: lowercase;
       @media only screen and (max-width: 992px) {
    font-size: 16px;
    line-height: 1.4;

       }

}

    @media only screen and (max-width: 1700px) {
        .body{
            padding-top: 35px;
        }
    }
</style>