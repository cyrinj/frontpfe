import { tripsdraftsService, tripstatusService, tripdeleteService, tripupdateService, tripsuggestService, editprofilService, changepassword_inService } from '@/api/tripper.service.js'
//import {   getCurrentUser} from   './store/auth.store.js'
export default {
    state: {
        trips: [],
        drafts:[],
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

        setCurrentdrafttrips(state, drafts) {
            state.drafts = drafts
        },

        AddTrip(state, trip) {
            state.trips.push(trip)
        },

        AddDraftTrip(state, drafttrip) {
            state.drafts.push(drafttrip)
        },

        
        setCurrenttripsUpdate(state, form) {
           // console.log("afficher", state.trips[0])
            for (var i = 0; i < state.trips.length; i++) {
                if (state.trips[i]._id == form._id) {
                    state.trips[i] = form
                    return 
                }
            }

            console.log("hettt", state.trips[i])
        },
        setCurrenttripsdraftUpdate(state, form) {
            // console.log("afficher", state.trips[0])
             for (var i = 0; i < state.drafts.length; i++) {
                 if (state.drafts[i]._id == form._id) {
                     state.drafts[i] = form
                     return 
                 }
             }
 
             console.log("hettt", state.drafts[i])
         },

        setCurrenttripsdelete(state, trip_id) {
            // console.log("afficher", state.trips[0])
            for (var i = 0; i <state.trips.length; i++) {
                if (state.trips[i]._id == trip_id) {
                   state.trips.splice(i, 1);
                    break
                }
 
            }
         },

         setCurrenttripsdraftdelete(state, draft_id) {
            // console.log("afficher", state.trips[0])
            for (var i = 0; i <state.drafts.length; i++) {
                if (state.drafts[i]._id == draft_id) {
                   state.drafts.splice(i, 1);
                    break
                }
 
            }
         },



    },
    actions: {

        async editprofil(context, {user, selectedFile} ) {
            console.log('ddddt',selectedFile)
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

        async tripsdrafts(context) {
            let tripdraftsnew = await tripsdraftsService()
            context.commit('setCurrentdrafttrips', tripdraftsnew)
            return tripdraftsnew
        },


        async tripdelete(context, item) {
            //  console.log("111",this.getters.getCurrenttrips)
           await tripdeleteService(item)
            //console.log("hey",item._id)
            //let tripsnew = this.getters.getCurrenttrips.data.data
            context.commit('setCurrenttripsdelete', item._id)

        },

        async tripdraftdelete(context, item) {
            //  console.log("111",this.getters.getCurrenttrips)
            await tripdeleteService(item)
           // console.log("hey",item._id)
            //let tripsnew = this.getters.getCurrenttrips.data.data
            context.commit('setCurrenttripsdraftdelete', item._id)

        },
        async tripupdate(context, form) {
            //  console.log("111",item)
            await tripupdateService(form)
            context.commit('setCurrenttripsUpdate', form)

        },

        async draftupdate(context, form) {
            //  console.log("111",item)
            await tripupdateService(form)
            context.commit('setCurrenttripsdraftUpdate', form)

        },

        async tripsuggest(context, form) {
            //  console.log("111",item)
            let tripNew = await tripsuggestService(form)
            context.commit('AddTrip', tripNew)
         },

         async tripdraftsuggest(context, form) {
            //  console.log("111",item)
            let tripdraftNew = await tripsuggestService(form)
            context.commit('AddDraftTrip', tripdraftNew)

        },



    }
}