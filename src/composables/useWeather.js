import weatherApi from "@/assets/api/weatherApi"
import { computed, ref } from "vue"
import { useStore } from "vuex"


const useWeather = ()=>{    
    const store = useStore()

    const weatherData = ref(null)
    const isLoading = ref(false)
    const showBanner = ref(false)
    const errorMsg = ref('')

    const getWeatherByLocation = async (location)=>{
        if(location.length <= 0) return //prevent user from sending empty string

        try {        
            const { data } = await weatherApi.get('', {
                                params:{
                                q: location,
                                aqi: 'no',
                                days: 7,
                                }
                            })
            weatherData.value = data
            errorMsg.value = ''
        } catch (error) {   
            errorMsg.value = "Ups!! Something bad happened. Try again later."   
        }
    }
    
    const getDayOfTheWeek= (date)=>{
        const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        const d = new Date(date);
        let day = weekday[d.getDay()];
        return day
    }
    
    const trackThisCountry = (data)=>{      
        const datos = {
          id: data.location.name,
          data:data
        }
        store.commit('storeInCountryTracker', datos)
     }
    
     const removeSelectedLocation = (id)=>{          
         store.commit('removeSelectedLocation', id)
      }

    return{
        getWeatherByLocation,
        isLoading,
        showBanner,
        weatherData,
        errorMsg,    
        getDayOfTheWeek,    
        trackThisCountry,
        removeSelectedLocation,
        getAllTrackedLocations: computed(()=> store.getters['getTrackedLocations']), 
      }
}

export default useWeather