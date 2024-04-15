import { createRouter, createWebHistory } from 'vue-router'
const UserManage = () => import('../views/userManage/index.vue')
const TeamManage = () => import('../views/teamManage/index.vue')
const Profession = () => import('../views/profession/index.vue')
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/usermanage' },
    { path: '/usermanage', component: UserManage },
    { path: '/teammanage', component: TeamManage },
    { path: '/profession', component: Profession }
  ]
})

export default router
