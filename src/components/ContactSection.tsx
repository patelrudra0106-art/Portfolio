import { Github, Instagram, Mail, Phone, LucideIcon } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { contact } from '../data/contact';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  Icon: LucideIcon;
  external: boolean;
}

const links: ContactLink[] = [
  { label: 'Phone', value: contact.phoneDisplay, href: contact.phoneHref, Icon: Phone, external: false },
  { label: 'Gmail', value: contact.email, href: `mailto:${contact.email}`, Icon: Mail, external: false },
  { label: 'GitHub', value: 'patelrudra0106-art', href: contact.github, Icon: Github, external: true },
  { label: 'Instagram', value: '@rudra011028', href: contact.instagram, Icon: Instagram, external: true },
];

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-12 sm:mb-16 md:mb-20">
            Contact
          </h2>
        </FadeIn>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {links.map(({ label, value, href, Icon, external }, index) => (
            <li key={label}>
              <FadeIn delay={index * 0.1} y={30} duration={0.7}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-[28px] sm:rounded-[40px] border-2 border-[#D7E2EA] p-5 sm:p-7
                    text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
                >
                  <Icon className="h-7 w-7 flex-shrink-0 sm:h-9 sm:w-9" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-light uppercase tracking-wider text-xs sm:text-sm text-[#D7E2EA]/60">
                      {label}
                    </span>
                    <span className="block font-medium break-all text-base sm:text-lg md:text-xl">
                      {value}
                    </span>
                  </span>
                </a>
              </FadeIn>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-center font-light uppercase tracking-wide text-xs sm:text-sm text-[#D7E2EA]/50">
          &copy; {new Date().getFullYear()} Rudra
        </p>
      </div>
    </section>
  );
};
