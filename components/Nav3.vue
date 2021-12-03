<template>
<div class="nav-wrap2">
    <div v-if="informationalWindowOpen === false && $route.name === 'home'" class="info-q" @click="informationalWindowOpen = true">
        <Star /> 
    </div>
<div class="fixed-nav">





<div v-if="informationalWindowOpen && $route.name === 'home'" class="informational-window">
<div class="info-modal">
<!-- <button @click="endFirstTimeView">close</button> -->
<div class="topBlock" style="position: absolute;right: 10px;">
    <div @click="informationalWindowOpen = false">
<CloseModalRed />
</div>
</div>




</div>
</div>




    <div class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-header2">







<button @click="toggleFullScreen" class="order-button2" style="display:none;">
order <div class="arrow-right"></div>
</button>


          <!-- <NewAuth :authEmail="$auth._data" :authAuthenticated="$auth.isAuthenticated" class="logButton googleInheader" /> -->
    <div class="container">

<div class="full-width-logo left">
<template v-if="$mq === 'sm'">

<!-- ss -->
<!-- {{$route.name}} -->    

  <div v-if="" class="burger" @click="toggleMenu()" style="width: 60px;text-align: right;height: 80px;">
        <Burger2 />
    </div>





    </template>
    <div class="logo-box">
    <router-link to="/">
<svg id="nadiDesk" width="209" height="44" viewBox="0 0 209 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="209" height="44" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1918:29" transform="translate(-0.00125313) scale(0.00200501 0.00952381)"/>
</pattern>
<image id="image0_1918:29" width="500" height="105" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>





<svg id="nadiMob" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 82.89 50.52" style="enable-background:new 0 0 82.89 50.52;" xml:space="preserve">
<g>
	<path d="M11.73,10.44c-1.3,0-2.51,0.42-3.49,1.13L5.77,11.1l0,5.28c0,0.01,0,0.01,0,0.02v7.49h2.49l0-7.53
		c0.02-1.9,1.57-3.43,3.47-3.43c1.92,0,3.47,1.56,3.47,3.47v7.49h2.49V16.4C17.7,13.11,15.02,10.44,11.73,10.44z"/>
	<g>
		<g>
			<g>
				<polygon points="51.37,23.89 53.86,23.89 53.87,11.86 51.37,12.33 				"/>
			</g>
		</g>
	</g>
	<path d="M47.99,7.03l-2.5,0.47v4.47c-1.15-0.93-2.62-1.49-4.21-1.49c-3.7,0-6.7,3.01-6.7,6.7s3.01,6.7,6.7,6.7
		c1.59,0,3.06-0.56,4.21-1.49v1.02l2.5,0.47l0-8.41L47.99,7.03z M41.28,21.4c-2.32,0-4.21-1.89-4.21-4.21
		c0-2.32,1.89-4.21,4.21-4.21c2.32,0,4.21,1.89,4.21,4.21C45.49,19.51,43.6,21.4,41.28,21.4z"/>
	<g>
		<g>
			<path class="st0nadiSm" d="M54.15,8.14L54.15,8.14l0-0.9l-0.9,0l-0.63-0.64l-0.63,0.63l-0.9,0l0,0.9l0,0l-0.64,0.63l0.63,0.64l0,0
				l0,0.9l0.9,0l0.63,0.64l0.64-0.63l0,0l0,0v0l0.9,0l0-0.9l0.64-0.63L54.15,8.14z M51.98,10.3L51.98,10.3L51.98,10.3L51.98,10.3z"
				/>
		</g>
	</g>
	<path d="M33.19,23.89l-0.43-2.49l0.01-9.9l-2.5,0.48c-1.15-0.93-2.62-1.49-4.21-1.49c-3.63,0-6.7,3.07-6.7,6.7
		c0,3.7,3.01,6.7,6.7,6.7C26.06,23.89,33.19,23.89,33.19,23.89z M21.84,17.19c0-1.07,0.45-2.14,1.24-2.94
		c0.81-0.82,1.86-1.27,2.97-1.27c2.32,0,4.2,1.88,4.21,4.2l0,4.23h-4.19c-0.01,0-0.01,0-0.02,0C23.73,21.4,21.84,19.51,21.84,17.19z
		"/>
