import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Message from '../views/Message.vue'
import Table from "../views/swiper1/Table";
import FunctionArea from "../views/FunctionArea";
import Area from "../views/swiper1/Area";
import Statistics from "../views/swiper1/Statistics";
import MapModel from "../views/swiper1/MapModel";
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/home",
            name: "Home",
            component:Home
        },
        {
           path: '/message',
            name:"Message",
            component: Message
        },
        {
            path:'/table',
            name:'Table',
            component:Table
        },
        {
            path:'/functionArea',
            name:'FunctionArea',
            component:FunctionArea
        },
        {
            path:'area',
            name:'Area',
            component:Area
        },
        {
            path:'/statistics',
            name:'Statistics',
            component:Statistics
        },
        {
            path:'/mapModel',
            name:'MapModel',
            component:MapModel
        }



    ]
})
