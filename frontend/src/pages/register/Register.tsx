import React, { useState } from "react";
import regis from "./register.module.css";

interface registerDetails {
  userName: string;
  name: string;
  password: string;
  email: string;
}

const Register = () => {
  const [registerInputs, setRegisterInputs] = useState<registerDetails>({
    userName: ``,
    name: ``,
    password: ``,
    email: ``,
  });

  console.log(registerInputs);

  function registerSubmit(e: any) {
    e.preventDefault();

    // fetch();
  }

  return (
    <div>
      <div className={`${regis.regisContainer}`}>
        <div className={`${regis.formContainer}`}>
          <div className="">
            <label htmlFor="">Name : </label>
            <input
              type="text"
              value={registerInputs.name}
              onChange={(e) =>
                setRegisterInputs({ ...registerInputs, name: e.target.value })
              }
            />
          </div>
          <div className="">
            <label htmlFor="">Email : </label>
            <input
              type="text"
              value={registerInputs.email}
              onChange={(e) =>
                setRegisterInputs({ ...registerInputs, email: e.target.value })
              }
            />
          </div>
          <div className="">
            <label htmlFor="">Username : </label>
            <input
              value={registerInputs.userName}
              type="text"
              onChange={(e) =>
                setRegisterInputs({
                  ...registerInputs,
                  userName: e.target.value,
                })
              }
            />
          </div>
          <div className="">
            <label htmlFor="">Password : </label>
            <input
              value={registerInputs.password}
              type="password"
              onChange={(e) =>
                setRegisterInputs({
                  ...registerInputs,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="">
            <button onSubmit={registerSubmit}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
