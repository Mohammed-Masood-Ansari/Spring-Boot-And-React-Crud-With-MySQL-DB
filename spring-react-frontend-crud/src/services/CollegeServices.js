import axios from 'axios';

const COLLEGE_API_BASE_URL = "http://localhost:8081/api/getAllCollegeData";

export const listCollege = ()=>{
    return axios.get(COLLEGE_API_BASE_URL);
}

export const registerCollege=(college)=>{
    return axios.post("http://localhost:8081/api/saveCollege",college);
}

export const getCollegeById=(id)=>{
    return axios.get(`http://localhost:8081/api/getByIdNative/${id}`);
}

export const updateCollegeById=(id,college)=>{
    return axios.put(`http://localhost:8081/api/updateCollege/${id}`,college);
}

export const deleteCollegeById=(id)=>{
    return axios.delete(`http://localhost:8081/api/deleteCollege/${id}`);
}




