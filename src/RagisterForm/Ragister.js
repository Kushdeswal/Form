import React from "react";
import "../RagisterForm/Ragister.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Ragister = () => {
  //router============

  const Navigate = useNavigate();
  const Kush = () => {
    Navigate("/");
  };

  //======================================= Ragister form data===================================
  const [data, setData] = useState({
    dataName: null,
    dataEmail: null,
    dataPass: null,
    dataCpass: null,
  });

  const handleData = (e) => {
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
  };
  //===============================  list data =======================================

  const [allEnter, setallEnter] = useState([]);
  const newEntry = {
    name: data.dataName,
    email: data.dataEmail,
    pass: data.dataPass,
  };

  //=================================== Api data post===================================
  const submitData = () => {
    const { dataName, dataEmail, dataPass, dataCpass } = data;
    if (dataName === null&& dataEmail === null &&dataPass===null&&dataCpass===null) {
      toast.error("Plz enter Inputs");}
    else if (dataName === "" || dataName === null) {
      toast.error("Plz enter Name");
    } else if (dataEmail === null || dataEmail === "") {
      toast.error("Plz enter Email");
    } else if (dataPass === null || dataPass === "") {
      toast.error("Plz enter Password");
    } else if (dataCpass === null || dataCpass === "") {
      toast.error("Plz enter Comferm Password");
    } else if (dataCpass !== data.dataPass) {
      toast.warning(" Password Does't Match");
    } else if (
      dataName === data.dataName &&
      dataEmail === data.dataEmail &&
      dataPass === data.dataPass &&
      dataCpass === data.dataPass
    ) {
      axios
        .post("http://localhost:1500/user_data", data)
        .then((res) => {
          toast.success("Ragister Sucessfully");
        })
        .catch((ere) => {});

     
      setallEnter([...allEnter, newEntry]);

      document.querySelectorAll("input")[0].value = null ;
      document.querySelectorAll("input")[1].value = null
      document.querySelectorAll("input")[2].value = null;
      document.querySelectorAll("input")[3].value = null;
    }
  };
  // ==============form return==========================================================
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
            To keep connented with <br /> us please login with your <br />{" "}
            personal info
          </p>
          <button type="button" onClick={Kush}>
            Login
          </button>
        </div>

        <div className="ragisterForm">
          <div className="hadding">
            <h1>Create </h1>
            <h2> Your </h2>
            <h3>Account</h3>
          </div>
   {/*================== input area=============================================================== */}
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
                type="email"
                placeholder="Email*"
                autoCorrect="on"
                id="dataEmail"
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
              <br />
              <br />
              <input
                type="password"
                placeholder="Comfirm Password*"
                autoCorrect="on"
                id="dataCpass"
                onChange={handleData}
              />

              <button type="button" onClick={submitData}>
                Ragister
              </button>
            </form>
          </div>
        </div>
   {/*================== list area=============================================================== */}

        <div className="showResult">
          {allEnter.map((item, index) => {
            return (
              <>
                <ul>
                  <li>
                    <span>Name=</span>
                    {item.name}
                  </li>
                  <li>
                    <span>Email=</span>
                    {item.email}
                  </li>
                  <li>
                    <span>Password=</span>
                    {item.pass}
                  </li>
                </ul>
              </>
            );
          })}
        </div>
      </div>
      <ToastContainer
      // position="bottom-right"
      />
    </>
  );
};

export default Ragister;
