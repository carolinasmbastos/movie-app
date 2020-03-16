import axios from "axios";
import { APP_KEY, BASE_URL } from "../config/api-config";

export const search = searchParams => {
  console.log("searching", searchParams);

  let url =
    `${BASE_URL}/search/${searchParams.type}?` +
    `api_key=${APP_KEY}` +
    `&language=en-US` +
    `&query=${searchParams.query}` +
    `&page=1` +
    `&include_adult=false`;

  console.log("url", url);
  return axios.get(url);
};

export const filter = async (mediaType, category) => {
  console.log("filtering", mediaType, category);
  
  let url =
    `${BASE_URL}/${mediaType}/${category}?` +
    `api_key=${APP_KEY}` +
    `&language=en-US` +
    `&page=1`;

  console.log("url", url);
  return axios.get(url);
};
