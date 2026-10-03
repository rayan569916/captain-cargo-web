import type { FaqItem, IconItem, NavLink, Stat, Step } from './types';

/** Company facts used across the site. Update here, not in templates. */
export const COMPANY = {
  name: 'Captain Cargo International',
  shortName: 'Captain Cargo',
  tagline: 'Your cargo, our priority',
  summary:
    'Captain Cargo International provides reliable global freight and logistics solutions, ensuring safe, timely and cost-effective cargo movement across borders.',
  /** Primary number — confirmed in the app and on the business card. */
  phone: { display: '054 376 4900', tel: '+966543764900', whatsapp: '0543764900' },
  phoneAlt: { display: '054 375 4900', tel: '+966543754900' },
  email: 'info@captaincargo.co',
  address: {
    line1: 'Khalidiya Tower 4, Floor 16',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    mapsUrl: 'https://maps.app.goo.gl/oVbd36k3z4L9JTHB6',
  },
  supportHours: '24/7',
  social: {
    whatsapp: 'https://wa.me/0543764900?text=Hello%2C%20I%20saw%20your%20ad%20and%20have%20a%20question.',
    instagram: 'https://www.instagram.com/captaincargoksa',
  },
} as const;

/** External product links — dummy values, replace before launch. */
export const LINKS: { playStore: string; appStore: string; agentLogin: string } = {
  /** TODO: replace with the real Google Play URL (…/details?id=<package id>). */
  playStore: 'https://play.google.com/store/apps/details?id=com.captaincargo.logisticsapp&pcampaignid=web_share',
  /** TODO: set if/when an iOS build is published; leave '' to hide the App Store button. */
  appStore: '',
  /** TODO: replace with the Cargo TMS login URL. */
  agentLogin: 'https://app.captaincargo.co/login',
};

export const NAV: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Mobile App', path: '/mobile-app' },
  { label: 'Cargo TMS', path: '/cargo-tms' },
  { label: 'Track', path: '/track' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

/** From the current About page. */
export const STATS: Stat[] = [
  { value: '10,000+', label: 'Shipments handled' },
  { value: '15+', label: 'Countries served' },
  { value: '8+', label: 'Years in logistics' },
  { value: '98%', label: 'Customer satisfaction' },
];

/** Destinations supported in the Captain Logistic app. */
export const DESTINATIONS: { country: string; code: string }[] = [
  { country: 'India', code: 'IN' },
  { country: 'Pakistan', code: 'PK' },
  { country: 'Nepal', code: 'NP' },
  { country: 'Bangladesh', code: 'BD' },
  { country: 'Sri Lanka', code: 'LK' },
  { country: 'Indonesia', code: 'ID' },
  { country: 'Philippines', code: 'PH' },
  { country: 'Malaysia', code: 'MY' },
  { country: 'Egypt', code: 'EG' },
  { country: 'United States', code: 'US' },
  { country: 'United Kingdom', code: 'GB' },
  { country: 'China', code: 'CN' },
];

export const WHY_CHOOSE_US: IconItem[] = [
  {
    icon: 'tag',
    title: 'Competitive, transparent pricing',
    text: 'Affordable rates across every courier and cargo service, without cutting corners on quality or delivery standards.',
  },
  {
    icon: 'map-pin',
    title: 'Real-time shipment tracking',
    text: 'Follow your cargo at every stage and get timely updates on where it is and when it will arrive.',
  },
  {
    icon: 'truck',
    title: 'Door-to-door pickup and delivery',
    text: 'Free pickup across Saudi Arabia and delivery to the door at the destination.',
  },
  {
    icon: 'users',
    title: 'Professional team',
    text: 'Experienced drivers and coordinators who handle every shipment safely and on time.',
  },
  {
    icon: 'zap',
    title: 'Efficient logistics',
    text: 'Streamlined operations and our own management system keep every delivery accurate and cost-effective.',
  },
  {
    icon: 'headset',
    title: 'Support around the clock',
    text: 'Our team is available 24/7 by phone, email and WhatsApp.',
  },
];

/** Customer journey — used on Home and the Mobile App page. Order matters. */
export const HOW_IT_WORKS: Step[] = [
  { icon: 'smartphone', title: 'Book', text: 'Enter your cargo details in the app and request a pickup.' },
  { icon: 'truck', title: 'Pickup', text: 'Captain Cargo collects your shipment from your door.' },
  { icon: 'map-pin', title: 'Track', text: 'Watch your cargo move across borders, stage by stage.' },
  { icon: 'check-circle', title: 'Delivered', text: 'Your shipment arrives safely at its destination.' },
];

/**
 * Testimonials. Only add real customer quotes (with their permission).
 * The current site has one general quote, used below.
 */
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      'Captain Cargo delivers excellence every time, combining secure, timely shipments with real professionalism and a team dedicated to exceeding customer expectations.',
    name: 'Client reviews',
    role: 'Captain Cargo customers',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do I track my shipment?',
    answer:
      'Enter your shipment reference on the Track page, or open My Shipments in the Captain Logistic app and tap Track Cargo. Each stage shows the date and location of the update.',
  },
  {
    // TODO: confirm the full prohibited-items list with operations.
    question: 'What are the prohibited items?',
    answer:
      'We cannot ship items restricted by Saudi customs or the destination country, such as flammable or explosive materials, hazardous chemicals, weapons, illegal drugs and counterfeit goods. If you are unsure about an item, ask our team before booking.',
  },
  {
    question: 'How is the shipping rate calculated?',
    answer:
      'Rates depend on your shipment’s weight, its destination and whether you ship by Air or Sea. Use the rate calculator in the app for an instant price, or contact us for large or special cargo.',
  },
  {
    question: 'Do you collect from my location?',
    answer:
      'Yes. We offer free doorstep pickup across Saudi Arabia. Book it in the app and choose a time that suits you.',
  },
  {
    question: 'Which countries do you ship to?',
    answer:
      'From Saudi Arabia we ship to India, Pakistan, Nepal, Bangladesh, Sri Lanka, Indonesia, the Philippines, Malaysia, Egypt, the USA, the UK and China. Contact us for other destinations.',
  },
];

export const ABOUT = {
  headline: 'Guaranteed on-time delivery where it matters most',
  intro:
    'We provide complete, reliable logistics solutions with real-time visibility and accurate delivery updates for every shipment. Speed matters, and so do quality, safety and precision.',
  storyTitle: 'Connecting the world with efficient logistics',
  story:
    'Air, sea and land transport, documentation and customs support all run through one network. We take full responsibility for every shipment entrusted to us, with safe handling, timely delivery and clear communication from pickup to final delivery.',
  mission:
    'To provide secure, efficient and innovative cargo solutions globally by combining advanced logistics technology with exceptional customer care.',
  vision:
    'To be a globally recognised logistics partner known for reliability, transparency and comprehensive cargo solutions, helping businesses and individuals connect seamlessly with the world.',
  /**
   * TODO: add the leadership message. The section is hidden while this is null.
   * Example: { text: '…', name: 'Full name', role: 'Founder & CEO' }
   */
  leadershipMessage: null as { text: string; name: string; role: string } | null,
};
