<template>
<svg id="downArrow" width="45" height="39" viewBox="0 0 45 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 39L4.05209e-07 1.19327e-07L45 -3.8147e-06L22.5 39Z" fill="white"/>
</svg>
</template>



<style lang="scss">
#downArrow{
    position: absolute;
 
        bottom: 20px;
    left: 50%;
    cursor: pointer;
    transform: translateX(-50%);


        @media only screen and (max-width: 640px) {




            width: 20px;
            bottom: 5px;
        }
}
</style>