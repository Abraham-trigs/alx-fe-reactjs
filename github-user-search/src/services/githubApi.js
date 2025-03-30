import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    let query = `${username ? `${username}+in:login` : ""}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}${query}&page=${page}&per_page=5`);
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching users. Try again later.");
  }
};
export default fetchUserData;
