import { useEffect, useState } from "react";
import { Valid } from "./Valid";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./Toast";
import styles from "../SIgnup.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({

    emile: "",
    password: ""
  
  });

  const [errors, setError] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setError(() => Valid(data));
  }, [data, touch]);

  const hanlechange = (event) => {
 
      setData({ ...data, [event.target.name]: event.target.value });
    
  };

  const handlefocus = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };

  const handlesubmit = (event) => {
    if (!Object.keys(errors).length) {
      console.log(data);
      notify("wellcome to web", "success");
    } else {
      notify("an error", "error");
      setTouch({
        name: true,
        emile: true,
        password: true,
        confirmpassword: true,
        Isaccept: true,
      });
    }
    event.preventDefault();
  };

  const handlebtn = () => {
    console.log(data);
  };
  return (
    <div>
      <div className={styles.contanier}>
        <form className={styles.formcontanier} onSubmit={handlesubmit}>
          <h2 className={styles.h2}>login</h2>
          <div className={styles.formfiled}>
            <label>emile</label>
            <input
              className={
                errors.emile && touch.emile
                  ? styles.uncompolited
                  : styles.forminput
              }
              type="text"
              name="emile"
              value={data.emile}
              onChange={hanlechange}
              onFocus={handlefocus}
            />
            {errors.emile && touch.emile && <p>{errors.emile}</p>}
          </div>
          <div className={styles.formfiled}>
            <label>password</label>
            <input
              className={
                errors.password && touch.password
                  ? styles.uncompolited
                  : styles.forminput
              }
              type="password"
              name="password"
              value={data.password}
              onChange={hanlechange}
              onFocus={handlefocus}
            />
            {errors.password && touch.password && <p>{errors.password}</p>}
          </div>

          <div className={styles.login}>
            <Link to="/sign up">sign up</Link>
            <button type="submit" onClick={handlebtn}>
              login
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
      );
    </div>
  );
};

export default Login;
