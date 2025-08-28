# DeepHull Diving Design System

A professional design system built for marine services with a deep navy and aqua color palette.

## 🎨 Color Palette

### Deep Navy Base Colors
- `--navy-950: #0a192f` - Deepest Navy (Main background)
- `--navy-900: #0f233c` - Deep Navy (Sidebar/cards)
- `--navy-800: #142d4b` - Navy (Card backgrounds)
- `--navy-700: #1c3859` - Mid Navy (Secondary elements)
- `--navy-600: #244361` - Light Navy (Borders)

### Aqua/Cyan Accent Colors
- `--aqua-400: #22d3ee` - Bright Aqua (Highlights)
- `--aqua-500: #06b6d4` - Pure Aqua (Primary buttons)
- `--aqua-600: #0891b2` - Deep Aqua (Hover states)
- `--aqua-700: #0e7490` - Dark Aqua (Text accents)

### Professional Accent Colors
- `--pearl-white: #f8fafc` - Clean White (Text)
- `--ocean-foam: #f0fdfa` - Soft Mint (Light backgrounds)
- `--coral-accent: #fb7185` - Emergency/Alert Red

### Extended Color System
The design system includes complete color scales for:
- Ocean Blues (50-950)
- Deep Blues (50-950)
- Coral/Red (50-900)
- Seafoam/Green (50-900)
- Pearl/Gray (50-900)

## 🎯 CSS Variables (Dark Theme)

The design system uses CSS custom properties for consistent theming:

```css
:root {
  /* Backgrounds */
  --background: 10 25 47;           /* Navy-950 */
  --foreground: 248 250 252;        /* Pearl White */
  --card: 20 45 75;                /* Navy-800 */
  --card-foreground: 248 250 252;   /* Pearl White */
  
  /* Primary Colors */
  --primary: 6 182 212;             /* Aqua-500 */
  --primary-foreground: 10 25 47;   /* Navy-950 */
  
  /* Secondary Colors */
  --secondary: 28 56 89;            /* Navy-700 */
  --secondary-foreground: 248 250 252; /* Pearl White */
  
  /* Accent Colors */
  --accent: 34 211 238;             /* Aqua-400 */
  --accent-foreground: 10 25 47;    /* Navy-950 */
  
  /* Muted Colors */
  --muted: 28 56 89;                /* Navy-700 */
  --muted-foreground: 148 163 184;  /* Gray */
  
  /* Destructive/Alert */
  --destructive: 251 113 133;       /* Coral */
  --destructive-foreground: 248 250 252; /* Pearl White */
  
  /* Borders & Inputs */
  --border: 28 56 89;               /* Navy-700 */
  --input: 28 56 89;                /* Navy-700 */
  --ring: 6 182 212;                /* Aqua-500 */
  
  /* Sidebar */
  --sidebar-background: 15 35 60;    /* Navy-900 */
  --sidebar-foreground: 248 250 252; /* Pearl White */
  --sidebar-primary: 6 182 212;      /* Aqua-500 */
  --sidebar-accent: 28 56 89;        /* Navy-700 */
  --sidebar-border: 28 56 89;        /* Navy-700 */
  
  /* Border Radius */
  --radius: 0.75rem;
}
```

## 🌈 Gradient System

### Gradient Variables
```css
--gradient-navy: linear-gradient(135deg, rgb(10 25 47), rgb(20 45 75));
--gradient-aqua: linear-gradient(135deg, rgb(8 145 178), rgb(34 211 238));
--gradient-navy-aqua: linear-gradient(135deg, rgb(10 25 47), rgb(8 145 178));
```

### Utility Classes
- `.gradient-navy` - Deep navy gradient background
- `.gradient-aqua` - Bright aqua gradient background
- `.gradient-navy-aqua` - Navy to aqua gradient transition
- `.text-gradient-aqua` - Aqua gradient text effect

## 🎬 Animation System

### Keyframes
- `float` - Gentle floating motion
- `wave` - Wave animation
- `fadeInUp` - Fade in from bottom
- `slideInRight` - Slide in from right
- `pulse-slow` - Slow pulsing effect

### Animation Classes
- `.animate-float` - Float animation (6s infinite)
- `.animate-wave` - Wave animation (2.5s)
- `.animate-fadeInUp` - Fade in up (0.8s)
- `.animate-slideInRight` - Slide in right (0.8s)
- `.animate-pulse-slow` - Slow pulse (3s infinite)

## 🏗️ Layout Patterns

### Container System
```css
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
}

@media (min-width: 1400px) {
  .container {
    max-width: 1400px;
  }
}
```

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

## 📝 Typography Scale

### Hero Typography
- `.hero-title` - Responsive hero title (3rem to 9rem)
- `.hero-subtitle` - Large subtitle (1.5rem to 4rem)
- `.hero-tagline` - Uppercase tagline (0.875rem to 2rem)

### Standard Headings
All headings include:
- Bold font weight
- Tight letter spacing (-0.025em)
- Responsive sizing

## 🎨 Component Styling Patterns

### Button Variants

