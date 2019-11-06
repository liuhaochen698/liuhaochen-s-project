import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import  "@/assets/js/rem.js"
import Element from 'element-ui'
import router from "./router/router"
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'
import '../node_modules/echarts/map/js/province/beijing.js' // 引入北京地图数据
import '../node_modules/echarts/map/js/province/fujian.js' // 引入福建地图数据
import '../node_modules/echarts/map/js/province/anhui.js' // 引入安徽地图数据
import '../node_modules/echarts/map/js/province/xinjiang.js' // 引入新疆地图数据
import '../node_modules/echarts/map/js/province/xizang.js' // 引入西藏地图数据

Vue.use(Element,echarts,BaiduMap,{
  ak:"6uNuIn8x6nb6VSWhXvswdaKV41XMQPvg"
})
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
  Element,
  echarts,
  BaiduMap
}).$mount('#app')
