import React from "react";
import PageHeader from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import resumeData from "./utils";
import "./style.scss";
import {MdWork} from "react-icons/md";
import {GiGraduateCap} from "react-icons/gi";
const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeader
        HeaderText=" My Resume"
        Icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
          >
            {resumeData.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>

                  <h4 className="vertical-timeline-element-organisation">
                    {item.organisation}
                  </h4>
                </div>
                <h5 className="vertical-timeline-element-subtitle">
                  {item.subTitle}
                </h5>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
          >
            {resumeData.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                icon={<GiGraduateCap />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>

                  <h4 className="vertical-timeline-element-organisation">
                    {item.organisation}
                  </h4>
                </div>
                <h5 className="vertical-timeline-element-subtitle">
                  {item.subTitle}
                </h5>
                <p>{item.grade}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
