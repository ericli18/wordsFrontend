import axios from "axios";
const baseUrl = "http://localhost:3001/api/login";

const login = async (creds) => {
  const response = await axios.post(baseUrl, creds);
  return response.data
}

export default { login }