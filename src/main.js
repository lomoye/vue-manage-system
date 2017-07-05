import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import { Message } from 'element-ui';
//import 'element-ui/lib/theme-default/index.css';    // 默认主题
import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";

Vue.use(ElementUI);


/**
 * http配置
 */
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    if (response.data.resultCode !== "0") {
        Message.error({
            message: response.data.resultMessage,
        });
        return Promise.reject(response);
    }

    return response;
}, function (error) {
    if (error.response.status === 401) {
        router.push({name: 'login'});
    } else {
        console.log(error);
        Message.error({message: '系统错误，请联系管理员大人'})
    }
    // Do something with response error
    return Promise.reject(error);
});


Vue.prototype.$axios = axios;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
