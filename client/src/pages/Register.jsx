import React, { useState, useEffect } from 'react'
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import Spinner from "../components/Spinner";



export default function Register() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


    //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("api/v1/users/register", values);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  }

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
          <h1 style={{color:"white", marginBottom:"30px"}}>Register Form</h1>
          <Form.Item  name="name">
            <Input type='text' placeholder='Name' />
          </Form.Item>
          <Form.Item  name="email">
            <Input type="email" placeholder='Email' style={{color:"black"}} />
          </Form.Item>
          <Form.Item  name="password">
            <Input type="password" placeholder='Password' />
          </Form.Item>
          <div >
            <button className="btn btn-primary" style={{margin:"auto"}}>Register</button>
            <br />
            <Link to="/login"  style={{color:"white"}}>Already register ? Click Here to <span style={{color:"violet", fontSize:"18px"}}>Login</span></Link>
          </div>
        </Form>
      </div>
    </>
  )
}
