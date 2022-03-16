import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': 'c4880e6816msh72c0f1da6b045a3p1d2cdcjsnce667af61f88'
  },
  });
    
  return data;
}
  
