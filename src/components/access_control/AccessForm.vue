<template>
    <div>
         <q-card 
           v-show="!spinner.showSpinner"
           class="fit column items-center bg-secondary" flat>
             <q-form @submit.prevent="logIn"
             style="width: 100%;">
   
               <s-text-input
               class="q-pa-sm"
                 :formData="nameForm"
               />
   
               <s-text-input
               class="q-pa-sm"
                 :formData="companyForm"
               />

               <s-text-input
               class="q-pa-sm"
                 :formData="siteForm"
               />

               <s-text-input
               class="q-pa-sm"
                 :formData="departmentForm"
               />

               <s-text-input
               class="q-pa-sm"
                 :formData="deviceTypeForm"
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
                 <s-save-button :enableFullWidth="true"  height="50">Join</s-save-button>
               </div>
             </q-form>
         </q-card>
     </div>
   </template>
   
   <script>
   import mixin_Input from "src/mixins/Mixin-Input";

   
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
         nameForm: {
             qInputs: [
                 {label: "Name", 
                 name: "", 
                 placeholder: "Enter name", 
                 type: "text", 
                 icon: "phone"},
             ],
         },
         companyForm: {
             qInputs: [
               {
                 label: "Company", 
                 name: "", 
                 placeholder: "Enter company", 
                 type: "text",
                 icon: ""
               },
             ],
         },
         siteForm: {
             qInputs: [
               {
                 label: "Site", 
                 name: "", 
                 placeholder: "Enter site", 
                 type: "text",
                 icon: ""
               },
             ],
         },
         departmentForm: {
             qInputs: [
               {
                 label: "Department", 
                 name: "", 
                 placeholder: "Enter department", 
                 type: "text",
                 icon: ""
               },
             ],
         },
         deviceTypeForm: {
             qInputs: [
               {
                 label: "Device Type", 
                 name: "", 
                 placeholder: "Enter device Type", 
                 type: "text",
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
       //var context = this;
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
   