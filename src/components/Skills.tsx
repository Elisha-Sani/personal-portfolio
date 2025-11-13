import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SkillCardProps {
  icon: React.ComponentProps<typeof FontAwesomeIcon>["icon"];
  title: string;
  content: string[];
  iconColor: string;
  iconBg: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  content,
  iconColor,
  iconBg,
}) => {
  return (
    <div className="flex flex-col items-center space-y-6 bg-[var(--color-bg-abcard)] border border-[var(--color-bg-start)] rounded-2xl">
      {/*icon*/}
      <div
        className="flex items-center justify-center w-16 h-16 rounded-md mt-6 p-3"
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
        <FontAwesomeIcon icon={icon} />
      </div>

      {/*title*/}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      {/*Content*/}
      <div className="items-center justify-center pb-4">
        <ul className="text-center text-gray-400">
          {content.map((item, index) => (
            <li key={index} className="p-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="max-w-8xl mx-auto bg-[var(--color-bg-end)] px-6 py-15 md:py-20">
      <div className="max-w-2xl mx-auto items-center justify-center text-center">
        <h1 className="text-xl md:text-4xl lg:text-5xl text-white font-bold ">
          Skills & Technologies
        </h1>
        <p className="text-lg tracking-wide text-white mt-6 md:mt-8">
          A comprehensive toolkit for building modern applications and solving
          complex data challenges
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 justify-center mt-6 md:mt-12">
        <SkillCard
          icon={["fab", "react"]}
          title="Frontend"
          content={["React & Next.js", "Typescript", "Tailwind CSS"]}
          iconColor="#4f88cf"
          iconBg="#1e304c"
        />
        <SkillCard
          icon={["fab", "node-js"]}
          title="Backend"
          content={["Node.js & Express", "Python & JAC", "REST APIs"]}
          iconColor="#4ade80"
          iconBg="#193d2e"
        />
        <SkillCard
          icon={["fas", "brain"]}
          title="Data Science"
          content={[
            "Data Visualization",
            "TensorFlow & PyTorch",
            "Data Visualization",
          ]}
          iconColor="#c084fc"
          iconBg="#34274c"
        />
        <SkillCard
          icon={["fas", "database"]}
          title="Database"
          content={["Postgress", "Mongo DB", "Prisma"]}
          iconColor="#f68f3b"
          iconBg="#442d1f"
        />
      </div>
    </section>
  );
};

export default Skills;
