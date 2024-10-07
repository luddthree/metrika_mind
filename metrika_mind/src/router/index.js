import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import QuestionPage from '../views/QuestionPage.vue';
import PacientPage from '../views/PacientPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import PacientDetail from '../views/PacientDetail.vue'; // Import the detail page component



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Updated component
  },
  {
    path: '/questions',
    name: 'Questions',
    component: QuestionPage, // Updated component
  },
  {
    path: '/pacients',
    name: 'PacientPage',
    component: PacientPage, // Updated component
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage, // Updated component
  },
  {
    path: '/pacients/:id',
    name: 'PacientDetail',
    component: PacientDetail,
    props: true, // Allows the route to pass the `id` as a prop to the component
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
