import axios from "axios";
const baseUrl = "http://localhost:3001/api/words";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const getOne = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};

const create = async (newObject) => {
    const response = await axios.post(baseUrl, newObject);
    return response.data;
};

const remove = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
};

const update = async (word) => {
    const response = axios.put(`${baseUrl}/${word.id}`, word);
    return response.data;
};

export default { getAll, create, remove, update, setToken, getOne };
