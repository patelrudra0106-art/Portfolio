interface SkeletonProps {
  className?: string;
}

// A placeholder block with a moving highlight. Size it with className so it
// occupies the same box as the content it stands in for.
export const Skeleton = ({ className = '' }: SkeletonProps) => (
  <div aria-hidden="true" className={`relative overflow-hidden bg-[#D7E2EA]/10 ${className}`}>
    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-[#D7E2EA]/15 to-transparent motion-reduce:animate-none" />
  </div>
);