</g>
<g>
	<path d="M19.41,28.44c-1.66,0-3.14,0.75-4.13,1.94c-0.99-1.18-2.47-1.94-4.13-1.94c-1.09,0-2.11,0.33-2.96,0.89l-2.42-0.46l0,12.92
		h2.49l0-8.05c0.04-1.56,1.32-2.81,2.88-2.81c1.58,0,2.86,1.27,2.88,2.85c0,0.01,0,0.03,0,0.04l0,7.98h2.49v-7.98
		c0-0.01,0-0.03,0-0.04c0.02-1.57,1.31-2.85,2.88-2.85c1.59,0,2.89,1.29,2.89,2.89v7.98h2.49v-7.98
		C24.78,30.86,22.37,28.44,19.41,28.44z"/>
	<path d="M55.7,28.44c-1.66,0-3.14,0.75-4.13,1.94c-0.99-1.18-2.47-1.94-4.13-1.94c-1.09,0-2.11,0.33-2.96,0.89l-2.42-0.46l0,12.87
		h2.49l0-8c0.04-1.56,1.32-2.81,2.88-2.81c1.58,0,2.86,1.27,2.88,2.85c0,0.01,0,0.03,0,0.04v7.93h0v0.05h2.49v-7.98
		c0-0.01,0-0.03,0-0.04c0.02-1.57,1.31-2.85,2.88-2.85c1.59,0,2.89,1.29,2.89,2.89v7.98h2.49v-7.98
		C61.08,30.86,58.67,28.44,55.7,28.44z"/>
	<path d="M40.26,41.78l-0.43-2.49l0.01-9.9l-2.5,0.48c-1.15-0.93-2.62-1.49-4.21-1.49c-3.63,0-6.7,3.07-6.7,6.7
		c0,3.7,3.01,6.7,6.7,6.7C33.13,41.78,40.26,41.78,40.26,41.78z M28.91,35.08c0-1.07,0.45-2.14,1.24-2.94
		c0.81-0.82,1.86-1.27,2.97-1.27c2.32,0,4.2,1.88,4.21,4.2l0,4.23h-4.19c-0.01,0-0.01,0-0.02,0C30.8,39.29,28.91,37.4,28.91,35.08z"
		/>
	<path d="M76.58,41.78l-0.43-2.49l0.01-9.9l-2.5,0.48c-1.15-0.93-2.62-1.49-4.21-1.49c-3.63,0-6.7,3.07-6.7,6.7
		c0,3.7,3.01,6.7,6.7,6.7C69.45,41.78,76.58,41.78,76.58,41.78z M65.23,35.08c0-1.07,0.45-2.14,1.24-2.94
		c0.81-0.82,1.86-1.27,2.97-1.27c2.32,0,4.2,1.88,4.21,4.2l0,4.23h-4.19c-0.01,0-0.01,0-0.02,0C67.12,39.29,65.23,37.4,65.23,35.08z
		"/>
</g>
</svg>







        </router-link>
</div>
    <div class="menu-box">
             <ul id="menu">

<div class="inline-link"><li><router-link to="restaurants" class="scrollactive-item nav-item">our restaurants</router-link></li></div>


  
           <div class="inline-link">

                    <li>
                        <router-link to="/about">
                            about
                        </router-link>
                    </li>
                </div>   
           <div class="inline-link">

                    <li>
                            <router-link to="/finefoods">
                           fine foods
</router-link>
                    </li>
                </div>   

           <div class="inline-link">

                    <li>
                        <a target="_blank" href="https://ecommerce.custcon.com/Purchase/Select?c=364cfc03-d428-44bf-b814-1efbdcaed08d">
                            giftcards
</a>
                    </li>
                </div>   



            </ul>
</div>
      <GoogleAuth2 class="logButton googleInHeader" />
 
  </div>
</div>

    </div>
    </div>




    <template v-if="$mq === 'lg'">
<!--    <nav v-if="this.$route.name === 'home'||this.$route.name === 'landingdrawer'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header2">-->
        <nav style="display:none;" v-if="this.$route.name === 'home'||this.$route.name === 'landingdrawer'" >
        <div class="container">

             <ul id="menu">

<div class="inline-link"><li>


<router-link to="/restaurants" class="scrollactive-item nav-item">our restaurants</router-link>
</li></div>


                 <template v-for="item in pageData">
                <div class="inline-link" v-if="item.tagname !== 'testimonials' && item.tagname !== 'planahead'&& item.tagname !== 'fullonlinemenu'&& item.tagname !== 'reservations'">
                    <li v-if="item.tagname">
                    
                        <a :href="'#'+item.tagname" class="scrollactive-item nav-item">{{item.header}}</a>
                
                    </li>
                </div>  
                </template> 
           <div class="inline-link">

                    <li>
              
                        <router-link to="/about">
                            about
                        </router-link>
                
                    </li>
                </div>   


           <div class="inline-link">

                    <li>
                        <a target="_blank" href="https://ecommerce.custcon.com/Purchase/Select?c=364cfc03-d428-44bf-b814-1efbdcaed08d">
                            giftcards
</a>
                    </li>
                </div>   



            </ul>
           
        </div>
    </nav>
</template>
<template v-if="$mq === 'sm'">
<!--        <nav class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header2 mobile-nav" :class="{ expanded: mobNavExpanded }">-->

    <nav class="newNav" :class="{ expanded: mobNavExpanded }">


        
        <div class="container">


             <ul id="menu" class="mobile-menu">

