<template>
    <div class="row">
        <Column1 class="col-1"/>
        <Column2 class="col-3"/>
        <Column3 class="col-5"/>
        <Column4 class="col-3"/>
    </div>
</template>

<script>
import Column1 from './Column1.vue';
import Column2 from './Column2.vue';
import Column3 from './Column3.vue';
import Column4 from './Column4.vue';
export default {
    components:{
        Column1,
        Column2,
        Column3,
        Column4
    }
}
</script>