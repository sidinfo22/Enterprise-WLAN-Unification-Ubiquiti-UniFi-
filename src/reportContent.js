export const reportContent = {
  index: {
    eyebrow: 'Master Report',
    heroTitle: 'Ubiquiti UniFi WLAN Unification Project',
    heroText:
      'A Summit Care Medical Clinic infrastructure report focused on unifying wireless, routing, VPN, guest access, RADIUS authentication, cloud management, and branch visibility across virtual office locations in the five boroughs.',
    heroMeta: [
      'UniFi Cloud Gateway',
      'Cloud Key Gen2',
      'U7 Pro XL Access Points',
      'Windows Server NPS/RADIUS',
    ],
    stats: [
      { value: '5', label: 'NYC borough coverage model' },
      { value: '1812/1813', label: 'RADIUS auth and accounting ports' },
      { value: '24/7', label: 'Cloud visibility and monitoring goal' },
      { value: '1', label: 'Unified UniFi management plane' },
    ],
    cards: [
      {
        title: 'Overview & Strategy',
        text: 'Frame the clinic growth problem, the UniFi standardization goal, and the business value of one managed WLAN platform.',
        href: '/objectives',
      },
      {
        title: 'Architecture & Configuration',
        text: 'Document the Cloud Key Gen2, UniFi gateway, U7 Pro XL access points, VLANs, guest Wi-Fi, captive portal, and RADIUS design.',
        href: '/deploy',
      },
      {
        title: 'Operations & Remote Access',
        text: 'Show how cloud access, private GUI access, VPN, monitoring, provisioning, roaming, and wireless mesh support day-to-day operations.',
        href: '/voip',
      },
      {
        title: 'Risk & Conclusion',
        text: 'Summarize security, governance, limitations, support controls, and the final engineering value of the UniFi unification project.',
        href: '/hippa',
      },
    ],
    sections: [
      {
        kicker: 'Purpose & Goal',
        title: 'Project Purpose, Goal & Operational Intent',
        lead:
          'The purpose of this project is to rebrand Summit Care Medical Clinic around a Ubiquiti UniFi WLAN unification design. Summit Care now operates many offices throughout the five boroughs, and each office needs consistent wireless, secure staff authentication, guest access, VPN connectivity, cloud monitoring, and centralized management instead of disconnected local Wi-Fi setups. The goal is to make every clinic location feel like part of one controlled network environment while still keeping each office properly segmented and supportable.',
      },
      {
        kicker: 'Executive Focus',
        title: 'What This Project Is Designed To Prove',
        lead:
          'This report presents Summit Care Medical Clinic as a growing healthcare organization that standardized on Ubiquiti UniFi for branch networking. The project shows how a UniFi Cloud Gateway, UniFi Cloud Key Gen2, U7 Pro XL access points, Windows Server domain services, and RADIUS/NPS can work together to create one cloud-managed wireless and routing platform for multiple clinic locations.',
        kind: 'cards',
        items: [
          {
            title: 'Unified Cloud Management',
            body:
              'The UniFi Network application on the Cloud Key Gen2 gives IT a single dashboard to manage sites, gateways, switches, access points, clients, SSIDs, VLANs, VPNs, alerts, firmware, and adoption state across Summit Care offices.',
          },
          {
            title: 'Enterprise Staff Wireless',
            body:
              'Staff Wi-Fi is backed by Windows Server Network Policy Server using RADIUS on UDP 1812 for authentication and UDP 1813 for accounting. This connects wireless access to domain identity instead of relying on a shared password.',
          },
          {
            title: 'Guest and Patient Separation',
            body:
              'Guest Wi-Fi uses a separate VLAN, subnet, firewall boundary, and captive portal so visitors can receive internet access without reaching internal clinic systems, domain resources, servers, printers, or management interfaces.',
          },
        ],
        callout:
          'Important design note: this is a WLAN unification and cloud management project, not just an access point installation. The value comes from tying routing, wireless, RADIUS, guest policy, VPN, monitoring, and provisioning into one repeatable UniFi operating model.',
      },
      {
        kicker: 'Service Goals',
        title: 'Target Outcomes',
        kind: 'split',
        items: [
          {
            title: 'Operational Objectives',
            points: [
              'Unify multiple Summit Care clinic offices under one UniFi management experience.',
              'Deploy Ubiquiti U7 Pro XL access points with consistent SSIDs, RF settings, VLAN assignments, and roaming behavior.',
              'Use Windows Server domain identity with NPS/RADIUS for secure staff wireless authentication.',
              'Separate staff, guest, management, and clinical device traffic with VLANs and firewall rules.',
              'Enable private local GUI access by internal IP while also supporting remote cloud access through unifi.ui.com.',
              'Provide UniFi VPN access for administrators and approved staff who need secure remote connectivity.',
            ],
          },
          {
            title: 'Readiness Snapshot',
            metrics: [
              { label: 'Centralized UniFi visibility', value: 96 },
              { label: 'Staff wireless authentication strength', value: 92 },
              { label: 'Guest isolation maturity', value: 90 },
              { label: 'Remote support efficiency', value: 94 },
            ],
          },
        ],
      },
      {
        kicker: 'Summit Care Blueprint',
        title: 'Summit Care UniFi Blueprint Snapshot',
        kind: 'table',
        columns: ['Component', 'Role', 'Value to the Design'],
        rows: [
          ['UniFi Cloud Gateway', 'Edge router and security gateway', 'Routes office traffic, enforces VLAN boundaries, provides VPN, and anchors site connectivity'],
          ['UniFi Cloud Key Gen2', 'UniFi Network controller', 'Hosts the management plane used for adoption, monitoring, configuration, updates, and remote access'],
          ['Ubiquiti U7 Pro XL access points', 'Wi-Fi 7 access layer', 'Provides high-capacity wireless coverage for staff, clinical, guest, and mobile devices'],
          ['Dell PowerEdge R740xd with Proxmox', 'Virtualization host', 'Runs Windows Server domain controller and NPS/RADIUS services for authentication'],
          ['Windows Server domain controller', 'AD DS, DNS, NPS/RADIUS', 'Centralizes identity, policy, and enterprise wireless authentication'],
        ],
      },
    ],
  },
  objectives: {
    eyebrow: 'Section 1',
    heroTitle: 'Overview, Purpose & UniFi Platform Strategy',
    heroText:
      'This section frames Summit Care Medical Clinic as a multi-office healthcare network that needs one reliable UniFi wireless, routing, VPN, and cloud management standard.',
    sections: [
      {
        title: 'Purpose',
        lead:
          'Summit Care needed a way to manage wireless and network access consistently across many offices in the five boroughs. The design goal was to make every location easier to provision, monitor, secure, and support through Ubiquiti UniFi while still integrating with the existing Windows Server domain.',
        kind: 'list',
        items: [
          'Standardize branch routing and wireless around UniFi hardware and the UniFi Network application.',
          'Use U7 Pro XL access points as the wireless access standard for staff, guest, and clinical device connectivity.',
          'Use the UniFi Cloud Key Gen2 as the local controller and cloud-connected management point.',
          'Tie staff wireless into Windows Server Active Directory through NPS/RADIUS.',
          'Create a repeatable deployment pattern for new Summit Care offices.',
        ],
      },
      {
        title: 'Operational Drivers',
        kind: 'split',
        items: [
          {
            title: 'Multi-Office Growth',
            body:
              'A single clinic network can be managed manually, but a growing healthcare group needs standard templates, consistent SSIDs, controlled VLANs, and remote visibility. UniFi makes the five-borough office model manageable from one place.',
          },
          {
            title: 'Supportability',
            body:
              'IT can adopt access points, view client health, push SSID changes, review alerts, update firmware, and troubleshoot wireless experience without physically visiting every office for routine work.',
          },
        ],
      },
      {
        title: 'Platform Summary',
        kind: 'table',
        columns: ['Asset', 'Role', 'Why It Was Chosen'],
        rows: [
          ['UniFi Cloud Gateway', 'Branch edge router/gateway', 'Combines routing, firewalling, VLAN gateways, VPN, and UniFi-native visibility'],
          ['UniFi Cloud Key Gen2', 'Network controller', 'Provides local controller services with convenient access through unifi.ui.com'],
          ['U7 Pro XL access points', 'Wireless access layer', 'Supports modern high-density office wireless and consistent UniFi policy enforcement'],
          ['Dell PowerEdge R740xd', 'Compute platform', 'Hosts the Windows Server VM stack on Proxmox for domain and RADIUS services'],
          ['Windows Server on Proxmox', 'AD DS, DNS, NPS/RADIUS', 'Lets staff wireless authentication use domain users and policy groups'],
        ],
      },
      {
        title: 'Success Criteria',
        kind: 'table',
        columns: ['Metric', 'Desired Result', 'Meaning'],
        rows: [
          ['Cloud manageability', 'Every office appears in UniFi with device, client, and alert visibility', 'IT can operate the WLAN estate centrally'],
          ['Staff Wi-Fi authentication', 'Domain users authenticate through RADIUS', 'Access is tied to identity instead of shared secrets'],
          ['Guest isolation', 'Guest users receive internet access only', 'Internal clinic assets remain protected'],
          ['Remote access', 'VPN and cloud dashboard access are available to authorized admins', 'Support can happen from anywhere with proper controls'],
        ],
      },
    ],
  },
  deploy: {
    eyebrow: 'Section 2',
    heroTitle: 'UniFi Cloud Key, Gateway, RADIUS & WLAN Architecture',
    heroText:
      'This section condenses the technical build: Cloud Key Gen2 setup, UniFi gateway configuration, U7 Pro XL adoption, VLAN design, guest Wi-Fi, captive portal, RADIUS/NPS, and mesh placement.',
    sections: [
      {
        title: 'Platform Role Separation',
        kind: 'cards',
        items: [
          {
            title: 'UniFi Gateway Owns Edge Services',
            body:
              'The UniFi gateway acts as the office edge router, default gateway for VLANs, firewall policy point, VPN endpoint, and routed path between local networks and approved inter-site resources.',
          },
          {
            title: 'Cloud Key Gen2 Owns Network Management',
            body:
              'The Cloud Key Gen2 hosts the UniFi Network application used for device adoption, SSID creation, VLAN tagging, firmware management, alerts, client history, topology, and remote cloud access.',
          },
          {
            title: 'Windows Server Owns Identity',
            body:
              'The Windows Server domain controller and NPS role provide RADIUS authentication so staff wireless access can be controlled through Active Directory users, groups, and policy.',
          },
        ],
      },
      {
        title: 'Core Network and VLAN Design',
        lead:
          'Each Summit Care office uses the same logical segmentation pattern so troubleshooting and expansion stay consistent. Exact subnet numbers can vary by site, but the role of each network remains predictable.',
        kind: 'table',
        columns: ['Network', 'Example VLAN/Subnet', 'Purpose'],
        rows: [
          ['Management', 'VLAN 10 / 10.10.10.0/24', 'Cloud Key, gateway, switches, AP management, and administrative interfaces'],
          ['Staff Wi-Fi', 'VLAN 20 / 10.20.20.0/24', 'Domain-authenticated employee laptops, tablets, and approved mobile devices'],
          ['Clinical devices', 'VLAN 30 / 10.30.30.0/24', 'Protected device network for approved clinic systems and office equipment'],
          ['Guest Wi-Fi', 'VLAN 40 / 10.40.40.0/24', 'Internet-only guest and patient access with captive portal enforcement'],
          ['VPN users', 'VPN pool / routed subnet', 'Secure remote access into approved internal networks for administrators and authorized users'],
        ],
      },
      {
        title: 'Cloud Key Gen2 Setup Workflow',
        kind: 'timeline',
        items: [
          'Connect the UniFi Cloud Key Gen2 to the management network and assign a reserved private management IP address.',
          'Open the local GUI through the private IP address for first-time setup and controller hardening.',
          'Sign in with the authorized Ubiquiti account and link the controller to UniFi cloud access for remote management through unifi.ui.com.',
          'Update the Cloud Key firmware and UniFi Network application before adopting production devices.',
          'Create the Summit Care site naming standard, admin accounts, backup schedule, notification settings, and remote access controls.',
          'Adopt the UniFi gateway and U7 Pro XL access points, then confirm the topology and device health map are accurate.',
        ],
      },
      {
        title: 'RADIUS to Windows Server NPS',
        lead:
          'RADIUS was configured so the UniFi staff SSID can authenticate against the Windows domain controller running Network Policy Server. UniFi sends authentication requests to NPS on UDP 1812 and accounting messages on UDP 1813. The design also supports certificate-based access, where trusted Summit Care devices present approved client certificates instead of relying only on a typed password.',
        kind: 'table',
        columns: ['Step', 'Configuration Intent', 'Why It Matters'],
        rows: [
          ['Install NPS', 'Add the Network Policy Server role on the Windows Server VM running on Proxmox', 'Provides the RADIUS service used by UniFi WLAN authentication'],
          ['Register in AD', 'Register NPS in Active Directory', 'Allows NPS to evaluate domain users and group membership'],
          ['Add RADIUS clients', 'Add UniFi gateway/controller/AP source addresses with a shared secret', 'Lets NPS trust requests from the UniFi network infrastructure'],
          ['Open ports', 'Permit UDP 1812 and UDP 1813 between UniFi devices and the Windows Server', 'Enables authentication and accounting traffic'],
          ['Create policy', 'Allow approved Summit Care staff security groups for the secure SSID', 'Keeps wireless access tied to business roles'],
          ['Enable certificate access', 'Use certificate-based 802.1X methods such as EAP-TLS or PEAP with certificate validation for managed devices', 'Ensures trusted devices can be validated by certificate before receiving staff network access'],
        ],
      },
      {
        title: 'Certificate-Based Wireless Access',
        lead:
          'For managed Summit Care devices, certificate-based access adds a stronger trust layer to the UniFi staff WLAN. The Windows Server certificate authority can issue certificates to approved domain-joined devices, NPS validates those certificates during the RADIUS exchange, and UniFi places the client on the correct staff VLAN only after policy succeeds.',
        kind: 'cards',
        items: [
          {
            title: 'Device Trust',
            body:
              'Only devices with valid Summit Care certificates are treated as trusted staff endpoints. This reduces the risk of a password being reused from an unmanaged personal device.',
          },
          {
            title: 'UniFi 802.1X Enforcement',
            body:
              'The UniFi SSID is configured for WPA-Enterprise/802.1X, pointing to Windows NPS as the RADIUS server. UniFi access points forward authentication requests and enforce the accept or reject decision.',
          },
          {
            title: 'Policy and Accounting',
            body:
              'NPS policy checks certificate trust, user or computer group membership, and access conditions, while RADIUS accounting on UDP 1813 helps track authenticated sessions.',
          },
        ],
      },
      {
        title: 'Guest Wi-Fi and Captive Portal',
        kind: 'cards',
        items: [
          {
            title: 'Separate VLAN and Subnet',
            body:
              'Guest Wi-Fi lands on its own VLAN and subnet so visitors cannot reach the management network, domain controller, clinical devices, printers, or internal staff resources.',
          },
          {
            title: 'Captive Portal Experience',
            body:
              'A UniFi captive portal was designed for Summit Care guest access with clinic branding, acceptable-use language, optional voucher or simple access mode, and a clean landing flow before internet use.',
          },
          {
            title: 'Firewall Boundaries',
            body:
              'Guest rules block private RFC1918 destinations and allow only required internet-bound traffic. This keeps public Wi-Fi convenient without making it part of the trusted clinic network.',
          },
        ],
      },
      {
        title: 'Wireless Mesh for Hard-to-Reach Areas',
        lead:
          'One Summit Care office had two floors and no practical Ethernet path to the second floor. Instead of leaving that floor under-covered, a U7 Pro XL was placed where it could uplink wirelessly to a wired access point and extend coverage through UniFi wireless meshing.',
        kind: 'timeline',
        items: [
          'Confirm at least one wired U7 Pro XL has strong placement and clean upstream connectivity.',
          'Enable wireless meshing in UniFi and adopt the second-floor access point while temporarily wired or close to the controller path.',
          'Move the mesh AP to the second floor and verify uplink quality, signal strength, channel behavior, and client performance.',
          'Tune power and channel settings so the mesh AP extends coverage without creating unnecessary interference.',
          'Document the mesh dependency clearly because that AP depends on wireless backhaul rather than Ethernet.',
        ],
      },
    ],
  },
  voip: {
    eyebrow: 'Section 3',
    heroTitle: 'Cloud Operations, VPN, Monitoring & Provisioning',
    heroText:
      'This section explains how Summit Care uses UniFi for remote cloud management, private local access, VPN connectivity, monitoring, provisioning, and operational support across offices.',
    sections: [
      {
        title: 'UniFi Access Paths',
        lead:
          'The UniFi environment can be managed locally through private addresses and remotely through UniFi cloud access. This gives Summit Care a practical balance: local control when on-site, cloud visibility when supporting offices from another location.',
        kind: 'table',
        columns: ['Access Method', 'Example Use', 'Control Consideration'],
        rows: [
          ['Private local GUI', 'Open the Cloud Key or gateway by private management IP while on the clinic network or VPN', 'Best for direct local administration and recovery work'],
          ['unifi.ui.com', 'View sites, devices, alerts, clients, and topology from anywhere', 'Requires protected admin accounts and MFA'],
          ['UniFi mobile app', 'Quickly check AP health, client status, alerts, and device adoption state', 'Useful for field support and rapid triage'],
          ['VPN access', 'Reach approved internal networks remotely', 'Should be limited to authorized staff and administrators'],
        ],
      },
      {
        title: 'UniFi VPN Setup',
        lead:
          'The UniFi gateway was configured as the VPN edge so approved administrators and staff can securely reach internal services without exposing management interfaces to the public internet.',
        kind: 'timeline',
        items: [
          'Define the VPN type in UniFi based on the support requirement, such as Teleport, WireGuard, or L2TP/IPsec where appropriate.',
          'Create a VPN user or administrator access model with strong authentication and least-privilege expectations.',
          'Assign the VPN client pool and route only the networks users are approved to access.',
          'Add firewall rules so VPN users can reach management, server, or staff resources only when business need exists.',
          'Test remote connection, DNS behavior, Cloud Key reachability by private IP, and access to approved Summit Care resources.',
          'Document onboarding, revocation, and account review steps so VPN access does not drift over time.',
        ],
      },
      {
        title: 'Cloud Monitoring and Provisioning',
        kind: 'cards',
        items: [
          {
            title: 'Remote Device Visibility',
            body:
              'UniFi shows gateways, APs, clients, wireless experience, firmware state, alerts, uptime, throughput, and topology from the controller so IT can see all private office networks in one space.',
          },
          {
            title: 'Provision From Anywhere',
            body:
              'Once a device is adopted to the correct site, UniFi can push SSIDs, VLANs, firewall rules, VPN settings, radio profiles, and firmware updates without rebuilding each office manually.',
          },
          {
            title: 'Multi-Site Consistency',
            body:
              'Summit Care can reuse naming standards, SSID patterns, guest policies, RADIUS settings, and VLAN structures as new offices are added throughout the city.',
          },
        ],
      },
      {
        title: 'Operational Runbook',
        kind: 'timeline',
        items: [
          'Receive a UniFi alert or user report about wireless, VPN, or branch connectivity.',
          'Open UniFi Network through unifi.ui.com or the private controller address if connected locally or through VPN.',
          'Check gateway health, WAN status, AP status, switch uplinks, client signal, VLAN assignment, and recent configuration changes.',
          'For staff Wi-Fi issues, verify RADIUS reachability to Windows Server NPS on UDP 1812 and accounting on UDP 1813.',
          'For guest issues, test captive portal load, guest VLAN addressing, DNS, firewall restrictions, and internet egress.',
          'For mesh issues, review wireless uplink quality, retry rate, channel utilization, and second-floor AP placement.',
        ],
      },
      {
        title: 'Testing Checklist',
        kind: 'split',
        items: [
          {
            title: 'Authentication Validation',
            body:
              'Test domain user login, certificate-based device authentication, blocked login for unauthorized accounts, RADIUS accounting visibility, and group-based policy behavior on the staff SSID.',
          },
          {
            title: 'Segmentation Validation',
            body:
              'Confirm staff, guest, management, clinical, and VPN networks receive correct VLANs and cannot reach destinations outside their allowed policy.',
          },
        ],
      },
      {
        title: 'Operational Truth About UniFi',
        lead:
          'UniFi gives Summit Care a strong balance of enterprise networking features and practical manageability. The major advantage is not just Wi-Fi coverage; it is the ability to see, provision, update, segment, and support multiple clinic networks from one cloud-connected platform while still keeping local private access available for administrators.',
      },
    ],
  },
  hippa: {
    eyebrow: 'Section 4',
    heroTitle: 'Risk, Governance & Conclusion',
    heroText:
      'This closing section condenses the security controls, limitations, governance expectations, and final engineering conclusion for the Summit Care UniFi WLAN unification project.',
    sections: [
      {
        title: 'Risk Review',
        kind: 'table',
        columns: ['Risk', 'Impact', 'Mitigation'],
        rows: [
          ['RADIUS or domain controller outage', 'Staff may be unable to authenticate to enterprise Wi-Fi', 'Monitor NPS, document fallback access, and protect the Windows Server VM on Proxmox'],
          ['Guest VLAN leakage', 'Visitors could reach internal clinic assets', 'Use explicit firewall deny rules from guest to private networks and test segmentation regularly'],
          ['Cloud admin account compromise', 'An attacker could modify UniFi settings remotely', 'Require MFA, least privilege, admin reviews, and alerting for sensitive changes'],
          ['Mesh uplink weakness', 'Second-floor wireless performance may drop if backhaul quality is poor', 'Monitor uplink quality and add Ethernet when feasible'],
          ['Configuration drift across offices', 'Sites become inconsistent and harder to support', 'Use templates, naming standards, backups, and documented change control'],
        ],
      },
      {
        title: 'Security Controls to Keep',
        kind: 'list',
        items: [
          'Restrict UniFi administrator roles and require MFA for cloud access.',
          'Keep Cloud Key Gen2, gateway, switch, and access point firmware maintained through a controlled update process.',
          'Use RADIUS-backed staff Wi-Fi instead of shared staff passwords wherever possible.',
          'Prefer certificate-based access for managed Summit Care devices so trusted endpoints can be validated through NPS and the Windows certificate authority.',
          'Keep guest Wi-Fi on a separate VLAN and subnet with captive portal controls and private-network blocking.',
          'Limit VPN access to users and networks with a documented business need.',
          'Back up the UniFi controller configuration before major changes.',
        ],
      },
      {
        title: 'Documentation Standards',
        kind: 'list',
        items: [
          'Record each office site name, gateway address, Cloud Key address, WAN details, VLANs, subnets, and SSIDs.',
          'Document RADIUS shared secrets, NPS policies, Windows security groups, certificate templates, certificate authority settings, and allowed authentication methods in a protected location.',
          'Store screenshots or exports for UniFi topology, AP placement, VPN settings, captive portal settings, and firewall rules.',
          'Maintain a mesh access point inventory that clearly identifies which APs are wired and which depend on wireless backhaul.',
        ],
      },
      {
        title: 'Healthcare Operations Context',
        lead:
          'Wireless access does not store patient data by itself, but it carries access to the systems staff use for scheduling, communication, portals, printing, and internal operations. In a healthcare environment, reliable segmentation, accountable access, and strong administration are part of the broader HIPAA-aware security posture.',
      },
      {
        title: 'Benefits of the UniFi Direction',
        kind: 'cards',
        items: [
          {
            title: 'One Place to See the Network',
            body:
              'Summit Care can view private office networks, devices, alerts, and clients in one controller instead of managing each office as a separate island.',
          },
          {
            title: 'Faster Branch Rollout',
            body:
              'New offices can be provisioned with the same SSIDs, VLAN model, RADIUS settings, guest portal design, VPN rules, and monitoring expectations.',
          },
          {
            title: 'Better Support Experience',
            body:
              'IT can troubleshoot AP health, client signal, VLAN placement, RADIUS failures, WAN status, and VPN access remotely before sending someone on-site.',
          },
        ],
      },
      {
        title: 'Final Summary',
        lead:
          'This project demonstrates a complete UniFi WLAN unification design for Summit Care Medical Clinic. The UniFi gateway provides routing, security, and VPN; the Cloud Key Gen2 provides the management plane; U7 Pro XL access points deliver the wireless layer; Windows Server NPS connects staff Wi-Fi to domain identity; and VLANs, guest portal controls, cloud monitoring, and mesh uplinks make the design practical across real clinic offices in the five boroughs.',
      },
    ],
  },
};
