import React, { useState } from "react";
import regis from "./register.module.css";
import Axios from "axios";
import { UNSAFE_NavigationContext, useNavigate } from "react-router-dom";

interface registerDetails {
  userName: string;
  name: string;
  password: string;
  email: string;
}

const Register = () => {
  const navigate = useNavigate();
  console.log(navigate);

  function registerSubmit(e: any) {
    e.preventDefault();
    let name = e.target.name.value;
    let username = e.target.username.value;
    let password = e.target.password.value;
    let email = e.target.email.value;

    console.log(name, username, password, email);
    Axios.post(`http://localhost:5002/api/register`, {
      name,
      username,
      password,
      email,
    });

    navigate(`/login`);
  }

  return (
    <div>
      <div className={`${regis.regisContainer}`}>
        <form className={`${regis.formContainer}`} onSubmit={registerSubmit}>
          <div className="">
            <label htmlFor="">Name : </label>
            <input
              type="text"
              name="name"
              required

              // value={registerInputs.name}
              // onChange={(e) =>
              //   setRegisterInputs({ ...registerInputs, name: e.target.value })
              // }
            />
          </div>
          <div className="">
            <label htmlFor="">Email : </label>
            <input
              type="text"
              name="email"
              required

              // value={registerInputs.email}
              // onChange={(e) =>
              //   setRegisterInputs({ ...registerInputs, email: e.target.value })
              // }
            />
          </div>
          <div className="">
            <label htmlFor="">Username : </label>
            <input
              // value={registerInputs.userName}
              type="text"
              name="username"
              required
              // onChange={(e) =>
              //   setRegisterInputs({
              //     ...registerInputs,
              //     userName: e.target.value,
              //   })
              // }
            />
          </div>
          <div className="">
            <label htmlFor="">Password : </label>
            <input
              // value={registerInputs.password}
              type="password"
              name="password"
              required
              // onChange={(e) =>
              //   setRegisterInputs({
              //     ...registerInputs,
              //     password: e.target.value,
              //   })
              // }
            />
          </div>
          <div className="">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
