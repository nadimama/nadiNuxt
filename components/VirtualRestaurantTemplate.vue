<template>
<div>
  

<Nav3 />




        <div v-if="this.$store.state.pageData[0].restaurant_repeater.map(x=>x.name.replace(' ', '')).includes($route.params.id)">

                  <div v-for="item in this.$store.state.pageData[0].restaurant_repeater" :key="item.acf_fc_layout"><!--begin big loop-->
                      









<!--notification section-->
<template v-if="item.header_notification && notificationVisible && item.name.replace(' ', '') === restaurantName">

  





<section class="header-notification" v-bind:style="{ 'background-color': item.header_notification_background_color, 'color': item.header_notification_text_color }">

<div class="dismissNotification" @click="dismissNotification">
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36426" width="35" height="9" transform="rotate(45 6.36426 0)" fill="white"/>
<rect x="31.1128" y="6.36401" width="35" height="9" transform="rotate(135 31.1128 6.36401)" fill="white"/>
</svg>
</div>
    <div class="container mobilePage">

     <!--begin row-->
<div class="row">
             
                                          
<div class="col-md-6 offset-md-3 col-12 offset-0">

<h3 class="headerNotification">  
{{item.header_notification}}
</h3>

</div></div></div>
</section>
</template>

<!--end notification section-->



























                      <template v-if="item.name.replace(' ', '') === restaurantName">
                     
                     
                      <section v-if="!item.background_video" class="topSection fh" v-bind:style="{ 'text-align':'center', 'background-image': 'url(' + item.background_image.url + ')', 'background-position': 'top center', 'position': 'relative' }">
                        <!--<div class="container mobilePage pt132">-->
  
                    <div v-html="item.logo_svg" class="restaurantLogo"></div>















                      <!--<br>-->
                       <!-- </div>-->
                      </section>
<VideoComponent v-else :src="item.background_video" :logo="item.logo_svg" />




                      <section v-bind:style="{ 'background-color': item.background_color }">

         <!--begin container-->
    <div class="container mobilePage secPadSmall">

     <!--begin row-->
<div class="row">
             
                                          
<div class="col-md-4">
<div class="header-p-box">


                <p class="header-p" v-bind:style="{ 'color': item.text_color }">{{item.description}}</p>

                        <template v-for="button in item.buttons">







            <a class="ctaLink" target="_blank" :style="styleObject" :href="button.link">{{button.text}}</a>




                                                </template>



</div>

                                                <br>







</div>

                     
                      </div>
                                          <!--end row-->
</div>
                     <!--end container-->

                      </section>





<!--second contact section-->

            <section v-bind:style="{ 'background-color': item.text_color }">

         <!--begin container-->
    <div class="container mobilePage secPadSmall">

     <!--begin row-->
<div class="row">
             
                                          


<div class="col-lg-5 offset-lg-1 col-md-12 offset-0">


              <div class="rightContactCol" :style="{'color' : item.background_color}">


<template v-if="item.hours">
<div class="infoPoints">
<div class="iconPoint">
<Clock  :width="40" :color="'#ffffff'" class="mr6" />
</div> 


<div>

<template v-for="line in item.hours.hours_lines">

{{line.line}}<br>
</template>
</div>


<br>
</div>
</template>




<template v-if="item.phone_number">

<div class="infoPoints">
<div class="iconPoint">

              <Phone :color="'#ffffff'" :width="30" class="mr6" />
              </div>
<div style="padding-top: 6px;">
 <a :style="{'color':item.background_color}" :href="`tel:+1${item.phone_number.replace(/[^0-9.]/g, '')}`">{{item.phone_number}}</a><br>            







</div></div>

</template>


<br>
<template v-if="item.contact">
<div class="infoPoints">
<div class="iconPoint">
<Envelope :width="40" :color="'#ffffff'" class="mr6 centeredSvg" style="position: initial;margin-right: 10px;" />
</div>

<div>

<template v-for="line in item.contact.contact_lines">
  <template v-if="line.line_group.link !== ''">
    <a :style="{'color':item.background_color}" :href="line.line_group.link" target="_blank">{{line.line_group.text}}</a><br>
    </template>
    <template v-else>
      {{line.line_group.text}}<br>
    </template>
</template>


</div>


</div>
</template>

<template v-if="item.phone_number">

<div class="infoPoints">
<div class="iconPoint">
<Heart :color="'white'"/>
           
              </div>
<div style="padding-top: 0px;">




<div class="socialLinkButtons" v-for="social in item.social">

<a :href="social.link" target="_blank">
<template v-if="social.title === 'facebook'">
<Facebook :color="item.background_color" :width="40" />
</template>
<template v-if="social.title === 'instagram'">
<Instagram :color="item.background_color" :width="40" />
</template>
<template v-if="social.title === 'twitter'">
<Twitter :color="item.background_color" :width="40" />
</template>
</a>
</div>










</div></div>

</template>




<br>




              </div>


                              </div>
                     





<div class="col-lg-6 col-md-12 mapBoxOuter">
    
   <div class="map m15Mob mapBox" v-html="item.map.map_embed"></div>







<div v-for="button in buttonColors" style="display:none;">

{{button.name}}

