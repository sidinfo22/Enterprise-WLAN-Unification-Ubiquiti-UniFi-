export const pagePathByFile = {
  'index.html': '/',
  'objectives.html': '/objectives',
  'assets.html': '/deploy',
  'deploy.html': '/deploy',
  'diagrams.html': '/deploy',
  'segmentation.html': '/deploy',
  'voip.html': '/voip',
  'cloud.html': '/deploy',
  'programming.html': '/voip',
  'cybersecurity.html': '/hippa',
  'hippa.html': '/hippa',
  'strategies.html': '/objectives',
};

export const pages = [
  {
    slug: 'index',
    route: '/',
    fileName: 'index.html',
    title: 'Ubiquiti UniFi WLAN Unification Project | Summit Care Medical Clinic',
  },
  {
    slug: 'objectives',
    route: '/objectives',
    fileName: 'objectives.html',
    title: 'Overview, Purpose & UniFi Platform Strategy | WLAN Unification Project',
  },
  {
    slug: 'deploy',
    route: '/deploy',
    fileName: 'deploy.html',
    title: 'UniFi Cloud Key, Gateway, RADIUS & WLAN Architecture | WLAN Unification Project',
  },
  {
    slug: 'voip',
    route: '/voip',
    fileName: 'voip.html',
    title: 'Cloud Operations, VPN, Monitoring & Provisioning | WLAN Unification Project',
  },
  {
    slug: 'hippa',
    route: '/hippa',
    fileName: 'hippa.html',
    title: 'Risk, Governance & Conclusion | WLAN Unification Project',
  },
];
