<template>
    <div class="row">
         <q-bar 
            class="col-12 bg-positive text-accent"
            style="height:10vh;">
            <q-list>
                <q-item v-ripple>
                    <q-item-section avatar>
                        <q-avatar>
                            <img :src="src">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label class="text-accent">GLOBAL IT</q-item-label>
                        <q-item-label caption lines="1" class="text-accent">communications</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>

            <!-- <q-btn class="text-accent bg-positive" no-caps>
                <div class="row">
                    <q-avatar>
                        <img :src="src">
                    </q-avatar> 
                    <p>
                        <span>
                            <p>GLOBAL IT</p>
                            <p class="text-caption">COMMUNICATIONS</p>
                        </span>
                    </p>
                </div>   
            </q-btn> -->

            <!-- <div>
                <q-avatar>
                    <img :src="src" class="text-accent">
                </q-avatar>
            </div> -->

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

