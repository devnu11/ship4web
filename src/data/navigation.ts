export interface NavigationItem {
  label: string;
  path: string; // The target path (e.g., '#about', '/trainings')
}

export const navigationItems: NavigationItem[] = [
  {
    label: 'About',
    path: '#about'
  },
  {
    label: 'Meetings', 
    path: '#meetings'
  },
  {
    label: 'Events',
    path: '#events'
  },
  {
    label: 'Learning',
    path: '/trainings'
  },
  {
    label: 'Links',
    path: '/documentation'
  },
  {
    label: 'Pics',
    path: '#gallery'
  },
  {
    label: 'Merch',
    path: '/chandlery'
  },
  {
    label: 'Contact',
    path: '#contact'
  }
];