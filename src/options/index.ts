import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

import "element-plus/theme-chalk/src/index.scss";
import "@luchao/base-sass";

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');

// options 页 进入方式
// 右键插件图标 -> 选项 -> 进入options/index.html