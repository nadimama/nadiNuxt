<template>
   <div class="moreInfoClickModal">

       <button class="listIcon" @click="toggleExpand(true)">

<ListIcon />

       </button>
    <div class="menuBarClickModal iconVersion" :class="{ expanded: expandedMenu }">
   <div class="relative">
      <div class="inside">
       <button class="close-toggle" @click="toggleExpand(false)">
         <CloseModalRedSm2 />


       </button>
        <!-- <moreInfoClickModal /> -->

   <scrollactive :offset="200" ref="scrollactive">   
        
 <template v-if="valid && !preOrderToggleState">

  <template v-for="(item, index) in upserveSections">
    <template v-if="noFiltering">
        <template v-if="item.timing_mask && currentlyAvailable(item.timing_mask.start_time,item.timing_mask.end_time,item.timing_mask.rules,nowDate,nowTime) ||!item.timing_mask">
                  
                  <div class="block text-left mb10">
                      <a @click="toggleExpand(false)" :index="index" :href="'#'+item.name.replace(/[^0-9a-zA-Z]/g, '').trim()" class="scrollactive-item nav-item inline">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}</a>
       
                                 
                                                                                                     {{ item.item_ids.length}}

                                   </div>

        </template>
    </template>
  </template>

</template>
 <template v-if="!valid">

 
  <template v-for="(item, index) in upserveSections">
  <template v-if="noFiltering">
        <div class="block text-left mb10">
     <a @click="toggleExpand(false)" :index="index" :href="'#'+item.name.replace(/[^0-9a-zA-Z]/g, '').trim()" class="scrollactive-item nav-item inline">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}</a>
  

                                   
                                                                                                     {{ item.item_ids.length}}
                               
                                 </div>

  </template>
  <template v-else>
    <template v-if="item.name !== 'featured item' && item.timing_mask && currentlyAvailable(item.timing_mask.start_time,item.timing_mask.end_time,item.timing_mask.rules,selectedDate,selectedTime) ||!item.timing_mask">
          <div class="block text-left mb10">
    <a @click="toggleExpand(false)" :index="index" :href="'#'+item.name.replace(/[^0-9a-zA-Z]/g, '').trim()" class="scrollactive-item nav-item inline">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}</a>
    


                                                                                                     {{ item.item_ids.length}}
                                 
                                     
</div>

    </template>
  </template>

</template>

</template>
<template v-if="preOrderToggleState">

  <template v-for="(item, index) in upserveSections">
 <template v-if="noFiltering && item.name !== 'featured item'">
  <template v-if="item.timing_mask === item.timing_mask">
        <div class="block text-left mb10">
     <a @click="toggleExpand(false)" :index="index"  :href="'#'+item.name.replace(/[^0-9a-zA-Z]/g, '').trim()" class="scrollactive-item nav-item inline">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}</a>
     

                           
                                                                                                     {{ item.item_ids.length}}
                                         
                                 
</div>

  </template>
</template>
<template v-else>
  <template v-if="item.timing_mask === null">
        <div class="block text-left mb10">
     <a @click="toggleExpand(false)" :index="index" :href="'#'+item.name.replace(/[^0-9a-zA-Z]/g, '').trim()" class="scrollactive-item nav-item inline">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}</a>
 

                                      
                                                                                                     {{ item.item_ids.length}}
</div>

  </template>
  <template v-else>
    <template v-if="currentlyAvailable(item.timing_mask.start_time, item.timing_mask.end_time, item.timing_mask.rules, selectedDate, selectedTime)">
         <div class="block text-left mb10">
       <a @click="toggleExpand(false)" :index="index" :href="'#'+item.name.replace(/[^0-9a-zA-Z]/g, '').trim()" class="scrollactive-item nav-item inline">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}</a>
   

                                                                                                     {{ item.item_ids.length}}

</div>

      </template>
  </template>

</template>
         </template>
            </template>



   </scrollactive>   
                   </div>
            </div>
        </div>      </div> 
</template>


<script>

import ListIcon from "@/components/svgIcons/ListIcon";
import CloseModalRedSm2 from "@/components/svgIcons/CloseModalRedSm2";


