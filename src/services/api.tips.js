import axios from "axios";

const baseURL = "http://localhost:3000"

export async function getTips(){
    const res = await axios.get(`${baseURL}/tips`);
    return res.data;
}