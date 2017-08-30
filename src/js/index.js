import Vue from 'vue';
import Footers from '../template/footer/footer.vue';
import list from '../template/list/list.vue';
require("../css/common.css");
new Vue({
    el:"#app",
    data(){
        return {
            message:"helloVue"
        }
    },
    components:{"Footers":Footers,"list":list}
})