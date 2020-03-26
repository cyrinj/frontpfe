import { tripstatusService, tripdeleteService, tripupdateService, tripsuggestService, editprofilService, changepassword_inService } from '@/api/tripper.service.js'
//import {   getCurrentUser} from   './store/auth.store.js'
export default {
    state: {
        trips: [],
        selectTrip: {}
    },
    getters: {
        getCurrenttrips(state) {
            return state.trips
        },

        getSelectTrip(state) {
            return state.selectTrip
        }
    },
    mutations: {
        setCurrenttrips(state, trips) {
            state.trips = trips
        },

        AddTrip(state, trip) {
            state.trips.push(trip)
        },

        setCurrenttripsUpdate(state, form) {
            console.log("afficher", state.trips[0])
            for (var i = 0; i < state.trips.length; i++) {
                if (state.trips[i]._id == form._id) {
                    state.trips[i] = form
                    return 
                }
            }

            console.log("hettt", state.trips[i])
        },



    },
    actions: {

        async editprofil(context, user) {
            let usernew = await editprofilService(user)
            // console.log("afff",usernew)
            context.commit('setCurrentUser', usernew)
        },
        /*  async updateCurrenttrips(context, trips) {
               // let nuser = await connection(user)
               context.commit('setCurrentUser', trips)
           },*/

        async tripstatus(context) {
            let tripsnew = await tripstatusService()
            context.commit('setCurrenttrips', tripsnew)
            return tripsnew
        },

        async tripdelete(context, item) {
            //  console.log("111",item)
            await tripdeleteService(item)
            for (var i = 0; i < this.getters.getCurrenttrips.data.data.length; i++) {
                if (this.getters.getCurrenttrips.data.data[i]._id == item._id) {
                    this.getters.getCurrenttrips.data.data.splice(i, 1);
                    break
                }


            }
            let tripsnew = this.getters.getCurrenttrips.data.data
            context.commit('setCurrenttrips', tripsnew)

        },
        async tripupdate(context, form) {
            //  console.log("111",item)
            await tripupdateService(form)
            context.commit('setCurrenttripsUpdate', form)

        },

        async tripsuggest(context, form) {
            //  console.log("111",item)
            let tripNew = await tripsuggestService(form)
            context.commit('AddTrip', tripNew)

        },


    }
}