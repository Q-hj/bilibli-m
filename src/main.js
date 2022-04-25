import { createApp } from "vue";
import App from "./App.vue";

// 引入并使用插件
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// windi.css;
import "virtual:windi.css";
// 相当于下面三行
// import "virtual:windi-base.css";
// import "virtual:windi-components.css";
// import "virtual:windi-utilities.css";

// 引入路由
import router from "@/router/index";

import "./style/include.less";

createApp(App).use(createPinia()).use(ElementPlus).use(router).mount("#app");
