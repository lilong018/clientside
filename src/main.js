import Vue from 'vue'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
Vue.use(BootstrapVue)
import { AgGridVue } from 'ag-grid-vue'
Vue.component('ag-grid-vue', AgGridVue)

import App from './App.vue'
import router from './router/router'
import store from './store'
import http, {post,get,fetchPost,fetchGet} from './assets/js/http'
import qs from 'qs' //转换请求参数格式，需要时使用
import { Message } from "element-ui";

import '@/assets/scss/global.scss'
import FontAwesomeAnimation from 'font-awesome-animation/dist/font-awesome-animation.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$fetchPost = fetchPost;
Vue.prototype.$fetchGet = fetchGet;
Vue.prototype.qs = qs;

Vue.use(Message);
Vue.prototype.$message = Message;


// library.add与import对应
library.add(fas)
library.add(far)
library.add(fab)
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
import Footer from './components/layout/footer.vue'
import vueConfig from '../vue.config'
Vue.component('Footer', Footer)

new Vue({
  router,
  store,
  FontAwesomeAnimation,
  render: function (h) {
    return h(App)
  },
}).$mount('#app')
