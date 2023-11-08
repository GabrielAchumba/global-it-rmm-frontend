<template>
    <div class="q-pa-md">
      <q-list padding class="text-accent">
        <q-item
          v-for="listItem in listItems"
          :key="listItem.name"
          clickable
          v-ripple
          :active="link === listItem.icon"
          @click="link = listItem.icon"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon :name="listItem.icon" size="sm" />
          </q-item-section>
  
        <q-item-section>{{ listItem.label }}</q-item-section>
        </q-item>
      </q-list>
    </div>
  </template>

<script>
export default {
    //style="max-width: 250px"
    data(){
        return {
            link: "inbox",
            listItems:[
                {name: "clients", label: "Clients", icon: "home"},
                {name: "dev", label:"Dev", icon: "apartment"}
            ]
        }
    }
}
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: #F2C037
</style>