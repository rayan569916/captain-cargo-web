import type { IconName } from '../../shared/icon';

export type Tone = 'lavender' | 'mint' | 'powder' | 'solar' | 'peach';

export interface IconItem {
  icon: IconName;
  title: string;
  text: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Step {
  title: string;
  text: string;
  icon: IconName;
}
