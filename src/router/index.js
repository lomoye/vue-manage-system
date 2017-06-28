import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/readme',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/itemList',
                    component: resolve => require(['../components/business/ItemList.vue'], resolve)
                },
                {
                    name: 'itemRecordForm',
                    path: '/itemList/itemRecordForm/:itemId',
                    component: resolve => require(['../components/business/ItemRecordForm.vue'], resolve)
                },
                {
                    path: '/itemChartList',
                    component: resolve => require(['../components/business/ItemChartList.vue'], resolve)
                },
                {
                    name: 'itemChart',
                    path: '/itemChartList/itemChart/:itemId',
                    component: resolve => require(['../components/business/ItemChart.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
