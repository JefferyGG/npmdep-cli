import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 导入需要展示的组件
import MianChart from "./views/main-chart/index.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/main-chart",
    },
    {
        path: "/main-chart",
        name: "MianChart",
        component: MianChart,
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;