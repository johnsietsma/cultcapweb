import tailwind from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// TODO: set `site` to the real domain once DNS is pointed at GitHub Pages,
// and add the same domain to public/CNAME.
export default defineConfig({
	vite: {
		plugins: [tailwind()],
	},
});
