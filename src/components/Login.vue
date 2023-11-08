<template>
    <div>
         <q-card 
           v-show="!spinner.showSpinner"
           class="fit column items-center bg-secondary" flat>
             <q-form @submit.prevent="logIn"
             style="width: 100%;">
   
                
               <div class="q-pa-sm text-center">
                <q-space/>
                    <div class="text-h5 text-accent q-pa-sm">GLOBAL IT RMM</div>
                <q-space/>
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
   import { post } from "../services/auth-services";
   import { validateSession } from "../services/main-service";

   
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
                 {label: "Phone Number", 
                 name: "", 
                 placeholder: "Enter phone number", 
                 type: "text", 
                 icon: "phone"},
             ],
         },
         passwordForm: {
             qInputs: [
               {
                 label: "Password", 
                 name: "", 
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
                   var images = require.context('../statics/images/', false, /\.png$/)
                   return images('./' + fileUrl + ".png")
               }catch(e){
                   console.log(e)
                   return ""
               }
           }, 
         async logIn(){
           var context = this;
           let phone = `${context.phoneNumberForm.qInputs[0].name}`;
           console.log("Phone 1: ", phone)
           console.log("phone.length: ", phone.length)
           if(phone.length > 10){
               const diff = phone.length - 10;
               phone = phone.slice(diff);
               console.log("Phone 2: ", phone)
           }
           
           const payload = {
                   url: "user/login",
                   req: {
                     phoneNumber: `+234${phone}`,
                     password: context.passwordForm.qInputs[0].name
                    }
               } 
   
               
               console.log("payload: ", payload)
               try{
                   this.$store.commit("authenticationStore/setShowSpinner", true);
                   const response = await post(payload);
                   console.log("response: ", response)
                   
                   //this.$store.commit("authenticationStore/setShowSpinner", false);
               if(response.data.success == true){
                 console.log("user: ", response.data.data.user)
                 console.log("token: ", response.data.data.token)
                 this.$store.commit("authenticationStore/Login", {
                   user: response.data.data.user,
                   token: response.data.data.token
                 });
               }
               }catch(e){
                   this.$store.commit("authenticationStore/setShowSpinner", false);
               }
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
   