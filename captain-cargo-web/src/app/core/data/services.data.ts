import type { IconName } from '../../shared/icon';
import type { Tone } from './types';

export interface CargoService {
  id: string;
  title: string;
  summary: string;
  icon: IconName;
  tone: Tone;
  /** Shown in the 4-up preview on the home page. */
  featured?: boolean;
}

/** From the current Services page. */
export const SERVICES: CargoService[] = [
  {
    id: 'air-freight',
    title: 'Air Freight',
    summary: 'Fast, secure air cargo for time-sensitive and high-value shipments.',
    icon: 'plane',
    tone: 'powder',
    featured: true,
  },
  {
    id: 'sea-freight',
    title: 'Sea Freight',
    summary:
      'Cost-effective ocean freight for bulk and large-volume cargo, planned carefully and shipped on dependable schedules.',
    icon: 'ship',
    tone: 'mint',
    featured: true,
  },
  {
    id: 'road-freight',
    title: 'Road Freight',
    summary: 'Flexible, secure road transport with optimised routing and professional coordination.',
    icon: 'truck',
    tone: 'solar',
    featured: true,
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Distribution',
    summary: 'Organised storage, inventory coordination and distribution for your goods.',
    icon: 'warehouse',
    tone: 'lavender',
    featured: true,
  },
  {
    id: 'domestic-international',
    title: 'Domestic & International Cargo',
    summary: 'Logistics support for local and global shipments, from a single parcel to full loads.',
    icon: 'globe',
    tone: 'peach',
  },
  {
    id: 'customs',
    title: 'Customs Clearance',
    summary:
      'We handle regulatory procedures, accurate documentation and compliance so your cargo is not held up.',
    icon: 'stamp',
    tone: 'powder',
  },
  {
    id: 'documentation',
    title: 'Documentation Support',
    summary: 'We guide you through the paperwork each destination requires, so clearance goes smoothly.',
    icon: 'file-text',
    tone: 'mint',
  },
  {
    id: 'packaging',
    title: 'Packaging & Preparation',
    summary: 'The right materials and labelling to keep your cargo safe in transit.',
    icon: 'package',
    tone: 'solar',
  },
  {
    id: 'insurance',
    title: 'Cargo Insurance',
    summary: 'Coverage options arranged to protect your goods against transit risks.',
    icon: 'shield',
    tone: 'lavender',
  },
];

export const SERVICE_BENEFITS: string[] = [
  'Transparent coordination',
  'Reliable tracking',
  'Wide logistics reach',
  'Efficient scheduling',
  'Cost-conscious solutions',
];
