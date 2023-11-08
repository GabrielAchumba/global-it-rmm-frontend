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
                    <div v-if="column.icon"><q-icon :name="props.row.phone" class="text-accent"/></div>
                    <div v-else>{{ props.row.phone }}</div>
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
            columns: [
            { name: 'phone', label: 'Phone', field: 'phone', icon: "phone" },
            { name: 'mail', label: 'Mail', field: 'mail', icon: 'mail' },
            { name: 'notifications',  label: 'Notifications', field: 'notifications', icon: 'notifications' },
            { name: 'os', label: 'OS', field: 'os', icon: 'os' },
            { name: 'client', label: 'Client', field: 'client' },
            { name: 'site', label: 'Site', field: 'site'},
            { name: 'hostname', label: 'Hostname', field: 'hostname' },
            { name: 'description', label: 'Description', field: 'description' },
            { name: 'user', label: 'User', field: 'user' },
            { name: 'phone1', label: 'Phone1', field: 'phone1', icon: "phone" },
            { name: 'mail1', label: 'Mail1', field: 'mail1', icon: "phone" },
            { name: 'notifications2',  label: 'Notifications2', field: 'notifications2', icon: "phone" },
            { name: 'notifications3', label: 'Notifications3', field: 'notifications3', icon: "phone" },
            { name: 'lastResponse', label: 'Last Response', field: 'lastResponse' },
            { name: 'bootTime', label: 'Boot Time', field: 'bootTime'},
            ],
            rows: [
                {phone: "phone", mail: "phone", notifications: "phone",
                os: "phone", client: "Dev", site: "Dev",
                hostname: "DESKTOP_SIASOCO", description: "", user: "Dev",
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