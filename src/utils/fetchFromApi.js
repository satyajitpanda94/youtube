import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  params: {
    part: 'snippet',
    maxResults: '40',
  },
  headers: {
    'X-RapidAPI-Key': '5139b48a7cmsh0cf20729b66b12fp144bdbjsn553f3fea286c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data;
}
