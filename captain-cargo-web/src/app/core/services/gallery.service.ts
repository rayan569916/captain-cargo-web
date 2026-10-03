import { Injectable } from '@angular/core';

export type GalleryCategory = 'all' | 'operations' | 'warehouse' | 'delivery' | 'team' | 'fleet';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
  width: number;
  height: number;
}

const ph = (w: number, h: number, bg: string, label: string, fg = '0a0d12'): string =>
  `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(label)}&font=montserrat`;

const DUMMY_IMAGES: GalleryImage[] = [
  // Operations
  {
    id: 'ops-1',
    src: ph(800, 600, 'cce7ff', 'Air Freight Operations'),
    alt: 'Air freight cargo being loaded at King Khalid Airport',
    category: 'operations',
    caption: 'Air freight operations at King Khalid International Airport, Riyadh',
    width: 800,
    height: 600,
  },
  {
    id: 'ops-2',
    src: ph(800, 600, 'cce7ff', 'Sea Cargo Operations'),
    alt: 'Sea cargo containers at port',
    category: 'operations',
    caption: 'Sea cargo handling and container management',
    width: 800,
    height: 600,
  },
  {
    id: 'ops-3',
    src: ph(800, 533, 'cce7ff', 'Customs Clearance'),
    alt: 'Customs clearance documentation process',
    category: 'operations',
    caption: 'Streamlined customs clearance and documentation',
    width: 800,
    height: 533,
  },
  // Warehouse
  {
    id: 'wh-1',
    src: ph(800, 600, 'f1e6ff', 'Warehouse Interior'),
    alt: 'Modern warehouse interior with organized shelving',
    category: 'warehouse',
    caption: 'State-of-the-art warehouse facilities in Riyadh',
    width: 800,
    height: 600,
  },
  {
    id: 'wh-2',
    src: ph(800, 533, 'f1e6ff', 'Cargo Sorting'),
    alt: 'Cargo sorting and packaging area',
    category: 'warehouse',
    caption: 'Precise cargo sorting for accurate delivery',
    width: 800,
    height: 533,
  },
  {
    id: 'wh-3',
    src: ph(800, 600, 'f1e6ff', 'Storage Units'),
    alt: 'Organized cargo storage units',
    category: 'warehouse',
    caption: 'Secure and organized storage solutions',
    width: 800,
    height: 600,
  },
  {
    id: 'wh-4',
    src: ph(800, 533, 'f1e6ff', 'Packing Station'),
    alt: 'Professional packing station for shipments',
    category: 'warehouse',
    caption: 'Professional packing ensures safe delivery',
    width: 800,
    height: 533,
  },
  // Delivery
  {
    id: 'del-1',
    src: ph(800, 600, 'd3f6e3', 'Door-to-Door Delivery'),
    alt: 'Captain Cargo delivery agent at customer doorstep',
    category: 'delivery',
    caption: 'Door-to-door delivery across Saudi Arabia',
    width: 800,
    height: 600,
  },
  {
    id: 'del-2',
    src: ph(800, 533, 'd3f6e3', 'Last Mile Delivery'),
    alt: 'Last-mile delivery to residential customer',
    category: 'delivery',
    caption: 'Fast and reliable last-mile delivery',
    width: 800,
    height: 533,
  },
  {
    id: 'del-3',
    src: ph(800, 600, 'd3f6e3', 'Express Courier'),
    alt: 'Express courier service in action',
    category: 'delivery',
    caption: 'Express courier services, same-day delivery',
    width: 800,
    height: 600,
  },
  // Team
  {
    id: 'team-1',
    src: ph(800, 600, 'fff2be', 'Operations Team'),
    alt: 'Captain Cargo operations team',
    category: 'team',
    caption: 'Our dedicated operations team',
    width: 800,
    height: 600,
  },
  {
    id: 'team-2',
    src: ph(800, 533, 'fff2be', 'Customer Support'),
    alt: 'Customer support specialists',
    category: 'team',
    caption: '24/7 customer support specialists',
    width: 800,
    height: 533,
  },
  {
    id: 'team-3',
    src: ph(800, 600, 'fff2be', 'Logistics Coordinators'),
    alt: 'Logistics coordination team at work',
    category: 'team',
    caption: 'Expert logistics coordinators managing global shipments',
    width: 800,
    height: 600,
  },
  // Fleet
  {
    id: 'fleet-1',
    src: ph(800, 533, 'ffe4d4', 'Delivery Fleet'),
    alt: 'Captain Cargo delivery truck fleet',
    category: 'fleet',
    caption: 'Our modern delivery fleet covering all Saudi Arabia',
    width: 800,
    height: 533,
  },
  {
    id: 'fleet-2',
    src: ph(800, 600, 'ffe4d4', 'Heavy Cargo Trucks'),
    alt: 'Heavy cargo trucks for large shipments',
    category: 'fleet',
    caption: 'Heavy-duty trucks for large cargo transport',
    width: 800,
    height: 600,
  },
  {
    id: 'fleet-3',
    src: ph(800, 533, 'ffe4d4', 'Van Fleet'),
    alt: 'Cargo vans for local deliveries',
    category: 'fleet',
    caption: 'Cargo vans for fast urban deliveries',
    width: 800,
    height: 533,
  },
];

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'operations', label: 'Operations' },
  { id: 'warehouse', label: 'Warehouse' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'team', label: 'Our Team' },
  { id: 'fleet', label: 'Fleet' },
];

@Injectable({ providedIn: 'root' })
export class GalleryService {
  /**
   * TODO: replace with a real API call, e.g.:
   *   return firstValueFrom(this.http.get<GalleryImage[]>(`${API}/gallery`));
   */
  async fetchImages(): Promise<GalleryImage[]> {
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 600));
    return DUMMY_IMAGES;
  }
}
