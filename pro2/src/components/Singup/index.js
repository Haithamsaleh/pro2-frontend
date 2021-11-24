import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const Regestier = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [emali, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    const items = await axios.get("http://localhost:5000/users");
    setUsers(items.data);
  };

  const ckeck = (e) => {
    e.preventDefault();

    let check = true;
    // eslint-disable-next-line
    users.map((item) => {
      if (item.emali == emali) {
        check = false;
      }
    });

    if (check) {
      try {
        axios.post("http://localhost:5000/users/create", {
          userName: userName,
          emali: emali,
          password: password,
        });
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    } else {
      let myWindow = window.open("", "", "width=200,height=100");
      myWindow.document.write("<p> email existing</p>");
      myWindow.focus();
      navigate("/home");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const loginPage = () => {
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={ckeck}>
        <input
          type="text"
          name="userName"
          placeholder="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="emali"
          name="emali"
          placeholder="emali"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Register" />
      </form>
      <p onClick={loginPage}>Already have an account ?</p>
    </div>
  );
};

export default Regestier;
