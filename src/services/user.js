import axios from "axios";
const baseUrl = "http://localhost:3001/api/users";

const getUser = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
}

const getWords = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data.words;
};

const update = async (id, newUser) => {
  const response = axios.put(`${baseUrl}/${id}`, newUser);
  return response.data;
};

export default { getUser, getWords, update };
