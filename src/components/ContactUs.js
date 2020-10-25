import React from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_n1faqhc', 'template_eeypq78', e.target, 'user_P4rmUyfuRSNbcqMXmVP3b')
      .then((result) => {
          console.log(result.text);
          alert('successfully sent to @imgreeim');
      }, (error) => {
          console.log('error',error.text);
          alert('Error');
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" className="contact_name"/>
      <label>Email</label>
      <input type="email" name="user_email" className="email"/>
      <label>Message</label>
      <textarea name="message" className="message"/>
      <input type="submit" value="Send" className="Contact_send"/>
    </form>
  );
}