<div class="inline-link"><li><router-link to="/restaurants" class="scrollactive-item nav-item">our restaurants</router-link></li></div>


                 <template v-for="item in pageData">
                <div class="inline-link" v-if="item.tagname !== 'testimonials' && item.tagname !== 'planahead'&& item.tagname !== 'fullonlinemenu'&& item.tagname !== 'reservations'">
                    <li v-if="item.tagname">
 <a :href="'#'+item.tagname" class="scrollactive-item nav-item">{{item.header}}</a>
                    </li>
                </div>  
                </template> 
           <div class="inline-link">

                    <li>
                        <router-link to="/about">
                            about
                        </router-link>
                    </li>

                                   <li>
                        <router-link to="/newsletterarchive">
                          newsletter archive
                        </router-link>
                    </li>




       

                    <li>
                        <a target="_blank" href="https://ecommerce.custcon.com/Purchase/Select?c=364cfc03-d428-44bf-b814-1efbdcaed08d">
                            giftcards
</a>
                    </li>
               

                </div>   







                         <!-- <ul id="menu" class="mobile-menu">-->

                    <div  class="inline-link">

                <li v-if="this.$store.state.loggedIn">
                    <router-link to="/profile">
                    profile
                    </router-link>
                </li>

                
            </div>
    



            </ul>            
     
        </div>
    </nav>

    </template>



    <transition name="fade">
        <template v-if="fullScreen">
            <div class="cover">


<div class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-header2 red-background">





<!--here-->
 <GoogleAuth2 class="logButton googleInHeader" />



<!--here-->


<div class="cartContainer" style="display:none;">

<div class="cartBackground">
<svg width="35" height="43" viewBox="0 0 35 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8H35V35C35 39.4183 31.4183 43 27 43H8C3.58172 43 0 39.4183 0 35V8Z" fill="white"/>
<path d="M24 8C24 4.13401 21.0899 1 17.5 1C13.9101 1 11 4.13401 11 8" stroke="white" stroke-width="2"/>
</svg>

</div>

<div class="cartItems">
{{cartItems}}

</div>


</div>



<div class="closeToggle" @click="toggleFullScreen">
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36426" width="35" height="9" transform="rotate(45 6.36426 0)" fill="white"/>
<rect x="31.1128" y="6.36401" width="35" height="9" transform="rotate(135 31.1128 6.36401)" fill="white"/>
</svg>
</div>


<div class="container"><div class="full-width-logo left"><!----><a href="/landingdrawer" aria-current="page" class="router-link-exact-active router-link-active">


<svg version="1.1" id="nadiWhiteDesk"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 137.62 29.19" style="enable-background:new 0 0 137.62 29.19;width:209px;" xml:space="preserve">

<g>
	<path class="st0-white-logo" d="M11.73,9.21c-1.3,0-2.51,0.42-3.49,1.13L5.77,9.87l0,5.28c0,0.01,0,0.01,0,0.02v7.49h2.49l0-7.53
		c0.02-1.9,1.57-3.43,3.47-3.43c1.92,0,3.47,1.56,3.47,3.47v7.49h2.49v-7.49C17.7,11.89,15.02,9.21,11.73,9.21z"/>
	<g>
		<g>
			<g>
				<polygon class="st0-white-logo" points="51.37,22.67 53.86,22.67 53.87,10.64 51.37,11.11 				"/>
			</g>
		</g>
	</g>
	<path class="st0-white-logo" d="M47.99,5.81l-2.5,0.47v4.47c-1.15-0.93-2.62-1.49-4.21-1.49c-3.7,0-6.7,3.01-6.7,6.7s3.01,6.7,6.7,6.7
		c1.59,0,3.06-0.56,4.21-1.49v1.02l2.5,0.47l0-8.41L47.99,5.81z M41.28,20.18c-2.32,0-4.21-1.89-4.21-4.21
		c0-2.32,1.89-4.21,4.21-4.21c2.32,0,4.21,1.89,4.21,4.21C45.49,18.29,43.6,20.18,41.28,20.18z"/>
	<g>
		<g>
			<path d="M54.15,6.91L54.15,6.91l0-0.9l-0.9,0l-0.63-0.64l-0.63,0.63l-0.9,0l0,0.9l0,0l-0.64,0.63l0.63,0.64l0,0l0,0.9l0.9,0
				l0.63,0.64l0.64-0.63l0,0l0,0v0l0.9,0l0-0.9l0.64-0.63L54.15,6.91z M51.98,9.07L51.98,9.07L51.98,9.07L51.98,9.07z"/>
		</g>
	</g>
	<path class="st0-white-logo" d="M33.19,22.67l-0.43-2.49l0.01-9.9l-2.5,0.48c-1.15-0.93-2.62-1.49-4.21-1.49c-3.63,0-6.7,3.07-6.7,6.7
		c0,3.7,3.01,6.7,6.7,6.7C26.06,22.67,33.19,22.67,33.19,22.67z M21.84,15.97c0-1.07,0.45-2.14,1.24-2.94
		c0.81-0.82,1.86-1.27,2.97-1.27c2.32,0,4.2,1.88,4.21,4.2l0,4.23h-4.19c-0.01,0-0.01,0-0.02,0C23.73,20.18,21.84,18.29,21.84,15.97
		z"/>
