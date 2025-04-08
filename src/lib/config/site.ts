import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/profile.png',
    bio: 'PhD Student <br>  <a href="https://sites.google.com/view/matrix-lab" target="_blank" rel="noopener noreferrer" style="color: #007acc;"> MATRIX Lab</a>  <br> <a href="https://cds.iisc.ac.in/" target="_blank" rel="noopener noreferrer" style="color: #007acc;"> Department of Computational Data Sciences</a> <br> <a href="https://iisc.ac.in" target="_blank" rel="noopener noreferrer" style="color: #007acc;">Indian Institute of Science (IISc), Bangalore</a> <br>',
    name: 'Gourab Panigrahi',
    // status: '🌸',
    metadata: [
      {
        // text: 'kwaa',
        icon: 'i-simple-icons-github',
        link: 'https://gourabp7.github.io/'
      },
    ]
  },
  description: 'Powered by SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'https://gourabp7.github.io/',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  // subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  themeColor: '#3D4451',
  title: 'Gourab Panigrahi',
}

// <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer"> <img src="/assets/linkedin_icon.png" alt="LinkedIn"> LinkedIn </a>

// style="font-size: 24px; vertical-align: middle; margin-right: 8px;"
