<template>
    <div class="row">
         <q-bar 
            class="col-12 text-accent"
            dark>
            <q-icon name="refresh" dark class="text-accent q-pa-sm" />
            <div class="q-pa-sm">GLOBAL RMM<sub>v1.10.5</sub></div>
            <q-space/>
            <q-icon name="notifications" class="text-accent q-pa-sm"/>
            <div>Dev</div>
            <q-btn-dropdown color="bg-dark text-accent q-pa-sm" flat ></q-btn-dropdown>
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


