import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://testbusiness.amidev.bi/api',
})

export default instance
