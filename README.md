Rudra Portfolio

Personal portfolio website of Rudra, a student and software developer from Surat, Gujarat, India.

Live site: https://portfolio-rudra-58.vercel.app

Features
Responsive single-page design (mobile, tablet, desktop)
Smooth scroll animations with Framer Motion
Sections: Hero, About, Services, Projects, Contact, Footer
Contact section with phone, Gmail, WhatsApp, GitHub, Instagram and location
Copy buttons for phone number and email
Contact form (sends through Web3Forms, or opens the mail app if no key is set)
Footer social links
Tech Stack
Technology	Use
React 18	UI components
TypeScript	Type safety
Vite	Dev server and build
Tailwind CSS	Styling
Framer Motion	Animations
Lucide React	Icons
Getting Started

You need Node.js installed.

bash
# 1. Clone the repo
git clone https://github.com/patelrudra0106-art/Portfolio.git
cd Portfolio

# 2. Install packages
npm install

# 3. Start the dev server
npm run dev

Open the local link shown in the terminal (usually http://localhost:5173).

Scripts
Command	What it does
npm run dev	Start the development server
npm run build	Check types and create a production build in dist/
npm run preview	Preview the production build locally
Project Structure
src/
  components/   Page sections and small UI parts
  data/         contact.ts (contact details), projects.ts (project list)
  App.tsx       Page layout
  index.css     Global styles
Customize
Contact details: edit src/data/contact.ts.
Contact form: get a free access key from web3forms.com and paste it in formAccessKey in src/data/contact.ts.
Projects: edit src/data/projects.ts.
Deploy

The site is deployed on Vercel. Every push to the main branch redeploys it automatically.

Contact
Email: patelrudra0106@gmail.com
GitHub: patelrudra0106-art
Instagram: @rudra011028
