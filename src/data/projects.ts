export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  type: 'Client' | 'Personal';
  description?: string;
  url?: string;   // live site; the card shows a "Live Project" button when set
  badge?: string; // label shown instead of the button when there is no url
  images: {
    col1Img1: string;
    col1Img2: string;
    col2Img: string;
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
      col1Img1: '/projects/01-1.png',
      col1Img2: '/projects/01-2.png',
      col2Img: '/projects/01-3.png',
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
      col1Img1: '/projects/02-1.png',
      col1Img2: '/projects/02-2.png',
      col2Img: '/projects/02-3.png',
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
      col1Img1: '/projects/03-1.png',
      col1Img2: '/projects/03-2.png',
      col2Img: '/projects/03-3.png',
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
    images: {
      col1Img1: '/projects/04-1.png',
      col1Img2: '/projects/04-2.png',
      col2Img: '/projects/04-3.png',
    },
  },
];
