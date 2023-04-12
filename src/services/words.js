import axios from "axios";
const baseUrl = 'api/words';

const getAll = () => {
    const persons = axios.get(baseUrl)
    return persons.then(response => response.data)
}
  
const create = newObject => {
    const person = axios.post(baseUrl, newObject)
    return person.then(response => response.data)
}

const remove = id => {
    const person = axios.delete(`${baseUrl}/${id}`);
    return person.then(response => response.data);
}

const update = (id, date) => {
    const person = axios.put(`${baseUrl}/${id}`, date);
    return person.then(response => response.data);
}

export default {getAll, create, remove, update}