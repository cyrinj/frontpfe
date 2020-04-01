import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import AuthStore from './auth.store.js'
import TripperStore from './tripper.store.js'
import AgencyStore from './agency.store.js'
import BloggerStore from './blogger.store.js'

export default new Vuex.Store({
    modules : {
        AuthStore,
        TripperStore,
        AgencyStore,
        BloggerStore
    }
})