<div :style="{'background-color':button.buttonColor}">button.buttonColor</div>
<div :style="{'background-color':button.buttonColorHover}">button.buttonColorHover</div>
<div :style="{'background-color':button.buttonColorBgHover}">button.buttonColorBgHover</div>
<div :style="{'background-color':button.buttonColorBg}">button.buttonColorBg</div>
<div :style="{'background-color':button.alternateColor}">button.alternateColor</div>

</div>


<div class="mapAddress">


<div class="mapAddressBox infoPoints mb0">
<MapPin2 :color="'white'"/>
<template v-if="item.address">
<template v-for="line in item.address.address_lines">
<template v-if="line.line_group.url !== ''">
 <a :style="{'color':item.background_color}" :href="line.line_group.url" target="_blank">{{line.line_group.text}}</a><br>
</template>
<template v-else>
  {{line.line_group.text}}<br>
</template>
</template>
</template>
</div>
</div>


                                            







</div>













                      </div>
                                          <!--end row-->
</div>
                     <!--end container-->

                      </section>



<!--second contact section-->



<!--social section-->
<template v-if="item.social">

<section class="secPadMed social noTopPad" v-bind:style="{'display': 'none', 'background-color': item.text_color, 'color': item.background_color }">



    <div class="container mobilePage">

<div class="row" style="display:none;">
<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12 offset-0">





<!--begin social box-->
<div class="socialBox">
<!--begin social box-->

<!--b rowcont-->
<div class="container">
<div class="row">




<div class="col-lg-4 col-12">

              
                    <h3 class="centerMobile mb20" :style="{'color': item.text_color}">follow us</h3>
                  

</div>





</div>
</div><!--e rowcont-->

<!--end social box-->
</div>
<!--end social box-->


</div>
</div>


     <!--begin row-->
<div class="row">
             
                                          


<div class="social-icons" style="width: 100%;text-align: center;">

<!--
<div class="socialLink">
<h3>  
follow us
</h3></div>-->
<template v-for="social in item.social">

<div class="socialLink">
<a :href="social.link" :title="social.title" target="_blank">


<template v-if="social.title === 'facebook'">
<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2912:108)">
<path d="M38.5472 19.2736C38.5472 8.62907 29.9181 0 19.2736 0C8.62907 0 0 8.62907 0 19.2736C0 28.8934 7.04803 36.8671 16.2621 38.313V24.8449H11.3684V19.2736H16.2621V15.0274C16.2621 10.1969 19.1396 7.52875 23.542 7.52875C25.6501 7.52875 27.8564 7.90518 27.8564 7.90518V12.6483H25.4261C23.0319 12.6483 22.2851 14.1341 22.2851 15.6598V19.2736H27.6305L26.776 24.8449H22.2851V38.313C31.4991 36.8671 38.5472 28.8934 38.5472 19.2736Z" :fill="item.background_color" />
</g>
<defs>
<clipPath id="clip0_2912:108">
<rect width="38.5472" height="38.5472" fill="white"/>
</clipPath>
</defs>
</svg>

