import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 导入需要展示的组件
import MianChart from "./views/main-chart/index.vue";
import a from "./views/main-chart/a.vue";
import b from "./views/main-chart/b.vue";


const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/main-chart",
    },
    {
        path: "/main-chart",
        name: "MianChart",
        component: MianChart,
    },
    {
        path: "/",
        name: "Menu",
        redirect: "/main-chart",
        children: [
            {
                path: "/a",
                name: "a",
                component: a
            },
            {
                path: "/b",
                name: "b",
                component: b
            },
        ]
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;