import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/maskable@512.png',
    bio: 'PhD Student at the Department of Computational Data Sciences, Indian Institute of Science (IISc), Bangalore.',
    name: 'Gourab Panigrahi',
    // status: '🌸',
  },
  description: 'Powered by SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  // subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  themeColor: '#3D4451',
  title: 'Gourab Panigrahi',
}
