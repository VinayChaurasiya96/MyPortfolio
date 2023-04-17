import React from "react";
import "./style.scss";
import PageHeader from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import {Animate} from "react-simple-animate";
import {Line} from "rc-progress";
import skillsData from "./utils";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeader
        HeaderText="My Skills"
        Icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, index) => (
          <div key={index} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(-0px)",
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__category-text__progressbar-container">
                {item.data.map((skillItem, i) => (
                  <Animate
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                  >
                    <div key={i} className="progressbar-wrapper">
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </Animate>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
