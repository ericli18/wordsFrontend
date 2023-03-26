import axios from "axios";
const baseUrl = 'http://localhost:3000/words';

const getAll = () => {
    const persons = axios.get(baseUrl)
    return persons.then(response => response.data)
}
  
const create = newObject => {
    const person = axios.post("http://localhost:3001/api/words", newObject)
    return person.then(response => response.data)
}

const remove = id => {
    const person = axios.delete(`${baseUrl}/${id}`);
    return person.then(response => response.data);
}

const update = (id, newObject) => {
    const person = axios.put(`${baseUrl}/${id}`, newObject);
    return person.then(response => response.data);
}

export default {getAll, create, remove, update}