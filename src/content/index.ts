import App from './App.vue';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { uuid } from '../utils'

const div = document.createElement('div');
const id = 'chrome_plugin_content_slot_' + uuid();
div.setAttribute("id", id);
document.body.appendChild(div);
const app = createApp(App);
app.use(ElementPlus);
app.mount(div);
