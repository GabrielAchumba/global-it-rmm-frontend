<template>
    <div class="row q-mb-sm">
      <q-input
        outlined
        v-model="search"
        clearable
        placeholder="Search"
        type="text"
        style="width: 100%;"
        filled
        :dense="true"
        color="accent"
        dark
        :input-style="{ color: '#1976d2' }"
      >
        <template v-slot:prepend>
          <q-icon color="positive" name="search" />
        </template>
      </q-input>
    </div>
  </template>
  
  <script>
  export default {
    data(){
        return {
            search: ""
        }
    }
  };
  </script>
  