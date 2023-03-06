import axios from "axios";

const baseURL = "https://panorbit.in/api/users.json";

export const getUsers = () => axios.get(baseURL);



