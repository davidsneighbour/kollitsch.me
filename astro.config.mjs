import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from "astro-icon";

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react(), icon()],
  site: 'https://kollitsch.me',

  vite: {
    plugins: [tailwindcss()]
  }
});