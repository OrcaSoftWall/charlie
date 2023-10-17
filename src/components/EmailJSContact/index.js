import React, { useRef, useContext } from 'react'
import styles from './index.module.css'
import emailjs from '@emailjs/browser'
import apiKeys from '../../utils/apikeys'
import translations from '../../utils/translations';
import LanguageContext from '../../context.js';
import MultiLingualContent from '../MultyLingualContent';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e)
    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
    // emailjs.sendForm(`${apiKeys.SERVICE_ID[0]}`, `${apiKeys.TEMPLATE_ID}`, form.current, `${apiKeys.PUBLIC_KEY[0]}${apiKeys.PUBLIC_KEY[1]}`)
      .then((result) => {
        document.getElementById("contactForm").reset();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const MultyContent = ( contentID ) => {
    const { language } = useContext(LanguageContext);
    return translations[language][contentID];
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail} id="contactForm">
          <p className={styles.contactText}>{<MultiLingualContent contentID="contactMeText" />}</p>
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
        <textarea className={styles.text} name="message" placeholder={MultyContent("contactMessage")} spellCheck="true" required minLength="40" />
        <input className={styles["content-link"]} type="submit" value="Send" />
      </form>
    </>
  );
};
