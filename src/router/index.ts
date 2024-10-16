import { createRouter as createVueRouter, createWebHashHistory, Router } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Test from "../views/Test.vue";
import { createAuthGuard } from "@auth0/auth0-vue";
import { App } from 'vue';
import QuestionPage from '../views/QuestionPage.vue';
import PacientPage from '../views/PacientPage.vue';
import PacientDetail from '../views/PacientDetail.vue'; // Import the detail page component
import CreatePacient from '../views/CreatePacient.vue'; 

export function createRouter(app: App): Router {
  return createVueRouter({
    routes: [
      {
        path: "/",
        name: "home",
        component: Home,
        beforeEnter: createAuthGuard(app)

      },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
        beforeEnter: createAuthGuard(app)
      },
      {
        path: "/Test",
        name: "Test",
        component: Test,
        beforeEnter: createAuthGuard(app)
      },
      {
        path: '/questions',
        name: 'Questions',
        component: QuestionPage, // Updated component
        beforeEnter: createAuthGuard(app)
      },
      {
        path: '/pacients',
        name: 'PacientPage',
        component: PacientPage, // Updated component
        beforeEnter: createAuthGuard(app)
      },
      {
        path: '/pacients/:id',
        name: 'PacientDetail',
        component: PacientDetail,
        props: true, // Allows the route to pass the `id` as a prop to the component
        beforeEnter: createAuthGuard(app)
      },
      {
        path: '/create',
        name: 'CreatePacient',
        component: CreatePacient,
        props: true, // Allows the route to pass the `id` as a prop to the component
        beforeEnter: createAuthGuard(app)
      },
    ],
    
    
    history: createWebHashHistory()
  })
}
