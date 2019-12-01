import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import { Button, Radio ,Dialog,Icon,Checkbox,Dropdown,DropdownMenu,DropdownItem,RadioGroup,Row,Message,MessageBox} from 'element-ui';
Vue.use(Button)
Vue.use(Radio)
Vue.use(Dialog)
Vue.use(Icon)
Vue.use(Checkbox)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem);
Vue.use(RadioGroup);
Vue.use(Row);
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI);
// require styles
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)
axios.defaults.baseURL = "http://exam.zcmax.top/api"
Vue.prototype.$axios=axios;//原型链注册
//设置公共的地址

axios.interceptors.request.use(function(config){
  if(config.url!='/users/login'){
    const AUTH_TOKEN = localStorage.getItem('token')
    config.headers.token= AUTH_TOKEN
  }
  return config
},function(error){
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
 if(response.data.meta.status==5044){
   localStorage.removeItem('token')
 }
  return response;
}, function (error) {
      router.push({name:'login'})
  return Promise.reject(error);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