</g>
<g>
	<path class="st0-white-logo" d="M75.16,9.32c-1.66,0-3.14,0.75-4.13,1.94c-0.99-1.18-2.47-1.94-4.13-1.94c-1.09,0-2.11,0.33-2.96,0.89
		l-2.42-0.46l0,12.92h2.49l0-8.05c0.04-1.56,1.32-2.81,2.88-2.81c1.58,0,2.86,1.27,2.88,2.85c0,0.01,0,0.03,0,0.04l0,7.98h2.49
		v-7.98c0-0.01,0-0.03,0-0.04c0.02-1.57,1.31-2.85,2.88-2.85c1.59,0,2.89,1.29,2.89,2.89v7.98h2.49v-7.98
		C80.53,11.73,78.12,9.32,75.16,9.32z"/>
	<path class="st0-white-logo" d="M111.46,9.32c-1.66,0-3.14,0.75-4.13,1.94c-0.99-1.18-2.47-1.94-4.13-1.94c-1.09,0-2.11,0.33-2.96,0.89
		l-2.42-0.46l0,12.87h2.49l0-8c0.04-1.56,1.32-2.81,2.88-2.81c1.58,0,2.86,1.27,2.88,2.85c0,0.01,0,0.03,0,0.04v7.93h0v0.05h2.49
		v-7.98c0-0.01,0-0.03,0-0.04c0.02-1.57,1.31-2.85,2.88-2.85c1.59,0,2.89,1.29,2.89,2.89v7.98h2.49v-7.98
		C116.83,11.73,114.42,9.32,111.46,9.32z"/>
	<path class="st0-white-logo" d="M96.01,22.65l-0.43-2.49l0.01-9.9l-2.5,0.48c-1.15-0.93-2.62-1.49-4.21-1.49c-3.63,0-6.7,3.07-6.7,6.7
		c0,3.7,3.01,6.7,6.7,6.7C88.88,22.65,96.01,22.65,96.01,22.65z M84.67,15.95c0-1.07,0.45-2.14,1.24-2.94
		c0.81-0.82,1.86-1.27,2.97-1.27c2.32,0,4.2,1.88,4.21,4.2l0,4.23H88.9c-0.01,0-0.01,0-0.02,0C86.56,20.16,84.67,18.27,84.67,15.95z
		"/>
	<path class="st0-white-logo" d="M132.33,22.65l-0.43-2.49l0.01-9.9l-2.5,0.48c-1.15-0.93-2.62-1.49-4.21-1.49c-3.63,0-6.7,3.07-6.7,6.7
		c0,3.7,3.01,6.7,6.7,6.7C125.2,22.65,132.33,22.65,132.33,22.65z M120.99,15.95c0-1.07,0.45-2.14,1.24-2.94
		c0.81-0.82,1.86-1.27,2.97-1.27c2.32,0,4.2,1.88,4.21,4.2l0,4.23h-4.19c-0.01,0-0.01,0-0.02,0
		C122.88,20.16,120.99,18.27,120.99,15.95z"/>
</g>
</svg>



