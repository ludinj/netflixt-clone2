import axios from "axios";
//Get Popular Movies

export const fetchMoviesByURL = async (url) => {
  try {
    const response = await axios.get(url);
    const results = response.data.results;
    return results;
  } catch (error) {
    console.log(error);
  }
};
