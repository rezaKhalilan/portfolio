import classes from "./ContactMe.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2n2g5f5",
      "template_94v9wjb",
      form.current,
      "OhjnKWZ4cgcYAHOLG"
    );
    e.target.reset();
  };

  return (
    <section id="contactMe">
      <h1 className="centertext">Lets get in touch ...</h1>
      <div className={classes.contact__container}>
        <div className={classes.contacts}>
          <div className={classes.card}>
            <AiOutlineMail />
            <h4>Email</h4>
            <p>khalilan.reza@gmail.com</p>
            <button>
              <a href="mailto:khalilan.reza@gmail.com"> Send an Email</a>
            </button>
          </div>
          <div className={classes.card}>
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <p>+98 938 442 3822</p>
            <button>
              <a
                href="https://api.whatsapp.com/send?phone=+989384423822"
                target="_blank"
              >
                Send a message
              </a>
            </button>
          </div>
        </div>
        <div className={classes.form}>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Full name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="9"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
