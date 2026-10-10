import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface WordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word = ({ word, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
    </motion.span>
  );
};

export const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p ref={paragraphRef} className={className}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = (index + 1) / words.length;
        return (
          <Fragment key={index}>
            <Word word={word} range={[start, end]} progress={scrollYProgress} />
            {index < words.length - 1 && ' '}
          </Fragment>
        );
      })}
    </p>
  );
};
