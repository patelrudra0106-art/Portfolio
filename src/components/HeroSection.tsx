import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { Navbar } from './Navbar';

const PORTRAIT_URL = 'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-svh flex-col overflow-x-clip lg:h-svh lg:min-h-[640px]">
      <Navbar />

      <FadeIn delay={0.15} y={40} duration={1}>
        <div className="overflow-hidden w-full px-6 md:px-10 mt-6 sm:mt-4 md:-mt-5">
          <h1 className="hero-heading hero-title font-black uppercase tracking-tight leading-none whitespace-nowrap">
            Hi, i&apos;m rudra
          </h1>
        </div>
      </FadeIn>

      {/* Portrait: in the flow (centered, under the title) below lg; pinned to the bottom centre from lg up.
          Positioning classes live on FadeIn so the animated wrapper is the positioned element. */}
      <FadeIn
        delay={0.6}
        y={30}
        duration={1}
        className="relative z-10 mx-auto mt-8 w-[min(72vw,340px)] sm:w-[360px] md:w-[420px]
          lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:w-[420px] xl:w-[520px]"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img
            src={PORTRAIT_URL}
            alt="Rudra, full-stack web developer from Surat, Gujarat"
            className="w-full h-auto rounded-[28px] sm:rounded-[50px] md:rounded-[60px]"
            loading="eager"
            fetchPriority="high"
          />
        </Magnet>
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 pt-8 pb-8 text-center
        sm:flex-row sm:items-end sm:justify-between sm:text-left
        md:px-10 md:pb-10 lg:flex-1 lg:pt-0">
        <FadeIn delay={0.35} y={20} duration={0.8}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
            text-[clamp(0.8rem,1.4vw,1.25rem)] max-w-[260px] sm:max-w-[220px] xl:max-w-[260px]">
            a full-stack web developer from surat, gujarat building react and node.js apps
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} duration={0.8}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
