// Site-wide settings: the single source of truth for values used on many pages.
// Pages and components import from here, so changing a value here updates it everywhere.

export const SITE = {
  name: 'Ranbir Singh Narang',
  title: 'Ranbir Singh Narang', // shown in the browser tab
  role: 'Software Engineering Lead',
  description:
    "I am Ranbir Singh Narang, a Software Engineering Lead, building with Cloud and AI.",
  // The live address. Switch to the custom domain at launch (build plan 12.1).
  url: 'https://ranbirnarang.cloudflare-yeah724.workers.dev',
  locale: 'en-CA',
} as const;

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/kanubir' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ranbirsinghnarang' },
] as const;

// The order here is the order of links in the site navigation.
export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
] as const;

// Contact form: Formspree receives submissions and emails them to me. The endpoint is public by
// design (it has to be in the page's HTML), so it's not a secret.
export const CONTACT = {
  formEndpoint: 'https://formspree.io/f/xyekkjeo',
} as const;
