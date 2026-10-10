export const LiveProjectButton = ({ className = '' }: { className?: string }) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA]
        px-8 py-3 sm:px-10 sm:py-3.5
        text-[#D7E2EA] font-medium uppercase tracking-widest
        text-sm sm:text-base
        hover:bg-[#D7E2EA]/10
        transition-colors duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]
        ${className}
      `}
    >
      Live Project
    </button>
  );
};
