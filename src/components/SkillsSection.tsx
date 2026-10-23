import { FadeIn } from './FadeIn';

interface SkillGroup {
  label: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  { label: 'Languages', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java', 'Python', 'C', 'SQL'] },
  { label: 'Frameworks & Libraries', skills: ['React.js', 'Node.js', 'Tailwind CSS'] },
  { label: 'Backend & Databases', skills: ['REST APIs', 'Authentication', 'MongoDB', 'Firebase DB', 'Supabase'] },
  { label: 'Tools & Deployment', skills: ['GitHub', 'Vercel'] },
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-28 sm:pb-32 md:pb-40"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-12 sm:mb-16 md:mb-20">
            Full-Stack Skills
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-10 sm:gap-12">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.label} delay={index * 0.1} y={30} duration={0.7}>
              <div className="flex flex-col items-center gap-4 sm:gap-5">
                <h3 className="font-light uppercase tracking-widest text-center text-xs sm:text-sm text-[#D7E2EA]/60">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border-2 border-[#D7E2EA] px-5 py-2 text-sm font-medium text-[#D7E2EA] sm:px-7 sm:py-2.5 sm:text-base md:text-lg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
