<template>
    <div>
        <q-table
        class="my-sticky-header-table"
        :data="rows"
        :columns="columns"
        row-key="name"
        dark
        color="amber"
        bordered>

        <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                class="bg-primary text-accent"
              >
                <q-icon v-if="col.icon" :name="col.icon"/>
                <div v-else>{{ col.label }}</div>
              </q-th>
            </q-tr>
          </template>


        <template v-slot:body="props">
            <q-tr
            :props="props">
                <q-td
                v-for="column in columns"
                 :key="column.name" 
                 :props="props">
                    <div v-if="column.name=='phone' || column.name=='mail' || column.name=='notifications'">
                        <q-checkbox v-model="isCheck" keep-color color="white"/>
                    </div>
                    <div v-else-if="column.icon"><q-icon :name="props.row[column.name]" class="text-accent"/></div>
                    <div v-else>{{ props.row[column.name] }}</div>
                </q-td>
            </q-tr>
            </template>
        </q-table>
    </div>
  </template>

<script>
export default {
    data(){
        return {
            isCheck: false,
            columns: [
            { name: 'phone', label: 'Phone', field: 'phone', icon: "smartphone", align: 'center' },
            { name: 'mail', label: 'Mail', field: 'mail', icon: 'mail', align: 'center' },
            { name: 'notifications',  label: 'Notifications', field: 'notifications', 
            icon: 'notifications', align: 'center' },
            { name: 'os', label: 'OS', field: 'os', icon: 'os', align: 'center' },
            { name: 'client', label: 'Client', field: 'client', align: 'center' },
            { name: 'site', label: 'Site', field: 'site', align: 'center'},
            { name: 'hostname', label: 'Hostname', field: 'hostname', align: 'center' },
            { name: 'description', label: 'Description', field: 'description', align: 'center' },
            { name: 'user', label: 'User', field: 'user', align: 'center' },
            { name: 'phone1', label: 'Phone1', field: 'phone1', icon: "verified_user", align: 'center' },
            { name: 'mail1', label: 'Mail1', field: 'mail1', icon: "schedule", align: 'center' },
            { name: 'notifications2',  label: 'Notifications2', field: 'notifications2', 
            icon: "power_settings_new", align: 'center' },
            { name: 'notifications3', label: 'Notifications3', field: 'notifications3',
             icon: "signal_cellular_alt", align: 'center' },
            { name: 'lastResponse', label: 'Last Response', field: 'lastResponse', align: 'center' },
            { name: 'bootTime', label: 'Boot Time', field: 'bootTime', align: 'center'},
            ],
            rows: [
                {phone: "smartphone", mail: "smartphone", notifications: "smartphone",
                os: "phone", client: "Dev", site: "Dev",
                hostname: "DESKTOP_SIASOCO", description: "", user: "Dev",
                phone1: "", mail1: "",
                notifications2: "", notifications3: "signal_cellular_alt",
                lastResponse: "Nov-8 2023 09:04", bootTime: "6 days ago"}
            ],
            pagination: {
                rowsPerPage: 0
            }
        }
    }
}
</script>

<style scoped>
.my-sticky-header-table{
  max-height: 250px;
}

.q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    
    background-color: black
}
    
</style>