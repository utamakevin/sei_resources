const axios = require('axios')

axios.get('https://api.ipify.org?format=json')
.then(res => res.data.ip)
.then(res => axios.get(`https://ipapi.co/${res}/json/`))
.then(res => {
    console.log(res.data.city + '/' + res.data.country_name)
    return res.data.city + ', ' + res.data.country_name
})
.then(res => axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${res}&key=3ce0c825961443ca8a3a07f5f39a4e10&language=en`))
.then(res => {
    let lat = res.data.results[0].geometry.lat
    let lon = res.data.results[0].geometry.lng
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=747167a17967665090418a95009bdd53`)
})
.then(res => console.log('Current Temperature: ' + res.data.main.temp + ' degree Celcius'))