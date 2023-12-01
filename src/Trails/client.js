import axios from "axios";
const TrailAPI_API = "https://trailapi-trailapi.p.rapidapi.com";
const API_KEY = "d102ce3527mshc4b1f040aa83cb1p137adbjsn3f7e380a5e93";

//Add for radius, and id later

export const findTrails = async (searchLatitude, searchLongitude) => {
    
    const options = {
      method: 'GET',
      url: TrailAPI_API + '/trails/explore/',
      params: {
        lat: searchLatitude.toString(),
        lon: searchLongitude.toString()
      },
      headers: { //replace later
        'X-RapidAPI-Key': 'd102ce3527mshc4b1f040aa83cb1p137adbjsn3f7e380a5e93',
        'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    console.log(response.data);

    return response.data;
}