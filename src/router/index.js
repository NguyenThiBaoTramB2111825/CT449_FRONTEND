import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    //import.meta.env: chứa biến môi trường cho ứng dụng
    // env.BASE_URL trả về URL cơ sở trên máy chủ web
    routes,
});
export default router;