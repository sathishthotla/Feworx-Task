import axios from "axios";

export const getAllTools = () => {
  return axios.get("http://localhost:3000/tools/all");
};
