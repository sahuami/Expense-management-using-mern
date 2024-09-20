import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
      <nav className=" bg-light" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height:"8vh", padding:"10px" }}>
        <div >
          <Link className="navbar-brand"style={{fontSize:"30px", marginLeft:"50px"  }} to="/">
            Expense Management
          </Link>
        </div>
        <div style={{ width:"15%" ,display: "flex" , justifyContent: "space-around", alignItems: "center" , marginRight:"50px"}}>

          <h3 >{loginUser && loginUser.name}</h3>
          
          <div className="nav-item ">
            <button className="btn btn-primary " onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Header;