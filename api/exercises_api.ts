import axios from "axios";

export const Axios = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'faff0673damsh88f489f709b4454p1024adjsn2c9cfed966f0',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
  params: { limit: 100000 }
});