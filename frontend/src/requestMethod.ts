import Axios from "axios";

const BASE_URL = `http://localhost:5002/api/`;

export const publicRequest = Axios.create({
  baseURL: BASE_URL,
});

const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6IjAiLCJpYXQiOjE2NzA0ODEwNDEsImV4cCI6MTY3MDc0MDI0MX0.lxVK8IXW59W5AJo6VetMz2-SoKe7N0hSFR-YutXXh7A`;

export const userRequest = Axios.create({
  baseURL: BASE_URL,
  // @ts-ignore
  header: { token: `Bearer ${TOKEN}` },
});
