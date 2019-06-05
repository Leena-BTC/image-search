import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 096a0119fe46284014c97fd1d86d6d3bd275d59bb2c9d3f7b64256082e5cd642'
      }
})