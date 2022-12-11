import { EmailJSResponseStatus } from '@emailjs/browser';
import React from 'react';
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import './Contact.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const submitInfo = (event)=>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  const mailInfo = {
    from_name: name,
    email_id: email,
    message: message
  }
  emailjs
    .send("service_k5rrlon", "template_u9g2nse", mailInfo, "uZ5HZe2ebaqYMfpC2")
    .then(
      function (response) {
        toast("Your Message has been successfully sent!");
      },
      function (error) {
        toast("FAILED...");
      }
    );
  }
    return (
      <div id="contact" className="mt-32 contact-bg py-10 ">
        <h1 className="text-center my-10 text-5xl font-bold text-white">
          Contact
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 my-20">
          <div className=" py-5 w-3/4 mx-auto ">
            <form
              className="w-11/12 mx-auto text-center py-10 px-10 background"
              onSubmit={submitInfo}
            >
              <div className="flex justify-center gap-5 mb-10">
                <input
                  type="text"
                  className="p-4 w-full"
                  placeholder="Your Full Name"
                  name="name"
                />
                <input
                  type="text"
                  className="p-4 w-full"
                  placeholder="Contact Number"
                  name="contact"
                />
              </div>
              <input
                type="email"
                name="email"
                id=""
                className="p-4 w-full mb-10"
                placeholder="Your Email"
              />{" "}
              <br />
              <textarea
                name="message"
                id=""
                cols="60"
                rows="3"
                className="w-full mb-5 p-4"
                placeholder="Type Your Message..."
              ></textarea>
              <button className="btn bg-yellow-500 border-0 rounded-none px-14">
                Submit
              </button>
            </form>
          </div>
          <div className="text-white">
            <div className="flex gap-4 my-7">
              <FaPhoneAlt className="text-4xl"></FaPhoneAlt>
              <p className="text-2xl font-semibold">01xxxxx</p>
            </div>
            <div className="flex gap-4 my-7">
              <FaRegEnvelope className="text-4xl"></FaRegEnvelope>
              <p className="text-2xl font-semibold">
                iffatnoorshad00@gmail.com
              </p>
            </div>
            <div className="flex gap-4 my-7">
              <FaMapMarkerAlt className="text-4xl"></FaMapMarkerAlt>
              <p className="text-2xl font-semibold">Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;