<template>
  <div class="home">
    <SearchBar @search-location="getWeatherByLocation" />
  </div>

  <div v-if="errorMsg">
    {{ errorMsg }}
  </div>  

  <template v-if="weatherData">
    <div v-if="!errorMsg && weatherData.length === 0">
        No results found
    </div>
  </template>

  
    <WeatherBanner v-if="weatherData" :datos="weatherData" @track-country="trackThisCountry"/>

</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue';
import WeatherBanner from '@/components/WeatherBanner.vue';
import useWeather from '@/composables/useWeather';

export default {
  name: 'firstStyle',
  components: {
    SearchBar,
    WeatherBanner,
  },
  setup(){


     const {getWeatherByLocation,weatherData, errorMsg,trackThisCountry} = useWeather();  

     return{
      getWeatherByLocation,
      weatherData,
      errorMsg,
      trackThisCountry,
    }

  }
}
</script>
