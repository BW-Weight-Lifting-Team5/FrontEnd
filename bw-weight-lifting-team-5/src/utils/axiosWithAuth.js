import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    // create
    return axios.create({
        baseURL: `https://weight-lifters-journal-5.herokuapp.com/api/auth`,//'https://weight-lifters-journal-5.herokuapp.com/'/*'http://localhost:5000/api'*/,
        headers: {
            Authorization: token
        }
    })
}
