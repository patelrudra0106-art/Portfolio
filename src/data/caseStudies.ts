export interface CaseStudy {
  summary: string;
  paragraphs: string[];
  features: string[];
  built: string[];
}

// Keyed by the project slug in projects.ts
export const caseStudies: Record<string, CaseStudy> = {
  "brew-and-bean": {
    "summary": "Brew & Bean is a cafe landing page built with React, Vite, Tailwind CSS and Framer Motion. It presents the cafe's menu, opening hours, location and ways to order.",
    "paragraphs": [
      "The page opens with a full-screen hero that shows the cafe's name, today's opening hours and two calls to action: explore the menu and visit the cafe.",
      "The menu is organised into categories, including coffee, tea, breakfast, desserts, cold drinks and snacks. Each item has a short description and a price in rupees, and visitors can filter the list by category.",
      "The visit section lists the address, opening hours, phone number and email, with buttons for directions and WhatsApp. A WhatsApp button stays visible while visitors scroll, so ordering help is always one tap away."
    ],
    "features": [
      "Hero section with opening hours and call-to-action buttons",
      "Menu filtered by category, with prices in rupees",
      "Visit section with address, hours, phone, email and directions",
      "Floating WhatsApp button for quick contact",
      "Navigation to Home, About, Menu, Gallery, Reviews and Contact"
    ],
    "built": [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion"
    ]
  },
  "travel-website-landing-page": {
    "summary": "A responsive travel agency landing page built with React, TypeScript, Vite and Tailwind CSS. It presents destinations, services, booking steps and testimonials.",
    "paragraphs": [
      "The hero introduces the agency with a headline, a short description, two calls to action and a highlighted top destination card with a rating.",
      "The services section explains what visitors can expect: real-time weather forecasts for a destination, convenient flight options, local events and festivals, and fully personalised itineraries.",
      "A three-step booking section walks visitors through choosing a destination, making a payment and reaching the airport on the selected date. A sample trip card shows how a booked trip is tracked with a progress bar. The design uses the sample brand name Jadoo."
    ],
    "features": [
      "Hero with a highlighted top destination and rating",
      "Services: weather, flights, local events and personalised itineraries",
      "Three-step booking process",
      "Sample trip card with a progress bar",
      "Navigation to Destinations, Hotels, Flights and Bookings",
      "Testimonials section"
    ],
    "built": [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS"
    ]
  },
  "space-survivor": {
    "summary": "SPACE-SURVIVOR is a roguelike space shooter built with Python and Pygame. It features dynamic difficulty, meta-progression and an event-driven modular architecture.",
    "paragraphs": [
      "Players survive waves of enemies in a bullet-hell style game. Aim and move with the mouse, shoot with a left click, dash with Shift, and pause or quit with Escape.",
      "The game has two modes, Level Mode and Endless Mode. Difficulty rises across 10 levels, and bosses appear as the challenge grows. Each kill restores some health, which keeps the fight going.",
      "Power-ups appear after 10 kills: health regeneration, a speed boost, faster bullets and stronger bullets. The code is organised into modules that communicate through events, so new features can be added without rewriting the whole game."
    ],
    "features": [
      "Level Mode and Endless Mode",
      "Power-ups: health regeneration, speed boost, fast bullets and strong bullets",
      "Mouse aiming and shooting",
      "Dash with Shift",
      "Dynamic difficulty scaling and meta-progression",
      "Event-driven modular code structure"
    ],
    "built": [
      "Python",
      "Pygame"
    ]
  },
  "nova-ai-assistant": {
    "summary": "Nova is a voice-controlled Windows assistant. It opens apps, controls volume, sends WhatsApp messages, manages reminders and answers questions with a Groq-hosted LLM.",
    "paragraphs": [
      "Nova listens for voice commands and carries out everyday tasks on a Windows computer, such as opening applications and adjusting the volume.",
      "It can send WhatsApp messages and manage reminders, so routine tasks can be handled by voice.",
      "For general questions, Nova sends the request to a large language model hosted on Groq and returns the answer."
    ],
    "features": [
      "Voice-controlled commands",
      "Open apps and control the volume",
      "Send WhatsApp messages",
      "Manage reminders",
      "Answer questions with a Groq-hosted LLM"
    ],
    "built": [
      "Voice control",
      "Groq LLM",
      "Windows"
    ]
  }
};
