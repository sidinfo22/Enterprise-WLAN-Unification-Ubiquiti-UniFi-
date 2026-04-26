# Summit Care UniFi WLAN Unification Project

Static portfolio project for Summit Care Medical Clinic's Ubiquiti UniFi WLAN unification design.

The project covers UniFi Cloud Gateway routing, Cloud Key Gen2 management, U7 Pro XL access points, Windows Server NPS/RADIUS, certificate-based 802.1X access, guest VLANs, captive portal, UniFi VPN, cloud monitoring, remote provisioning, and wireless mesh.

## GitHub Pages Deployment

This repo is prepared for GitHub Pages.

1. Push the whole repository to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. For the recommended setup, choose `GitHub Actions`.
4. The included workflow at `.github/workflows/static.yml` runs `npm ci`, builds the Vite app, and deploys the `docs/` folder.

You can also deploy manually from `docs/` after running:

```bash
npm install
npm run build
```

## Local Development

```bash
npm install
npm run dev
```

The React app runs at `http://127.0.0.1:3000/`.

## Static Project Pages

The legacy/static project pages are also included and mirrored into the build under:

```text
/site/index.html
```

After building, GitHub Pages can serve the static project at `/site/index.html` and the React report at the site root.

## Master PDF

The updated UniFi master PDF is:

```text
summit-care-unifi-wlan-unification-master-report.pdf
```

In the GitHub Pages build, it is served from:

```text
/reports/summit-care-unifi-wlan-unification-master-report.pdf
```
