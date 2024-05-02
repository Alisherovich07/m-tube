import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50', 
  },
  headers: {
    'X-RapidAPI-Key': 'f848aa3c4dmsha6785bb421f0b92p17accejsn25bde375fbd5',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
}



export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response.data
    },
}