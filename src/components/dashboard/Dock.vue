<template>
    <div class="row">
        <TopDock class="col-12" style="height: 50vh;"/>
        <BottomDock class="col-12" style="height: 30vh;"/>
    </div>
</template>

<script>
import TopDock from './TopDock.vue';
import BottomDock from './BottomDock.vue';
export default {
    components:{
        TopDock,
        BottomDock
    }
}
</script>
