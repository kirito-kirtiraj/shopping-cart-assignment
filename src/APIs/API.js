import axios from "axios";

const URL = "http://localhost:5000";

class APICall {
    static async getData(endpoint) {
        try {
            const response = await axios.get(`${URL}${endpoint}`);
            const data = response.data;
            return data;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    static async postData(endpoint, data) {
        try {
            const response = await axios.post(`${URL}${endpoint}`, data);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default APICall;
