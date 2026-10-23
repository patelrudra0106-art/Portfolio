import { Github, Instagram, Mail, MapPin, MessageCircle, Phone, LucideIcon } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { CopyButton } from './CopyButton';
import { ContactForm } from './ContactForm';
import { contact } from '../data/contact';

interface ContactLink {
  label: string;
  value: string;
  Icon: LucideIcon;
  href?: string;
  external?: boolean;
  copyText?: string;
}

const links: ContactLink[] = [
  { label: 'Phone', value: contact.phoneDisplay, Icon: Phone, href: contact.phoneHref, copyText: contact.phoneRaw },
  { label: 'Gmail', value: contact.email, Icon: Mail, href: `mailto:${contact.email}`, copyText: contact.email },
  { label: 'WhatsApp', value: contact.phoneDisplay, Icon: MessageCircle, href: contact.whatsappHref, external: true },
  { label: 'GitHub', value: 'patelrudra0106-art', Icon: Github, href: contact.github, external: true },
  { label: 'Instagram', value: '@rudra011028', Icon: Instagram, href: contact.instagram, external: true },
  { label: 'Location', value: contact.location, Icon: MapPin },
];

const cardClass =
  'flex min-w-0 flex-1 items-center gap-4 text-[#D7E2EA]';
const focusClass =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]';

const CardBody = ({ label, value, Icon }: Pick<ContactLink, 'label' | 'value' | 'Icon'>) => (
  <>
    <Icon className="h-7 w-7 flex-shrink-0 sm:h-9 sm:w-9" aria-hidden="true" />
    <span className="min-w-0">
      <span className="block font-light uppercase tracking-wider text-xs sm:text-sm text-[#D7E2EA]/60">{label}</span>
      <span className="block font-medium break-all text-base sm:text-lg md:text-xl">{value}</span>
    </span>
  </>
);

export const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-6 sm:mb-8">
            Get in Touch
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} y={20} duration={0.7}>
          <p className="mx-auto mb-12 max-w-xl text-center font-light text-[#D7E2EA] text-[clamp(1rem,2vw,1.35rem)] sm:mb-16">
            Have a project or an idea? Let&apos;s talk.
          </p>
        </FadeIn>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {links.map(({ label, value, Icon, href, external, copyText }, index) => (
            <li key={label}>
              <FadeIn delay={index * 0.08} y={30} duration={0.7}>
                <div className="flex items-center gap-3 rounded-[28px] border-2 border-[#D7E2EA] p-4 sm:rounded-[40px] sm:p-6">
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={`${cardClass} rounded-full ${focusClass} hover:opacity-80 transition-opacity duration-200`}
                    >
                      <CardBody label={label} value={value} Icon={Icon} />
                    </a>
                  ) : (
                    <div className={cardClass}>
                      <CardBody label={label} value={value} Icon={Icon} />
                    </div>
                  )}
                  {copyText && <CopyButton text={copyText} label={label.toLowerCase()} />}
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>

        <FadeIn delay={0.1} y={30} duration={0.7}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
};