</template>
<template v-if="social.title === 'twitter'">
<svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3531 31.9334C26.8956 31.9334 34.852 19.8821 34.852 9.4345C34.852 9.09571 34.8445 8.74938 34.8294 8.41059C36.3772 7.29128 37.7129 5.90485 38.7737 4.31646C37.3323 4.95779 35.8018 5.37664 34.2347 5.5587C35.8848 4.5696 37.1203 3.01577 37.7122 1.18526C36.1598 2.10523 34.4622 2.7542 32.692 3.10433C31.4993 1.83701 29.9223 0.9979 28.2049 0.716722C26.4874 0.435544 24.7252 0.727964 23.1906 1.54877C21.656 2.36958 20.4346 3.67306 19.7151 5.25768C18.9957 6.84229 18.8182 8.6198 19.2103 10.3154C16.067 10.1576 12.992 9.34109 10.1846 7.91869C7.37711 6.49629 4.89991 4.49978 2.91357 2.05859C1.90401 3.7992 1.59508 5.8589 2.04957 7.8191C2.50407 9.7793 3.68788 11.4929 5.36041 12.6116C4.10477 12.5718 2.87664 12.2337 1.77748 11.6254V11.7232C1.77636 13.5499 2.40785 15.3205 3.5646 16.7342C4.72136 18.1479 6.33199 19.1174 8.12271 19.4778C6.95956 19.7961 5.73878 19.8425 4.55484 19.6134C5.06014 21.1843 6.04329 22.5583 7.36706 23.5435C8.69083 24.5288 10.2892 25.0762 11.939 25.1093C9.13807 27.3095 5.67806 28.5029 2.11628 28.4973C1.48463 28.4963 0.853595 28.4576 0.226562 28.3813C3.84495 30.7027 8.0541 31.9356 12.3531 31.9334Z" :fill="item.background_color"/>
</svg>
</template>
<template v-if="social.title === 'instagram'">
<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2912:110)">
<path d="M19.7267 3.47075C24.8764 3.47075 25.4862 3.49334 27.5114 3.58368C29.3936 3.6665 30.41 3.98271 31.0876 4.24621C31.9835 4.59253 32.631 5.01414 33.301 5.6842C33.9786 6.36179 34.3927 7.00173 34.739 7.89765C35.0025 8.57524 35.3187 9.59915 35.4016 11.4738C35.4919 13.5066 35.5145 14.1164 35.5145 19.2585C35.5145 24.4082 35.4919 25.018 35.4016 27.0433C35.3187 28.9254 35.0025 29.9418 34.739 30.6194C34.3927 31.5153 33.9711 32.1628 33.301 32.8329C32.6235 33.5104 31.9835 33.9245 31.0876 34.2708C30.41 34.5344 29.3861 34.8506 27.5114 34.9334C25.4787 35.0237 24.8688 35.0463 19.7267 35.0463C14.5771 35.0463 13.9672 35.0237 11.942 34.9334C10.0598 34.8506 9.04342 34.5344 8.36584 34.2708C7.46992 33.9245 6.82244 33.5029 6.15239 32.8329C5.4748 32.1553 5.06072 31.5153 4.71439 30.6194C4.45089 29.9418 4.13468 28.9179 4.05187 27.0433C3.96152 25.0105 3.93893 24.4007 3.93893 19.2585C3.93893 14.1089 3.96152 13.499 4.05187 11.4738C4.13468 9.59162 4.45089 8.57524 4.71439 7.89765C5.06072 7.00173 5.48233 6.35426 6.15239 5.6842C6.82997 5.00662 7.46992 4.59253 8.36584 4.24621C9.04342 3.98271 10.0673 3.6665 11.942 3.58368C13.9672 3.49334 14.5771 3.47075 19.7267 3.47075ZM19.7267 0C14.4942 0 13.8392 0.0225862 11.7839 0.112931C9.73607 0.203276 8.32819 0.534541 7.10854 1.00885C5.83618 1.50575 4.75957 2.16075 3.69049 3.23736C2.61388 4.30644 1.95887 5.38305 1.46198 6.64788C0.987666 7.87507 0.656401 9.27541 0.566056 11.3232C0.475711 13.3861 0.453125 14.0411 0.453125 19.2736C0.453125 24.5061 0.475711 25.1611 0.566056 27.2164C0.656401 29.2642 0.987666 30.6721 1.46198 31.8918C1.95887 33.1641 2.61388 34.2407 3.69049 35.3098C4.75957 36.3789 5.83618 37.0414 7.10101 37.5308C8.32819 38.0051 9.72854 38.3364 11.7764 38.4267C13.8317 38.5171 14.4867 38.5396 19.7192 38.5396C24.9517 38.5396 25.6067 38.5171 27.662 38.4267C29.7098 38.3364 31.1177 38.0051 32.3374 37.5308C33.6022 37.0414 34.6788 36.3789 35.7479 35.3098C36.817 34.2407 37.4795 33.1641 37.9689 31.8993C38.4432 30.6721 38.7744 29.2718 38.8648 27.2239C38.9551 25.1686 38.9777 24.5136 38.9777 19.2811C38.9777 14.0486 38.9551 13.3936 38.8648 11.3383C38.7744 9.29047 38.4432 7.8826 37.9689 6.66294C37.4946 5.38305 36.8396 4.30644 35.7629 3.23736C34.6939 2.16828 33.6172 1.50575 32.3524 1.01638C31.1252 0.54207 29.7249 0.210805 27.6771 0.12046C25.6142 0.0225862 24.9592 0 19.7267 0Z" :fill="item.background_color"/>
<path d="M19.7265 9.37329C14.2606 9.37329 9.82617 13.8077 9.82617 19.2736C9.82617 24.7395 14.2606 29.1739 19.7265 29.1739C25.1923 29.1739 29.6268 24.7395 29.6268 19.2736C29.6268 13.8077 25.1923 9.37329 19.7265 9.37329ZM19.7265 25.6956C16.1804 25.6956 13.3045 22.8196 13.3045 19.2736C13.3045 15.7276 16.1804 12.8516 19.7265 12.8516C23.2725 12.8516 26.1485 15.7276 26.1485 19.2736C26.1485 22.8196 23.2725 25.6956 19.7265 25.6956Z" :fill="item.background_color" />
<path d="M32.3297 8.98174C32.3297 10.2616 31.2907 11.2931 30.0184 11.2931C28.7385 11.2931 27.707 10.2541 27.707 8.98174C27.707 7.70185 28.746 6.67041 30.0184 6.67041C31.2907 6.67041 32.3297 7.70938 32.3297 8.98174Z" :fill="item.background_color"/>
</g>
<defs>
<clipPath id="clip0_2912:110">
<rect width="38.5472" height="38.5472" :fill="item.background_color" transform="translate(0.453125)"/>
</clipPath>
</defs>
</svg>

</template>




</a>
</div>



</template>

</div>
</div>
</div>

</section>
</template>


<!--end social section-->





<!--notification section-->
<template v-if="item.notification">

  


<section class="secPadMed notificationModule" v-bind:style="{ 'background-color': item.background_color, 'color': item.text_color }">


    <div class="container mobilePage">

     <!--begin row-->
<div class="row">
             
                                          
<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12 offset-0">


<h3>  
{{item.notification}}
</h3>


</div></div></div>
</section>
</template>

<!--end notification section-->






















<!--lr mod repeater-->

