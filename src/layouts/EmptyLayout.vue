<template>
    <div class="bg-light-page">
      <q-layout>
        <q-page-container>
          <router-view
          :rightDrawerOpen="rightDrawerOpen" />
        </q-page-container>
      </q-layout>
    </div>
  </template>
  
  <script>
  export default {
    name: "emptyLayout",
    data(){
      return {
        rightDrawerOpen: window.innerWidth < 700 ? true : false,
      }
    },
    methods:{
      onResize(e) {
          const width = window.innerWidth;
          var content = this;
          content.rightDrawerOpen = false
          console.log("onResize")
          if(width < 700) {
              content.rightDrawerOpen = true;
          }
      },
    },
    created() {
        window.addEventListener("resize", this.onResize);
    },
    destroyed() {
        window.removeEventListener("resize", this.onResize);
    },
  }
  </script>
  
  