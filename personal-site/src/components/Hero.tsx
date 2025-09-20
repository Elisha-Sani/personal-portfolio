import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--color-dark)]">
      <div className="w-2/4 mx-auto flex items-center justify-center gap-4 py-50 ">
        <Image
          src="/images/photo1.jpg"
          alt="Potrait photo of me"
          width={300}
          height={600}
        />
        <div className="text-white">
          <h1>Hello There..</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            impedit repellat dolor ratione aut accusamus qui rem molestiae at in
            velit est, unde consequatur, obcaecati nesciunt voluptate! Odio,
            ipsa eos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
