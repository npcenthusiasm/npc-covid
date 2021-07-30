<template>
  <div>
    <button class="m-16" @click="getCovidCountry">get getCovidCountry 全部縣市</button>
    <button class="m-16" @click="getCovidVaccine">get getCovidVaccine 各縣市疫苗接種率</button>
    <h1>test heroku</h1>
    <h2>hello heroku</h2>
  </div>
</template>

<script>
// import axios from 'axios'
// import res from '../api/Covid.json'
export default {
  methods: {
    async getCovidCountry () {
      try {
        const limited = '全部縣市'
        // const limited = '台中市'
        const res = await this.$axios.$get(` https://covid-nuxt-project.herokuapp.com/api/covidCountry?limited=${limited}`)
        console.log('res: ', res);
      } catch (error) {
        console.log('error: ', error)
      }
      // const api = ''
    },
    async getCovidVaccine () {
            try {
        const res = await this.$axios.$get(' https://covid-nuxt-project.herokuapp.com/api/covidVaccine')
        console.log('res: ', res);
      } catch (error) {
        console.log('error: ', error)
      }
    }
  }
}
</script>

<style>
button{
  border: 3px solid black;
}
</style>