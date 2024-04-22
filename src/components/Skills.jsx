import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillGithub } from "react-icons/ai";
import { SkillList } from "../constants/constants";

const Skills = () => {
  return (
    <section id="Skill">
      <VerticalTimeline>
        {SkillList.map((lineItem) => (
          <VerticalTimelineElement
            key={lineItem.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#0a1128", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0a1128" }}
            date={lineItem.date}
            iconStyle={{ background: "#000", color: "#70e000" }}
            icon={<AiFillGithub />}
          >
            <div className="flex gap-3">
              <img
                loading="lazy"
                src={lineItem.icon}
                alt="logo"
                className="w-8"
              />
              <h1 className="vertical-timeline-element-title text-xl font-semibold text-green-400">
                {lineItem.title}
              </h1>
            </div>
            <p>{lineItem.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Skills;
