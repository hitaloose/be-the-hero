import axios from 'axios'

const api = axios.create({
  baseURL: 'https://hitaloose-be-the-hero.herokuapp.com/'
})

export default api