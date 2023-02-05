import axios from "axios";


export const postUser = async (values) => {
    try {
        const response = await axios.post('/users', values);
        return response;
      } catch (error) {
        console.error(error);
      }
}