import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FadeIn } from './FadeIn';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hire', href: '#hire' },
  { label: 'Contact', href: '#contact' },
];

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <FadeIn delay={0} y={-20} duration={0.8}>
      <nav aria-label="Main" className="relative z-20 px-6 md:px-10 pt-6 md:pt-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
          <a
            href="#"
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#D7E2EA] font-black text-sm text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${focusRing}`}
          >
            <span aria-hidden="true">PR</span>
            <span className="sr-only">Patel Rudra, back to top</span>
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] md:hidden ${focusRing}`}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>

          <ul className="hidden md:flex flex-1 justify-end gap-8 lg:gap-10">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-lg hover:opacity-70 transition-opacity duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul
          id="mobile-menu"
          className={`md:hidden mx-auto mt-4 max-w-5xl flex-col gap-1 rounded-[20px] border border-[#D7E2EA]/20 bg-[#0C0C0C] p-3 ${open ? 'flex' : 'hidden'}`}
        >
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-[12px] px-4 py-3 text-[#D7E2EA] font-medium uppercase tracking-wider hover:bg-[#D7E2EA]/10"
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
