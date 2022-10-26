import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/pages/auth/Login.vue";
import Register from "../views/pages/auth/Register.vue";
import NotFound from "../views/pages/NotFound.vue";
import Customer from "@/components/customer/data-table.vue";
import Employee from "@/components/employee/data-table.vue";
import  Delivery from "@/components/delivery/data-table.vue";
import  Admin from "@/components/admin/data-table.vue";
import Driver from "@/components/driver/data-table.vue";

import Commission from "@/components/commission/data-table.vue";
import  Remuneration from "@/components/remuneration/data-table.vue";
import  Supplier from "@/components/supplier/data-table.vue";
import ProductSold from "@/components/productSold/data-table.vue";
import  FoodItem from "@/components/foodItem/data-table.vue";
import FoodType from "@/components/foodType/data-table.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
   
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
   
  },
 
  {
    path: "/customer",
    name: "Customer ",
    component: Customer ,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  {
    path: "/driver",
    name: "Driver ",
    component: Driver ,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  {
    path: "/delivery",
    name: "Delivery",
    component: Delivery ,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  {
    path: "/employee",
    name: "Employee",
    component: Employee,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
 
  {
    path: "/login",
    name: "login",
    component: Login,
  },
 
   {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/commission",
    name: "commission",
    component: Commission,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
 
   {
    path: "/remuneration",
    name: "remuneration",
    component: Remuneration,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  ,
  {
    path: "/supplier",
    name: "supplier",
    component: Supplier,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
 
   {
    path: "/product-sold",
    name: "product-sold",
    component: ProductSold,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  {
    path: "/food-type",
    name: "food-type",
    component: FoodType,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  {
    path: "/food-item",
    name: "food-item",
    component: FoodItem,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
  
   {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta:{needAuth:true},
    beforeEnter: ifAuthenticated
  },
]

const router = new VueRouter({
  mode: 'history',
  hash: false,
  base: process.env.BASE_URL,
  routes
})
function ifAuthenticated  (to, from, next)  {  
  if (localStorage.getItem("token")) { console.log("login done");
   next(); 
   return;
 }
  router.push({  name: 'login' });
}

export default router
