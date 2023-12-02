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

export const getTasks = async () => {
  try {
    const data = await axios.get(apiEndPoint);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const switchTasks = async (obj) => {
  try {
    const data = await axios.patch(apiEndPoint, obj);
    return data;
  } catch (error) {
    console.log(error);
  }
};
