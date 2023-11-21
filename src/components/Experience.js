import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            {company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Our Journey
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Inception and Passion"
              time="2019"
              address="Kampala, Uganda"
              work="Biiso General Merchandise was born out of a shared passion for coffee and a deep commitment to sustainability. In 2019, our journey began with a small team of young Ugandan entrepreneurs who envisioned a coffee brand that goes beyond the ordinary."
            />

            <Details
              position="Sustainable Innovation"
              time="2020-present"
              address="Kampala, Uganda"
              work="From day one, we set out to make a difference. Our commitment to sustainability led us to explore innovative ways to utilize the entire coffee plant. We proudly use 100% of the agricultural value, ensuring that our impact on the environment is not just minimized but turned into a positive force."
            />

            <Details
              position="Quality Management and Global Reach"
              time="2021-present"
              address="Kampala, Uganda"
              work="As we grew, our focus on quality management systems became a cornerstone of our success. We developed a strong technical team dedicated to product development, innovative solutions, and self-education. This commitment has enabled us to meet the growing global demand for premium coffee and cascara."
            />

          </ul>
        </div>
        </div>
    );
};

export default Experience;
