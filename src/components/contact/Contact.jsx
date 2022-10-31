import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelegram, BsWhatsapp } from 'react-icons/bs';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t559km5', 'template_qw4msl5', form.current, 'l2YmhnffqhU2B23A0')

        e.target.reset()
    };

    return (
        <section id="contact">
            <h2>Связаться со мной</h2>
            <h5>Контакты</h5>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>butters-blg@yandex.ru</h5>
                        <a href="mailto:butters-blg@yandex.ru" target="_blank" rel="noreferrer">Отправить сообщение</a>
                    </article>

                    <article className="contact__option">
                        <BsTelegram className="contact__option-icon" />
                        <h4>Telegram</h4>
                        <h5>+79622840479</h5>
                        <a href="https://t.me/Butterzzz" target="_blank" rel="noreferrer">Отправить сообщение</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+79622840479</h5>
                        <a href="https://api.whatsapp.com/send?phone=89622840479" target="_blank" rel="noreferrer">Отправить сообщение</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Ваше имя" required />
                    <input type="email" name="email" placeholder="Ваше email" required />
                    <textarea name="message" rows="7" placeholder="Ваше сообщение" required></textarea>
                    <button type="submit" className="btn btn-primary">Отправить сообщение</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;