// Dublin City Council brand colors and constants
export const DUBLIN_COLORS = {
  primary: '#003d5c',
  primaryLight: '#1a5674',
  primaryDark: '#002738',
  accent: '#28a745',
  accentLight: '#34ce57',
  accentDark: '#1e7e34',
} as const

// Navigation items for consistent routing
export const NAVIGATION_ITEMS = [
  { path: '/', label: 'Home', description: 'Hero and introduction' },
  { path: '/about', label: 'About', description: 'Personal story & Dublin connection' },
  { path: '/experience', label: 'Experience', description: 'Westlake municipal work' },
  { path: '/skills', label: 'Skills', description: 'Technical competency demonstrations' },
  { path: '/dublin-vision', label: 'Dublin Vision', description: 'Strategic proposals for Dublin' },
  { path: '/portfolio', label: 'Portfolio', description: 'Creative work showcase' },
  { path: '/competencies', label: 'Action Plan', description: '90-day strategic implementation roadmap' },
  { path: '/dublin-research', label: 'Dublin Research', description: 'Knowledge of Dublin' },
  { path: '/contact', label: 'Contact', description: 'Professional contact form' },
] as const

// Professional stats and achievements
export const STATS = {
  yearsExperience: 5,
  growthAchieved: 300,
  campaignsManaged: 50,
  followersGained: 25000,
} as const

// Contact information
export const CONTACT_INFO = {
  email: 'jshevel@cityofwestlake.org',
  phone: '330-416-1376',
  linkedin: 'https://www.linkedin.com/in/jorden-shevel/',
  location: 'Elyria, Ohio',
} as const