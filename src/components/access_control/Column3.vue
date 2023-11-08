<template>
    <div>
        <span>
            <q-bar 
                class="text-accent shadow-5 q-pa-sm"
                dark>
                <div>All Machines by Company</div>
                <q-space/>
                <q-btn v-for="btn in btns"
                :key="btn.name"
                :label="btn.name"
                :icon="btn.icon"
                flat
                class="text-accent"
                no-caps/>
            </q-bar>
            <div class="row q-py-sm">
                <q-space/>
                <Search/>
            </div>
            <q-list padding class="text-accent bg-primary">
                <q-item
                v-for="listItem in listItems"
                :key="listItem.id"
                clickable
                v-ripple
                :active="link === listItem.id"
                @click="link = listItem.id"
                active-class="my-menu-link"
                >
                <q-item-section>
                    <div class="row">
                        <q-checkbox v-model="listItem.isChecked"/>
                        <span>
                            <p v-for="msg in listItem.msgs"
                            :key="msg.title">{{ msg.title }}</p>
                        </span>
                    </div>
                </q-item-section>
                <q-item-section side>
                    <div><q-icon name="person"/><hr style="color:white"><hr style="color:white"/><q-icon name="edit"/></div>
                </q-item-section>
                </q-item>
            </q-list>
        </span>
    </div>
</template>

<script>
import Search from '../dashboard/Search.vue';
const testObj = {
    isChecked: false, 
    msgs: [
        {color: "accent", title: "Aaaaaaaaa"},
        {color: "accent", title: "Bbbbbbbbb"},
        {color: "red", title: "Ccccccccccc"}
    ], 
    line1: {color: "accent"},
    line2: {color: "accent"}
}
const numbers =[29, 38, 45, 56, 78, 89, 23, 64]
export default {
    components:{
        Search
    },
    data(){
        return {
            btns:[
                {name: "Join", icon: "edit"},
                {name: "Edit", icon: "edit"},
                {name: "Run Tool", icon: "edit"},
                {name: "More", icon: "edit"}
            ],
            listItems: numbers.map((row, i) => {
                return {
                    id: i+1,
                    ...testObj
                }
            })
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


