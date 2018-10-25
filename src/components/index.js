import vueZtree from './vue-ztree.vue';

const install = function (Vue, opts = {}) {
    Vue.component("vue-ztree", vueZtree);
}

export default install;