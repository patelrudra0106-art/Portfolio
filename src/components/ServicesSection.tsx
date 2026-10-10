'use client';

import { FadeIn } from './FadeIn';

interface Service {
  number: string;
  name: string;
  description: string;
}

const services: Service[] = [
  {
    number: '01',
    name: '3D Modeling',
    description: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description: 'Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection = () => {
  return (
    <section 
      id="services" 
      className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center 
            text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        <div className="space-y-0" role="list">
          {services.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.1} y={30} duration={0.7}>
              <article 
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 py-8 sm:py-10 md:py-12 ${index < services.length - 1 ? 'border-b border-[#0C0C0C]/15' : ''}`}
                role="listitem"
              >
                <div className="flex-shrink-0 md:w-[clamp(6rem,14vw,11rem)]">
                  <span className="text-[#0C0C0C] font-black 
                    text-[clamp(3rem,9vw,8rem)] leading-none block text-left md:text-right">
                    {service.number}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#0C0C0C] font-medium uppercase 
                    text-[clamp(1rem,2.2vw,2.1rem)] leading-tight mb-2 sm:mb-3">
                    {service.name}
                  </h3>
                  <p className="text-[#0C0C0C]/60 font-light leading-relaxed max-w-2xl 
                    text-[clamp(0.95rem,1.6vw,1.25rem)]">
                    {service.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
