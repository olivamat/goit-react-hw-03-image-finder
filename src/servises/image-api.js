import axios from "axios";

const BASE_URL =
  "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=";
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
const KEY = "12605627-9f0f5d76a624f2feb022f83bd";
export const fetchImages = (query, page) =>
  axios.get(`${BASE_URL}${query}&page=${page}&per_page=12&key=${KEY}`);
export const dummy = () => null;
