import { Injectable } from '@angular/core';

export type StageStatus = 'done' | 'current' | 'upcoming';

export interface TrackingEvent {
  stage: string;
  location: string;
  date: Date | null;
  status: StageStatus;
}

export interface TrackingResult {
  reference: string;
  origin: string;
  destination: string;
  mode: 'Air' | 'Sea' | 'Road';
  estimatedDelivery: Date;
  events: TrackingEvent[];
  /** True while this service returns sample data instead of the live API. */
  isSample: boolean;
}

/** Stage names as used in the Captain Logistic app. */
export const TRACKING_STAGES = [
  'Shipment picked up',
  'In shop',
  'Arrived at origin facility',
  'Departed to origin warehouse',
  'Container loading in progress',
  'In transit',
  'Arrived at destination',
  'Out for delivery',
  'Delivered',
] as const;

@Injectable({ providedIn: 'root' })
export class TrackingService {
  /**
   * TODO: connect to the Cargo TMS tracking API, e.g.
   *   return firstValueFrom(this.http.get<TrackingResult>(`${API}/tracking/${reference}`));
   * Until then this returns a clearly labelled sample shipment.
   */
  async lookup(reference: string): Promise<TrackingResult> {
    await new Promise((resolve) => setTimeout(resolve, 450));

    const day = (offset: number): Date => {
      const d = new Date();
      d.setDate(d.getDate() + offset);
      return d;
    };

    const locations = [
      'Riyadh',
      'Riyadh',
      'Riyadh',
      'Riyadh',
      'Riyadh',
      'King Khalid International Airport (RUH)',
      'Karachi',
      'Karachi',
      'Karachi',
    ];
    const currentIndex = 4;

    return {
      reference: reference.trim().toUpperCase(),
      origin: 'Riyadh, Saudi Arabia',
      destination: 'Karachi, Pakistan',
      mode: 'Air',
      estimatedDelivery: day(5),
      isSample: true,
      events: TRACKING_STAGES.map((stage, i) => ({
        stage,
        location: locations[i] ?? '',
        date: i <= currentIndex ? day(i - currentIndex) : null,
        status: i < currentIndex ? 'done' : i === currentIndex ? 'current' : 'upcoming',
      })),
    };
  }
}
