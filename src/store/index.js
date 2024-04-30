import { createStore } from 'vuex'

export default createStore({
  state: {
    trackedWeather: []
  },
  getters: {
    getTrackedLocations: (state)=>{
      return [...state.trackedWeather]
    }
  },
  mutations: {
    storeInCountryTracker: (state, data)=>{
      const findLocation = state.trackedWeather.find(item => item.id === data.id);

      if (!findLocation) {        
        console.log(`Adding ${data.id} to store`);
        state.trackedWeather.push({ 
          id: data.id,
          datos: data.data
        })
        return true        
      } 
      console.log(`${data.id} already exists in store`);     
    },
    removeSelectedLocation: (state, id)=>{
      const findLocation = state.trackedWeather.filter(item => item.id != id);
      state.trackedWeather = findLocation;
    }
  },
  actions: {
  },
  modules: {
  }
})
