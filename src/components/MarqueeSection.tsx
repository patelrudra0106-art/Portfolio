import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';

const MARQUEE_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

// How far (px) each row drifts over the section's scroll range.
const DRIFT = 240;

interface MarqueeRowProps {
  images: string[];
  progress: MotionValue<number>;
  reverse?: boolean;
}

const MarqueeRow = ({ images, progress, reverse = false }: MarqueeRowProps) => {
  const reduceMotion = useReducedMotion();
  const drift = useTransform(progress, [0, 1], reverse ? [DRIFT, -DRIFT] : [-DRIFT, DRIFT]);
  const tripled = [...images, ...images, ...images];

  return (
    // Outer shift = one full copy of the images, so the drift never exposes an empty edge.
    <div className="w-max -translate-x-1/3" aria-hidden="true">
      <motion.div className="flex w-max gap-3" style={{ x: reduceMotion ? 0 : drift }}>
        {tripled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            width={420}
            height={270}
            className="aspect-[420/270] w-[220px] flex-shrink-0 rounded-xl object-cover sm:w-[320px] sm:rounded-2xl lg:w-[420px]"
          />
        ))}
      </motion.div>
    </div>
  );
};

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-16 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      aria-label="Project showcase marquee"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={MARQUEE_IMAGES.slice(0, 11)} progress={scrollYProgress} />
        <MarqueeRow images={MARQUEE_IMAGES.slice(11)} progress={scrollYProgress} reverse />
      </div>
    </section>
  );
};
