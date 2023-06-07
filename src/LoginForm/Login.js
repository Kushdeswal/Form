import React from "react";
import axios from "axios";
import "../LoginForm/Login.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  //router============
  const Navigate = useNavigate();
  const Kush = () => {
    Navigate("/ragister");
  };

  // =================================login form data===============================================
  const [data, setData] = useState({
    dataName: null,
    dataPass: null,
  });

  const handleData = (e) => {
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
  };

  //=======================================Api/login data match ========================================
  const [user, setuser] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:1500/user_data")
      .then((res) => {
        setuser(res.data);
      })
      .catch();
  }, []);

  const submitData = () => {
    //  const kush = user.filter((item)=>item.dataName===data.dataName && item.dataPass===data.dataPass);

    const kush = user.filter((item) => {
      if(data.dataName === null && data.dataPass === null){
        toast.error("Plz enter Inputs");
      }
     else if (data.dataName === null || data.dataName === "") {
        toast.error("Plz enter username");
      } else if (data.dataPass === null || data.dataPass === "") {
        toast.error("Plz enter password");
      }
      else if (item.dataName != data.dataName){
        toast.error("Plz enter valid username");
      }
      else if (item.dataPass != data.dataPass){
        toast.error("Plz enter valid Password");
      }
       else if (
        item.dataName === data.dataName &&
        item.dataPass === data.dataPass
      ) {
        toast.success("Login sucessfully");
        document.querySelectorAll("input")[0].value = null;
        document.querySelectorAll("input")[1].value = null;

        setTimeout(() => {
          Navigate("/dashboard");
        }, 1000);
      }
    });
  };
  //============================================ form return================================

  return (
    <>
      <div className="mainDiv">
        <div className="welcome">
          <img
            src="https://imgs.search.brave.com/2LLFK-FXXcDKj9kORVCRHzQAGC1vEKKXcIdTaIE8edU/rs:fit:512:512:1/g:ce/aHR0cDovL3d3dy5j/bGlwYXJ0YmVzdC5j/b20vY2xpcGFydHMv/OWlSL0x5RS85aVJM/eUViUlQuZ2lm.gif"
            alt=""
          />
          <h2>Welcome !</h2>
          <p>
            To keep connented with <br /> us please ragister with your <br />{" "}
            personal info
          </p>
          <button type="button" onClick={Kush}>
            Ragister
          </button>
        </div>
        <div className="ragisterForm">
          <div className="hadding">
            <h1>Login </h1>
            <h2> Your </h2>
            <h3>Account</h3>
          </div>
          <div className="form1">
            <form action="">
              <input
                type="text"
                placeholder="Name*"
                autoCorrect="on"
                id="dataName"
                onChange={handleData}
              />
              <br />
              <br />

              <input
                type="password"
                placeholder="Password*"
                autoCorrect="on"
                id="dataPass"
                onChange={handleData}
              />

              <button type="button" onClick={submitData}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
      // position="bottom-right"
      />
    </>
  );
};

export default Login;
