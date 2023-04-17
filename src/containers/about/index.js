import React from "react";
import PageHeader from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import {FaReact, FaNodeJs} from "react-icons/fa";
import {TbBrandNextjs} from "react-icons/tb";
import {TbBrandRedux} from "react-icons/tb";
import {DiMongodb} from "react-icons/di";
import {Animate} from "react-simple-animate";
import "./style.scss";

const About = () => {
  const jobSummary =
    "Seasoned and indepedent Full stack Developer with almost one year of experience ";
  const personalInformation = [
    {
      label: "Name",
      value: "Vinay Chaurasiya",
    },
    {
      label: "Age",
      value: "25",
    },
    {
      label: "Address",
      value: "India",
    },
    {
      label: "Email",
      value: "chaurasiyavinay24@gmail.com",
    },
    {
      label: "Contact",
      value: "+91 7089051886",
    },
  ];
  return (
    <section id="about" className="about">
      <PageHeader HeaderText="About Me" Icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play={true}
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translate(0px)",
            }}
          >
            <h3>Fullstack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play={true}
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translate(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalInformation.map((item, index) => (
                <li key={item.label}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__serviceWrapper">
          <Animate
            play={true}
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translate(0px)",
            }}
          >
            <div className="about__content__serviceWrapper__innerContent">
              <div className="">
                <FaReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div className="">
                <TbBrandRedux
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
              <div className="">
                <TbBrandNextjs
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
              <div className="">
                <DiMongodb size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div className="">
                <FaNodeJs size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
