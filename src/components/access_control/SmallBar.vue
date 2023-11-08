<template>
    <div class="row bg-primary text-accent">
        <span>
            <q-btn v-for="upTab in upTabs"
            :key="upTab.name"
            :label="upTab.name"
            class="col-12 q-py-sm"
            style="height:80px; width:100%"
            no-caps
            flat
            :icon="upTab.icon"
            stack/>
        </span>
        <q-space vertical/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            upTabs:[
                {name: "Access1", icon: "settings"},
                {name: "Access2", icon: "settings"},
                {name: "Access3", icon: "settings"},
                {name: "Access4", icon: "settings"},
                {name: "Access5", icon: "settings"},
                {name: "Access6", icon: "settings"},
            ],
        }
    }
}
</script>