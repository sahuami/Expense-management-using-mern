import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("api/v1/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="resgister-page ">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1 style={{color:"white" , marginBottom:'30px'}}>Login Form</h1>

          <Form.Item  name="email">
            <Input type="email" placeholder="Email"   />
          </Form.Item>
          <Form.Item  name="password">
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <div >
            <button className="btn btn-primary" style={{margin:"auto"}}>Login</button>
            <br />
            <Link to="/register"  style={{color:"white"}}>Not a user ? Cleck Here to <span style={{color:"violet", fontSize:"18px"}}>Regsiter</span></Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;