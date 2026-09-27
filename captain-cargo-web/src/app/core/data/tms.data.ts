import type { IconItem, Step, Tone } from './types';

export interface TmsGroup {
  id: string;
  title: string;
  summary: string;
  tone: Tone;
  modules: IconItem[];
}

/** Module groups exactly as they appear on the Cargo TMS home screen. */
export const TMS_GROUPS: TmsGroup[] = [
  {
    id: 'finance',
    title: 'Finance',
    summary: 'Manage your financial operations.',
    tone: 'solar',
    modules: [
      { icon: 'credit-card', title: 'Payment', text: 'Process and view payments.' },
      { icon: 'receipt', title: 'Receipt', text: 'View and manage receipts.' },
      { icon: 'file-text', title: 'Billing Invoice', text: 'Generate and track invoices.' },
      { icon: 'split', title: 'Balance Share', text: 'Manage shared balances.' },
      { icon: 'cart', title: 'Purchase', text: 'Create and manage purchases.' },
    ],
  },
  {
    id: 'fleet',
    title: 'Fleet Management',
    summary: 'Keep your fleet on track.',
    tone: 'lavender',
    modules: [
      { icon: 'package', title: 'Inventory', text: 'Manage your inventory items.' },
      { icon: 'file-text', title: 'Cargo Requests', text: 'Handle cargo requests from customers.' },
      { icon: 'check-circle', title: 'Bank Approvals', text: 'Review and approve bank requests.' },
      { icon: 'map', title: 'Tracking', text: 'Real-time vehicle tracking.' },
      { icon: 'warehouse', title: 'Warehouse', text: 'Manage warehouse operations.' },
    ],
  },
  {
    id: 'accounts',
    title: 'Account Management',
    summary: 'People and accounts in one place.',
    tone: 'mint',
    modules: [
      { icon: 'user-plus', title: 'Register User', text: 'Add new system users.' },
      { icon: 'book', title: 'Accounts', text: 'Manage account details.' },
    ],
  },
  {
    id: 'system',
    title: 'System',
    summary: 'Configure and monitor your system.',
    tone: 'powder',
    modules: [
      { icon: 'chart', title: 'Reports', text: 'View system reports.' },
      { icon: 'settings', title: 'Settings', text: 'System configuration.' },
      { icon: 'building', title: 'Create Office', text: 'Add new office locations.' },
    ],
  },
];

/** How a customer booking moves between the app and the TMS. Order matters. */
export const APP_TMS_FLOW: Step[] = [
  {
    icon: 'smartphone',
    title: 'Customer books in the app',
    text: 'A cargo or pickup request is sent from Captain Logistic.',
  },
  {
    icon: 'file-text',
    title: 'Request lands in Cargo Requests',
    text: 'The agent reviews it and schedules the pickup.',
  },
  {
    icon: 'warehouse',
    title: 'Cargo moves through the warehouse',
    text: 'Inventory and Warehouse keep every item accounted for.',
  },
  {
    icon: 'map-pin',
    title: 'Agent updates each stage',
    text: 'Each update appears on the customer’s tracking timeline.',
  },
  {
    icon: 'receipt',
    title: 'Invoices and receipts sync',
    text: 'Billing appears in the customer’s wallet and statements.',
  },
];

export const TMS_CAPABILITIES: IconItem[] = [
  {
    icon: 'building',
    title: 'Multiple offices',
    text: 'Switch between offices such as Head Office Riyadh, and add new locations as you grow.',
  },
  {
    icon: 'lock',
    title: 'Role-based access',
    text: 'Every user signs in with a role that controls what they can see and change.',
  },
  {
    icon: 'search',
    title: 'Search everything',
    text: 'Find any request, invoice or user from one search bar with Ctrl + K.',
  },
  {
    icon: 'bell',
    title: 'Notifications',
    text: 'New requests and approvals surface as soon as they arrive.',
  },
  {
    icon: 'chart',
    title: 'Reports across offices',
    text: 'Management sees performance across every branch in one place.',
  },
  {
    icon: 'dashboard',
    title: 'One home screen',
    text: 'Every module grouped by Finance, Fleet, Accounts and System.',
  },
];
