import React, { useEffect, useState } from "react";
import lgn from "./login.module.css";

interface loginDetails {
  userName: string;
  password: String | any;
}

const Login = () => {
  const [loginInputs, setLoginInputs] = useState<loginDetails>({
    userName: ``,
    password: ``,
  });

  console.log(loginInputs.userName, loginInputs.password);

  function handleSubmit(e: any) {
    console.log(`submitted`);
    e.preventDefault();

    fetch(``);
  }
  return (
    <div>
      <div className={`${lgn.container}`}>
        <div className="">
          <label htmlFor="">Username : </label>
          <input
            type="text"
            value={loginInputs.userName}
            onChange={(e) =>
              setLoginInputs({ ...loginInputs, userName: e.target.value })
            }
          />
        </div>
        <div className="">
          <label htmlFor="">Password : </label>
          <input
            type="password"
            value={loginInputs.password}
            onChange={(e) =>
              setLoginInputs({ ...loginInputs, password: e.target.value })
            }
          />
        </div>
        <div className="">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
