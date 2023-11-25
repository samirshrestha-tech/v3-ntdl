import axios from "axios";

const apiEndPoint = "http://localhost:8000/api/v1";

export const postTasks = async (obj) => {
  try {
    const data = await axios.post(apiEndPoint, obj);
    return data;
  } catch (error) {
    console.log(error);
  }
};
