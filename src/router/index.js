import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/pages/Home.vue";
import Login from "../views/pages/auth/Login.vue";
import Register from "../views/pages/auth/Register.vue";
import NotFound from "../views/pages/NotFound.vue";
import Customer from "@/components/customer/data-table.vue";
import Employee from "@/components/employee/data-table.vue";
import  Admin from "@/components/admin/data-table.vue";





Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
   
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
   
  },
 
  
  {
    path: "/customer",
    name: "Customer ",
    component: Customer ,
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
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
   
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
