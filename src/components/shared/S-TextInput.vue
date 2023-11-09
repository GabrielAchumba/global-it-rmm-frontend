<template>
  <div class="row q-mb-sm">
    <q-input
      v-for="qInput in formData.qInputs" 
      :key="qInput.label"
      :outlined="qInput.outlined ? qInput.outlined : false"
      :readonly="qInput.readonly"
      v-model="qInput.name"
      v-select-all
      :label="qInput.label"
      :type="qInput.type"
      style="width: 100%;"
      filled
      :dense="qInput.dense ? qInput.dense : false"
      :disable="qInput.disable"
      color="accent"
      dark
      :input-style="{ color: '#1976d2' }"
    >
      <!-- <template v-slot:prepend>
        :rules="[(val) => !!val || `${qInput.label} is required`]"
        <q-icon color="positive" :name="qInput.icon" />
      </template> -->
    </q-input>
  </div>
</template>

<script>
export default {
  props:{
    formData: {
        type: Object,
        default: () => {
          return {
            qInputs: [
                {label: "Password", name: "", placeholder: "Your password", type: "password", icon: ""},
            ]
          }
        }
    },
  },
  directives: {
    selectAll: {
      inserted(el) {
        let input = el.querySelector(".q-field__native");
        input.addEventListener("focus", () => {
          if (input.value.length) {
            input.select();
          }
        });
      },
    },
  },
};
</script>
