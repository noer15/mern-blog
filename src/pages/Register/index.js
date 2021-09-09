import React from "react";
import { useHistory } from "react-router-dom";
import { BgAuth } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";

const Register = () => {
  const history = useHistory();
  return (
    <div>
      <div className="main-page">
        <div className="left">
          <img src={BgAuth} alt="register" className="img-auth" />
        </div>
        <div className="right">
          <p className="title"> Register</p>
          <Input type="text" label="Full Name" placeholder="fullname" />
          <Gap height={15} />
          <Input type="text" label="Email" placeholder="email" />
          <Gap height={15} />
          <Input type="password" label="Password" placeholder="password" />
          <Gap height={25} />
          <Button title="Register" />
          <Link
            title="Kembali ke login"
            onClick={() => history.push("/login")}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
