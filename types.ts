export interface Track {
  id: string;
  title: string;
  duration: string;
  genre: string;
  bpm: number;
}

export interface Event {
  id: string;
  date: string;
  venue: string;
  location: string;
  ticketLink?: string;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  MUSIC = 'music',
  AI_VIBE = 'ai-vibe',
  CONTACT = 'contact',
}