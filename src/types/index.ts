export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  url?: string;
}

export interface ImagePlaceholder {
  id: number;
  title: string;
  description: string;
}