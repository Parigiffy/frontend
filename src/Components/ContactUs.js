import React from "react";
import TopNav from "./TopNav";
import Navbar from "./Navbar";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./contact.css";

const ContactUs = () => {
  const navigate = useNavigate();
    const [user, setUser] = useState({
    name: "",
    mail: "",
    msg:"",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user && window.Email) {
      window.Email.send({
     Host: "smtp.elasticemail.com",
        Username: "erofetishgear@gmail.com",
        Password: "97B24D1B167641A2B5B2E7298A7C13080107",
        To: "erofetishgear@duck.com",
        From: "erofetishgear@gmail.com",
        Subject: `A message from ${user.name} @erofetishgear`,
        Body: `${user.msg} kindly reply to this address ${user.mail} `,
        Port: 2525,
      }).then((message) => {
        console.log(message);
        toast.success("we will get back to you soon");
     
      });
    } else {
      toast.error("kindly fill in correct details");
    }
  };

  return (
    <>
      <ToastContainer />
      <TopNav />
      <Navbar />
      <div className='container mt-3'>
        <div className='row justify-content-center'>
          <div className='col-md-6 '>
            <h2 className='text-center'>Contact Us</h2>
            <form
              onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  required
                  onChange={(e) => setUser({ ...user, name: e.target.value })}

                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  required
                  onChange={(e) => setUser({ ...user, mail: e.target.value })}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  required
                  className='form-control'
                  id='message'
                  rows='5'
                  onChange={(e) => setUser({ ...user, msg: e.target.value })}
                ></textarea>
              </div>
              <button type='submit' className='btn btn-warning mt-3'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
