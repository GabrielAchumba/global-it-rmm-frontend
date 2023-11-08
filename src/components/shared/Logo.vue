<template>
    <div  class="text-center" style="right: 0; left: 0; margin: auto;">
      <Cards
      :cardList="list"
      :rightDrawerOpen="rightDrawerOpen"/>
    </div>
  </template>
  
  <script>
  import Cards from "./cards/card3.vue"
  
  const line1 = "No. 26 Elitor Road, Woji, PortHarcourt, Rivers State, Nigeria";
  const line2 = "Tel: +(234) 703-248-8605";
  const line3 = "site: www.newwaysg.com";
  const line = line1 + "\n" + line2 + "\n" + line3;
  export default {
    components:{
      Cards
    },
    props:{
      rightDrawerOpen: {
                    type: Boolean,
                    default: false
                }
    },
    data(){
      return {
        iconName: "keyboard_arrow_up",
        list: [{label: "", description: line, image: "Newpay_Logo", style: "min-width:300px;"}]
      }
    },
  }
  </script>
  
  <style>
    
  </style>