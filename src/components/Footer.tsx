import { Github, Instagram, Mail, MessageCircle, LucideIcon } from 'lucide-react';
import { contact } from '../data/contact';

const footerLinks: { label: string; href: string; Icon: LucideIcon; external: boolean }[] = [
  { label: 'GitHub', href: contact.github, Icon: Github, external: true },
  { label: 'Instagram', href: contact.instagram, Icon: Instagram, external: true },
  { label: 'WhatsApp', href: contact.whatsappHref, Icon: MessageCircle, external: true },
  { label: 'Email', href: `mailto:${contact.email}`, Icon: Mail, external: false },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/15 px-5 py-10 sm:px-8 md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-light uppercase tracking-wide text-xs sm:text-sm text-[#D7E2EA]/60">
          &copy; {new Date().getFullYear()} Rudra
        </p>
        <ul className="flex items-center gap-3">
          {footerLinks.map(({ label, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D7E2EA]/60 text-[#D7E2EA]
                  transition-colors duration-200 hover:bg-[#D7E2EA]/10
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
