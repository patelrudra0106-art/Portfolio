import { FadeIn } from './FadeIn';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  return (
    <FadeIn delay={0} y={-20} duration={0.8}>
      <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20">
        <ul className="flex justify-between gap-3 w-full max-w-4xl mx-auto">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider
                  text-xs sm:text-sm md:text-lg lg:text-[1.4rem]
                  hover:opacity-70 transition-opacity duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </FadeIn>
  );
};
