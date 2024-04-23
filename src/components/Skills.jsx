import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillGithub } from "react-icons/ai";
import { SkillList } from "../constants/constants";

const Skills = () => {
  const frostedStyles = {
    //  border border-white/15 rounded-lg bg-black/15 backdrop-blur-3xl
    background: "#000",
  };

  return (
    <section id="Skill" className="relative">
      <VerticalTimeline>
        {SkillList.map((lineItem) => (
          <VerticalTimelineElement
            key={lineItem.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.3)",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backdropFilter: blur("32px"),
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.15)",
            }}
            date={lineItem.date}
            iconStyle={{ background: "#000", color: "#70e000" }}
            icon={<AiFillGithub />}
          >
            <div className="flex gap-3">
              <img
                loading="lazy"
                src={lineItem.icon}
                alt="logo"
                className={` ${lineItem.invert_img ? "invert-img" : ""}  w-8`}
              />
              <h1 className="vertical-timeline-element-title text-xl font-semibold text-green-400">
                {lineItem.title}
              </h1>
            </div>
            <p>{lineItem.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <div className="aqua__gradient absolute w-[50%] h-[50%]  bottom-0 -z-20 opacity-30" />
    </section>
  );
};

export default Skills;
