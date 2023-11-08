<template>
    <div>
        <q-span>
            <div>
                <q-tabs
                    v-model="tab"
                    dense
                    class="text-accent bg-dark"
                    active-color="positive"
                    indicator-color="positive"
                    align="justify"
                    narrow-indicator
                    >
                        <q-tab 
                        v-for="tabi in tabs"
                        :key="tabi.name"
                        :name="tabi.NAME" 
                        :label="tabi.name"
                        size="sm"
                        no-caps/>
                </q-tabs>
                <q-space/>
                <Search/>
            </div>
        </q-span>
    </div>
</template>

<script>
import Search from "./Search.vue"
export default {
    components:{
        Search,
    },
    data(){
        return {
            tab: "Summary",
            tabs:[
                {name: "Summary"},
                {name: "Checks"},
                {name: "Tasks"},
                {name: "Patches"},
                {name: "Software"},
                {name: "History"},
                {name: "Notes"},
                {name: "Assets"},
                {name: "Debug"},
                {name: "Audit"}
            ]
        }
    }
}
</script>