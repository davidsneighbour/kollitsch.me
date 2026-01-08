# Patrick Kollitsch - Personal Portfolio

A modern, responsive personal portfolio website built with Astro, React, and Tailwind CSS, featuring a Windows Mobile-inspired tiled design.

## 🚀 Features

- **Modern Tiled Layout**: Windows Mobile-inspired design with flexible grid system
- **Responsive Design**: Optimized for mobile (max 2-column) and desktop layouts
- **Interactive Components**: Hover effects, modals, and smooth animations
- **Component Architecture**: Reusable tile system with different content types
- **Performance Optimized**: Built with Astro for optimal loading speed
- **Accessibility**: Keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **Framework**: Astro with React integration
- **Styling**: Tailwind CSS
- **Icons**: Astro Icon with Bootstrap Icons
- **Typography**: Quicksand font from Google Fonts
- **Deployment**: Ready for Netlify/Vercel deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:4321 in your browser

## 🎨 Design System

### Color Palette
- **Primary**: Slate color palette (muted blueish dark gray)
- **Accents**: Blue, green, purple, and orange for different tile types
- **Background**: Gradient from slate-900 to slate-700

### Typography
- **Font**: Quicksand from Google Fonts
- **Styling**: Uppercase titles with tracking
- **Weights**: 300, 400, 500, 600, 700

### Components

#### Tile System
- **IconTile**: Simple tiles with icon and optional title
- **ContentTile**: Rich content tiles with custom layouts
- **Modal**: Popup overlays for detailed content
- **ContactForm**: Interactive contact form component

#### Tile Sizes
- `small`: 1x1 grid unit (128px height)
- `medium`: 2x2 grid units (256px height)
- `large`: 3x3 grid units (384px height)
- `wide`: 2x1 grid units (128px height)
- `tall`: 1x2 grid units (256px height)

## 🔧 Customization

### Adding New Tiles

1. **Icon Tile**:
```tsx
<IconTile 
  icon="bootstrap-icon-name" 
  title="Tile Title" 
  color="text-blue-400"
  size="small"
  href="https://example.com"
  external={true}
/>
```

2. **Content Tile**:
```tsx
<ContentTile size="medium" title="Custom Title">
  <div>Your custom content here</div>
</ContentTile>
```

### Responsive Breakpoints
- **Mobile**: `grid-cols-2` (max 2 columns)
- **Tablet**: `md:grid-cols-4` (4 columns)
- **Desktop**: `lg:grid-cols-6` (6 columns)
- **Large**: `xl:grid-cols-8` (8 columns)

### Color Customization
Update the color scheme in `tailwind.config.mjs`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      },
    },
  },
},
```

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Connect your repository to Vercel
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`

## 📱 Mobile Optimization

- Maximum 2-column layout on mobile devices
- Touch-friendly tile sizes (minimum 128px height)
- Optimized typography and spacing
- Smooth scrolling and animations

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast color combinations
- Focus indicators for interactive elements

## 🔍 SEO Features

- Meta tags for social sharing
- Semantic HTML structure
- Fast loading with Astro
- Mobile-friendly design
- Structured data ready

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📞 Contact

Patrick Kollitsch - [kollitsch.me](https://kollitsch.me)

Project Link: [https://github.com/username/portfolio-website](https://github.com/username/portfolio-website)