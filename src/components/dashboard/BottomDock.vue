<template>
    <div>
        <q-span class="bg-dark">
                <q-tabs
                    v-model="tab"
                    dense
                    class="text-accent bg-dark"
                    active-color="positive"
                    indicator-color="positive"
                    inline-label
                    align="justify"
                    narrow-indicator
                    >
                        <q-tab 
                        v-for="tabi in tabs"
                        :key="tabi.name"
                        :name="tabi.NAME" 
                        :label="tabi.name"
                        :icon="tabi.icon"
                        size="sm"
                        no-caps/>
                </q-tabs>
                <q-space class="bg-dark"/>
                <q-card flat bordered>
                    <q-card-section class="bg-dark" flat>
                        <div class="text-left text-accent bg-dark q-pa-sm">No agent selected</div>
                    </q-card-section>
                </q-card>
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
                {name: "Summary", icon: "summarize"},
                {name: "Checks", icon: "done_all"},
                {name: "Tasks", icon: "checklist"},
                {name: "Patches", icon: "system_update"},
                {name: "Software", icon: "cast"},
                {name: "History", icon: "history"},
                {name: "Notes", icon: "note"},
                {name: "Assets", icon: "bar_chart"},
                {name: "Debug", icon: "adb"},
                {name: "Audit", icon: "account_circle"}
            ]
        }
    }
}
</script>

<style scoped>
.line {
    border-bottom: white 2px;
}
</style>