import style from '../../styles/modules/_contact.module.scss';
import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.search.includes('success=true')) {
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
        name="contact"
        method="POST"
        action="contact/?success=true"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
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
