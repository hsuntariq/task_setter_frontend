import axios from 'axios';
const URL = 'http://localhost:3001/api/users';

const registerUser = async(userData) => {
    const response = await axios.post(`${URL}/register`,userData);
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }
    return response.data;
}


const loginUser = async(userData) => {
    const response = await axios.post(`${URL}/login`,userData);
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }
    return response.data;
}


const logout = () => {
    localStorage.removeItem('user');
}

const authService = {
    registerUser,
    logout,
    loginUser
}

export default authService