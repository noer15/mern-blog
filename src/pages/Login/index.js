import React from "react";
import { useHistory } from "react-router-dom";
import { BgAuth } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  const route = useHistory();
  return (
    <div>
      <div className="main-page">
        <div className="left">
          <img src={BgAuth} alt="register" className="img-auth" />
        </div>
        <div className="right">
          <p className="title"> Login</p>
          <Input type="text" label="Email" placeholder="email" />
          <Gap height={15} />
          <Input type="password" label="Password" placeholder="password" />
          <Gap height={25} />
          <Button title="Login" onClick={() => route.push("/")} />
          <Link
            title="Belum punya akun ?"
            onClick={() => route.push("/register")}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
