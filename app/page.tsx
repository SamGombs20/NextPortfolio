"use client";
import { Banner } from "./components/banner";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Services } from "./components/services";
import { Skills } from "./components/skills";
import { Variants } from "motion";
import { motion } from "motion/react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
const verticalVariants:Variants ={
  hidden:{opacity:0, y:50},
  visible:{
    opacity:1,
    y:0,
    transition:{duration:0.3, ease:"easeInOut"}
  }
}

export default function Home() {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Banner />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Services />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={verticalVariants}
      >
        <Projects />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={verticalVariants}
      >
        <Skills />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={verticalVariants}
      >
        <Experience/>
      </motion.div>
    </div>
  );
}
