import React, { useState } from "react";
import styles from "../styles/contact.module.css";

function Contact() {
  const [value, setValue] = useState();
  const submitForm = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className={styles.container}>
        <form className={styles.formdata} onSubmit={submitForm}>
          <div className={styles.content}>
            <h1>Contact Us</h1>
          </div>
          <input type="text" placeholder="Enter  your name" name="username" />
          <input type="email" placeholder="Enter your Email" name="email" />
          <input
            type="text"
            placeholder="Enter your phone number"
            name="phone"
          />
          <textarea
            className={styles.textarea}
            placeholder="Enter your feedback"
            name="password"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
