<template>
    <div class="row bg-secondary text-accent">
        <span>
            <div class="col-12 text-h6 q-pa-sm">Access</div>
            <div class="col-12 q-pa-sm">Install an agent and connect to unauthorized devices</div>
            <div class="col-12 q-pa-sm">
                 <s-save-button :enableFullWidth="true"  height="50">Build+</s-save-button>
            </div>
        
            <div class="col-12">
                <q-expansion-item
                v-model="isAllMachines"
                dense
                dense-toggle
                expand-separator
                label="All Machines by Company"
                class="text-left  bg-primary q-pa-sm"
                >
                <q-list padding class="text-accent bg-primary">
                    <q-item
                    v-for="listItem in listItems"
                    :key="listItem.name"
                    clickable
                    v-ripple
                    :active="link === listItem.name"
                    @click="link = listItem.name"
                    active-class="my-menu-link"
                    >
                    <q-item-section>{{ listItem.label }}</q-item-section>
                    <q-item-section side>{{ listItem.count }}</q-item-section>
                    </q-item>
                </q-list>
                </q-expansion-item>    
            </div>
        </span>
        <q-space vertical spaced/>
        <div class="col-12 q-pa-sm">Create Session Group</div>
    </div>
</template>

<script>
import mixin_Input from "src/mixins/Mixin-Input";
const testObj = {name: "airCareAmbulance", label: "AirCare Ambulance", count: 21}
const numbers =[29, 38, 45, 56, 78, 89, 23, 64]
export default {
    mixins: [mixin_Input],
    data(){
    return {
        isAllMachines: true,
        listItems: numbers.map((row, i) => {
            return {
                name: `${testObj.name}${i+1}`,
                label: `${testObj.label}${i+1}`,
                count: row
            }
        })
    }
  }  
}
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: #F2C037
</style>