<svg version="1.1" id="nadiWhiteMob" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 82.89 50.52" style="enable-background:new 0 0 82.89 50.52;" xml:space="preserve">
<g>
	<path class="st0white" d="M11.73,9.93c-1.3,0-2.51,0.42-3.49,1.13l-2.48-0.47l0,5.28c0,0.01,0,0.01,0,0.02v7.49h2.49l0-7.53
		c0.02-1.9,1.57-3.43,3.47-3.43c1.92,0,3.47,1.56,3.47,3.47v7.49h2.49V15.9C17.7,12.61,15.02,9.93,11.73,9.93z"/>
	<g>
		<g>
			<g>
				<polygon class="st0white" points="51.37,23.39 53.86,23.39 53.87,11.36 51.37,11.83 				"/>
			</g>
		</g>
	</g>
	<path class="st0white" d="M47.99,6.53L45.49,7v4.47c-1.15-0.93-2.62-1.49-4.21-1.49c-3.7,0-6.7,3.01-6.7,6.7s3.01,6.7,6.7,6.7
		c1.59,0,3.06-0.56,4.21-1.49v1.02l2.5,0.47l0-8.41L47.99,6.53z M41.28,20.9c-2.32,0-4.21-1.89-4.21-4.21
		c0-2.32,1.89-4.21,4.21-4.21c2.32,0,4.21,1.89,4.21,4.21C45.49,19.01,43.6,20.9,41.28,20.9z"/>
	<g>
		<g>
			<path d="M54.15,7.63L54.15,7.63l0-0.9l-0.9,0L52.62,6.1l-0.63,0.63l-0.9,0l0,0.9l0,0l-0.64,0.63l0.63,0.64l0,0l0,0.9l0.9,0
				l0.63,0.64l0.64-0.63l0,0l0,0v0l0.9,0l0-0.9l0.64-0.63L54.15,7.63z M51.98,9.79L51.98,9.79L51.98,9.79L51.98,9.79z"/>
		</g>
	</g>
	<path class="st0white" d="M33.19,23.39l-0.43-2.49l0.01-9.9l-2.5,0.48c-1.15-0.93-2.62-1.49-4.21-1.49c-3.63,0-6.7,3.07-6.7,6.7
		c0,3.7,3.01,6.7,6.7,6.7C26.06,23.39,33.19,23.39,33.19,23.39z M21.84,16.69c0-1.07,0.45-2.14,1.24-2.94
		c0.81-0.82,1.86-1.27,2.97-1.27c2.32,0,4.2,1.88,4.21,4.2l0,4.23h-4.19c-0.01,0-0.01,0-0.02,0C23.73,20.9,21.84,19.01,21.84,16.69z
		"/>
</g>
<g>
	<path class="st0white" d="M19.41,27.94c-1.66,0-3.14,0.75-4.13,1.94c-0.99-1.18-2.47-1.94-4.13-1.94c-1.09,0-2.11,0.33-2.96,0.89
		l-2.42-0.46l0,12.92h2.49l0-8.05c0.04-1.56,1.32-2.81,2.88-2.81c1.58,0,2.86,1.27,2.88,2.85c0,0.01,0,0.03,0,0.04l0,7.98h2.49
		v-7.98c0-0.01,0-0.03,0-0.04c0.02-1.57,1.31-2.85,2.88-2.85c1.59,0,2.89,1.29,2.89,2.89v7.98h2.49v-7.98
		C24.78,30.35,22.37,27.94,19.41,27.94z"/>
	<path class="st0white" d="M55.7,27.94c-1.66,0-3.14,0.75-4.13,1.94c-0.99-1.18-2.47-1.94-4.13-1.94c-1.09,0-2.11,0.33-2.96,0.89
		l-2.42-0.46l0,12.87h2.49l0-8c0.04-1.56,1.32-2.81,2.88-2.81c1.58,0,2.86,1.27,2.88,2.85c0,0.01,0,0.03,0,0.04v7.93h0v0.05h2.49
		v-7.98c0-0.01,0-0.03,0-0.04c0.02-1.57,1.31-2.85,2.88-2.85c1.59,0,2.89,1.29,2.89,2.89v7.98h2.49v-7.98
		C61.08,30.35,58.67,27.94,55.7,27.94z"/>
	<path class="st0white" d="M40.26,41.28l-0.43-2.49l0.01-9.9l-2.5,0.48c-1.15-0.93-2.62-1.49-4.21-1.49c-3.63,0-6.7,3.07-6.7,6.7
		c0,3.7,3.01,6.7,6.7,6.7C33.13,41.28,40.26,41.28,40.26,41.28z M28.91,34.57c0-1.07,0.45-2.14,1.24-2.94
		c0.81-0.82,1.86-1.27,2.97-1.27c2.32,0,4.2,1.88,4.21,4.2l0,4.23h-4.19c-0.01,0-0.01,0-0.02,0C30.8,38.79,28.91,36.9,28.91,34.57z"
		/>
	<path class="st0white" d="M76.58,41.28l-0.43-2.49l0.01-9.9l-2.5,0.48c-1.15-0.93-2.62-1.49-4.21-1.49c-3.63,0-6.7,3.07-6.7,6.7
		c0,3.7,3.01,6.7,6.7,6.7C69.45,41.28,76.58,41.28,76.58,41.28z M65.23,34.57c0-1.07,0.45-2.14,1.24-2.94
		c0.81-0.82,1.86-1.27,2.97-1.27c2.32,0,4.2,1.88,4.21,4.2l0,4.23h-4.19c-0.01,0-0.01,0-0.02,0C67.12,38.79,65.23,36.9,65.23,34.57z
		"/>
</g>
</svg>



</a></div></div></div>



            <div class="container mobilePage white-text">
