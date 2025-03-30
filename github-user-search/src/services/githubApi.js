import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com/users/';
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
    try {
        const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};
        const response = await axios.get(`${GITHUB_API_BASE_URL}${username}`, { headers });
        return response.data;
    } catch (error) {
        console.error("Error fetching GitHub user:", error);
        return null;
    }
};
 export default fetchGitHubUser ;
