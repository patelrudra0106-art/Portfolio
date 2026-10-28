import { ProjectImage as ProjectImageData } from '../data/projects';
import { SkeletonImage } from './SkeletonImage';

interface ProjectImageProps {
  image: ProjectImageData;
  // Sets the box size. The skeleton fills this same box, so nothing shifts when the image arrives.
  className: string;
  radius?: string;
}

const DEFAULT_RADIUS = 'rounded-[18px] sm:rounded-[36px] md:rounded-[60px]';

export const ProjectImage = ({ image, className, radius = DEFAULT_RADIUS }: ProjectImageProps) => (
  <SkeletonImage
    src={image.src}
    alt={image.alt}
    width={image.width}
    height={image.height}
    className={`${radius} ${className}`}
  />
);
