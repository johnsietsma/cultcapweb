# cultcapweb

Landing page for CultCap: phone capture of heritage objects into 3D. One page, an email
signup, nothing else. Built with Astro and Tailwind, deployed to GitHub Pages on every
push to `main`.

```bash
npm install
npm run dev      # local preview
npm run build    # static output in dist/
```

## Before it goes live

- Hero image: add one from the museum capture, and an `og:image` meta tag in `src/layouts/Landing.astro`.
- Repo settings, Pages: set the custom domain and enforce HTTPS.
- DNS: apex `A` records to GitHub Pages, `www` `CNAME` to `johnsietsma.github.io`.
