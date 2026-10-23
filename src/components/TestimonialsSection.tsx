import { FadeIn } from './FadeIn';
import { testimonials } from '../data/testimonials';

export const TestimonialsSection = () => {
  if (testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-[#0C0C0C] border-t border-[#D7E2EA]/15 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0} y={20} duration={0.8}>
          <h2
            id="testimonials-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(2.5rem,9vw,120px)] text-[#D7E2EA] mb-16"
          >
            Testimonials
          </h2>
        </FadeIn>
        <ul className="grid gap-6 md:grid-cols-2">
          {testimonials.map(({ quote, name, role }, i) => (
            <li key={`${name}-${i}`}>
              <figure className="h-full rounded-[24px] border border-[#D7E2EA]/20 p-6 md:p-8">
                <blockquote className="text-[#D7E2EA] font-light leading-relaxed text-base sm:text-lg">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm uppercase tracking-wide text-[#D7E2EA]/70">
                  <span className="font-medium text-[#D7E2EA]">{name}</span>, {role}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
