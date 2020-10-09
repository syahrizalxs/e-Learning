import Vue from 'vue'
import VueRouter from 'vue-router'

const DefaultContainer = () => import(/* webpackChunkName: "BaseContainer" */'../Layout/DefaultContainer.vue')
const Login = () => import(/* webpackChunkName: "Login" */'../pages/Login.vue')
const MataPelajaran = () => import(/* webpackChunkName: "MataPelajaran" */'../pages/MataPelajaran.vue')
const Profile = () => import(/* webpackChunkName: "Profile" */'../pages/Profile.vue')

const MasterMataPelajaran = () => import(/* webpackChunkName: "MasterMapel" */'../pages/master/mata-pelajaran.vue')
const MasterMurid = () => import(/* webpackChunkName: "MasterMurid" */'../pages/master/murid.vue')
const MasterGuru = () => import(/* webpackChunkName: "MasterMurid" */'../pages/master/guru.vue')

const KelasSaya = () => import(/* webpackChunkName: "KelasSaya" */'../pages/guru/kelas/kelas-saya.vue')
const KelasSayaAdd = () => import(/* webpackChunkName: "KelasSaya" */'../pages/guru/kelas/kelas-saya-add.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/mata-pelajaran',
      component: DefaultContainer,
      children: [
        {
          path: '/mata-pelajaran',
          name: 'MataPelajaran',
          component: MataPelajaran
        },
        {
          path: '/profile/:id',
          name: 'Profile',
          component: Profile
        },
        {
          path: 'master-mata-pelajaran',
          name: 'Master Mata Pelajaran',
          component: MasterMataPelajaran
        },
        {
          path: 'guru/kelas-saya',
          name: 'Kelas Saya',
          component: KelasSaya
        },
        {
          path: 'guru/kelas-saya/add',
          name: 'Kelas Saya',
          component: KelasSayaAdd
        },
        {
          path: 'master-murid',
          name: 'Master Murid',
          component: MasterMurid
        },
        {
          path: 'master-guru',
          name: 'Master Guru',
          component: MasterGuru
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      meta: {
        public: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log({ next, to, from })
  let token = {}
  token = JSON.parse(localStorage.getItem('userInfo')!)
  const isLoggedin = !!token
  const isPublic = to.matched.some(record => record.meta.public)
  if (!isPublic && !isLoggedin) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
