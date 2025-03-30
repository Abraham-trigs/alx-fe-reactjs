import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

/**
 * Fetch GitHub user data based on the provided username.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<object>} - The user's data if found.
 * @throws {Error} - Throws an error if the user is not found or API fails.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data; 
  } catch (error) {
    console.error("API Error:", error.response ? error.response.data : error.message);
    throw new Error("User not found"); 
  }
};
export default fetchUserData;
