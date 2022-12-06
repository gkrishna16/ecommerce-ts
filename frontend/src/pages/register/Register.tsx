import React, { useState } from "react";
import regis from "./register.module.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

interface registerDetails {
  userName: string;
  name: string;
  password: string;
  email: string;
}

const Register = () => {
  const navigate = useNavigate();
  // console.log(navigate);

  function registerSubmit(e: any) {
    e.preventDefault();

    try {
      let name = e.target.name.value;
      let username = e.target.username.value;
      let password = e.target.password.value;
      let email = e.target.email.value;

      console.log(name, username, password, email);
      Axios.post(`http://localhost:5002/api/users/register`, {
        name,
        username,
        password,
        email,
      });

      // navigate(`/login`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className={`${regis.regisContainer}`}>
        <form className={`${regis.formContainer}`} onSubmit={registerSubmit}>
          <div className="">
            {/* <label htmlFor="">Name : </label> */}
            <div className="">Register</div>

            <input
              type="text"
              name="name"
              required
              placeholder="name"
              // value={registerInputs.name}
              // onChange={(e) =>
              //   setRegisterInputs({ ...registerInputs, name: e.target.value })
              // }
            />
          </div>
          <div className="">
            {/* <label htmlFor="">Email : </label> */}
            <input
              type="text"
              name="email"
              placeholder="email"
              required
              // value={registerInputs.email}
              // onChange={(e) =>
              //   setRegisterInputs({ ...registerInputs, email: e.target.value })
              // }
            />
          </div>
          <div className="">
            {/* <label htmlFor="">Username : </label> */}
            <input
              // value={registerInputs.userName}
              type="text"
              name="username"
              placeholder="username"
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
            {/* <label htmlFor="">Password : </label> */}
            <input
              // value={registerInputs.password}
              type="password"
              name="password"
              placeholder="password"
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
