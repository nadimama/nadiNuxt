<template>
<div>






<footer class="secPadFooter">

<div class="beta">
    we are in beta. feedback? <a href="https://forms.gle/9d5kmR6PzZwmgUV78" target="_blank"><u>submit here</u></a>!
</div>

<div class="container">


<div class="row">



<div class="col-md-5 col-12">



<h4>{{$store.state.footer.newsletter.header}}
</h4>
<p>  
{{$store.state.footer.newsletter.description}}
</p>
<EmailSignup />
</div>

<div v-if="$store.state.footer.footer_links" v-for="linkgroup in $store.state.footer.footer_links"class="col-md-3 col-12" style="display:none;">
<ul>
<li>

<h4>
{{linkgroup.link_group_title}}
</h4>
</li>
<li v-for="link in linkgroup.link_group">
    <a v-if="link.links.new_tab" target="_blank" :href="link.links.link">{{link.links.text}}</a>
    <a v-else :href="link.links.link">{{link.links.text}}</a>
</li>
</ul>
</div>


</div>
</div>
</footer>


</div>
</template>

<script>


import EmailSignup from '@/components/EmailSignup.vue'


export default{
components: {
EmailSignup
},
data(){
return{

      footer: null
}
},
methods:{
    async globalFooter(){



this.footer = this.$store.state.footer;

}



    
},
    mounted(){

this.globalFooter();
    }

}

</script>





<style lang="scss">


footer h4{
    font-size: 32px;
    text-align: left;
    color: #fff;
    margin-bottom: 22px;
}


footer ul{
    list-style-type: none;
    padding-left: 0;
}

footer{
    background: black;
    p{
        margin-bottom: 26px;
    }
}



footer p,
footer ul li h4,
footer ul li a{
    color: #fff;
}

footer p{
    font-size: 16px;
    line-height: 24px;
}

footer ul li{
    margin-bottom: 6px;
    a{
        font-size: 12px;
    }

}
.mb40{
    margin-bottom: 40px;
}


.secPadFooter{
        position: relative;
    padding: 70px 0 110px;
        padding: 100px 0 110px;
}


.beta{
    position: absolute;
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

</style>

