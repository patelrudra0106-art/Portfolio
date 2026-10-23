import { FadeIn } from './FadeIn';
import { contact } from '../data/contact';

const services = [
  { title: 'Landing Pages', text: 'Fast, responsive pages for cafes, travel companies and other businesses.' },
  { title: 'Web Applications', text: 'Full-stack apps built with React, Node.js and Supabase or MongoDB.' },
  { title: 'Desktop Tools', text: 'Python and Windows programs that automate everyday tasks.' },
  { title: 'Interactive Projects', text: 'Games and interactive experiences, such as a Python space shooter.' },
];

const steps = [
  { title: 'Tell me about your idea', text: 'Send a message with what you want to build and any deadline you have.' },
  { title: 'Agree on the scope', text: 'We decide on features and design before any work starts.' },
  { title: 'Build and review', text: 'I build the project in stages and show you progress along the way.' },
  { title: 'Launch and walk through', text: 'The project goes live, and I explain how it works.' },
];

const faqs = [
  {
    q: 'How do I start a project?',
    a: 'Send me a message through the contact form or on WhatsApp. Tell me what you want to build and when you need it.',
  },
  {
    q: 'How is pricing decided?',
    a: 'Pricing depends on the scope of the project. After we talk, I will send a quote that lists what is included.',
  },
  {
    q: 'How long does a project take?',
    a: 'It depends on the size of the project. A landing page takes less time than a full web application. I will give you a timeline once we agree on the scope.',
  },
  {
    q: 'What technologies does Patel Rudra use?',
    a: 'Patel Rudra works with React, TypeScript, Node.js, Tailwind CSS, Supabase, MongoDB, Firebase, REST APIs and Python.',
  },
  {
    q: 'Where is Patel Rudra based?',
    a: 'Patel Rudra is based in Surat, Gujarat, India.',
  },
  {
    q: 'Can you build a landing page for my business?',
    a: 'Yes. Landing pages are one of the services offered. Send a message with your business type and what you want the page to do.',
  },
];

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]';

export const HireSection = () => (
  <section
    id="hire"
    aria-labelledby="hire-heading"
    className="bg-[#0C0C0C] border-t border-[#D7E2EA]/15 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
  >
    <div className="mx-auto max-w-5xl">
      <FadeIn delay={0} y={20} duration={0.8}>
        <div>
        <h2
          id="hire-heading"
          className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(2.5rem,9vw,120px)] text-[#D7E2EA] mb-6"
        >
          Work With Me
        </h2>
        <p className="mx-auto max-w-2xl text-center text-[#D7E2EA]/80 font-light leading-relaxed text-base sm:text-lg mb-16">
          I build web applications, landing pages and desktop tools. If you have an idea or a project in mind,
          send me a message and we can talk about what you need.
        </p>
        </div>
      </FadeIn>

      <ul className="grid gap-5 sm:grid-cols-2">
        {services.map(({ title, text }) => (
          <li key={title} className="rounded-[24px] border border-[#D7E2EA]/20 p-6 md:p-8">
            <h3 className="text-[#D7E2EA] font-medium uppercase tracking-wide text-lg sm:text-xl mb-2">{title}</h3>
            <p className="text-[#D7E2EA]/80 font-light leading-relaxed text-sm sm:text-base">{text}</p>
          </li>
        ))}
      </ul>

      <h3 className="mt-20 mb-8 text-center text-[#D7E2EA] font-medium uppercase tracking-wider text-lg sm:text-xl">
        How it works
      </h3>
      <ol className="grid gap-5 md:grid-cols-4">
        {steps.map(({ title, text }, i) => (
          <li key={title} className="rounded-[24px] border border-[#D7E2EA]/20 p-6">
            <span className="block text-[#D7E2EA]/60 font-black text-3xl mb-3">{String(i + 1).padStart(2, '0')}</span>
            <h4 className="text-[#D7E2EA] font-medium mb-2">{title}</h4>
            <p className="text-[#D7E2EA]/80 font-light leading-relaxed text-sm">{text}</p>
          </li>
        ))}
      </ol>

      <div className="mx-auto mt-20 max-w-3xl">
        <h3 className="mb-6 text-center text-[#D7E2EA] font-medium uppercase tracking-wider text-lg sm:text-xl">
          Questions
        </h3>
        {faqs.map(({ q, a }) => (
          <details key={q} className="group border-b border-[#D7E2EA]/20 py-5">
            <summary
              className={`flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-[#D7E2EA] font-medium text-base sm:text-lg [&::-webkit-details-marker]:hidden ${focusRing}`}
            >
              {q}
              <span aria-hidden="true" className="text-2xl leading-none transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-[#D7E2EA]/80 font-light leading-relaxed">{a}</p>
          </details>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#contact"
          className={`inline-flex items-center justify-center rounded-full bg-[#D7E2EA] px-8 py-3 font-medium uppercase tracking-widest text-[#0C0C0C] transition-opacity duration-200 hover:opacity-80 ${focusRing}`}
        >
          Send a message
        </a>
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${focusRing}`}
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </section>
);
