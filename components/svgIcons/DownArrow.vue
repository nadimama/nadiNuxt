<template>

<svg id="downArrow" width="55" height="55" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 55 55" style="enable-background:new 0 0 55 55;" xml:space="preserve">

<path fill="white" d="M27.5,0C12.3,0,0,12.3,0,27.5S12.3,55,27.5,55S55,42.7,55,27.5S42.7,0,27.5,0z M27.5,42.6L13.2,17.9h28.6
	L27.5,42.6z"/>
</svg>



</template>



<style lang="scss">
#downArrow{
    position: absolute;
 
        // bottom: 20px;
    // left: 50%;
    cursor: pointer;
    transform: translateY(-50%);


top: 50%;
right: 20px;

        @media only screen and (max-width: 640px) {




            width: 20px;
            bottom: 5px;
        }
}
</style>