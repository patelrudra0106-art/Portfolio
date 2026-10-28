import { useState } from 'react';
import { animate, motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';
import { ProjectImage } from './ProjectImage';

const VISIBLE_CARDS = 3;
const SWIPE_DISTANCE = 100; // px dragged before a release counts as a swipe
const SWIPE_VELOCITY = 500; // px/s flick that counts as a swipe even when short
const FLY_OUT = 700;        // px a dismissed card travels off screen

type Direction = 1 | -1;

const actionClass =
  'inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-[#D7E2EA] px-4 py-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]';

interface ProjectCardStackProps {
  projects: Project[];
}

export const ProjectCardStack = ({ projects }: ProjectCardStackProps) => {
  // queue[0] is the card on top. Dismissed cards move to the back.
  const [queue, setQueue] = useState(projects);
  const [busy, setBusy] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-14, 0, 14]);

  const dismiss = async (direction: Direction) => {
    setBusy(true);
    await animate(x, direction * FLY_OUT, { duration: 0.35, ease: 'easeIn' });
    x.set(0);
    setQueue((q) => [...q.slice(1), q[0]]);
    setBusy(false);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info;
    const passed = Math.abs(offset.x) > SWIPE_DISTANCE || Math.abs(velocity.x) > SWIPE_VELOCITY;
    if (passed) {
      const direction = (offset.x !== 0 ? Math.sign(offset.x) : Math.sign(velocity.x)) as Direction;
      dismiss(direction);
    } else {
      animate(x, 0, { type: 'spring', stiffness: 500, damping: 40 });
    }
  };

  // Render the back cards first so the front card paints on top.
  const cards = queue
    .slice(0, VISIBLE_CARDS)
    .map((project, pos) => {
      const isFront = pos === 0;
      return (
        <motion.div
          key={project.id}
          aria-hidden={!isFront}
          drag={isFront && !busy ? 'x' : false}
          onDragEnd={isFront ? handleDragEnd : undefined}
          style={{
            zIndex: VISIBLE_CARDS - pos,
            ...(isFront ? { x, rotate, touchAction: 'pan-y' } : {}),
          }}
          animate={{ scale: 1 - pos * 0.05, y: pos * 16 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`absolute inset-0 flex flex-col overflow-hidden rounded-[28px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[40px] sm:p-6 ${
            isFront ? 'cursor-grab active:cursor-grabbing select-none' : ''
          }`}
        >
          {project.images ? (
            <ProjectImage
              image={project.images.col2Img}
              className="h-[50%] w-full shrink-0 pointer-events-none"
              radius="rounded-[18px] sm:rounded-[28px]"
            />
          ) : (
            <div className="flex h-[50%] w-full shrink-0 items-center justify-center rounded-[18px] border border-[#D7E2EA]/20 text-[clamp(4rem,20vw,7rem)] font-black leading-none text-[#D7E2EA]/20">
              {project.number}
            </div>
          )}

          <div className="mt-4 flex min-h-0 flex-1 flex-col">
            <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60">{project.category}</span>
            <h3 className="mt-1 break-words text-xl sm:text-2xl font-black uppercase leading-tight tracking-tight text-[#D7E2EA]">
              {project.title}
            </h3>
            {project.description && (
              <p className="mt-2 line-clamp-2 text-sm font-light leading-relaxed text-[#D7E2EA]/70">
                {project.description}
              </p>
            )}

            {/* Real links and buttons, so they work on mobile and desktop alike.
                Only the front card has them, so the back cards can't be tabbed to. */}
            {isFront && (
              <div className="mt-auto flex flex-wrap gap-2 pt-3">
                <Link to={`/projects/${project.slug}`} className={actionClass}>
                  View case study
                </Link>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live project: ${project.title}`}
                    className={actionClass}
                  >
                    Live Project
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Source code: ${project.title}`}
                    className={actionClass}
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    Source Code
                  </a>
                )}
                {!project.url && (
                  <span className="inline-flex items-center rounded-full border-2 border-[#D7E2EA]/40 px-4 py-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">
                    {project.badge ?? 'In Development'}
                  </span>
                )}
              </div>
            )}
          </div>
        </motion.div>
      );
    })
    .reverse();

  return (
    <div className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-xl">
      <div className="relative h-[min(72svh,600px)]">{cards}</div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-light text-[#D7E2EA]/60">Swipe or tap Next</span>
        <button
          type="button"
          onClick={() => !busy && dismiss(-1)}
          disabled={busy}
          className="rounded-full border-2 border-[#D7E2EA]/40 px-6 py-2.5 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA] hover:text-[#0C0C0C] disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
