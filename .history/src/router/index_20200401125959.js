import Vue from 'vue'
import Router from 'vue-router'
import dashboardtriper from '@/components/users/dashboardtriper'
import dashboardadmin from '@/components/users/dashboardadmin'
import notification from '@/components/triper/notification'

import formtrip from '@/components/triper/formtrip'
import editprofil from '@/components/triper/editprofil'
import updatetrip from '@/components/triper/updatetrip'
import changepassword_in from '@/components/triper/changepassword_in'
import footer from '@/components/shared/footer/footer'
import header from '@/components/shared/header/header'
import formactivity from '@/components/triper/formactivity'
import model from '@/components/triper/model'
import grid from '@/components/triper/grid'
import chat from '@/components/triper/chat'
import wallet from '@/components/triper/wallet'

import login from '@/components/module_authentification/login'
import inscription from '@/components/module_authentification/inscription'
import etape1 from '@/components/module_authentification/forgotpassword/etape1'
import etape2 from '@/components/module_authentification/forgotpassword/etape2'
import etape3 from '@/components/module_authentification/forgotpassword/etape3'
import testbloguer from '@/components/test/testbloguer'
import information from '@/components/test/information'

import status from '@/components/triper/status'

import seealltrip from '@/components/blogger/seealltrip'
import demande_agency from '@/components/blogger/demande_agency'
import status_demande from '@/components/blogger/status_demande'

//const Hello = () => import('@/components/Hello.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: inscription
    },
    {
      path: '/etape1',
      name: 'etape1',
      component: etape1
    },
    {
      path: '/etape2',
      name: 'etape2',
      component: etape2
    },
    {
      path: '/etape3',
      name: 'etape3',
      component: etape3
    },
    {
      path: '/dashboardadmin',
      name: 'dashboardadmin',
      component: dashboardadmin,
    }, 
    {
      path: '/dashboardtriper',
      name: 'dashboardtriper',
      component: dashboardtriper,
      redirect:'/model',
      children:[
        {
          path: "/formtrip",
          name: "formtrip",
          component: formtrip
        },
        {
          path: "/header",
          name: "header",
          component: header
        },
        {
          path: "/notification",
          name: "notification",
          component:notification
        },
        {
          path: "/footer",
          name: "footer",
          component: footer
        },

        {
          path: "/formactivity",
          name: "formactivity",
          component: formactivity
        },
        {
          path: "/editprofil",
          name: "editprofil",
          component: editprofil
        },
        {
          path: "/seealltrip",
          name: "seealltrip",
          component: seealltrip
        },
        {
          path: "/demande_agency",
          name: "demande_agency",
          component: demande_agency,
          props: true
        },
        {
          path: "/status_demande",
          name: "status_demande",
          component: status_demande,
         
        },
        {
          path: "/wallet",
          name: "wallet",
          component: wallet
        },
        {
          path: "/updatetrip",
          name: "updatetrip",
          component: updatetrip,
          props: true
        },
        {
          path: "/grid",
          name: "grid",
          component: grid,
          props: true
        },
        {
          path: "/model",
          name: "model",
          component: model
        },
        {
          path: "/chat",
          name: "chat",
          component: chat
        },
        {
          path: "/changepassword_in",
          name: "changepassword_in",
          component: changepassword_in
        },

        {
          path: "/status",
          name: "status",
          component: status
        },

        
        
      /*  {
          path: "/wallet",
          name: "wallet",
          component: wallet
        },*/
        {
          path: "/testbloguer",
          name: "testbloguer",
          component: testbloguer,
          children:[
            {
              path: '/information',
              name: 'information',
              component: information
            },
           ],
        },
      ]
    },
  
  ]
})
