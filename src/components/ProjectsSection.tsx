import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { projects, Project } from '../data/projects';

const STACK_TOP = 16;   // px from viewport top where the first card pins
const STACK_STEP = 28;  // px each following card pins lower
const SCALE_STEP = 0.03;
// Pinning a card taller than the screen would hide its bottom, so only stack on tall viewports.
const STACK_QUERY = '(min-height: 760px)';

const useCanStack = () => {
  const [canStack, setCanStack] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(STACK_QUERY).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(STACK_QUERY);
    const update = () => setCanStack(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return canStack;
};

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  stack: boolean;
}

const ProjectCard = ({ project, index, totalCards, progress, stack }: ProjectCardProps) => {
  const targetScale = 1 - (totalCards - 1 - index) * SCALE_STEP;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);
  const isLast = index === totalCards - 1;

  return (
    <motion.div
      style={stack ? { scale, top: STACK_TOP + index * STACK_STEP, transformOrigin: 'center top' } : undefined}
      className={`mx-auto w-full max-w-5xl ${stack ? 'sticky z-20' : ''} ${
        isLast ? '' : stack ? 'mb-[14svh]' : 'mb-8'
      }`}
    >
      <div className="relative rounded-[28px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8">
        {/* Top row */}
        <div className="mb-5 flex flex-col gap-4 md:mb-8 md:flex-row md:items-start md:justify-between md:gap-6">
          <div className="flex min-w-0 items-baseline gap-3 md:flex-1 md:flex-col md:items-center md:gap-0">
            <span className="text-[#D7E2EA] font-black text-[clamp(2.5rem,10vw,8.75rem)] leading-none tracking-tight">
              {project.number}
            </span>
            <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base md:mt-1">
              {project.category}
            </span>
          </div>

          <div className="min-w-0 md:flex-1">
            <h3 className="text-[#D7E2EA] font-black uppercase tracking-tight leading-tight break-words text-[clamp(1.5rem,4vw,3.5rem)] mb-1 md:mb-2">
              {project.title}
            </h3>
            <span className="text-[#D7E2EA]/60 font-light uppercase tracking-wide text-sm sm:text-base">
              {project.type}
            </span>
            {project.description && (
              <p className="mt-3 text-[#D7E2EA]/80 font-light leading-relaxed text-sm sm:text-base max-w-xl">
                {project.description}
              </p>
            )}
          </div>

          {project.url ? (
            <LiveProjectButton href={project.url} className="w-full md:w-auto md:flex-shrink-0" />
          ) : (
            <span className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#D7E2EA]/40 px-8 py-3 sm:px-10 sm:py-3.5 text-[#D7E2EA]/60 font-medium uppercase tracking-widest text-sm sm:text-base md:w-auto md:flex-shrink-0">
              {project.badge ?? 'In Development'}
            </span>
          )}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4">
          <div className="col-span-2 flex flex-col gap-2 sm:gap-4">
            <img
              src={project.images.col1Img1}
              alt={`${project.title} - view 1`}
              className="w-full rounded-[18px] sm:rounded-[36px] md:rounded-[60px] object-cover h-[clamp(90px,16vw,230px)]"
              loading="lazy"
            />
            <img
              src={project.images.col1Img2}
              alt={`${project.title} - view 2`}
              className="w-full rounded-[18px] sm:rounded-[36px] md:rounded-[60px] object-cover h-[clamp(110px,22vw,340px)]"
              loading="lazy"
            />
          </div>

          <div className="col-span-3">
            <img
              src={project.images.col2Img}
              alt={`${project.title} - main view`}
              className="w-full h-full min-h-[200px] rounded-[18px] sm:rounded-[36px] md:rounded-[60px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const stack = useCanStack();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[28px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-8 md:px-10 pb-20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center
            text-[clamp(3rem,12vw,160px)] pt-10 mb-10 sm:mb-20 md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Project
        </motion.h2>

        <div ref={listRef} className="relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projects.length}
              progress={scrollYProgress}
              stack={stack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
