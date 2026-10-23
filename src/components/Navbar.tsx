import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // While the drawer is open: lock page scroll, close on Escape, keep Tab inside the drawer,
  // and return focus to the menu button when it closes.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !drawerRef.current) return;

      const items = drawerRef.current.querySelectorAll<HTMLElement>('a[href], button');
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      toggleRef.current?.focus();
    };
  }, [open]);

  // Close the drawer if the window grows to the desktop layout, so the page is not left scroll-locked
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)');
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener('change', onChange);
    return () => desktop.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      <FadeIn delay={0} y={-20} duration={0.8}>
        <nav aria-label="Main" className="relative z-20 px-6 md:px-10 pt-6 md:pt-8">
          <div className="mx-auto flex max-w-5xl items-center justify-end gap-6">
            <ul className="hidden md:flex gap-8 lg:gap-10">
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

            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] md:hidden ${focusRing}`}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </nav>
      </FadeIn>

      {/* Rendered in the body so it stays fixed to the screen, outside the animated wrapper above */}
      {createPortal(
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                key="overlay"
                aria-hidden="true"
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-40 bg-black/60 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                key="drawer"
                id="mobile-menu"
                ref={drawerRef}
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                className="fixed inset-y-0 left-0 z-50 flex w-[80vw] max-w-xs flex-col border-r border-[#D7E2EA]/20 bg-[#0C0C0C] p-6 md:hidden"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              >
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] ${focusRing}`}
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <ul className="mt-8 flex flex-col gap-2">
                  {navLinks.map(({ label, href }, i) => (
                    <li key={label}>
                      <a
                        ref={i === 0 ? firstLinkRef : undefined}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-[12px] px-4 py-3 text-[#D7E2EA] font-medium uppercase tracking-wider hover:bg-[#D7E2EA]/10 ${focusRing}`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};
