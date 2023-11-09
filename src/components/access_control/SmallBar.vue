<template>
    <div class="row bg-dark text-accent">
        <span>
            <q-btn v-for="upTab in upTabs"
            :key="upTab.name"
            class="col-12 q-py-sm"
            style="height:80px; width:100%"
            no-caps
            flat
            :icon="upTab.icon"
            stack
            size="sm"/>
        </span>
        <q-space vertical/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            upTabs:[
                {name: "Access1", icon: "camera_rear"},
                {name: "Access2", icon: "fmd_bad"},
                {name: "Access3", icon: "schedule"},
                {name: "Access4", icon: "lyrics"},
                {name: "Access5", icon: "piano"},
                {name: "Access6", icon: "description"},
            ],
        }
    }
}
</script>