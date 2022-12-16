import Axios from "axios";

const BASE_URL = "http://localhost:5002";

export const publicRequest = Axios.create({
  baseURL: BASE_URL,
});

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6IjAiLCJpYXQiOjE2NzA3MzYyMTUsImV4cCI6MTY3MDk5NTQxNX0.wRFlVZbEwsePwiQ4Tf1chzZj18WXF-dSWzI-BI409yo`;

export const userRequest = Axios.create({
  baseURL: BASE_URL,

  header: {
    token: { token: `Bearer ${token}` },
  },
});
 