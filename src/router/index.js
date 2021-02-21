import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import Restaurant from "../views/Restaurant.vue"
import SerialNumber from "../views/SerialNumber.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/restaurant",
        name: "Restaurant",
        component: Restaurant,
    },
    {
        path: "/serial-number",
        name: "SerialNumber",
        component: SerialNumber,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;