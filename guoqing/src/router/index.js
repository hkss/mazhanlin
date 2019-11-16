import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/pages/login.vue'
import index from '../components/pages/index.vue'
import home from '../components/pages/home.vue'
import banner from '../components/pages/banner.vue'



import communi from '../components/pages/communi.vue'
import updatepass from '../components/pages/updatepass.vue'

import family from '../components/pages/family.vue'
import fambanner from '../components/pages/fambanner.vue'
import famranking from '../components/pages/famranking.vue'
import famtype from '../components/pages/famtype.vue'

import backwater from '../components/pages/backwater.vue'
import water from '../components/pages/water.vue'
import water_manage from '../components/pages/water_manage.vue'
import main from '../components/pages/main.vue'
import main_con from "../components/pages/main_con.vue"
import maintain from "../components/pages/maintain.vue"





Vue.use(Router)

export default new Router({

  mode:'history',
  routes: [{
      path: '/',
      component: login
    },
    {
      path: '/index',
      component: index,



      children: [

        {
          path: "banner",
          component: banner
        },
        {
          path: "family",
          component: family,
          children: [{
              path: "fambanner",
              component: fambanner,
            },
            {
              path: "famranking",
              component: famranking,
            },
            {
              path: "famtype",
              component: famtype,
            },
            {
              path: "",
              redirect: "/index/family/fambanner"
            }

          ]
        },


        {
          path: "backwater",
          component: backwater,
          children: [{

              path: 'water',
              component: water
            },
            {

              path: 'water_manage',
              component: water_manage
            },
            {
              path: '',
              redirect: "/index/backwater/water"
            }
          ]
        },
        {
          path: "main",
          component: main,
          children: [

            {
              path: 'main_con',
              component: main_con
            }, {
              path: 'maintain',
              component: maintain
            },
            {path:'',
            redirect:'maintain'
          }
          ]
        },
        {
          path: "communi",
          component: communi
        },
        {
          path: "updatepass",
          component: updatepass
        },
        {
          path: 'home',
          component: home
        },
        {
          path: '',
          component: home
        }
      ]
    },
    {
      path: "*",
      redirect: '/login'
    }

  ]
})
