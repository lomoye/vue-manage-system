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
                    name: 'userConfig',
                    path: '/userConfig',
                    component: resolve => require(['../components/business/UserConfig.vue'], resolve)
                },
                {
                    name: 'account',
                    path: '/account',
                    component: resolve => require(['../components/business/Account.vue'], resolve)
                },
                {
                    name: 'itemList',
                    path: '/itemList',
                    component: resolve => require(['../components/business/ItemList.vue'], resolve)
                },
                {
                    name: 'itemForm',
                    path: '/itemList/itemForm',
                    component: resolve => require(['../components/business/ItemForm.vue'], resolve)
                },
                {
                    name: 'itemRecordForm',
                    path: '/itemList/itemRecordForm/:itemId',
                    component: resolve => require(['../components/business/ItemRecordForm.vue'], resolve)
                },
                {
                    name: 'addItemParamForm',
                    path: '/itemList/addItemParamForm/:itemId',
                    component: resolve => require(['../components/business/AddItemParamForm.vue'], resolve)
                },
                {
                    path: '/itemChartList',
                    component: resolve => require(['../components/business/ItemChartList.vue'], resolve)
                },
                {
                    name: 'itemChart',
                    path: '/itemChartList/itemChart/:itemId',
                    component: resolve => require(['../components/business/ItemChart.vue'], resolve)
                },
                {
                    name: 'chat',
                    path: '/chat',
                    component: resolve => require(['../components/business/Chat.vue'], resolve)
                }
            ]
        },
        {
            name: 'login',
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },



        /*手机端*/
        {
            name: 'mobileItemList',
            path: '/mobileItemList',
            component: resolve => require(['../components/mobile/MobileItemList.vue'], resolve)
        },
        {
            name: 'mobileItemRecordForm',
            path: '/mobileItemList/mobileItemRecordForm/:itemId',
            component: resolve => require(['../components/mobile/MobileItemRecordForm.vue'], resolve)
        },
        {
            name: 'mobileChat',
            path: '/mobileChat',
            component: resolve => require(['../components/mobile/MobileChat.vue'], resolve)
        }
    ]
})
