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
    label: 'Trainings',
    path: '/trainings'
  },
  {
    label: 'Documentation',
    path: '/documentation'
  },
  {
    label: 'Gallery',
    path: '#gallery'
  },
  {
    label: 'Chandlery',
    path: '/chandlery'
  },
  {
    label: 'Contact',
    path: '#contact'
  }
];