<br>


            <h1>Choose a location!</h1>

          <br>



            <div class="select-dropdown" @click="toggleDropDown">choose a location &nbsp;<div class="arrow-down"></div></div>





                        <transition name="slide">




                            <div class="dropdownDrawer" v-if="dropdown">
                            <div v-for="item in this.$store.state.pageData[0].restaurant_repeater" :key="item.acf_fc_layout"><!--begin big loop-->
                          



<!--<router-link :to="'/'+item.name.replaceAll(' ','')">{{item.name}}</router-link>-->


<a :href="'/'+item.name.replaceAll(' ','')">{{item.name}}</a>

                            </div>
                            </div>

                        </transition>



            </div>
            </div>
        </template>
    </transition>

</div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import Logo from "@/components/Logo";
import LogoMamnoon from "@/components/LogoMamnoon";
import Burger2 from "@/components/svgIcons/Burger2";
import Star from "@/components/svgIcons/Star";
import GoogleAuth2 from "@/components/GoogleAuth2";
// import NewAuth from "@/components/NewAuth";

import CartDropdown from "@/components/CartDropdown";
import NadiIntro from "@/components/NadiIntro";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";





export default {
    components: {
    CloseModalRed,
    CartDropdown,
    Logo,
    Star,
    LogoMamnoon,
    Burger2,
    GoogleAuth2,
    // NewAuth,
    NadiIntro
  },
  data () {
      return {
          dropdown: false,
             pageData: null,
          fullScreen: false,
          informationalWindowOpen: false,
          betaMode: true,
          isMobile: false,
          informationalWindow: true,
          location: window.location.href,
          userAgent: null,
          feedbackEmail: 'joe.waine@gmail.com',
          pageData: null,
          mobNavExpanded: false,
          logtext: '',
            user: {}
      }
  },
      computed:{

    cartItems(){

// if(this.title === "Mamnoon Street"){
//       return this.$store.state.storeCurrentOrderUpdateStreet.charges.items.length;
// }

// if(this.title === "Mamnoon"){
//       return this.$store.state.storeCurrentOrderUpdateMamnoon.charges.items.length;
// }

// if(this.title === "Mbar"){
//       return this.$store.state.storeCurrentOrderUpdateMbar.charges.items.length;
// }

return this.$store.state.storeCurrentOrderUpdateMamnoon.charges.items.length;

    },

          correctPages(){

if(this.$route.name === 'home' ||
    this.$route.name === 'retail' ||
    this.$route.name === 'mamnoon' ||
    this.$route.name === 'mamnoonstreet' ||
    this.$route.name === 'mbar' ||
    this.$route.name === 'profile' ||
    this.$route.name === 'featured' ||
    this.$route.name === 'onlinemenu' ||
    this.$route.name === 'reservations' ||
    this.$route.name === 'mamnoonff' ||
    this.$route.name === 'finefoods' ||
    this.$route.name === 'about' ||
    this.$route.name === 'newsletterarchive'){
        return true
    }else{
        return false
    }




          },
          randomId(){
                    return Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29)
          },
          showCartDropdown(){


            if(this.$store.state.storeCurrentOrderUpdateRetail.charges.items.length > 0 || this.$store.state.storeCurrentOrderUpdateMamnoon.charges.items.length > 0 || this.$store.state.storeCurrentOrderUpdateMbar.charges.items.length > 0 || this.$store.state.storeCurrentOrderUpdateStreet.charges.items.length > 0)  {
            return true
              }else{
            return false
              }
          }
      },
methods: {

goToPage(destination){

this.$router.push('/'+destination);
this.$forceUpdate();
},
    toggleDropDown(){


this.dropdown = !this.dropdown;
    },

toggleFullScreen(){


    this.fullScreen = !this.fullScreen


},
 isMobileUserAgent() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 },

    
    sendState(randomId,storeState,location,userAgent,isMobile){

      this.$http.post("/sendbugstate",{
          randomId,
          storeState,
          location,
          userAgent,
          isMobile
      })
      .then((response) => {
          console.log('bug email sent')
      }).catch((e) => {
          console.log("errors");
          console.log(e);
        });





    },
endFirstTimeView(){

this.informationalWindow = false
this.$store.commit('endFirstTime')

},
//        async individualRestaurant(){
        
//         let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)



//         let AcfBlock = responseAcf
//         this.pageData = AcfBlock.data.acf.content_fields

// },
    showUserModal () {
    this.$store.commit('showUserModal')
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$store.commit('logOut')
    //   this.$router.push("/");
    },
    toggleMenu(){
        this.mobNavExpanded = !this.mobNavExpanded;
     this.$store.commit('hideUserModal')
        // console.log(this)
    },
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;


      console.log(decoded)
    },
    getUserAgent(){
        navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();
this.userAgent = navigator.sayswho


// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    this.isMobile = true;
}




    }
  },
  created() {
      this.store = this.$store.state

  },
    mounted() {



this.getUserAgent();



  }
  }

</script>


<style lang="scss">





