<template>
    <div class="row">
         <q-bar 
            class="col-12 bg-positive text-accent"
            style="height:10vh;">
            <div>
                <q-avatar>
                    <img :src="src" class="text-accent">
                </q-avatar>
            </div>
            <q-space/>
            <q-btn 
            no-caps
            flat label="Login" class="bg-positive text-accent" @click="titleBarButtonEvent"/>
        </q-bar>

    </div>
</template>

<script>

export default {
    props:{
        src:{
            type: String,
            default: ""
        },
        isCloseForm:{
            type: Boolean,
            default: false
        },
        backRoute: {
          type: Object,
          default: () => {
            return { name: "", route: ""}
          }  
        }
    },
    methods:{
        titleBarButtonEvent(){
            this.$emit("titleBarButtonEvent")
        },
        backRouteAction(route){
            this.$router.push(route);
        }
    }

}
</script>

