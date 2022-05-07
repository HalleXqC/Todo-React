import axios from 'axios'

const baseURL = 'https://todoitacademy.pythonanywhere.com'

const instance = axios.create({ baseURL })

export default instance
