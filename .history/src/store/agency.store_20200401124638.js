import { sendDemandeService, tripsproposésService , demandestatusService } from '@/api/agency.service.js'
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

        async demandestatus(context) {
            let demandesnew = await demandestatusService()
            context.commit('setCurrentdemandes', demandesnew)
            return tripsnew
        },


    }
}