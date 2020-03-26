import { loginService, getInfo,resetpasswordService, refresh, changepassword_inService, logoutService } from '@/api/auth.service.js'

export default {
    state: {
        user: {}
    },
    getters: {
        getCurrentUser(state) {
            return state.user
        }
    },
    mutations: {
        setCurrentUser(state, user) {
            state.user = user
        }
    }, 
    actions: {
        async updateCurrentUser(context, user) {
            // let nuser = await connection(user)
            context.commit('setCurrentUser', nuser)
        },

        
        async resetpassword(context, user) {
            let userq = await resetpasswordService(user)
            context.commit('setCurrentUser', userq)
        },

        async login(context, user) {
            let obj = await loginService(user)
            context.commit('setCurrentUser', obj.userq)
            return obj.msg
        },

        async logout(context, user) {
            await logoutService(user)
            context.commit('setCurrentUser', null)
        },
        async changepassword_in(context, pwd) {
           let newur =  await changepassword_inService(pwd)
            context.commit('SetCurrentUser', newur)
            // console.log("afff",usernew)
            // getCurrentUser.password=user.password

        },

    
        async refresh(context) {
          let token = await refresh();
          console.log('test toekn', token)
          let user = await getInfo(token);
          context.commit("setCurrentUser", user);
          return user;
        },
       
    }
}