export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  type: 'Client' | 'Personal';
  description?: string;
  url?: string;   // live site: shows a "Live Project" button
  badge?: string; // shown instead of the button when there is no url
  images?: {      // screenshots: omit to show a card without images
    col1Img1: ProjectImage;
    col1Img2: ProjectImage;
    col2Img: ProjectImage;
  };
}

export const projects: Project[] = [
  {
    id: '01',
    number: '01',
    title: 'Brew & Bean',
    category: 'Landing Page / Web Development',
    type: 'Personal',
    description: 'A cafe landing page built with React, Vite, Tailwind CSS and Framer Motion.',
    url: 'https://cafe-landing-page-ashy.vercel.app',
    images: {
      col1Img1: { src: '/projects/01-1.webp', alt: 'Brew & Bean menu page with coffee, tea and breakfast items', width: 1400, height: 886 },
      col1Img2: { src: '/projects/01-2.webp', alt: 'Brew & Bean visit page with opening hours and address', width: 1400, height: 886 },
      col2Img: { src: '/projects/01-3.webp', alt: 'Brew & Bean homepage with a coffee-making photo and heading', width: 1400, height: 882 },
    },
  },
  {
    id: '02',
    number: '02',
    title: 'Travel Website Landing Page',
    category: 'Landing Page / Web Development',
    type: 'Personal',
    description: 'A modern and responsive travel agency landing page built with React, TypeScript, Vite, and Tailwind CSS, featuring travel destinations, services, booking steps, testimonials, and a premium travel-focused design.',
    url: 'https://travel-website-landing-page-iota.vercel.app/',
    images: {
      col1Img1: { src: '/projects/02-1.webp', alt: 'Travel landing page services section with weather, flights, events and customization', width: 1400, height: 874 },
      col1Img2: { src: '/projects/02-2.webp', alt: 'Travel landing page booking steps with a sample trip card', width: 1400, height: 874 },
      col2Img: { src: '/projects/02-3.webp', alt: 'Travel landing page hero with a traveller sitting on a suitcase', width: 1400, height: 874 },
    },
  },
  {
    id: '03',
    number: '03',
    title: 'SPACE-SURVIVOR',
    category: 'Game / Python',
    type: 'Personal',
    description: 'A high-performance, roguelike space shooter built with Python and Pygame, featuring dynamic difficulty scaling, meta-progression, and an event-driven modular architecture.',
    badge: 'Desktop Game',
    images: {
      col1Img1: { src: '/projects/03-1.webp', alt: 'SPACE-SURVIVOR main menu with power-up and control instructions', width: 1400, height: 844 },
      col1Img2: { src: '/projects/03-2.webp', alt: 'SPACE-SURVIVOR game over screen showing score and tips', width: 1400, height: 808 },
      col2Img: { src: '/projects/03-3.webp', alt: 'SPACE-SURVIVOR gameplay with the player ship firing at enemy waves', width: 1400, height: 813 },
    },
  },
  {
    id: '04',
    number: '04',
    title: 'Nova AI Assistant',
    category: 'AI Assistant / Desktop App',
    type: 'Personal',
    description: 'Nova is a voice-controlled Windows assistant that opens apps, controls volume, sends WhatsApp messages, manages reminders, and answers questions with a Groq-hosted LLM.',
    badge: 'Windows App',
  },
];
