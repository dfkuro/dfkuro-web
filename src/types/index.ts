export interface Profile {
  name: string;
  alias?: string;
  avatar?: {
    light: string;
    dark: string;
  };
  role: string;
  location: string;
  status: 'available' | 'busy' | 'open';
  bio: string;
  uptime: string;
  shell: string;
  editor: string;
}

export interface TechNode {
  name: string;
  category: string;
  orbit: 1 | 2 | 3;
  icon: string;
}
