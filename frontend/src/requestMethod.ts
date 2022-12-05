import Axios from "axios";

const BASE_URL = `http://localhost:5002/api/`;

export const publicRequest = Axios.create({
  baseURL: BASE_URL,
});

const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlzQWRtaW4iOiJmYWxzZSIsImlhdCI6MTY3MDIxOTMzMSwiZXhwIjoxNjcwNDc4NTMxfQ.XOVcqpdKIXgM3n_c_V7ftIxDgHPk7Gf9tyYZ_ht_KXs`;

export const userRequest = Axios.create({
  baseURL: BASE_URL,
  // @ts-ignore
  header: { token: `Bearer ${TOKEN}` },
});
