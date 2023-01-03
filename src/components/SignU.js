import { useEffect, useState } from "react";
import { Valid } from "./Valid";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./Toast";
import styles from "../SIgnup.module.css";
import { Link} from "react-router-dom";

const SignU = () => {
  const [data, setData] = useState({
    name: "",
    emile: "",
    password: "",
    confirmpassword: "",
    Isaccept: false,
  });

  const [errors, setError] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setError(() => Valid(data));
  }, [data, touch]);

  const hanlechange = (event) => {
    if (event.target.name === "Isaccept") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const handlefocus = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };

  const handlesubmit = (event) => {

    
    if (!Object.keys(errors).length) {
      console.log(data);
      notify("wellcome to page", "success");
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
    <div className={styles.contanier}>
      <form className={styles.formcontanier} onSubmit={handlesubmit}>
        <h2 className={styles.h2}>Sign up</h2>
        <div className={styles.formfiled}>
          <label>name</label>
          <input
            className={
              errors.name && touch.name ? styles.uncompolited : styles.forminput
            }
            type="text"
            name="name"
            value={data.name}
            onChange={hanlechange}
            onFocus={handlefocus}
          />
          {errors.name && touch.name && <p>{errors.name}</p>}
        </div>
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
        <div className={styles.formfiled}>
          <label>confirm password</label>
          <input
            className={
              errors.confirmpassword && touch.confirmpassword
                ? styles.uncompolited
                : styles.forminput
            }
            type="password"
            name="confirmpassword"
            value={data.confirmpassword}
            onChange={hanlechange}
            onFocus={handlefocus}
          />
          {errors.confirmpassword && touch.confirmpassword && (
            <p>{errors.confirmpassword}</p>
          )}
        </div>
        <div className={styles.formfiled}>
          <div className={styles.checkbox}>
            <label>I accept terms of privacy policy</label>
            <input
              className={
                errors.Isaccept && touch.Isaccept
                  ? styles.uncompolited
                  : styles.forminput
              }
              type="checkbox"
              name="Isaccept"
              value={data.Isaccept}
              onChange={hanlechange}
              onFocus={handlefocus}
            />
            </div>
            {errors.Isaccept && touch.Isaccept && <p>{errors.Isaccept}</p>}
          
        </div>
        <div className={styles.login}>
          <Link to="/login">login</Link>
          <button type="submit" onClick={handlebtn}>
            sign up
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignU;
