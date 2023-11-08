<template>
    <div class="row">
        <s-title-bar class="col-12" :src="src"
        @titleBarButtonEvent="titleBarButtonEvent"/>
        <div class="col-12" :style="backgroundStyle"></div>

        <q-dialog v-model="isLoginDialog">
            <Login @closeLogInDialog="closeLogInDialog"/>
        </q-dialog>
    </div>
</template>

<script>
import mixin_Input from "src/mixins/Mixin-Input";
import Login from "./dialog/Login.vue"
export default {
    mixins: [mixin_Input],
    components:{
        Login
    },
    props:{
        src:{
            type: String,
            default: "https://globalit.com/wp-content/uploads/2018/06/logo-ouline-1-1.png"
        }
    },
    data(){
        return {
            isLoginDialog: false,
            backgroundImage: "https://orangeisp.com/wp-content/uploads/2020/12/New-Project-2020-12-29T212932.675-1.png",
            backgroundStyle: "",
        }
    },
    methods:{
        titleBarButtonEvent(){
            var context = this;
            context.isLoginDialog = true;
        },
        closeLogInDialog(){
            var context = this;
            context.isLoginDialog = false;
        }
    },
    async created(){
        var context = this;
        context.backgroundStyle = `background-image: url(${context.backgroundImage}); height: 90vh; width: 100%; object-fit: fill; background-repeat: no-repeat, repeat; background-position: center; background-size: cover;`
    }
}
</script>