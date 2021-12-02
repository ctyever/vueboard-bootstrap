import { createWebHistory, createRouter } from "vue-router";
import Detail from './components/Detail'
import Home from './components/Home'
import List from './components/List'
import PostRegister from './components/PostRegister'
import PostItemEditForm from './components/PostItemEditForm'


const routes = [  
  {
    path: "/detail/:id(\\d+)",
    component: Detail,    
  },
  {
    path: "/list",
    component: List,    
  },
  {
    path: "/register",
    component: PostRegister,    
  },  
  {
    path: "/",
    component: Home,
  },
  {
    path: "/edit/:id(\\d+)",
    component: PostItemEditForm,
  }  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 