import { demandedeleteService,demandeupdateService, sendDemandeService, tripsproposésService , demandestatusService } from '@/api/agency.service.js'
//import {   getCurrentUser} from   './store/auth.store.js'
export default {
    state: {
        trips : [],
        demandes: [],
        selectDemande: {}
    },
    getters: {
        getCurrentdemandes(state) {
            return state.demandes
        },

        getSelectdemande(state) {
            return state.selectDemande
        }
    },
    mutations: {
        setCurrenttrips(state, trips) {
            state.trips = trips
        },
        setCurrentdemandes(state, demandes) {
            state.demandes = demandes
        },

        AddDemande(state,demande) {
            state.demandes.push(demande)
        },

        setCurrentdemandesUpdate(state, demande) {
            // console.log("afficher", state.trips[0])
             for (var i = 0; i < state.demandes.length; i++) {
                 if (state.demandes[i]._id == demande._id) {
                     state.demandes[i] = demande
                     return 
                 }
             }
         },

         setCurrentdemandesUpdate(state, reservation) {
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

        async tripsproposés(context) {
            let tripsnew = await tripsproposésService()
            context.commit('setCurrenttrips', tripsnew)
            return tripsnew
        },

        async demandesuggest(context, demande) {
            //  console.log("111",item)
            let demandeNew = await sendDemandeService(demande)
            context.commit('AddDemande', demandeNew)

        },

        async demandestatus(context,agency) {
            let demandesnew = await demandestatusService(agency)
            context.commit('setCurrentdemandes', demandesnew)
            return demandesnew
        },

        async demandeupdate(context, demande) {
            //  console.log("111",item)
            await demandeupdateService(demande)
            context.commit('setCurrentdemandesUpdate', demande)

        },

        async demandedelete(context, item) {
            console.log("111",item)
          await demandedeleteService(item)
           //console.log("hey",item._id)
           //let tripsnew = this.getters.getCurrenttrips.data.data
           context.commit('setCurrentdemandesdelete', item._id)

       },



    }
}