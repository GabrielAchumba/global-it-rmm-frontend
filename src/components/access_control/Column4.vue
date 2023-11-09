<template>
    <div class="row q-mt-lg">
        <SmallBar class="col-2"/>
        <AccessForm class="col-10"/>
        <!-- <div style="height: 20vh;" class="col-12 bg-red"></div> -->
        <!-- <div class="col-12" style="height: 100vh">
            <div class="row">
                <SmallBar class="col-2"/>
                <AccessForm class="col-10"/>
            </div>
        </div> -->
    </div>
</template>
   
   <script>
import AccessForm from './AccessForm.vue';
import SmallBar from './SmallBar.vue';
import mixin_Input from "../../mixins/Mixin-Input"
   
   export default {
    components:{
        AccessForm,
        SmallBar
    },
     computed:{
       spinner(){
           return this.$store.getters["authenticationStore/spinner"];
       },
       flat(){
         var context = this;
         console.log("context.rightDrawerOpen component: ", context.rightDrawerOpen)
         if(context.rightDrawerOpen){
           console.log("flat component: ", true)
           return true
         }else{
           console.log("flat component: ", false)
           return false
         }
       }
     },
     watch:{
       rightDrawerOpen(old, _new){
         console.log("old: ", old);
         console.log("_new: ", _new)
       }
     },
     mixins: [mixin_Input],
     props:{ 
       heading1:{
               type: String,
               default: "Login"
           },
           heading2:{
               type: Object,
               default: () => {
                   return { name: "", description: "", src: ""}
               }
           },
         rightDrawerOpen:{
           type: Boolean,
           default: false
         }
     },
     data() {
       return {
         logo: "Newpay_Logo",
         model: { rememberMe: false},
         backRoute: { name: "", route: "/"},
         phoneNumberForm: {
             qInputs: [
                 {label: "Username", 
                 name: "Tony", 
                 placeholder: "Enter username", 
                 type: "text", 
                 icon: "phone"},
             ],
         },
         passwordForm: {
             qInputs: [
               {
                 label: "Password", 
                 name: "abcdefghij", 
                 placeholder: "Enter password", 
                 type: "password",
                 icon: ""
               },
             ],
         },
       };
     },
     methods: {
       img_png(fileUrl){
               try{
                   var images = require.context('../../statics/images/', false, /\.png$/)
                   return images('./' + fileUrl + ".png")
               }catch(e){
                   console.log(e)
                   return ""
               }
           }, 
         logIn(){
            this.$emit("closeLogInDialog")
       },
       /* async mainLogin(){
         var context = this;
         const sessionObj = validateSession();
         console.log("sessionObj: ", sessionObj)
         if(sessionObj !== null){
           const { token, user } = sessionObj
           context.user = user;
           context.token = token;
           this.$store.commit('authenticationStore/Login',{
             token: context.token,
             user: context.user,
           })
         }
       }, */
     },
     created(){
       var context = this;
       //await context.mainLogin();
     }
   }
   </script>
   
   <style scoped>
   .jss31 {
     color: #424242;
     font-size: 1.2rem;
     text-align: center;
     font-family: "Segoe UI", system-ui, -webkit-pictograph;
     max-width: 550px;
   }
   </style>
   