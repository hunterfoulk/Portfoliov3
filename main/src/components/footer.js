import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import axios from "axios";
import Swal from 'sweetalert2'


export default function Footer() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false);


    const sendEmail = async (e) => {
        e.preventDefault();

        const headers = {
            "Content-Type": "application/json",
        };

        await axios
            .post(
                "https://elegant-haibt-a61338.netlify.app/.netlify/functions/server/portfolio/sendemail",
                {
                    name: name,
                    email: email,
                    message: message,
                },
                {
                    headers: headers,
                }
            )

            .then((res) => {
                console.log("server response", res);
                console.log("email has been sent");
                setSuccess(true);
                Swal.fire(
                    'Thanks for contacting me!',
                    'I will get back to you as soon as i can!',
                    'success'
                )

            })
            .catch((error) => console.error("email was not succesfull:", error));

        setName("");
        setEmail("");
        setMessage("");
    };




    return (

        <div className="footer-main">
            <div className="footer-content-container">
                <div className="footer-left">
                    <div className="footer-left-top">
                        <h1>Thanks for stopping by</h1>
                        <p>I am always looking for new opportunities to learn and grow as a Software Developer. Feel free to contact me at any time or connect with me at my socials below! </p>
                    </div>
                    <div className="footer-left-bottom">
                        <h1>Connect with me</h1>
                        <div>
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/hunterfoulk"><FaGithub /></a>
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.youtube.com/channel/UCPA_sNlX4p4TgYr6HQFqbJA/videos"><FaYoutube /></a>
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/hunterfoulk/"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="form-header">
                        <h1>Get in touch</h1>
                    </div>
                    <div className="form-container">

                        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />

                        <div className="form-button-container">
                            <button onClick={(e) => sendEmail(e)}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span>Hunter Foulk</span>
                <span>© 2020 Hunter Foulk | All rights reserved.</span>
            </div>
        </div>
    )
}
