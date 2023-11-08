<template>
    <div>
         <q-card 
           v-show="!spinner.showSpinner"
           class="fit column items-center bg-secondary" flat>
             <q-form @submit.prevent="logIn"
             style="width: 100%;">
   
                
               <div class="q-pa-sm text-center text-left">
                <div class="text-h5 text-accent q-pa-sm">Login</div>
                <div class="text-accent q-pa-sm">Please login to continue</div>
               </div>
   
               <s-text-input
               class="q-pa-sm"
                 :formData="phoneNumberForm"
               />
   
               <s-login-password
               class="q-pa-sm"
                   :formData="passwordForm"
               />
   
               <!-- <div class="q-m-none text-left q-pa-sm">
                 <q-checkbox
                   keep-color
                   v-model="model.rememberMe"
                   label="Remember Me"
                   color="positive"
                 />
               </div> -->
               <div class="row column stretch">
                 <s-save-button :enableFullWidth="true"  height="50">Submit</s-save-button>
                 <p class="q-pa-sm"><a class="text-positive" href="https://www.w3.org/">Forgot Password?</a></p>
               </div>
             </q-form>
         </q-card>
   
         <div 
           v-show="spinner.showSpinner"
           class="q-gutter-md row">
                   <div class="col-12 q-pa-sm absolute-center flex flex-center">
                       <q-spinner
                           :color="spinner.color"
                           :size="spinner.size"
                           :thickness="spinner.thickness"
                       />
                   </div>
           </div>
     </div>
   </template>
   
   <script>
   import mixin_Input from "src/mixins/Mixin-Input";
   import { post } from "../../services/auth-services";
   import { validateSession } from "../../services/main-service";

   
   export default {
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
       async mainLogin(){
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
       },
     },
     async created(){
       var context = this;
       await context.mainLogin();
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
   