.beta{
    position: fixed;
    width: 100%;
    background: white;
    color:#F05D5B;
    top: 0;
    z-index: 1000;
    padding: 5px;

    font-size: 20px;
    
    
    @media only screen and (max-width: 1080px) {
            width: 100%;
                font-size: 14px;
    }


text-align: center;
    @media only screen and (max-width: 640px) {
        font-size: 14px;
    }
    
}


.trans{
    color: transparent
}

.nadi-header2{
    background-color: #FFFFFF;
    border-bottom: 1px solid #DDDDDD;
    height: 92px;
}

.nadi-sub-header2{
background-color: #F58E58;
background-color: #F1765B;
background-color: #ffffff;
height: 50px;
}

ul#menu{
    margin: -4px auto 0;
    padding-left: 0;
    
}

ul#menu li {
display:inline;
font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
font-weight: bold;
// font-size: 20px;
font-size: 16px;
text-align: left;
padding: 0 10px;
color: #ffffff;
}



ul#menu.mobile-menu li {
display:block;
list-style-type: none;
}

.nadi-sub-header2.mobile-nav{
    height: auto;
    padding: 20px 0;
}

ul#menu li a{
    color: #EE5E68;
    font-weight: 400;
    letter-spacing: 1px;
        // border-bottom: 2px solid black;
    // padding-bottom: 5px;
}

ul#menu li a:hover{
color: #000000;
text-decoration: none;
}

ul#menu li a.is-active{
  color: #FFF367;
      border-bottom: 2px solid black;
    padding-bottom: 5px;
}

ul#menu li.active{
    color: #FFF367;
}


.fixed-nav{
    position: fixed;
    top: 0;
    width: 100%;
    /* z-index: 100; */
        z-index: 101;


&.bugMessage{
    // top: 40px;
@media only screen and (max-width: 1080px) {
        // top: 20px;
}
}
}




.scrollactive-nav{
    margin: 0 auto;
}

.full-width-logo.left{
    width: 100%;
    position: relative;
    text-align: left;




}




@media only screen and (max-width: 1080px) {
    .hide-on-mobile,
    .googleInHeader{
    display: none;
}
}


@media only screen and (max-width: 992px) {

.inline-link.hide-on-mobile,
.hide-on-mobile,
.googleInHeader{
    display: none;
}

}


@media only screen and (max-width: 992px) {

.inline-link.hide-on-mobile,
.hide-on-mobile,
.googleInHeader{
    display: none;
}

}


@media only screen and (max-width: 768px) {




.full-width-logo.left{

    text-align: left;
    /* width: 60%; */
    width: 200px;
    width: 100%;
}
}



.full-width-logo .collapse{
position: absolute;
right: 0;
}




.nadi-sub-header2.mobile-nav{
    position: fixed;
    width: 100%;
    /* top: -154px; */
    // top: -194px;
    // top: -224px;
    // top: -240px;

left:-100%;

    transition: all .5s ease;
        // height: 100vh;
                height: auto;


top: 92px;
// left: 0;
z-index: 100;
padding-top: 15px !important;
// height: 100vh;
height: 100vh;


}

.mobile-nav.expanded{
    top: 92px;
    left: 0;
    // top: 112px;
    z-index: 100;
    padding-top: 15px !important;


    // background: pink;
    height: 100vh;
        // height: auto;

}




.mobile-nav li{
    margin-bottom: 5px;
}


.nav-wrap2{
    position: absolute;
    z-index: 100;
    position: fixed;
    z-index: 100;
    width: 100%;
    // top: 92px;
        // top: 112px;
                // top: 132px;
                    top: 92px;
}
.burger{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

}



@media only screen and (max-width: 576px) {
  
  .navbar .container {
        max-width: 98;
    }
}

.logButton{
    position: absolute;
    right: 0;
    height: 100%;
    border: 0;
    background: transparent;
    color: white;
    font-weight: 700;
    font-size: 18px;
    padding: 0 25px;
    line-height: 90px;
    text-decoration: none;
    cursor: pointer;
    z-index: 100;
}

.logButton2{
    position: absolute;
    right: 120px;
    height: 100%;
    border: 0;
    background: transparent;
    color: white;
    font-weight: 700;
    font-size: 18px;
    padding: 0 25px;
    line-height: 90px;
    text-decoration: none;
    cursor: pointer;
    z-index: 100;
}

.cursor-pointer{
    cursor: pointer;
}

.googleInHeader a{
    color: white;
}

.logButton a:hover{
    text-decoration: none;
    color: #fff367;
}

.inline-link{display: inline}



.no-button-style{
    background: transparent;
    outline: none;
    border: 0;
}



.topBlock{
display: block;
text-align: right;
padding: 0 10px;
cursor: pointer;
}


.informational-window{

    position: fixed;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    height: 100vh;

}


