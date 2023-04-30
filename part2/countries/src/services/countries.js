import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1/";
const api_key = process.env.REACT_APP_API_KEY

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) => response.data);
};

const getWeather = (city) => {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
  return request.then((response) => response.data);
};

const countriesService = {
  getAll,
  getWeather
};

export default countriesService;
