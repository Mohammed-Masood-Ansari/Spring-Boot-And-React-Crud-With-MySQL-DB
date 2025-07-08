import axios from 'axios';

const COLLEGE_API_BASE_URL = "http://localhost:8081/api/getAllCollegeData";

export const listCollege = ()=>{
    return axios.get(COLLEGE_API_BASE_URL);
}

export const registerCollege=(college)=>{
    return axios.post("http://localhost:8081/api/saveCollege",college);
}





