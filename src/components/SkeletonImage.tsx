import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Skeleton } from './Skeleton';

interface SkeletonImageProps {
  src: string;
  alt: string;
  // Known size from the image data. Reserves the box before the file arrives.
  width?: number;
  height?: number;
  // Used only when width/height are unknown. The box then takes the image's own
  // proportions once it loads, so pass real dimensions wherever you can.
  fallbackRatio?: string;
  // fill: img covers the box (box must have a size). Otherwise the img sets its own height.
  fill?: boolean;
  // Classes for the outer box (size, margin, radius, opacity, etc.)
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  decorative?: boolean;
}

export const SkeletonImage = ({
  src,
  alt,
  width,
  height,
  fallbackRatio = '1 / 1',
  fill = true,
  className = '',
  loading = 'lazy',
  fetchPriority,
  decorative = false,
}: SkeletonImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // An image already in the browser cache can finish before onLoad is attached.
  const imgRef = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete && node.naturalWidth > 0) setLoaded(true);
  }, []);

  const ratio = width && height ? `${width} / ${height}` : fallbackRatio;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <AnimatePresence>
        {!loaded && !failed && (
          <motion.div
            key="skeleton"
            className="absolute inset-0"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Skeleton className="h-full w-full" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={fill ? 'absolute inset-0' : 'relative'}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img
          ref={imgRef}
          src={src}
          alt={decorative ? '' : alt}
          aria-hidden={decorative || undefined}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          fetchPriority={fetchPriority}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={fill ? 'h-full w-full object-cover' : 'block h-auto w-full'}
        />
      </motion.div>
    </div>
  );
};
