<template>
    <q-page class="bg-primary">
     <div class="fixed-center" :style="style"
     :rightDrawerOpen="rightDrawerOpen">
        <Login/>
     </div>
 
   </q-page>
</template>

<script>
import Login from "../components/Login.vue";
export default {
    computed: {
      style(){
        var context = this;
        if(context.rightDrawerOpen){
          return "width: 100%; height: 100vh;"
        }else{
          return "width: 30%"
        }
      },
    },
    components:{
        Login
    },
    props:{
      rightDrawerOpen:{
        type: Boolean,
        default: false
      }
    },
    created(){
      this.$store.commit("authenticationStore/setShowSpinner", false)
    }
}
</script>

<style scoped>
.background {
    background: -webkit-linear-gradient(top, white 70%, #21BA45 30%);
    background: -o-linear-gradient(top, white 70%, #21BA45 30%);
    background: -moz-linear-gradient(top, white 70%, #21BA45 30%);
    background: linear-gradient(to top, white 70%, #21BA45 30%);
}
</style>