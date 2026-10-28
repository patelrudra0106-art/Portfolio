import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { SkeletonImage } from './SkeletonImage';

const DECOR_IMAGES = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  p59: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

const ABOUT_TEXT = "Patel Rudra is a full-stack web developer in Surat, Gujarat, who builds web applications with React, Node.js, Supabase and MongoDB. Still a student, Patel Rudra enjoys turning ideas into working products. My projects include a cafe landing page, a travel agency website, a space shooter game and a voice-controlled Windows assistant. Let's build something together!";

// Small + faded on phones so they never fight the text; full size from md.
const decorImg = 'w-full opacity-40 sm:opacity-100 pointer-events-none';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-svh flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}
        className="absolute top-[3%] left-[2%] md:left-[4%] w-[64px] sm:w-[120px] md:w-[170px] lg:w-[210px]">
        <SkeletonImage src={DECOR_IMAGES.moon} alt="" decorative fill={false} className={decorImg} />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}
        className="absolute bottom-[4%] left-[4%] sm:left-[6%] md:left-[10%] w-[56px] sm:w-[110px] md:w-[150px] lg:w-[180px]">
        <SkeletonImage src={DECOR_IMAGES.p59} alt="" decorative fill={false} className={decorImg} />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9}
        className="absolute top-[3%] right-[2%] md:right-[4%] w-[64px] sm:w-[120px] md:w-[170px] lg:w-[210px]">
        <SkeletonImage src={DECOR_IMAGES.lego} alt="" decorative fill={false} className={decorImg} />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9}
        className="absolute bottom-[4%] right-[4%] sm:right-[6%] md:right-[10%] w-[68px] sm:w-[120px] md:w-[170px] lg:w-[220px]">
        <SkeletonImage src={DECOR_IMAGES.group} alt="" decorative fill={false} className={decorImg} />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center text-center z-10 max-w-3xl">
        <FadeIn delay={0} y={40} duration={1}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] w-full">
            About Me
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={30} duration={0.8} className="w-full">
          <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
            <AnimatedText
              text={ABOUT_TEXT}
              className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] text-center"
            />
            <div className="pt-4">
              <ContactButton />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
