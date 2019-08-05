<template>
  <div id="app">
    <p>Api info:</p>
    <ul>
      <li>Docs:
        <a href="https://openweathermap.org/current" target="_blank">https://openweathermap.org/current</a>
      </li>
      <li>Api key:
        <span class="text-primary">c2dcf8ffb5cdc3f8977bfd2ae7ea4738</span>
      </li>
    </ul>
    <h1>App</h1>
    
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-secondary">Kyiv</button>
      <button type="button" class="btn btn-secondary">London</button>
      <button type="button" class="btn btn-secondary">New York</button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">London</th>          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Temperature</th>
          <td>{{ weather[0] }}</td>         
        </tr>
        <tr>
          <th scope="row">Atmospheric pressure</th>
          <td>{{ weather[1] }}</td>         
        </tr>
        <tr>
          <th scope="row">Humidity</th>
          <td>{{ weather[2] }}</td>          
        </tr>
        <tr>
          <th scope="row">Wind speed</th>
          <td>{{ weather[3] }}</td>          
        </tr>
        <tr>
          <th scope="row">Wind direction</th>
          <td>{{ weather[4] }}</td>          
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  },
  mounted() {
    this.$store.dispatch("FetchWeather");
  },
  computed: {
    weather() {
      return this.$store.getters.getWeather;
    },
    temp() {
      return this.$store.getters.getTemp;
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