<template v-if="item.lr_mod_repeater">
<template v-for="(repeat,index) in item.lr_mod_repeater">



<template v-if="index % 2 === 1">
<section class="flexSection" v-bind:style="{ 'background-color': item.background_color, 'color': item.text_color, 'width': '100%' }">


<div class="container">

<div class="row">
<div class="col-md-6 col-12"><img :src="repeat.image" style="width: 100%;margin: 34px 0;"></div>
<div class="col-md-4 offset-md-1 col-12 offset-0" style="position: relative">

<div class="sidebox" :style="{'background-color': item.background_color}">


      <h3>  
        {{repeat.text}}
      </h3>
      <br>
       <a class="ctaLink" target="_blank" :style="styleObject" :href="repeat.button_link">{{repeat.button_text}}</a>
</div>
</div>

</div>

</div>



<div class="half-panel with-background" v-bind:style="{ 'background-color': item.background_color, 'display':'none'}">
<div class="imagePanel" v-bind:style="{ 'background-image': 'url(' + repeat.image + ')' }">
_</div>

</div>
<div class="half-panel right" :style="{'background-color': item.background_color, 'position': 'relative','height':'100vh', 'padding':0, 'margin-top': '46px', 'display':'none'}">
  <div :style="{'background-color': item.background_color, 'position': 'absolute', 'bottom': '0px'}">
      <div>
      <h3>  
        {{repeat.text}}
      </h3>
      <br>






       <a class="ctaLinkOpposite" target="_blank" :style="styleObject" :href="repeat.button_link">{{repeat.button_text}}</a>

      </div>
  </div>
</div>
</section>
</template>
<template v-else>
<section class="flexSection" v-bind:style="{ 'background-color': item.text_color, 'color': item.background_color, 'width': '100%' }">


<div class="container">

<div class="row">
<div class="col-md-6 col-12"><img :src="repeat.image" style="width: 100%;margin: 34px 0;"></div>
<div class="col-md-4 offset-md-1 col-12 offset-0"  style="position: relative">




<div class="sidebox" :style="{'background-color': item.text_color}">


      <h3>  
        {{repeat.text}}
      </h3>
      <br>
       <a class="ctaLinkOpposite" target="_blank" :style="styleObject" :href="repeat.button_link">{{repeat.button_text}}</a>
</div>
</div>

</div>

</div>



<div class="half-panel with-background" v-bind:style="{ 'background-color': item.text_color, 'display':'none'}">
<div class="imagePanel" v-bind:style="{ 'background-image': 'url(' + repeat.image + ')' }">
_</div>

</div>
<div class="half-panel right" :style="{'background-color': item.background_color, 'position': 'relative','height':'100vh', 'padding':0, 'margin-top': '46px', 'display':'none'}">
  <div :style="{'background-color': item.background_color, 'position': 'absolute', 'bottom': '0px'}">
      <div>
      <h3>  
        {{repeat.text}}
      </h3>
      <br>






       <a class="ctaLink" target="_blank" :style="styleObject" :href="repeat.button_link">{{repeat.button_text}}</a>

      </div>
  </div>
</div>
</section>
</template>






</template>



</template>


<!--end lr mod repeater-->






<!--full width image-->
<template  v-if="item.full_width">

<section class="secPad fh full-width-background" v-bind:style="{ 'background-size': 'cover', 'background-image': 'url(' + item.full_width + ')' }">


</section>

</template>

<!--end full width image-->






                          </template>







              </div><!--end big loop-->

              </div>
              <div v-else>
                      {{ pushHome() }}
              </div>





<GlobalFooter />

  </div>



  
</template>

<script type="text/javascript">

import ALaCarte from "@/components/ALaCarte";
import Nav3 from "@/components/Nav3";



import Phone from "@/components/svgIcons/Phone";
import Clock from "@/components/svgIcons/Clock";
import MapPin from "@/components/svgIcons/MapPin";
import MapPin2 from "@/components/svgIcons/MapPin2";


import Facebook from "@/components/svgIcons/Facebook";
import Instagram from "@/components/svgIcons/Instagram";
import Twitter from "@/components/svgIcons/Twitter";


import Heart from "@/components/svgIcons/Heart";
import Envelope from "@/components/svgIcons/Envelope";



import VideoComponent from "@/components/VideoComponent";

import GlobalFooter from "@/components/GlobalFooter";


