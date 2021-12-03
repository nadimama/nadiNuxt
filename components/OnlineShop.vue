<template>
    <section :id="tag" class="section hero is-primary is-fullheight position-relative mb-80">
        <h4 class="mob-bottom-margin">
          
             <router-link to="/shop">
                    {{header}}
             </router-link>
          </h4>
                <p class="description-para noselect hide-mobile">{{description}}</p>
        <carousel
        :autoplay="true"  
          :responsive=" {0:{items:1},480:{items:2},1080:{items:3}}"
          :items="1"
          :loop="true"
          :dots="false"
          :nav="false"
        >
           <template class="subprev" slot="prev">
            <span class="prev">
              <Prev />
            </span>
          </template>
<div class="text-center" v-for="item in data" :key="item.shop_item.name">
<img class="lazy" :src="item.shop_item.image.replace('.jpg','-768x768.jpg')" />




<!-- <img v-if="serve.images.online_ordering_menu" src="data:image/png;base64,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AAABAAAAEwAAAABBU0NJSQAAAFNjcmVlbnNob3SNOxOvAAAB1GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xOTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrI6awnAAAAMElEQVQ4EWN8Fxf/n4EGgIkGZoKNHDUYHrKjQTEaFPAQgDNGU8VoUMBDAM4YeqkCABdVAtCcSWeTAAAAAElFTkSuQmCC
" class="lazy" v-bind:data-src="serve.images.online_ordering_menu.main" style="height: 329px;margin: 5px auto;position: absolute;z-index: 10;left: 50%;transform: translate(-50%, 0);top: 53px;"> -->





              <div class="order-bottom">
                {{item.shop_item.name}}
              </div>
        </div>
          <!-- <template v-if="index === 0 || index === 1" slot="next"></template> -->
          <template class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
        </carousel>
      <div class="text-center mb-perfect">
        <router-link to="/mamnoon">
       <ShowAll />
        </router-link>
        </div>


    </section>
</template>
<script>
import carousel from "vue-owl-carousel";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";
import ShowAll from "@/components/svgIcons/ShowAll";
import Order from "@/components/svgIcons/Order";
export default {
    components:{
        carousel,
        Next,
        Prev,
        ShowAll,
        Order
    },
    name: 'onlineshop',
    props: ['data','header','tag','description'],
    methods: {

    }
}
</script>


<style lang="scss">
.mb-perfect{
  margin-bottom: 0px;
  height: 90px;
}


.mob-bottom-margin a{
color: #fff367;
}



</style>