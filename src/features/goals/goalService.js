import axios from 'axios';
const URL = 'http://localhost:3001/api/goals';


const postGoals = async(goalData,token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(`${URL}`,goalData,config);
    return response.data;
}

const getGoals = async(token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${URL}`,config)
    return response.data;
}

const goalService = {
    postGoals,
    getGoals
}

export default goalService;