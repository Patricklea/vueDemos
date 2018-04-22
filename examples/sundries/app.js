import 'babel-polyfill'
import Vue from 'vue'
/**
 * 组建的引入必须是相对路径；
 * 必须带.vue后缀。
 */
import index from './index.vue'

import Render from './components/render.vue'
Vue.component(Render.name, Render)

new Vue({
    el: '#app',
    render: h => h(index)
})