export default {
    name: 'moreInfoClickModal',
      components: {
ListIcon,
CloseModalRedSm2
    },
    data(){
return{
    expandedMenu: false
}
    },
    name: 'slidernav',
    props: ['valid','preOrderToggleState','upserveSections','upserveList','noFiltering','nowDate','nowTime','futureDay','futureTime'],
    methods:{
        toggleExpand(e){
            this.expandedMenu = e;
        },

        currentlyAvailable(startTime,endTime,rules,futureDay,futureTime){




    let weekday = ['mon','tue','wed','thu','fri','sat','sun']

            if(!futureDay && !futureTime){
                let currentDate = new Date();   
                let startDate = new Date(currentDate.getTime());

                startDate.setHours(startTime.split(":")[0]);
                startDate.setMinutes(startTime.split(":")[1]);

                let endDate = new Date(currentDate.getTime());
                endDate.setHours(endTime.split(":")[0]);
                endDate.setMinutes(endTime.split(":")[1]);

                if(rules.includes(weekday[currentDate.getDay()])){
                    return startDate < currentDate && endDate > currentDate
                }
            }

    if(futureDay && !futureTime){
      if(rules.includes(futureDay.dayLabel.substring(0,3).toLowerCase())){
        return true
      }
    }
    if(futureDay && futureTime){

    let currentDate = Date.parse(futureTime.time) 
    let startDate2 = new Date(currentDate);
    let startDate3 = moment(startDate2)._i
    startDate3.setHours(startTime.split(":")[0]);
    startDate3.setMinutes(startTime.split(":")[1]);
    let endDate2 = new Date(currentDate);
    let endDate3 = moment(endDate2)._i
    endDate3.setHours(endTime.split(":")[0]);
    endDate3.setMinutes(endTime.split(":")[1]);
    let validTime = startDate3 < currentDate && endDate3 > currentDate
    let validDay = rules.includes(futureDay.dayLabel.substring(0,3).toLowerCase())

    if(validTime && validDay){
      return true
    }else{
      return false
    }
}


}
    }
}
</script>



<style lang="scss">
.menuBarClickModal{

.inside a{
    display: block;
}


// position: sticky;
top: 132px;
width: 100%;
background: #ffffff;
color: #F05D5B;
z-index: 99;
overflow:hidden;

    // margin-left: -15px;
    /* margin-right: -15px; */
    width: calc(100% + 30px);

   @media only screen and (max-width: 992px) {
      // top: 0;
      top: 112px;
    }
 
 .relative{
   position: relative;
 }

.inside{

    width: calc(100% - 40px);
    // background: green;
    // float: right;


a.scrollactive-item.nav-item{
  color: #F05D5B;
  font-size: 14px;
    margin-right: 10px;
  border-bottom: 2px solid transparent;

    padding-bottom: 3px;
line-height: 30px;
  &:hover{
    text-decoration: none;
  }

transition: all .25s ease;
   text-transform: lowercase;
&.is-active{
// background: #F05D5B;
// color: white;


  border-bottom: 2px solid #F05D5B;
width: max-content;
// padding: 10px;
    // background: black;

}

}
}

    // display: none;
    opacity: 0;
    transition: opacity .5s ease;
    pointer-events: none;
&.expanded{

    pointer-events: all;
    opacity: 1;
    position: absolute;
    top: 50px;
    /* top: 132px; */
    width: 300px !important;
    height: auto;
    overflow: scroll;
    left: 0;
    background: white !important;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: left;

a{
  text-align: left;
}
}

}

// .swiper-slide-active{
//   background: #F05D5B;

//      margin-left: 0px;
//      margin-right: 10px;
//      a{
//        margin-right: 0;
//      }

//    a.scrollactive-item.nav-item{
//      margin-left: 10px;
//      margin-right: 10px;
//        color: white !important;
//    }
// }



// .scrollactive-item.nav-item.is-active{
//   text-decoration: underline;
// }

.inside{
  // border-bottom: 1px solid #ddd;
.scrollactive-nav{
  text-align: center;
  padding: 6px 0;
}
}


.menuBarClickModal .relative .inside{
  .swiper-slide{
    width: auto !important;
  }

  .scrollactive-nav{
        width: calc( 100% - 60px);
  }


.inside-left{
  cursor: pointer;
  position: absolute;
  left: 0;
  width: 30px;
  left: 40px;
}
.inside-right{
    cursor: pointer;
position: absolute;
right: 0;
width: 30px;
// background:pink;


.icono-arrow4-left{
    margin-left: 5px;

}

}

}






#swiperMenu{

.swiper-wrapper{
  padding-left: 0px;
}



}


#swiperMenu.morePadding{

.swiper-wrapper{
  padding-left: 20px;
}



}





.moreInfoClickModal{


button{

float: right;
    margin: 5px;
    position: absolute;
    right: 0;


    border-radius: 10px !important;
    background-color: white !important;
    // width: 20px;
    // height: 20px;
border:0 !important;


&:active,
&:hover,
&:focus{
  outline: none;
}

}

position: absolute;
    background: white;
    // position: sticky;
    left: 0;
    height: 40px;
    width: 40px;
    text-align: center;


}


#swiperMenu{


.swiper-slide.swiper-slide-active:first-child{
  margin-left: 0 !important
}

}


.swiper-slide{
      margin: 0 5px;
}


.iconVersion{
    width: 40px !important;
    height: 40px;
    margin-left: 0 !important;
    margin-right: 0 !important;
    background: white !important;
}


button.listIcon{
      position:absolute;
      top:0;
      left:0;
      z-index:99;
      background: transparent !important;
      border: 0 !important;
      padding: 3px 5px 3px 0 !important;
      &:active,
      &:focus,
      &:hover{
        outline: none;
        border: 0 !important;
      }

      &:hover{
opacity:.5;
      }

}

.menuBarClickModal .inside a.inline,
.inline{
  display: inline;
}




</style>