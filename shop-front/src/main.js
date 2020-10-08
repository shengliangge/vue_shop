import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';
// 导入全局样式
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入axios
import axios from 'axios'
//将axios挂载到Vue原型链上
Vue.prototype.$http = axios
//简易配置请求的根路径，之后再封装
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
Vue.config.productionTip = false
// Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
