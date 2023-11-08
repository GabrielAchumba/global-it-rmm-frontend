<template>
    <div class="row">
         <q-bar 
            class="col-12 text-accent shadow-5"
            dark>
            <q-btn v-for="btn in btns"
            :key="btn.name"
            :label="btn.name"
            flat
            class="text-accent"
            no-caps/>
            <q-space/>
        </q-bar>

    </div>
</template>

<script>

export default {
    data(){
        return {
            btns:[
                {name: "File"},
                {name: "View"},
                {name: "Agents"},
                {name: "Tools"},
                {name: "Help"}
            ]
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


