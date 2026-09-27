import { ASSETS } from '../assets.config';
import type { IconItem, Tone } from './types';

/** Headline features of the Captain Logistic customer app. */
export const APP_FEATURES: IconItem[] = [
  {
    icon: 'package',
    title: 'Book your pickup',
    text: 'Enter your cargo details and schedule a doorstep pickup at a time and place that suits you.',
  },
  {
    icon: 'calculator',
    title: 'Instant shipping rates',
    text: 'Calculate Air and Sea cargo rates from your shipment’s weight and destination.',
  },
  {
    icon: 'map-pin',
    title: 'Real-time tracking',
    text: 'Follow every stage of your shipment’s journey, with dates and locations.',
  },
  {
    icon: 'truck',
    title: 'Door-to-door delivery',
    text: 'From pickup in Saudi Arabia to delivery at the final destination.',
  },
  {
    icon: 'history',
    title: 'Shipping history',
    text: 'Every past shipment, searchable and organised in one place.',
  },
  {
    icon: 'wallet',
    title: 'Wallet and statements',
    text: 'Top up, pay for bookings, receive refunds and download your statements.',
  },
];

export interface AppModule {
  /** Used as the page anchor, e.g. /mobile-app#tracking */
  id: string;
  label: string;
  title: string;
  summary: string;
  screen: string;
  screenAlt: string;
  tone: Tone;
  highlights: IconItem[];
}

/** The five core modules shown on the Mobile App page (from the app screens). */
export const APP_MODULES: AppModule[] = [
  {
    id: 'home',
    label: 'Home',
    title: 'Everything starts on one screen',
    summary:
      'Set your pickup location, check your wallet and notifications, and jump into any service straight from the home screen.',
    screen: ASSETS.appScreens.home,
    screenAlt: 'Captain Logistic home screen with quick actions and services',
    tone: 'lavender',
    highlights: [
      {
        icon: 'zap',
        title: 'Quick actions',
        text: 'Special Offers, New Updates, Our Services, Track Shipment and Need Help, one tap each.',
      },
      {
        icon: 'package',
        title: 'Our services',
        text: 'Cargo Request, My Requests, Payments and Rates Details.',
      },
      {
        icon: 'megaphone',
        title: 'Offers and updates',
        text: 'Exclusive shipping discounts and the latest company news.',
      },
      {
        icon: 'bell',
        title: 'Location and alerts',
        text: 'Choose your pickup location and see notifications at a glance.',
      },
    ],
  },
  {
    id: 'shipments',
    label: 'My Shipments',
    title: 'All your shipments, sorted',
    summary: 'Search by shipment, route or destination, then filter by status to find what you need.',
    screen: ASSETS.appScreens.shipments,
    screenAlt: 'My Shipments list with status filters',
    tone: 'mint',
    highlights: [
      {
        icon: 'search',
        title: 'Status filters',
        text: 'All, In Transit, Delivered and Pending, each with a live count.',
      },
      {
        icon: 'route',
        title: 'Route at a glance',
        text: 'Origin and destination on every card, with an air, sea or parcel icon.',
      },
      {
        icon: 'tag',
        title: 'Shipment reference',
        text: 'Every shipment has its own reference number, such as CAP-2026-030.',
      },
      {
        icon: 'arrow-right',
        title: 'One-tap tracking',
        text: 'Track Cargo opens the full timeline for any shipment.',
      },
    ],
  },
  {
    id: 'tracking',
    label: 'Tracking',
    title: 'Every stage, dated and located',
    summary:
      'A timeline shows where your cargo is and when it moved, with an estimated delivery date and a countdown to arrival.',
    screen: ASSETS.appScreens.tracking,
    screenAlt: 'Tracking Details timeline for a shipment',
    tone: 'powder',
    highlights: [
      {
        icon: 'history',
        title: 'Stage timeline',
        text: 'Picked up, in shop, at the origin facility, departed, loading, and onward to delivery.',
      },
      {
        icon: 'clock',
        title: 'Estimated delivery',
        text: 'Your expected delivery date and the days remaining.',
      },
      {
        icon: 'map-pin',
        title: 'Location updates',
        text: 'Each update shows the city and what happened there.',
      },
      {
        icon: 'headset',
        title: 'Support on hand',
        text: 'Contact Support is one tap away from any shipment.',
      },
    ],
  },
  {
    id: 'wallet',
    label: 'My Wallet',
    title: 'Pay, top up and get refunds in the app',
    summary: 'Your balance in Saudi riyals, with every top-up, payment and refund listed.',
    screen: ASSETS.appScreens.wallet,
    screenAlt: 'My Wallet with balance and recent transactions',
    tone: 'solar',
    highlights: [
      {
        icon: 'wallet',
        title: 'Balance overview',
        text: 'Available balance, locked balance and linked card status.',
      },
      {
        icon: 'plus',
        title: 'Top up and send',
        text: 'Add funds or send money from your wallet.',
      },
      {
        icon: 'receipt',
        title: 'Pay for bookings',
        text: 'Cargo booking and bill payments come straight from your balance.',
      },
      {
        icon: 'shield',
        title: 'Refunds and history',
        text: 'Refunds land in your wallet and every transaction is recorded.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Help & Support',
    title: 'Help whenever you need it',
    summary:
      'Our team is available 24/7 by phone, email and WhatsApp, with answers to common questions inside the app.',
    screen: ASSETS.appScreens.support,
    screenAlt: 'Help and Support screen with contact options and FAQs',
    tone: 'peach',
    highlights: [
      { icon: 'phone', title: 'Call us', text: '054 376 4900, any time of day.' },
      { icon: 'mail', title: 'Email us', text: 'info@captaincargo.co' },
      { icon: 'chat', title: 'Chat on WhatsApp', text: 'Message our team straight from the app.' },
      {
        icon: 'book',
        title: 'FAQs and office',
        text: 'Quick answers, plus directions to our Riyadh office.',
      },
    ],
  },
];
