import {
  faCode,
  faGraduationCap,
  faProjectDiagram,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

type MySkill = {
  id: string;
  label: string;
};
interface IconCardProps {
  icon: IconProp;
  value: string;
  text: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, value, text }) => {
  return (
    <div
      className="flex flex-col items-start space-y-16 bg-[var(--color-bg-abcard)]
                    border border-[var(--color-bg-start)] rounded-3xl 
                    p-10 cursor-pointer hover:border-[var(--color-primary)]/20 shadow-md hover:shadow-lg  transition-shadow duration-300"
    >
      {/* Icon box */}
      <div className="p-3 rounded-md bg-[var(--color-primary)]/30">
        <FontAwesomeIcon
          icon={icon}
          className="text-[var(--color-primary)] w-8 h-8"
        />
      </div>

      {/* Text content */}
      <div className="space-y-3">
        <p className="text-lg lg:text-2xl font-semibold text-white">{value}</p>
        <p className="text-sm lg:text-xl leading-relaxed tracking-wide text-muted-foreground">
          {text}
        </p>
      </div>
    </div>
  );
};

const myskills: MySkill[] = [
  { id: "python", label: "Python" },
  { id: "react", label: "React" },
  { id: "postgress", label: "Postgress" },
  { id: "prisma", label: "Prisma" },
  { id: "git", label: "Git" },
];

const About = () => {
  return (
    <section
      id="about"
      className="max-w-8xl mx-auto min-h-screen px-6 relative bg-[var(--color-bg-about)]"
    >
      <div className="flex flex-col items-center justify-center pt-24">
        <h1 className="text-2xl md:text-5xl lg:text-6xl text-white font-semibold">
          About Me
        </h1>
        <hr className="w-32 mx-auto my-6 h-2 bg-[var(--color-primary)] border-0 rounded-full" />
      </div>
      <div className="px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-24 mt-24">
        <div className="fade-up space-y-6">
          <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">
            My Journey
          </h1>
          <p className="text-sm md:text-lg lg:text-xl leading-relaxed tracking-wide mb-12">
            I&apos;m a full-stack developer with a knack for building real-world
            robust applications. With a degree from The Technical University of
            Kenya and certifications from Meta and Power Learn Project Kenya,
            I&apos;ve developed expertise in crafting efficient, type-safe
            solutions and secure APIs. Currently, I&apos;m enhancing my skills
            through the ALX Africa program, diving deeper into data science.
          </p>
          <p className="text-sm md:text-lg lg:text-xl leading-relaxed tracking-wide mb-8">
            My passion lies in blending technical precision with data-driven
            insights, creating applications that not only perform seamlessly but
            also leverage data science to solve real-world problems. From
            optimizing web applications to exploring machine learning, I&apos;m
            committed to delivering very impactful solutions to your needs.
          </p>
          <div className="mt-10 flex flex-wrap text-lg text-[var(--color-primary)] gap-4 font-bold">
            {myskills.map((skill) => (
              <span
                key={skill.id}
                className="px-4 py-2 bg-[var(--color-primary)]/30 border-none rounded-lg"
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <IconCard
            icon={faCode}
            value="2+ Years"
            text="Development experience"
          />
          <IconCard
            icon={faProjectDiagram}
            value="3+"
            text="Projects completed"
          />
          <IconCard icon={faGraduationCap} value="DSC" text="Making progress" />
          <IconCard icon={faUsers} value="2" text="Happy clients" />
        </div>
      </div>
    </section>
  );
};

export default About;
