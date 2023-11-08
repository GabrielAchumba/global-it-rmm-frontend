<template>
    <div>
        <span>
            <TitleBar style="height:8vh;"/>
            <MenuBar style="height:5vh;"/>
            <div>
                <div class="row">
                    <SidePane class="col-2 bg-secondary" style="height:87vh;"/>
                    <Dock class="col-10" style="height:87vh;"/>
                </div>
            </div>
        </span>
    </div>
</template>

<script>
import TitleBar from "./TitleBar.vue";
import MenuBar from "./MenuBar.vue";
import SidePane from "./SidePane.vue"
import Dock from './Dock.vue';
export default {
    components:{
        TitleBar,
        MenuBar,
        SidePane,
        Dock
    }
}
</script>