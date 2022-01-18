import style from '../../styles/modules/_contact.module.scss';
import { useState, useEffect } from 'react';


export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('Sending')

  //   let data = {
  //       name,
  //       email,
  //       message
  //   }

  //   fetch('../../pages/api/contact', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   }).then((res) => {
  //       console.log('Response received')
  //       if (res.status === 200) {
  //           console.log('Response succeeded!')
  //           setSubmitted(true)
  //           setName('')
  //           setEmail('')
  //           setMessage('')
  //       }
  //   })
  // }

  return (
    <div className={style['container']}>
      <h4 className={style['contact--form--title']}>SEND A MESSAGE</h4>
      {success && (
        <p style={{ color: 'green' }}>Successfully submitted form!</p>
      )}
      <form
        method="POST"
        data-netlify="true"
        onSubmit="submit"
        // action="/?success=true"
        data-netlify-honeypot="bot-field"
      >
        <div className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="name">
            FULL NAME
          </label>
          <input
            className={style['form--input']}
            type="text"
            name="name"
            placeholder="Your Full Name"
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
          />
        </div>
        <div id={style['email']} className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="email">
            EMAIL ADDRESS
          </label>
          <input
            className={style['form--input']}
            type="email"
            name="email"
            // pattern=".+@globex\.com"
            placeholder="Your Email Address"
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
          />
        </div>
        <div className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="message">
            MESSAGE
          </label>
          <textarea
            rows="4"
            className={[
              style['form--input'],
              style['form--message--input'],
            ].join('')}
            id="subject"
            name="message"
            placeholder="Message"
            // onChange={(e) => {
            //   setMessage(e.target.value);
            // }}
          ></textarea>
        </div>

        <input
          className="primary--btn"
          type="submit"
          value="Your Message"
          // onClick={(e) => {
          //   handleSubmit(e);
          // }}
        >
          {/* SEND MESSAGE */}
        </input>
      </form>

      {/* <form
    name="contact-form"
    method="POST"
    action="contact/?success=true"
  >
    <label htmlFor="name">Name *</label>
    <input
      id="name"
      name="name"
      required
      type="text"
    />
    <label htmlFor="company">Company *</label>
    <input id="company" name="company" required type="text" />
    <label htmlFor="email">E-mail Address *</label>
    <input id="email" type="email" name="email" required />
    <label htmlFor="message">Message *</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Submit</button>
  </form> */}
    </div>
  );
}