.info-modal{
    position: absolute;
    top: 20px;
 
        // width: 60%;
            width: 80vh;
    background: white;
    left: 50%;
    // height: 90vh;
    transform: translateX(-50%);
    padding: 10px;
        overflow: scroll;
}


@media only screen and (max-width: 992px) {

.info-modal{
    position: absolute;
    top: 10px;
    // width: 90%;
        // width: 80vh;
    // width: 90%;
    background: white;
    left: 50%;
    // height: 90vh;
    transform: translateX(-50%);
    padding: 10px;
        overflow: scroll;

            // height: 100vh;
}

// .navbar-expand-lg{
//     display: none;
// }

}


@media only screen and (min-width: 1400px) {

.info-modal{
    position: absolute;
    top: 10px;
    // width: 30%;
    background: white;
    left: 50%;
    // height: 90vh;
    transform: translateX(-50%);
    padding: 10px;
        overflow: scroll;
}

// .navbar-expand-lg{
//     display: none;
// }

}

.info-q{
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 10px;
    right: 5px;
    z-index: 102;
    // background: transparent;
    color: #fff;
    font-weight: 500;
    font-size: 24px;
    // padding-top: 6px;
    text-align: center;
    border-radius: 25px;
    cursor: pointer;
}


.navbar{
    padding: .5rem 1rem .5rem 1rem !important;
}



@media only screen and (max-width: 640px) {

.info-modal{
    position: absolute;
    top: 10px;
    width: 90%;
    background: white;
    left: 50%;
    // height: 90vh;
    transform: translateX(-50%);
    padding: 10px;
        overflow: scroll;

            // height: 100vh;
}

// .navbar-expand-lg{
//     display: none;
// }

}





.order-button2{
        display:none;
    background: white;
    color: #EE5E68;
    border: 2.5px solid #EE5E68;
    border-radius: 7px;
    width: 90px;
    float: right;
    height: 36px;
    transform: translateY(-4px);
    position: absolute;
    right: 80px;



    &:hover{
    background: #EE5E68;
    color: white;


.arrow-right {
  width: 0; 
  height: 0; 
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  
  border-left: 10px solid white;
  display: inline-block;
  transform: translateY(1px);
  margin-left: 4px;
}


    }

}
.arrow-right {
  width: 0; 
  height: 0; 
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  
  border-left: 10px solid #EE5E68;
  display: inline-block;
  transform: translateY(1px);
  margin-left: 4px;
}


.arrow-down {

  display: inline-block;
  transform: translateY(1px);

  width: 0; 
  height: 0; 
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  
  border-top: 10px solid #000;

}




.cover{
    background: #EE5E68;
    height: 100vh;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 200;
}


.select-dropdown{
background: white;
border: 2px solid black;
border-top-left-radius: 6px;
border-top-right-radius: 6px;
color: black;
padding: 6px 10px;
font-weight: 500;
width: 200px;
margin: 20px 0 0;
cursor: pointer;

}


.dropdownDrawer{
    background: white;
    width: 200px;
border: 2px solid black;
border-top: 0;
padding: 6px 10px;

a{
    color: black;
    cursor: pointer;
}
}

.red-background{
      background: #EE5E68;
}


	.st0-white-logo{fill:#FFFFFF;}




.cartContainer{
width: 35px;
height: 43px;
position: relative;
float: right;
}

.cartBackground{
width: 35px;
height: 43px;
position: absolute;
top: 0;
left: 0;
}


.cartItems{
width: 35px;
height: 43px;
position: absolute;
top: 0;
left: 0;
text-align: center;
font-weight: 600;
padding-top: 12px;
}



.st0nadiSm{
    fill:#F15D58;
}


.character-icon{
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: white;
    color: black;
    margin-top: 22px;
    line-height: 52px;
}


.dropdown3{
    background: #ffffff;
    position: absolute;
    width: 190px;
    top: 92px;
    top: 67px;
    left: -42px;



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


.closeToggle{

position: absolute;
    left: 20px;
    right: auto;
    top: 50%;
    transform: translateY(-50%);

@media only screen and (max-width: 768px){
    position: absolute;
    right: 20px;
    left: auto;
    top: 50%;
    transform: translateY(-50%);
}





}


.newNav{
    height: 100vh;
    background: white;
    position: absolute;
    width: 100%;
    transform: translateX(-100%);
    
    ul#menu{
        margin-top: 20px;
    }

    a{
        font-size: 36px;
    }
transition: transform .25s ease;
    &.expanded{
         transform: translateX(0%);   
    }
}


.logo-box,
.menu-box{
    display: inline-block;
    float: left;
}


.menu-box{
    ul{
        margin-top: 12px !important;
        margin-left: 30px !important;
    }

    @media only screen and (max-width: 1080px){
        display:none;
    }
}
</style>






