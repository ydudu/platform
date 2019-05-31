// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Index from './views/index/index';
import Table from './views/table/table';
import Form from './views/form/form';
import ue from './views/editor/editor';
import 'font-awesome/css/font-awesome.min.css';
import Mock from './mock/mock.js';

import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

Mock.mockData();
Vue.use(VueRouter);
/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.use(ElementUI);

let routes = [{
  path: '/',
  component: App,
  children: [
    {path: '/index', component: Index, name: 'index', class: 'fa-line-chart'},
    {path: '/table', component: Table, name: 'table', class: 'fa-table'},
    {path: '/form', component: Form, name: 'form', class: 'fa-newspaper-o'},
    {path: '/editor', component: ue, name: 'editor', class: 'fa-plug'}
  ]
}
];

let router = new VueRouter({
  'linkActiveClass': 'active',
  routes
});
let app = new Vue({
  router,
}).$mount('#app');
export default app;
