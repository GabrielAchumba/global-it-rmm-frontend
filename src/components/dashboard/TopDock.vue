<template>
    <div>
        <q-span>
            <div class="row q-pa-sm">
                <q-tabs
                    v-model="tab"
                    dense
                    class="text-accent bg-primary"
                    active-color="positive"
                    indicator-color="positive"
                    align="justify"
                    narrow-indicator
                    >
                        <q-tab name="servers" label="Servers"  no-caps/>
                        <q-tab name="workstations" label="Workstations" no-caps/>
                        <q-tab name="mixed" label="Mixed" no-caps/>
                </q-tabs>
                <q-space/>
                <Search/>
                <q-btn flat icon="notifications" class="text-accent"/>
            </div>
            <Table/>
        </q-span>
    </div>
</template>

<script>
import Table from "./Table.vue"
import Search from "./Search.vue";
export default {
    components:{
        Table,
        Search
    },
    data(){
        return {
            tab: "mixed"
        }
    }
}
</script>