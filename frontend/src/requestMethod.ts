import Axios from "axios";

const BASE_URL = `http://localhost:5002/api/`;

export const publicRequest = Axios.create({
  baseURL: BASE_URL,
});

const TOKEN = `okjgkjkeoirrgk0eikg,kpo6589487416sdgfdg.fdgmkofjgmko`;

export const userRequest = Axios.create({
  baseURL: BASE_URL,
  // @ts-ignore
  header: { token: `Bearer ${TOKEN}` },j
});
