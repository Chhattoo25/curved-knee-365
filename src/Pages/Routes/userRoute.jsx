import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { UserAuth } from "../../Context/AuthContext";

const UserRoute = ({ children }) => {
  // const location = useLocation();
  const {user} = UserAuth();
  console.log("sahil",user)
  
  
  const navigate = useNavigate()
  useEffect(() => {
    if(user?.displayName){
      navigate("/after_login")
    }
  }, [navigate])
  

  
  return children
};

export default UserRoute;
