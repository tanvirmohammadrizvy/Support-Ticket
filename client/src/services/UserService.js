import http from "src/utils/http";

export const postUser = async (values) => {
    try {
        const response = await http.post('/users', values);
        return response;
      } catch (error) {
        console.error(error);
      }
}

export const getUser = async () => {
  try {
      const response = await http.get('/users');
      return response;
    } catch (error) {
      console.error(error);
    }
}