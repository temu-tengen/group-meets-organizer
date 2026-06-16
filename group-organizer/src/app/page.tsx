"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

import ErrorMessage from "./errorMessage";
import { useRouter } from "next/navigation";

export default function Home() {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredKey,setEnteredKey]=useState("");

  const [username, setUsername] = useState("");
  const [key, setKey] = useState("");

  const router = useRouter();

  const [showError, setShowError] = useState(false);

  const users = [["shalinmehta", "saasa"], ["Rohan", "goof"]];

  const handleSubmit = () => {
    for (let i = 0; i < users.length; i++) {
      let user = [...users[i]];
      let un = user[0];
      let ky = user[1];

      if (un === enteredUsername && ky === enteredKey) {
        setUsername(enteredUsername);
        setKey(enteredKey);

        setShowError(false);

        router.push('/dashboard');
        return 0;
      }
    }

    setShowError(true);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.headerXL} style={{marginBottom: 50}}>Welcome</h1>
      <div className={styles.loginBox}>
        <h1 className={styles.headerXL}>
          Login
        </h1>
        <p className={styles.textStandard}>
          So we can show results relevant to you.
        </p>

        <br></br>
        <p className={styles.textBold}>Username</p>

        <input className={styles.input} onChange={(e)=>{setEnteredUsername(e.target.value)}} placeholder="Enter Username Here"></input>

        <p className={styles.textBold} style={{marginTop: 50}}>Key</p>

        <input className={styles.input} onChange={(e)=>{setEnteredKey(e.target.value)}}placeholder="Enter Key Here"></input>
        <button className={styles.buttonMedium}
          onClick={()=> handleSubmit()}
        >Login</button>
      </div>

      {showError && (
        <ErrorMessage message="Incorrect User or Key"></ErrorMessage>
      )}
    </div>
  );
}
