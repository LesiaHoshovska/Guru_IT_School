import Vue from "vue";
import VueRouter from "vue-router";

import AddProduct from "@/pages/AddProduct";
import EditProduct from "@/pages/EditProduct";
import Home from "@/pages/Home";
import ProductsList from "@/pages/ProductsList";

Vue.use(VueRouter);

const routes = [{path: "/", component: Home}, {path: "/add/:product_id?", name: 'add', component: AddProduct}, {path: "/edit/:product_id?", name: 'edit', component: EditProduct}, {path: "/productsList", component: ProductsList}];


const router = new VueRouter({
    mode: "history", routes,
})

export default router 