export default {

  components: {
    ALaCarte,
    Nav3,
    Phone,
    Clock,
    Envelope,
    MapPin,
        MapPin2,
        Heart,
    VideoComponent,
    GlobalFooter,
    Facebook,
    Instagram,
    Twitter
  },






    metaInfo() {
        return {
            title: `${this.generateRestaurantTitle}`,
            meta: [
              { vmid: 'description', name: 'description', content: 'barbar' },
                { name: 'description', content: `${this.generateRestaurantDescription}`},
                { property: 'og:title', content: `${this.generateRestaurantTitle}`},
                { property: 'og:site_name', content: 'nadi mama'},
                { property: 'og:description', content: `${this.generateRestaurantDescription}`},
                {property: 'og:url', content: 'https://nadimama.com/'},
                // {property: 'og:image', content: this.aws_url + '/users/' + this.userData.profileurl + '-main.jpg' }    
            ]
        }},

computed: {
generateRestaurantTitle(){

for(let i in this.$store.state.pageData[0].restaurant_repeater){
if(this.$store.state.pageData[0].restaurant_repeater[i].name.replace(' ', '') === this.$route.params.id){

return this.$store.state.pageData[0].restaurant_repeater[i].name;
}
}
},
generateRestaurantDescription(){

for(let i in this.$store.state.pageData[0].restaurant_repeater){
if(this.$store.state.pageData[0].restaurant_repeater[i].name.replace(' ', '') === this.$route.params.id){

return this.$store.state.pageData[0].restaurant_repeater[i].description;
}
}
},
    styleObject() {
      for(var i in this.buttonColors){


        // console.log(this.buttonColors[i].name);
        // console.log(this.restaurantName);
        if(this.buttonColors[i].name.replace(" ", "") === this.restaurantName.replace(" ", "")){






      return {
        '--button-color': this.buttonColors[i].buttonColor,
        '--button-background-color': this.buttonColors[i].buttonColorHover,
        '--button-border-color': this.buttonColors[i].buttonColor,
        '--button-color--hover': this.buttonColors[i].buttonColorHover,
        '--button-background-color--hover': this.buttonColors[i].buttonColor,
        '--button-border-color': this.buttonColors[i].borderColorHover,
        '--alternate-color': this.buttonColors[i].alternateColor

      };


        }
      }



    },












    containsYN(){


    // let arrRest = this.this.$store.state.pageData[0].restaurant_repeater.map(x=>x.name.replace(" ", ""));

    let arrRest = this.$store.state.pageData[0];

console.log(arrRest);


return arrRest;
    },
    count() {
      return this.$store.state.count;
    },
    names() {
      return this.$store.state.names;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  data() {
    
    return {




      name: this.$route.params.id,
      button:{
        colorBackd: '',
        colorBackdHover: '',
        color: '',
        alternateColor: '',
        colorHover: '',
        borderColor: '',
        borderColorHover: ''
    },
buttonColors:[],
notificationVisible: true,
      restaurantName: 'fff',
      pageData: null,
      testimonials: null,
      inventory: this.$store.state.inventory,
      blockedBody: this.apiData,
      upserve: null,
      upserveCategories: [],
      currentlyFiltered: [],
      visibility: {
        testimonials: false,
        planahead: false,
        reservations: false,
        shop: false,
        finefoods: false,
        fullonlinemenu: false,
        newsletter: false
      

      }
    };
  },
  props: ['apiData', 'blok'],
  methods: {
dismissNotification(){
  this.notificationVisible = false;
},
      pushHome(){
          this.$router.push("/")
        },
 isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 },
visibilityChanged (isVisible, entry) {
  this.isVisible = isVisible
  ///console.log(entry.target.id)
  //console.log(entry.isIntersecting)
///console.log(entry)

// this.visibility[entry.target.id] = true


this.visibility[entry.target.id] = entry.isIntersecting


},

  async individualRestaurant(){
   




let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/virtual_restaurant/412`)
    // let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)



    let AcfBlock = responseAcf
    this.pageData = AcfBlock.data.acf.content_fields
    this.pageData = AcfBlock.data.acf.restaurants







for(var i in this.$store.state.pageData[0].restaurant_repeater){



// if(this.restaurantName === this.$store.state.pageData[0].restaurant_repeater[i].name){




this.button.color = this.$store.state.pageData[0].restaurant_repeater[i].button_text_color
this.button.colorHover = this.$store.state.pageData[0].restaurant_repeater[i].button_color
this.button.colorBackd = this.$store.state.pageData[0].restaurant_repeater[i].button_color
this.button.colorBackdHover = this.$store.state.pageData[0].restaurant_repeater[i].button_text_color




this.buttonColors.push({
name: this.$store.state.pageData[0].restaurant_repeater[i].name,
buttonColor: this.$store.state.pageData[0].restaurant_repeater[i].button_text_color,
buttonColorHover: this.$store.state.pageData[0].restaurant_repeater[i].button_color,
buttonColorBg: this.$store.state.pageData[0].restaurant_repeater[i].button_color,
buttonColorBgHover: this.$store.state.pageData[0].restaurant_repeater[i].button_text_color,
alternateColor: this.$store.state.pageData[0].restaurant_repeater[i].background_color

});


// console.log(this.$store.state.pageData[0].restaurant_repeater[i].button_text_color);
// console.log(this.$store.state.pageData[0].restaurant_repeater[i].background_color);
// console.log(this.$store.state.pageData[0].restaurant_repeater[i].button_color);
// console.log(this.$store.state.pageData[0].restaurant_repeater[i].button_text_color);





// }

}



},
    filterByCat(cat){
      this.currentlyFiltered = []
      for(let i = 0;i<this.upserve.length;i++){
        if(this.upserve[i].category === cat){
        this.currentlyFiltered.push(this.upserve[i])
        }
      }
    },
    dayChange(e) {
      this.currentDay = e + 1;
    },
    toggle: function(event) {
      if (event.target.classList.contains("is-open")) {
        this.$store.commit("decrement");


        
        event.target.classList.remove("is-open");
      } else {
        event.target.classList.add("is-open");
        this.$store.commit("increment");
      }
    },
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    increment2(name) {
      this.$store.commit("increment2", { name });
    },
    removeFromCart(price) {
      this.$store.commit("removeFromCart", { price });
    },
    confirmOrder(timeslot) {
      if (event.target.classList.contains("reserved")) {
        this.$store.commit("unreserveFamilyMeal", { timeslot });

      } else {
        this.$store.commit("reserveFamilyMeal", { timeslot });
      }
    },
    changedAlert() {
      console.log("changed");
    }
  },
  created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    this.currentDay = dd;
  },
  mounted(){
    this.individualRestaurant()
        // this.upserves()





this.restaurantName = this.$route.params.id;




let menu = document.getElementsByClassName('imp-wrapper-match2')
console.log(menu);
  }

};

</script>


<style lang="scss">


.topSection{
  background-size: cover;
    margin-top: 92px;
}

.fh{
// min-height: 80vh;
min-height: 90vh;
}


.reserved {
  background: red;
}
.not-available {
  background: #666666;
  color: #ffffff;
  pointer-events: none;
}
.order-button {
  width: 33.33%;
  padding: 20px 0;
}
h4 {
  text-align: center;
}
.is-fullheight,
.familymeal,
.narrow {
  background-color: #f05d5b;
  h4 {
    color: #fff367;    font-weight: bold;
  }
}
.section.hero.familymeal {
  width: 88%;
  margin: 0 auto;
}
.is-fullheight [id^="carousel_prev_"] {
  position: absolute;
  top: 14px;
  //  top: 110px;
  left: 20%;
    left: 30%;
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    left: 5%;
  }
}
.is-fullheight [id^="carousel_next_"] {
  position: absolute;
  top: 14px;
    //  top: 110px;
  right: 20%;
    right: 30%;
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    right: 5%;
  }
}
.is-fullheight {
  padding: 20px 0 0 0;
  // overflow: hidden;
}
.familymeal {
  padding: 0 0 0 0;
}
.order-bottom {
  background: #fff367;
  padding: 10px 0;
  color: black;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: lowercase;
}
.order-bottom.order-top {
  background: #f58e58;
  min-height: 90px;
  text-align: center;
}
.order-panel {
  padding: 10px 0;
}
#mama-dummy-button {
  width: 70px;
  margin: 0 auto;
}
.carousel {
  margin-bottom: 80px;
}
#testimonials .owl-item {
  color: #ffffff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
  margin-top: 10px;
  &:nth-child(odd) {
    background: #f58e58;
  }
  &:nth-child(even) {
    background: #f58e58;
  }
}
.owl-stage {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.owl-item {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: auto !important;
}
#testimonials .owl-item .l-col {
  padding: 20px;
  text-align: left;
  padding-top: 15px;
  width: 100%;
  float: left;
}
#testimonials .owl-item .r-col {
  padding: 0px;
  // width: 50%;
  float: left;
  img {
    width: 100%;
  }
}
#testimonials .owl-item > div > div {
  text-align: left;
}
.xs {
  // font-size: 16px;
  font-size: 18px;
}
.sm {
  // font-size: 22px;
  font-size: 18px;
}
.md {
  font-size: 18px;
}
.lg {
  font-size: 64px;
}
.days {
  margin: 10px auto 5px;
  width: 80%;
}
.days span {
  color: white;
  display: inline-block;
  font-style: italic;
  margin-left: 5px;
  margin-right: 5px;
  line-height: 30px;
  cursor: pointer;
}
.month {
  color: white;
  display: inline-block;
  font-style: italic;
  margin-left: 5px;
  margin-right: 5px;
  // line-height: 30px;
  cursor: pointer;
}
.insideHeader {
  margin-bottom: 20px;
  margin-top: -15px;
}
button.snipcart-add-item {
  border: 0;
  background: transparent;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
}
.snipcart-modal__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 110 !important;
  background-color: #f0f5f6;
  // top: 140px !important;
  top: 90px !important;
    top: 0 !important;
}
.top-widget {
  width: 100%;
  height: 500px;
  background: green;
}
.coverflowsection {
  padding: 0 0 20px 0;
  margin-bottom: 80px;
  background-color: #f05d5b;
  overflow: hidden;
  position: relative;
  h4 {
    color: #fff367;
    font-weight: bold;
  }
  p {
    color: white;
    width: 80%;
    margin: 10px auto 10px;
    text-align: center;
  }

    // margin-top: 90px;

    width: 70%;

    margin-left: auto;
    margin-right: auto;

}
@media only screen and (max-width: 960px) {
  .coverflowsection {
        // height: 660px;
        // height: 880px;
           width: 100%;
  }
}
@media only screen and (max-width: 640px) {
  .coverflowsection {
      // height: 660px;
      // height: 800px
      //  height: 880px;
  }
}
@media only screen and (max-width: 480px) {
  .coverflowsection {

      // height: 880px;
      // height: 804px;
  }
}
.bottom-button {

  // position: absolute;
  // bottom: 0;
  // background: #FFF367;
  // width: 100%;
  // padding: 10px 0;

  position: absolute;
  bottom: 0;
  background: #fff367;
  width: 100%;
  padding: 10px 0;
  // height: 120px;
  height: 110px;
  a {
    position: absolute;
    // width: 100%;
  }
  display: none;
}
.width-container {
  width: 100%;
  overflow: auto;
}
section {
  clear: both;
}
.shortcarousel {
  margin-bottom: 80px;
}
.description-para {
  color: white;
  margin: 12px auto 20px;
  width: 80%;
  text-align: center;

@media only screen and (max-width: 992px) {
  width: 90%;
  font-size: 12px;
}

}

.quote-container {
  // position: relative;
  // height: 100%;
  // width: 100%;
  // padding-bottom: 80px;
  position: relative;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  // padding-bottom: 80px;
  text-align: center;

}
.quote-author {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff367;
}
.itemDescription{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff367b5;
    top: 0;
    opacity: 0;
    transition: all .5s ease;
.text-box{
      width: 80%;
      margin: 0 auto;
      font-weight: 100;
      font-size: 36px;
      margin-top: 100px;
}
}
.relative-pos{
  position: relative;
  overflow: hidden;  
    &:hover{
      .itemDescription{
        opacity: 1;
      }
    }
}


.tesstimonialItem{
  text-align:center;
  margin-top: 0px;
  width: 100% !important;
  
}



#mama-shop .carousel{
    margin-bottom: 20px;
}



.owl-item > div{
  width: 100%
}


#testimonials{
  .owl-carousel {
    margin-top: -10px;
  }
}


#testimonials{
  .quote-container {
    // height: 200px;
        min-height: 60px;
    position: relative;

    .md, .xs{
      position: absolute;
      top: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      left: 50%;
      width: 100%;
      font-size: 20px;
      color: #f05d5b;
    }
}

}

ul.upserve-cats li{
  display: inline;
}

.filtree-half{

    width: 50%;
    float: left;
    // height: 300px;
    // height: 220px;
    height: 140px;
    background: transparent;
    // margin: 5px;
    padding: 0px;
    overflow: hidden;

@media only screen and (max-width: 768px) {
  width: 100%
}


.grey-bg{
    //  padding: 5px;
      // background: #fff367;
            background: #ffffff;
            // padding: 10px 5px;
      
}
}
.filtree{
//   width: 50%;
//   float: left;
//   height: 300px;
// background: #ddd;
// margin: 5px;
// padding: 5px;


width: 30%;
    float: left;
    height: 300px;
    background: #ddd;
    margin: 5px;
    padding: 5px;
    overflow: hidden;



@media only screen and (max-width: 1080px) {
width: 50%
}


@media only screen and (max-width: 768px) {

width: 100%





}



}




@media only screen and (max-width: 1200px) {

.coverflowsection{

    // height: 814px;
}
}

@media only screen and (max-width: 768px) {





.coverflowsection,
.mb-80{
  margin-bottom: 40px;
}
}




@media only screen and (max-width: 768px) {


.coverflowsection{

    // height: 745px;
}



}

.intro-paragraph-header{
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  color: #f05d5b;
}

.intro-paragraph{
      font-size: 14px;
    color: #f05d5b;
}
.rollbar{
  position: fixed;
    width: 100%;
    min-height: 90px;
    background: green;
    top: 142px;
    left: 0;
    z-index: 100;
    padding: 10px 0; 
}

@media only screen and (max-width: 1080px) {
.rollbar{
    top: 92px;

}
}

@media only screen and (max-width: 992px) {


.rollbar{
    top: 92px;

}

}


.orange-button{
  padding:20px;
  background: #f58e58;
  display: block;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  transition: all .5s ease;
  &:hover{
    text-decoration: none;
  }
}




.container.mt-5.mobilePage{
    margin-top: 3rem!important;
    padding-top: 100px;

    @media only screen and (max-width: 992px) {
            // padding-top:0px;



              margin-top: 1rem!important;
    }
}

.header-p{
    font-size: 28px;
    line-height: 40px;
    width: 100%;
    padding: 0 0 10px;
    font-weight: 600;
    margin-bottom: 0;
    }


.header-p-box{
  width: 300px;
    margin: 0 15px;

    @media only screen and (max-width: 768px) {
    // width: 100%;
    }


}


.pt132{
  padding-top: 132px;
}


.restaurantLogo{


    width: 300px;
    margin: 0 auto;
    text-align: center;
    height: 100%;
    position: relative;
    width: 100%;
    min-height: 80vh;

svg{

      // width: 500px;
          width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

}



.half-panel{
  width: 50%;
float: left;
padding: 50px;
    &.with-background{
          background-size: cover;
    background-position: center center;
    padding: 36px;
    
    }
h3{
  width: 300px;
}


&.right{
  height: 100vh;
  padding: 0px;
}

 @media only screen and (max-width: 768px) {

  width: 100%;
float: left;
padding: 50px;
    &.with-background{
          background-size: cover;
    background-position: center center;
   padding: 16px;
    
    }
h3{
  width: 300px;
}

&.right{
  min-height: 250px !important;
  padding: 16px !important;
  height: auto !important;

    
}

&.right > div{
bottom: 16px !important;


width: calc(100% - 32px);

    
}


 }





}






.secPad{
  padding: 60px 0;


    // padding: 46px 0 0;

 @media only screen and (max-width: 768px) {
padding: 20px 16px; 
 }

}


.secPadSmall{
      padding: 46px 0;
}




.map iframe{
  width: 300px;
  height: 280px;
  border: 1px solid;
  border-radius: 10px;
  // float: right;


 @media only screen and (max-width: 768px) {
width: 100%;
float: none;
 }



}

h3{
 font-size: 1.6rem;
}

h4{
 font-size: 1.2rem;
}


.socialLink{
  display: inline-block;
  margin: 0 20px;

 @media only screen and (max-width: 768px) {
  margin: 0 20px;
 }

}





.header-notification{
    background-color: #000582;
    color: #ffffff;
    position: absolute;
    top: 90px;
    z-index: 99;
    width: 100%;
    padding: 30px 0;
}


.imagePanel{
background: red;
color: transparent;
width: calc(100% - 72px);
height: 100%;

          background-size: cover;
    background-position: center center;
 height:100vh;


 @media only screen and (max-width: 768px) {

height: 300px;
 }



}

.dismissNotification{
  position: absolute;
  top: 20px;
  right: 15px;
  cursor: pointer;
}


a.ctaLink,
a.ctaLinkOpposite{
display: block;
border-radius: 5px;
width: 100%;
margin: 23px 0 0;
text-align: center;
padding: 3px 10px 5px;
font-size: 22px;
font-weight: 500;


 @media only screen and (max-width: 768px) {
    width: 100%;
 }

}









.flexSection{


// display: inline-flex;


 @media only screen and (max-width: 768px) {

display: block;
 }


}


section{
  overflow-x: hidden;
}


.social-text{

text-align: right;
 @media only screen and (max-width: 768px) {

text-align: center;
margin-bottom: 12px;
 }


}


.social-icons{


 @media only screen and (max-width: 768px) {

text-align: center;
 }

}


.noPadMob{

   @media only screen and (max-width: 768px) {


     padding-left: 0;
     padding-right: 0;
   }

}



a.ctaLink {
  color: var(--button-color);
  background-color: #fff;
  text-decoration: none;

&:hover {
 background-color: var(--button-color);

 color: #fff;
  // border-color: var(--button-border-color--hover);
}
}


a.ctaLinkOpposite {
  color: var(--button-color);
  background-color: #fff;
  text-decoration: none;

&:hover {
  // color: #fff;
   background-color: var(--alternate-color);
 
//  background-color: var(--button-color);

// border-color: var(--button-color);
}
}

.sidebox{
  width: 300px;
  position: absolute; 
  bottom: 0px;
  margin: 34px 0;

  &.right{
    right:0;
  }


  @media only screen and (max-width: 768px) {


position: initial;
width: 100%;
   }


}


.infoPoints{
  display: inline-block;
  width: 100%;

      font-size: 18px;
  font-weight: 600;
  // margin-bottom: 24px;

    margin-bottom: 45px;
  &.mb0{
    margin-bottom: 0;


           @media only screen and (max-width: 768px) {
    margin-bottom: 24px;
        }
  }
         @media only screen and (max-width: 768px) {
    margin-bottom: 24px;
        }



  }


.iconPoint{
  width: 40px;
  float: left;
  height: 60px;
  display: inline-block;

      margin-right: 20px;
  }

.headerNotification{

 
      font-size: 24px;
    font-weight: 500;
    text-align: center;
    line-height: 1.6;
          @media only screen and (max-width: 768px) {
          font-size: 18px;
        }
    }


.notificationModule{
 
 h3{
 
      font-size: 26px;
    font-weight: 600;
    text-align: left;
    line-height: 37px;

        @media only screen and (max-width: 768px) {
          font-size: 18px;
        }
  }
}






.full-width-background{
      height: 100vh;
    @media only screen and (max-width: 768px) {
  height: 500px;
  min-height: 500px;
    }
}


.topSection{
    @media only screen and (max-width: 768px) {
  height: 500px;
  min-height: 500px;
    }
}


.restaurantLogo{
      @media only screen and (max-width: 768px) {
  height: 500px;
  min-height: 500px;


    svg{
      width: 50%
    }
    }
}

.rightContactCol{
        @media only screen and (max-width: 768px) {
     margin: 0 15px;
    }
}



.socialBox{
  background-color: #fff;
  border-radius: 6px;
  padding: 30px 0;

        @media only screen and (max-width: 992px) {
  padding: 20px 0;
    }


}




  


.centerMobile{
  text-align: center;
}




.mapAddress{
    position: relative;
    display: inline-block;
    width: 200px;



       @media only screen and (max-width: 768px) {
         width: 100%;
       }


}

.mapAddressBox{
  width: 100%;
  position: absolute;bottom: 0;
       @media only screen and (max-width: 1200px) {
         position: initial;

       }


       @media only screen and (max-width: 992px) {
         position: initial;
  padding: 20px 30px 15px;
    padding: 20px 15px 15px;
    // margin-bottom:240px;
    }



}


 .mapBox{
display: inline-block;


       @media only screen and (max-width: 768px) {

         width: calc(100% - 30px);
       }


 }



 .mapBoxOuter{
   margin-bottom: 40px;

     @media only screen and (max-width: 768px) {
          margin-bottom: 0px;
     }
   }



.socialLinkButtons{
  display: inline-block;
  margin-right: 30px;
}
</style>
