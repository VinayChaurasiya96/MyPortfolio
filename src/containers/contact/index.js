import React from "react";
import PageHeader from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import {Animate} from "react-simple-animate";
import "./style.scss";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeader
        HeaderText="Contact Me"
        Icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlsWrapper">
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="&nbsp;"
                  className="inputName"
                  required
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  className="inputEmail"
                  placeholder="&nbsp;"
                  required
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  name="description"
                  type="text"
                  className="inputDescription"
                  placeholder="&nbsp;"
                  required
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
