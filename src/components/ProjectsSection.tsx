import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectCardStack } from './ProjectCardStack';

export const ProjectsSection = () => (
  <section
    id="projects"
    className="relative bg-[#0C0C0C] rounded-t-[28px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-8 md:px-10 pb-20"
  >
    <div className="max-w-5xl mx-auto">
      <motion.h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center
          text-[clamp(3rem,12vw,160px)] pt-10 mb-10 sm:mb-14 md:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '100px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Projects
      </motion.h2>

      <ProjectCardStack projects={projects} />
    </div>
  </section>
);
