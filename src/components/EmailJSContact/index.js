import React, { useRef } from 'react'
import styles from './index.module.css'
import emailjs from '@emailjs/browser'
import apiKeys from '../../utils/apikeys'
import Title from '../title';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e)
    emailjs.sendForm(`${apiKeys.SERVICE_ID[0]}`, `${apiKeys.TEMPLATE_ID}`, form.current, `${apiKeys.PUBLIC_KEY[0]}${apiKeys.PUBLIC_KEY[1]}`)
      .then((result) => {
        document.getElementById("contactForm").reset();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} id="contactForm">
          <p>If you are interested in cooperation or have any questions about the services, please do not hesitate to contact me.</p>
        <div>
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" placeholder="" required />
        </div>
        <div>
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" placeholder="" required />
        </div>
        <div>
          <label htmlFor="user_phone">Phone</label>
          <input type="tel" id="user_phone" name="user_phone" placeholder="" required />
        </div>
        {/* <label>Message</label> */}
        <textarea className={styles.text} name="message" placeholder="Drop me a message..." spellCheck="true" required minLength="40" />
        <input className={styles["content-link"]} type="submit" value="Send" />
      </form>
    </>
  );
};