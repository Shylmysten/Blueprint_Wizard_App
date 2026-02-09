# Blueprint Wizard Next.js

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue)](https://blueprint-wizard-app.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)

A sophisticated client-facing application that serves as a prototype for Encoura's Blueprint product development portal. The Blueprint Wizard enables stakeholders to preview and customize different content sections, themes, and layouts in real-time before implementation in their Encompass CMS environment.

## 🎯 Overview

The Blueprint Wizard is an interactive design tool that bridges the gap between conceptual design and final implementation. It provides a visual interface for stakeholders to:

- **Preview content patterns** across different layout configurations
- **Test responsive designs** on desktop, tablet, and mobile viewports
- **Customize themes** and visual elements in real-time
- **Configure layouts** with various sidebar and content arrangements
- **Export configurations** for development implementation

**Live Demo:** [https://blueprint-wizard-app.vercel.app/](https://blueprint-wizard-app.vercel.app/)

## ✨ Key Features

### 🖥️ Interactive Preview System
- **Real-time rendering** of layout changes using iframe-based architecture
- **Responsive viewport testing** with device-specific preview modes
- **Live theme switching** with instant visual feedback

### 🎨 Content Pattern Library
- **News Patterns** (5 variations): Standard news layouts with different grid configurations
- **Events Patterns** (2 variations): Event listing and calendar display options
- **Campaign Progress Indicators** (4 patterns): Fundraising and progress tracking displays
- **Crowdfunding Layouts** (4 specialized layouts): Donation and fundraising page templates
- **Countdown Patterns**: Time-sensitive campaign displays
- **Quick Links Patterns**: Icon-based navigation systems
- **Tabbed Content** (3 variations): Horizontal, vertical, and full-width tab layouts
- **Quotes Patterns** (2 variations): Testimonial and quote display options
- **Rotator Patterns**: Image and content carousel systems
- **Text Patterns**: Various text layout and typography options

### 🏗️ Layout System
- **Interior Page Layouts** with flexible sidebar configurations:
  - Left sidebar only
  - Right sidebar only  
  - Both sidebars (3-column)
  - No sidebars (full-width)
- **Header variations** (4 different styles) with optional features:
  - Mega menu support
  - Social media integration
  - Member tools integration
- **Footer customization** options

### ⚙️ Advanced Configuration
- **Section-based content management** (up to 6 configurable sections)
- **URL parameter persistence** for sharing configurations
- **Export functionality** for development handoff
- **Clear and reset capabilities** for starting fresh

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shylmysten/Blueprint_Wizard_App.git
   cd blueprint-wizard-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🏗️ Architecture

### Tech Stack
- **Framework:** [Next.js 15.3.1](https://nextjs.org/) with App Router
- **Frontend:** [React 19.0.0](https://reactjs.org/) with Hooks and Context API
- **Styling:** CSS Modules with responsive design
- **Icons:** [Font Awesome 6.7.2](https://fontawesome.com/)
- **Utilities:** [classnames](https://github.com/JedWatson/classnames) for conditional styling

### Project Structure

```
blueprint-wizard-nextjs/
├── app/                                    # Next.js App Router
│   ├── (root)/                            # Route group for main layout
│   ├── iframe-page/                       # Iframe content rendering
│   ├── HomePageContent.jsx                # Main application component
│   ├── layout.jsx                         # Root layout
│   └── page.jsx                           # Homepage entry point
├── components/                            # Reusable UI components
│   ├── campaign-progress-indicator-components/
│   ├── countdown-pattern-components/
│   ├── crowdfunding-pattern-components/
│   ├── events-pattern-components/
│   ├── giving-pattern-components/
│   ├── header-components/
│   ├── interior-page-components/
│   ├── news-pattern-components/
│   ├── quicklinks-pattern-components/
│   ├── quotes-pattern-components/
│   ├── rotator-pattern-components/
│   ├── sidebar-select-components/         # Control panel components
│   ├── tab-pattern-components/
│   ├── text-pattern-components/
│   └── shared/                           # Common components
├── data/                                 # Static configuration data
│   ├── categories.js                     # Pattern category definitions
│   └── navigation-items.js               # Navigation structure
├── utils/                                # Utility functions and contexts
│   ├── actions.js                        # Component mapping and actions
│   ├── DropdownToggleContext.js          # Dropdown state management
│   ├── LoadingContext.js                 # Loading state management
│   ├── MemberToolsToggleContext.js       # Member tools state
│   ├── SocialMediaToggleContext.js       # Social media state
│   ├── getQueryParams.js                 # URL parameter utilities
│   ├── helpers.js                        # General helper functions
│   └── offCanvasUtils.js                 # Off-canvas utilities
├── assets/css/                           # Global stylesheets
├── public/                               # Static assets (images, icons)
└── lib/constants/                        # Application constants
```

### Key Architectural Patterns

#### **Component-Based Architecture**
- Modular pattern components for maximum reusability
- Context API for global state management
- Custom hooks for shared logic

#### **Iframe-Based Preview System**
- Isolated rendering environment for pattern previews
- PostMessage communication between parent and iframe
- Real-time synchronization of configuration changes

#### **URL State Management**
- Configuration persistence through URL parameters
- Shareable configuration links
- Browser history support for undo/redo functionality

## 🎨 Usage Guide

### Basic Workflow

1. **Select Template Type**
   - Choose between Homepage and Interior page templates
   - Template selection affects available patterns and layouts

2. **Configure Theme**
   - Select from predefined theme options
   - See immediate visual feedback in the preview

3. **Choose Layout Structure**
   - Select sidebar configuration (left, right, both, or none)
   - Pick header style and optional features

4. **Add Content Patterns**
   - Browse pattern categories (News, Events, etc.)
   - Select specific pattern variations
   - Configure up to 6 content sections

5. **Test Responsiveness**
   - Use device view selector for different screen sizes
   - Verify layout behavior across viewports

6. **Export Configuration**
   - Use "Finish & Copy" to generate implementation details
   - Share configuration URLs with team members

### Advanced Features

#### **Real-time Collaboration**
- Share configuration URLs for team review
- URL parameters preserve all settings
- No login required for stakeholder access

#### **Responsive Testing**
- Dedicated mobile, tablet, and desktop views
- Realistic viewport dimensions
- Touch-friendly interface elements

## 🔧 Development

### Adding New Patterns

1. **Create Pattern Component**
   ```jsx
   // components/your-pattern-components/YourPattern.jsx
   import React from 'react';
   
   function YourPattern() {
     return (
       <section className="your-pattern">
         {/* Pattern content */}
       </section>
     );
   }
   
   export default YourPattern;
   ```

2. **Register in Categories**
   ```javascript
   // data/categories.js
   export const categories = {
     'Your Category': {
       YourPattern: { label: 'Your Pattern Name' }
     }
   };
   ```

3. **Map Component**
   ```javascript
   // utils/actions.js
   import YourPattern from '@/components/your-pattern-components/YourPattern';
   
   const componentMapping = {
     'Your Category': {
       YourPattern: YourPattern
     }
   };
   ```

### Styling Guidelines

- Use CSS Modules for component-specific styles
- Follow responsive-first design principles
- Maintain consistent spacing using the established grid system
- Use CSS custom properties for theme variables

### State Management

The application uses React Context for global state:

- `LoadingContext`: Application loading states
- `DropdownToggleContext`: Dropdown menu states
- `SocialMediaToggleContext`: Social media feature toggle
- `MemberToolsToggleContext`: Member tools feature toggle

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 App Details

- **Version:** 0.1.0
- **Author:** Tony Boswell
- **License:** Proprietary (Encoura, LLC.)

## 👨‍💻 Author

**Tony Boswell**
- Professional Developer specializing in React/Next.js applications
- Experience with enterprise CMS solutions and educational technology

## 🙏 Acknowledgments

- Encoura, LLC. for project requirements and design guidance
- Next.js team for the excellent framework
- Vercel for hosting and deployment platform
- Font Awesome for comprehensive icon library

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://reactjs.org/docs) - React concepts and patterns
- [CSS Modules Documentation](https://github.com/css-modules/css-modules) - Styling approach
- [Vercel Deployment Guide](https://vercel.com/docs) - Deployment best practices

---

**Built with ❤️ for Encoura's Blueprint ecosystem**