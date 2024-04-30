<template>
  <template v-if="getAllTrackedLocations.length>=0">  
    <template v-for="{datos, id} in getAllTrackedLocations" :key="id">
      
        <h1 class="">
          {{ id }} 
          <i class="pi pi-trash" @click="removeSelectedLocation(id)"></i>
        </h1>
        <div class="container">
              <div class="card">
                  <h3>Right now</h3>
                  <h1>{{ datos.current.temp_f }}ºF</h1>
                  <small>Feels like: {{ datos.current.feelslike_f }}ºF</small>
                  <img :src="datos.current.condition.icon" :alt="datos.current.condition.text">
                  
                  <span>
                      {{ id }}
                  </span>
          
              </div>
              <div class="forecast-container">
                  <template v-for="(day, index) in datos.forecast.forecastday" :key="index" >
                      <div class="forecast">        
                          <div class="card">
                              <h4>{{ getDayOfTheWeek(day.date)}}</h4>
                              <small>{{ day.date }}</small><br>
                              <small>Avg. Temp</small>
                              <h4>
                                  {{ day.day.avgtemp_f }}ºF / {{ day.day.avgtemp_c }}ºC
                              </h4>
                              <small>Avg. Humidity: {{ day.day.avghumidity }}%</small>
                              <img :src="day.day.condition.icon" :alt="day.day.condition.text">   
                              <small>{{ day.day.condition.text }}</small>         
                          </div>        
                      </div>
                  </template>
              </div>
          </div>
    </template>    
  </template>
  
  </template>
  
  <script>
import useWeather from '@/composables/useWeather';


  
  
  export default {
      setup(){
          const {getAllTrackedLocations, getDayOfTheWeek,removeSelectedLocation} = useWeather()
          
          return {
            getAllTrackedLocations,
            getDayOfTheWeek,
            removeSelectedLocation
          }
      }
  }
  </script>
  
  <style scoped>
  .track{
      margin-top:10px ;
  }
      .container{
          display: flex;
          padding: 15px;
          align-items: center;
          overflow: auto;
      }
      .forecast-container{
          display: grid;
          align-items: center;
          grid-template-columns: auto auto auto auto auto auto auto auto;
  
      }
      small {
          font-size: 12px;
      }
      .forecast{
          margin: 15px;
          justify-content: center;
          display: flex;
      }
      
      .forecast .card{            
              padding: 15px;
          }
      .card{        
          display: flex;
          flex-direction: column;
          min-width: 200px;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0px 0px 3px #000;
          align-items: center;
      }
      img{
          width: 100px;
          padding: 10;
      }
      h3,h4{
          margin: 5px 0;
      }
  
  .container::-webkit-scrollbar {
      width: 12px;
      background-color: transparent;
  }
  .container::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #555;
  }
  .container::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: transparent;
  }
  .pi-trash{
    font-size: 1.5rem;
    cursor: pointer;
    color: #000;
    transition: all 0.5s;
  }
  .pi-trash:hover{
    transform: scale(1.2);
    color:red;
    transition: all 0.5s;
    cursor: pointer;
  }
  </style>