import { Header } from "../components/Header";
import { useState } from "react";

const Contact = () => {
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [phone, updatePhone] = useState("");
  const [message, updateMessage] = useState("");

  //const onSubmit = () => {};

  // add validation
  return (
    <>
      <Header title="Contact Me" subHeading="Have questions? I have answers." />
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Want to get in touch? Fill out the form below to send me a
                message and I will get back to you as soon as possible!
              </p>
              <div className="my-5">
                {/*<!-- * * * * * * * * * * * * * * *-->
                            <!-- * * SB Forms Contact Form * *-->
                            <!-- * * * * * * * * * * * * * * *-->
                            <!-- This form is pre-integrated with SB Forms.-->
                            <!-- To make this form functional, sign up at-->
                            <!-- https://startbootstrap.com/solution/contact-forms-->
                            <!-- to get an API token!-->*/}
                <form id="contactForm">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      value={name}
                      onChange={(e) => updateName(e.target.value)}
                    />
                    <label htmlFor="name">Name</label>
                    <div className="invalid-feedback">A name is required.</div>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Enter your email..."
                      value={email}
                      onChange={(e) => updateEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email address</label>
                    <div className="invalid-feedback">
                      An email is required.
                    </div>
                    <div className="invalid-feedback">Email is not valid.</div>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number..."
                      value={phone}
                      onChange={(e) => updatePhone(e.target.value)}
                    />
                    <label htmlFor="phone">Phone Number</label>
                    <div className="invalid-feedback">
                      A phone number is required.
                    </div>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Enter your message here..."
                      style={{ height: "12rem" }}
                      value={message}
                      onChange={(e) => updateMessage(e.target.value)}
                    />
                    <label htmlFor="message">Message</label>
                    <div className="invalid-feedback">
                      A message is required.
                    </div>
                  </div>
                  <br />
                  {/*<!-- Submit success message-->
                                <!---->
                                <!-- This is what your users will see when the form-->
                                <!-- has successfully submitted-->*/}
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                    </div>
                  </div>
                  {/*<!-- Submit error message-->
                                <!---->
                                <!-- This is what your users will see when there is-->
                                <!-- an error submitting the form-->
                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                <!-- Submit Button-->*/}
                  <button
                    className="btn btn-primary text-uppercase disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
