import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { caseStudies } from '../data/caseStudies';
import { ProjectLinkButton } from '../components/ProjectLinkButton';
import { Footer } from '../components/Footer';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const SITE = 'https://portfolio-rudra-58.vercel.app';

export const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const study = project ? caseStudies[project.slug] : undefined;

  useDocumentMeta({
    title: project && study ? `${project.title} | Case Study | Patel Rudra` : 'Project not found | Patel Rudra',
    description: study ? study.summary : 'This project page could not be found.',
    canonical: `${SITE}/projects/${slug ?? ''}`,
  });

  const backLink = (
    <a
      href="/#projects"
      className="inline-flex text-[#D7E2EA]/80 uppercase tracking-wider text-sm hover:text-[#D7E2EA] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] rounded-md"
    >
      &larr; Back to projects
    </a>
  );

  if (!project || !study) {
    return (
      <div className="main-wrapper min-h-screen">
        <main className="px-5 sm:px-8 md:px-10 pt-16 pb-20">
          <div className="mx-auto max-w-3xl">
            {backLink}
            <h1 className="mt-10 text-[#D7E2EA] font-black uppercase tracking-tight text-[clamp(2rem,6vw,3.5rem)]">
              Project not found
            </h1>
            <p className="mt-4 text-[#D7E2EA]/80 font-light">The project you are looking for does not exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const sectionHeading = 'mb-4 text-[#D7E2EA] font-medium uppercase tracking-wide text-xl sm:text-2xl';

  return (
    <div className="main-wrapper min-h-screen">
      <main className="px-5 sm:px-8 md:px-10 pt-10 pb-20">
        <article className="mx-auto max-w-3xl">
          {backLink}

          <p className="mt-10 text-[#D7E2EA]/60 uppercase tracking-wider text-sm">{project.category}</p>
          <h1 className="mt-3 text-[#D7E2EA] font-black uppercase tracking-tight leading-tight text-[clamp(2.25rem,7vw,4.5rem)]">
            {project.title}
          </h1>
          <p className="mt-6 text-[#D7E2EA]/90 font-light leading-relaxed text-lg">{study.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.url && (
              <ProjectLinkButton href={project.url} label={project.title} text="Live Project" />
            )}
            {project.repoUrl && (
              <ProjectLinkButton href={project.repoUrl} label={project.title} text="Source Code" icon="github" />
            )}
          </div>

          <section aria-labelledby="overview-heading" className="mt-14">
            <h2 id="overview-heading" className={sectionHeading}>Overview</h2>
            {study.paragraphs.map((text) => (
              <p key={text} className="mb-4 text-[#D7E2EA]/85 font-light leading-relaxed">
                {text}
              </p>
            ))}
          </section>

          <section aria-labelledby="features-heading" className="mt-12">
            <h2 id="features-heading" className={sectionHeading}>Key features</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#D7E2EA]/85 font-light leading-relaxed">
              {study.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="built-heading" className="mt-12">
            <h2 id="built-heading" className={sectionHeading}>Built with</h2>
            <ul aria-label="Tech stack" className="flex flex-wrap gap-2">
              {study.built.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-xs sm:text-sm uppercase tracking-wide text-[#D7E2EA]/80"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};
