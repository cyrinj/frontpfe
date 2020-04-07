import { reservationupdateService,reservationdeleteService,sendReservationService, tripsacceptedService , reservationstatusService } from '@/api/blogger.service.js'
//import {   getCurrentUser} from   './store/auth.store.js'
export default {
    state: {
        trips : [],
        reservations: [],
        selectReservation: {}
    },
    getters: {
        getCurrentdemandes(state) {
            return state.reservations
        },

        getSelectdemande(state) {
            return state.selectReservation
        }
    },
    mutations: {
        setCurrenttrips(state, trips) {
            state.trips = trips
        },
        setCurrentreservation(state, reservations) {
            state.reservations = reservations
        },

        AddReservation(state,reservation) {
            state.reservations.push(reservation)
        },

        setCurrenttripsdelete(state, reservation_id) {
            // console.log("afficher", state.trips[0])
            for (var i = 0; i <state.reservations.length; i++) {
                if (state.reservations[i]._id == reservation_id) {
                   state.reservations.splice(i, 1);
                    break
                }
 
            }
         },

         setCurrentreservationsUpdate(state, reservation) {
            // console.log("afficher", state.trips[0])
             for (var i = 0; i < state.reservations.length; i++) {
                 if (state.reservations[i]._id == reservation._id) {
                     state.reservations[i] = reservation
                     return 
                 }
             }
         },
    },
    actions: {

        async tripsaccepted(context) {
            let tripsnew = await tripsacceptedService()
            context.commit('setCurrenttrips', tripsnew)
            return tripsnew
        },

        async reservationsuggest(context, reservation) {
            let reservationNew = await sendReservationService(reservation)
            context.commit('AddReservation', reservationNew)

        },

        async reservationstatus(context,user) {
            let reservationsnew = await reservationstatusService(user)
            context.commit('setCurrentreservation', reservationsnew)
            return reservationsnew
        },

        async reservationdelete(context, item) {
             console.log("111",item)
           await reservationdeleteService(item)
            //console.log("hey",item._id)
            //let tripsnew = this.getters.getCurrenttrips.data.data
            context.commit('setCurrentresarvationsdelete', item._id)

        },

        async reservationupdate(context, reservation) {
            //  console.log("111",item)
            await reservationupdateService(reservation)
            context.commit('setCurrenttripsUpdate', reservation)

        },



    }
}