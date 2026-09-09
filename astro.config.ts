import tailwind from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Canonical domain; public/CNAME carries the same value for GitHub Pages.
export default defineConfig({
	site: "https://cultcap.app",
	vite: {
		plugins: [tailwind()],
	},
});