#### Primary Button (Aqua)
```html
<button class="btn-primary">Primary Button</button>
```
- Gradient background (aqua-600 to aqua-500)
- Dark text (navy-950)
- Hover effects with transform and shadow
- Border with aqua accent

#### Emergency Button (Coral)
```html
<button class="btn-emergency">Emergency Call</button>
```
- Gradient background (coral-600 to coral-500)
- White text
- Hover effects with transform and shadow
- Border with coral accent

#### Secondary Button
```html
<button class="btn-secondary">Secondary Button</button>
```
- Solid background (navy-700)
- Light text
- Subtle hover effects
- Border styling

### Card Patterns

#### Standard Card
```html
<div class="card p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```
- Navy background
- Subtle shadows
- Hover effects
- Rounded corners

#### Glass Card Effect
```html
<div class="glass-card p-6">
  <h3>Glass Card</h3>
  <p>Content with backdrop blur</p>
</div>
```
- Semi-transparent background
- Backdrop blur effect
- Aqua border accent
- Modern glass morphism

#### Service Badge
```html
<span class="service-badge">Hull Cleaning</span>
```
- Small, pill-shaped badges
- Glass morphism styling
- Aqua border accent
- Perfect for service tags

### Background Patterns

#### Hero Background with Overlay
```html
<div class="hero-bg p-8">
  <h1>Hero Content</h1>
</div>
```
- Gradient overlay on background images
- Navy to aqua transition
- Professional marine aesthetic

#### Gradient Overlays
- `.gradient-overlay-top` - Top gradient overlay
- `.gradient-overlay-bottom` - Bottom gradient overlay
- `.gradient-overlay-sides` - Side gradient overlays

## 🎯 Key Design Elements

### Professional Effects
- `.floating-bubble` - Floating bubble elements
- Custom scrollbar styling
- Focus states with aqua ring
- Selection styling with aqua background

### Utility Classes
- `.transition-all` - Smooth transitions
- `.focus-visible` - Accessible focus states
- `.touch-manipulation` - Touch-friendly interactions

## 📱 Responsive Design

The design system is built mobile-first with responsive utilities:

```css
/* Mobile first approach */
.container { /* Base styles */ }

@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1400px) { /* 2xl */ }
```

## 🚀 Usage Examples

### Basic Page Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/design-system.css">
</head>
<body>
  <div class="container">
    <header class="hero-bg p-8 rounded-xl">
      <h1 class="hero-title text-gradient-aqua">DeepHull Diving</h1>
      <p class="hero-subtitle text-pearl-white">Professional Marine Services</p>
    </header>
    
    <main class="py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card p-6">
          <h3>Service 1</h3>
          <p>Description</p>
          <button class="btn-primary">Learn More</button>
        </div>
        <!-- More cards... -->
      </div>
    </main>
  </div>
</body>
</html>
```

### Navigation Example
```html
<nav class="gradient-navy p-4 rounded-xl">
  <div class="flex items-center justify-between">
    <h3 class="text-gradient-aqua">DeepHull</h3>
    <div class="flex space-x-4">
      <a href="#" class="text-pearl-white hover:text-aqua-400">Services</a>
      <a href="#" class="text-pearl-white hover:text-aqua-400">Contact</a>
      <button class="btn-emergency">Emergency</button>
    </div>
  </div>
</nav>
```

## 🎨 Component Showcase

Visit `/components.html` to see all design system components in action, including:
- Color palette swatches
- Typography examples
- Button variants
- Card patterns
- Gradient backgrounds
- Animation demonstrations
- Navigation examples

## 🔧 Customization

### Adding New Colors
```css
:root {
  --your-color-500: #your-hex-value;
  --your-color-600: #your-hex-value;
  /* Add to color scale as needed */
}
```

### Creating New Components
```css
.your-component {
  background: var(--navy-800);
  color: var(--pearl-white);
  border: 1px solid var(--aqua-500);
  border-radius: var(--radius);
  transition: all 0.3s ease-in-out;
}

.your-component:hover {
  background: var(--navy-700);
  transform: translateY(-2px);
}
```

### Extending Animations
```css
@keyframes your-animation {
  0% { /* Start state */ }
  100% { /* End state */ }
}

.animate-your-animation {
  animation: your-animation 2s ease-in-out infinite;
}
```

## 📋 Best Practices

1. **Consistency**: Always use design system colors and components
2. **Accessibility**: Ensure proper contrast ratios and focus states
3. **Performance**: Use CSS custom properties for dynamic theming
4. **Responsive**: Design mobile-first with progressive enhancement
5. **Semantic**: Use meaningful class names and HTML structure

## 🎯 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support
- CSS Custom Properties support
- Backdrop filter support (with fallbacks)

## 📚 Resources

- [Component Showcase](/components.html)
- [Color Palette Reference](#color-palette)
- [CSS Variables Documentation](#css-variables-dark-theme)
- [Animation Examples](#animation-system)

---

*This design system is built for DeepHull Diving's professional marine services, emphasizing trust, reliability, and modern aesthetics.*
