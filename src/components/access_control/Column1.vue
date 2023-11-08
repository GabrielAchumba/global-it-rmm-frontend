<template>
    <div class="row bg-primary text-accent">
        <span>
            <q-btn
            class="col-12 text-accent bg-positive"
            style="height:80px; width:100%"
            no-caps
            flat>
                <q-avatar>
                    <img src="https://globalit.com/wp-content/uploads/2018/06/logo-ouline-1-1.png">
                </q-avatar>
            </q-btn>
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
        <!-- <span>
            <q-btn v-for="downTab in downTabs"
            :key="downTab.name"
            :label="downTab.name"
            class="col-12"
            style="height:50px; width:100%"
            no-caps
            flat/>
        </span> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            upTabs:[
                {name: "Access", icon: "settings"},
                {name: "Admin", icon: "settings"}
            ],
            downTabs:[
                {name: "Button1"},
                {name: "Button2"}
            ]
        }
    }
}
</script>