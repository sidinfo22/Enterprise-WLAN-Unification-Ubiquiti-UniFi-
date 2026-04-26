import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const legacyDir = join(root, 'legacy');
const publicSiteDir = join(root, 'public', 'site');

mkdirSync(legacyDir, { recursive: true });
mkdirSync(publicSiteDir, { recursive: true });

const navItems = [
  ['objectives.html', 'Objectives & UniFi Strategy'],
  ['assets.html', 'UniFi Assets & Inventory'],
  ['deploy.html', 'Cloud Key, Gateway & RADIUS Deployment'],
  ['diagrams.html', 'WLAN Diagrams & Topologies'],
  ['segmentation.html', 'VLANs, Subnets & Guest Isolation'],
  ['voip.html', 'VPN, Cloud Operations & Monitoring'],
  ['cloud.html', 'UniFi Cloud Management'],
  ['programming.html', 'Provisioning, Templates & Automation'],
  ['cybersecurity.html', 'Security Controls & Certificate Access'],
  ['hippa.html', 'HIPAA-Aware Governance & Risk'],
];

const pages = [
  {
    file: 'index.html',
    title: 'Ubiquiti UniFi WLAN Unification',
    kicker: 'Summit Care Medical Clinic',
    h1: 'Ubiquiti UniFi WLAN Unification',
    lead:
      'Unifying Summit Care Medical Clinic offices across the five boroughs with UniFi Cloud Gateway, Cloud Key Gen2, U7 Pro XL access points, Windows Server NPS/RADIUS, certificate-based staff access, guest Wi-Fi, VPN, monitoring, and wireless mesh.',
    icon: 'fa-network-wired',
    sections: [
      {
        title: 'Project Overview',
        body:
          'Summit Care moved from disconnected office wireless into one UniFi-managed network model. Each office can be adopted, monitored, provisioned, segmented, and supported through UniFi while still using Windows Server domain services for identity and RADIUS policy.',
        bullets: [
          'One UniFi management plane for branch gateways, access points, clients, topology, alerts, firmware, and provisioning.',
          'U7 Pro XL access points deployed across offices for high-capacity staff, clinical, and guest wireless coverage.',
          'Windows Server NPS/RADIUS integration on UDP 1812 and UDP 1813 for enterprise wireless authentication.',
          'Certificate-based 802.1X access for managed Summit Care devices through Windows certificate services.',
          'Guest Wi-Fi on a separate VLAN/subnet with captive portal branding and private-network blocking.',
        ],
      },
      {
        title: 'Unified Operating Model',
        body:
          'The project is not just a Wi-Fi refresh. It is a full WLAN unification effort that combines routing, wireless, VLANs, VPN, identity, cloud visibility, and repeatable deployment standards.',
        cards: [
          ['UniFi Cloud Gateway', 'Routes each office, enforces VLAN boundaries, provides VPN, and anchors site connectivity.'],
          ['Cloud Key Gen2', 'Hosts UniFi Network for adoption, monitoring, configuration, backup, firmware, and cloud access through unifi.ui.com.'],
          ['Windows NPS/RADIUS', 'Validates staff identity and certificates before UniFi places users or devices onto trusted networks.'],
        ],
      },
    ],
  },
  {
    file: 'objectives.html',
    title: 'Objectives & UniFi Strategy',
    kicker: 'Strategy',
    h1: 'Objectives & UniFi Platform Strategy',
    lead:
      'Defining the business and technical goals behind Summit Care’s multi-office UniFi WLAN unification project.',
    icon: 'fa-bullseye',
    sections: [
      {
        title: 'Why the Project Was Needed',
        body:
          'Summit Care operates many offices throughout the five boroughs. Without a unified network platform, each site becomes harder to configure, monitor, secure, and support. UniFi gives the clinic one standard way to deploy and manage branch wireless and routing.',
        bullets: [
          'Replace inconsistent office-by-office wireless with standardized UniFi SSIDs, VLANs, and access policies.',
          'Give IT remote visibility into AP health, gateway status, client experience, and topology.',
          'Support staff authentication through Windows Server domain identity and certificate-based device trust.',
          'Create a repeatable office rollout model for future Summit Care locations.',
        ],
      },
      {
        title: 'Success Criteria',
        body:
          'The environment is successful when every office can be viewed in UniFi, staff Wi-Fi authenticates through RADIUS, guests remain isolated, VPN users reach only approved networks, and new UniFi devices can be provisioned without rebuilding the design from scratch.',
      },
    ],
  },
  {
    file: 'assets.html',
    title: 'UniFi Assets & Inventory',
    kicker: 'Inventory',
    h1: 'UniFi Assets, Inventory & Procurement',
    lead:
      'Documenting the hardware, virtual infrastructure, and identity services used to support Summit Care’s unified WLAN.',
    icon: 'fa-boxes',
    sections: [
      {
        title: 'Core Asset Stack',
        body:
          'The project standardizes on Ubiquiti UniFi hardware at the network edge and Windows Server services on Proxmox for identity and RADIUS.',
        table: [
          ['Asset', 'Role', 'Project Value'],
          ['UniFi Cloud Gateway', 'Router, firewall, VLAN gateway, VPN endpoint', 'Provides the routed and secured edge for each office.'],
          ['UniFi Cloud Key Gen2', 'Network controller', 'Hosts UniFi Network for adoption, monitoring, backups, and cloud access.'],
          ['U7 Pro XL access points', 'Wireless access layer', 'Delivers modern high-capacity Wi-Fi for staff, guest, and clinical devices.'],
          ['Dell PowerEdge R740xd', 'Proxmox host', 'Runs Windows Server workloads for AD, DNS, NPS/RADIUS, and certificate services.'],
          ['Windows Server domain controller', 'AD DS, DNS, NPS, CA', 'Provides identity, policy, certificate, and RADIUS authentication services.'],
        ],
      },
    ],
  },
  {
    file: 'deploy.html',
    title: 'Cloud Key, Gateway & RADIUS Deployment',
    kicker: 'Deployment',
    h1: 'Cloud Key, Gateway, RADIUS & WLAN Deployment',
    lead:
      'Walking through how the UniFi controller, gateway, access points, Windows NPS/RADIUS, certificates, VLANs, and guest portal were configured.',
    icon: 'fa-tools',
    sections: [
      {
        title: 'Deployment Workflow',
        body:
          'The deployment begins with a management network, a Cloud Key Gen2 controller, and UniFi device adoption. After the gateway and access points are visible in UniFi, the staff, guest, clinical, management, and VPN networks are created and mapped to SSIDs or firewall policies.',
        bullets: [
          'Assign a private management IP to the Cloud Key Gen2 and secure local GUI access.',
          'Link UniFi cloud access so authorized admins can manage sites through unifi.ui.com.',
          'Adopt the UniFi Cloud Gateway and U7 Pro XL access points into the correct Summit Care site.',
          'Create staff, guest, clinical, management, and VPN networks with VLAN IDs and firewall rules.',
          'Configure Windows Server NPS as the RADIUS server and add UniFi devices as trusted RADIUS clients.',
          'Enable certificate-based 802.1X access for managed devices using Windows certificate services.',
        ],
      },
      {
        title: 'RADIUS and Certificate Details',
        body:
          'UniFi forwards WPA-Enterprise authentication requests to Windows NPS over UDP 1812 and sends accounting over UDP 1813. NPS evaluates user or computer group membership, certificate trust, and network policy before returning an accept or reject decision to the UniFi access point.',
      },
    ],
  },
  {
    file: 'diagrams.html',
    title: 'WLAN Diagrams & Topologies',
    kicker: 'Topology',
    h1: 'WLAN Diagrams, Topologies & Evidence',
    lead:
      'Documenting how Summit Care offices, UniFi gateways, Cloud Key Gen2, U7 Pro XL access points, VLANs, VPNs, and Windows RADIUS services fit together.',
    icon: 'fa-project-diagram',
    sections: [
      {
        title: 'Logical Topology',
        body:
          'Each office follows the same logical pattern: UniFi gateway at the edge, Cloud Key Gen2 on the management network, U7 Pro XL access points on managed switch ports, Windows Server NPS reachable for RADIUS, and VLANs separating staff, guest, clinical, management, and VPN traffic.',
        cards: [
          ['Management View', 'Cloud Key, gateway, switches, and access points live in the management network for controlled administration.'],
          ['Staff WLAN View', 'The staff SSID uses WPA-Enterprise/802.1X with NPS/RADIUS and certificate validation.'],
          ['Guest WLAN View', 'The guest SSID lands on an isolated VLAN with captive portal controls and internet-only firewall policy.'],
        ],
      },
    ],
  },
  {
    file: 'segmentation.html',
    title: 'VLANs, Subnets & Guest Isolation',
    kicker: 'Segmentation',
    h1: 'VLANs, Subnets, Guest Wi-Fi & Isolation',
    lead:
      'Showing how UniFi separates trusted staff access, guest access, clinical devices, management interfaces, and VPN users.',
    icon: 'fa-sitemap',
    sections: [
      {
        title: 'Segmentation Model',
        body:
          'VLANs keep Summit Care traffic organized and secure. Guest users should never be able to reach the domain controller, Cloud Key, management interfaces, printers, clinical systems, or internal servers.',
        table: [
          ['Network', 'Example VLAN/Subnet', 'Purpose'],
          ['Management', 'VLAN 10 / 10.10.10.0/24', 'Cloud Key, gateway, switch, and AP administration.'],
          ['Staff Wi-Fi', 'VLAN 20 / 10.20.20.0/24', 'Domain-authenticated staff devices using RADIUS/certificates.'],
          ['Clinical Devices', 'VLAN 30 / 10.30.30.0/24', 'Approved clinic equipment and internal systems.'],
          ['Guest Wi-Fi', 'VLAN 40 / 10.40.40.0/24', 'Internet-only visitor access with captive portal.'],
          ['VPN Users', 'VPN client pool', 'Remote access to approved internal networks only.'],
        ],
      },
    ],
  },
  {
    file: 'voip.html',
    title: 'VPN, Cloud Operations & Monitoring',
    kicker: 'Operations',
    h1: 'VPN, Cloud Operations, Monitoring & Support',
    lead:
      'Explaining how Summit Care admins access, monitor, provision, and support the UniFi environment locally and remotely.',
    icon: 'fa-eye',
    sections: [
      {
        title: 'Operational Access',
        body:
          'Administrators can access UniFi locally through private management IP addresses or remotely through unifi.ui.com. UniFi VPN provides secure access for authorized support work without exposing management interfaces directly to the public internet.',
        bullets: [
          'Use private GUI access for local Cloud Key and gateway administration.',
          'Use unifi.ui.com for cloud-based site visibility, alerts, topology, and client monitoring.',
          'Use UniFi VPN options such as Teleport, WireGuard, or L2TP/IPsec based on support needs.',
          'Review AP health, wireless experience, WAN status, firmware, RADIUS failures, and mesh uplink quality.',
        ],
      },
    ],
  },
  {
    file: 'cloud.html',
    title: 'UniFi Cloud Management',
    kicker: 'Cloud',
    h1: 'UniFi Cloud Management & Remote Provisioning',
    lead:
      'Replacing the old cloud narrative with UniFi cloud access, multi-site visibility, remote provisioning, and centralized network operations.',
    icon: 'fa-cloud',
    sections: [
      {
        title: 'Cloud Visibility',
        body:
          'UniFi cloud access lets Summit Care view private office networks, devices, clients, alerts, topology, and firmware status from one place. The Cloud Key Gen2 remains the controller, while unifi.ui.com provides secure remote reachability for authorized admins.',
        bullets: [
          'Monitor many offices throughout the five boroughs without visiting each site.',
          'Push SSID, VLAN, VPN, firewall, radio, and firmware changes from the UniFi controller.',
          'Provision newly adopted UniFi gateways and U7 Pro XL access points into a standard Summit Care template.',
          'Use MFA and least-privilege admin roles for cloud access governance.',
        ],
      },
    ],
  },
  {
    file: 'programming.html',
    title: 'Provisioning, Templates & Automation',
    kicker: 'Automation',
    h1: 'Provisioning, Templates, Testing & Automation',
    lead:
      'Capturing the repeatable procedures used to roll out UniFi sites, validate RADIUS, test certificates, and keep configurations consistent.',
    icon: 'fa-code',
    sections: [
      {
        title: 'Repeatable Provisioning',
        body:
          'The project relies on standards: naming conventions, site templates, VLAN IDs, SSID names, RADIUS profiles, VPN rules, guest portal settings, and AP placement notes. That lets Summit Care add offices without redesigning the network every time.',
        bullets: [
          'Use standard UniFi site names, device names, SSIDs, VLANs, and firewall rule labels.',
          'Back up the Cloud Key Gen2 before large changes and after stable deployments.',
          'Test staff SSID authentication with user credentials and certificate-based device access.',
          'Test guest portal access, isolation rules, VPN reachability, and wireless mesh uplink behavior.',
        ],
      },
    ],
  },
  {
    file: 'cybersecurity.html',
    title: 'Security Controls & Certificate Access',
    kicker: 'Security',
    h1: 'Security Controls, RADIUS & Certificate-Based Access',
    lead:
      'Detailing how UniFi, Windows NPS/RADIUS, certificates, VLANs, guest isolation, VPN rules, and admin governance protect the Summit Care WLAN.',
    icon: 'fa-shield-alt',
    sections: [
      {
        title: 'Security Model',
        body:
          'The strongest staff wireless path is certificate-backed WPA-Enterprise. Managed devices receive trusted certificates from Windows certificate services, UniFi APs forward the 802.1X exchange to NPS, and NPS validates certificate trust and policy before granting access.',
        bullets: [
          'Require MFA and least privilege for UniFi cloud administrators.',
          'Use RADIUS-backed staff Wi-Fi instead of shared passwords.',
          'Prefer certificate-based access for managed Summit Care devices.',
          'Keep guest Wi-Fi isolated with private-network blocking and captive portal policy.',
          'Limit VPN users to approved networks and review access regularly.',
        ],
      },
    ],
  },
  {
    file: 'hippa.html',
    title: 'HIPAA-Aware Governance & Risk',
    kicker: 'Governance',
    h1: 'HIPAA-Aware Governance, Documentation & Risk',
    lead:
      'Connecting the UniFi WLAN unification project to healthcare operations, accountability, segmentation, access control, and support documentation.',
    icon: 'fa-clipboard-check',
    sections: [
      {
        title: 'Risk and Governance',
        body:
          'Wireless networking does not store patient records by itself, but it carries access to the systems staff use every day. Summit Care’s UniFi design supports a HIPAA-aware posture by improving segmentation, accountability, administrative control, and documentation.',
        bullets: [
          'Document office site names, gateway IPs, Cloud Key IPs, VLANs, SSIDs, VPN pools, and AP placement.',
          'Protect RADIUS shared secrets, certificate templates, certificate authority details, and NPS policy documentation.',
          'Review UniFi admin roles, VPN users, guest portal settings, and firewall rules on a routine schedule.',
          'Track wireless mesh APs separately because they depend on wireless backhaul instead of Ethernet.',
        ],
      },
      {
        title: 'Final Project Summary',
        body:
          'The completed project turns Summit Care’s many office WLANs into one manageable UniFi ecosystem. UniFi Cloud Gateway handles routing, security, VLANs, and VPN; Cloud Key Gen2 provides the controller; U7 Pro XL access points deliver wireless; Windows Server NPS/RADIUS and certificates secure staff access; and guest portal, cloud monitoring, and wireless mesh make the design practical in real office conditions.',
      },
    ],
  },
];

function header(title) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Summit Care UniFi WLAN Unification</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
  </head>
<body>
<div class="background-wrapper">
  <div class="notification-bar">Ubiquiti UniFi WLAN Unification by Sidiq Daniel</div>
  <div class="sticky-header">
    <div class="logo">
      <a href="index.html" target="_blank" rel="noopener noreferrer">
        <img src="images/daters.png" alt="Summit Care UniFi logo" class="logo-image">
      </a>
      <a href="index.html" class="logo-text-link">Summit Care UniFi WLAN</a>
    </div>
    <div class="hamburger-menu" onclick="toggleMenu()">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <nav class="dropdown-menu">
      <ul>
        <li class="home-item"><a href="index.html" class="home-link">Home</a></li>
        <li class="menu-item" onclick="toggleSubMenu()">
          <span class="menu-title">Index <i class="arrow">&#x25BC;</i></span>
          <ul class="sub-menu">
            ${navItems.map(([href, label]) => `<li data-href="${href}">${label}</li>`).join('\n            ')}
          </ul>
        </li>
      </ul>
    </nav>
  </div>`;
}

function renderTable(table) {
  const [head, ...rows] = table;
  return `<div class="report-table-shell"><table class="report-table">
    <thead><tr>${head.map((cell) => `<th>${cell}</th>`).join('')}</tr></thead>
    <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>`;
}

function renderPage(page) {
  const body = page.sections
    .map((section) => {
      const bullets = section.bullets
        ? `<ul class="workflow-list">${section.bullets.map((item) => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('\n')}</ul>`
        : '';
      const cards = section.cards
        ? `<div class="three-col">${section.cards
            .map(([title, text]) => `<div class="mini-card"><h4>${title}</h4><p>${text}</p></div>`)
            .join('\n')}</div>`
        : '';
      const table = section.table ? renderTable(section.table) : '';
      return `<section class="project-summary-section">
        <div class="project-summary-icon"><i class="fas ${page.icon}"></i></div>
        <h2>${section.title}</h2>
        <p class="project-summary-paragraph">${section.body}</p>
        ${bullets}
        ${cards}
        ${table}
      </section>`;
    })
    .join('\n');

  return `${header(page.title)}
  <section class="intro-section">
    <div class="button-like">${page.kicker}</div>
    <h1>${page.h1}</h1>
    <p>${page.lead}</p>
    <div class="button-group">
      <button class="primary-button" onclick="window.location.href='deploy.html';">View Deployment</button>
      <button class="secondary-button"><a href="diagrams.html" class="button-link">Explore Summit Care<br>Blueprint</a></button>
    </div>
    <div class="review-section">
      <span class="star">★ ★ ★ ★ ★</span>
      <p>UniFi cloud management, RADIUS, certificates, VLANs, VPN, guest access, and mesh wireless in one unified project.</p>
    </div>
  </section>

  <div class="auto-scrolling-reel">
    <div class="reel-container">
      <span><i class="fas fa-award"></i> UniFi Cloud Gateway</span>
      <span><i class="fas fa-award"></i> Cloud Key Gen2</span>
      <span><i class="fas fa-award"></i> U7 Pro XL Access Points</span>
      <span><i class="fas fa-award"></i> Windows NPS/RADIUS</span>
      <span><i class="fas fa-award"></i> Certificate-Based 802.1X</span>
      <span><i class="fas fa-award"></i> Guest VLAN & Captive Portal</span>
      <span><i class="fas fa-award"></i> UniFi VPN</span>
      <span><i class="fas fa-award"></i> Wireless Mesh</span>
    </div>
  </div>

  ${body}

  <section class="integration-section">
    <div class="integration-content">
      <h2>Summit Care UniFi Unification</h2>
      <p>The full project standardizes how Summit Care deploys, monitors, secures, and supports wireless across multiple clinic offices. The result is one clear WLAN operating model instead of disconnected branch configurations.</p>
      <button class="primary-button" onclick="window.location.href='index.html';">Back Home</button>
    </div>
  </section>
</div>
<script src="script2.js"></script>
</body>
</html>`;
}

for (const page of pages) {
  const html = renderPage(page);
  writeFileSync(join(legacyDir, page.file), html);
  writeFileSync(join(publicSiteDir, page.file), html);
}

console.log(`Generated ${pages.length} UniFi project pages in legacy/ and public/site/.`);
