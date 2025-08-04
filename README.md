# Dublin City Council Portfolio Website

A professional React TypeScript portfolio website designed for a Dublin City Council Social Media & Online Marketing Officer job application. This portfolio showcases municipal marketing experience and demonstrates technical skills to Irish government recruiters.

## 🎯 Purpose

This portfolio is specifically crafted to:
- Showcase municipal marketing expertise from Westlake experience
- Demonstrate technical competency in modern web technologies
- Present strategic vision for Dublin City Council's digital presence
- Provide evidence for the 5 required competencies
- Display understanding of Dublin's needs and culture

## ✨ Features

- **Modern React 18 + TypeScript** - Professional-grade development stack
- **Dublin City Council Branding** - Official color palette and design principles
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for engaging user experience
- **Professional Navigation** - Fixed header with mobile-responsive menu
- **Interactive Hero Section** - Animated stats and qualification checklist
- **10 Dedicated Sections** - Comprehensive portfolio coverage
- **Contact Form** - Professional inquiry handling
- **Accessibility** - ARIA labels and keyboard navigation

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone and setup:**
```bash
cd "Dublin Porfolio"
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
Dublin Porfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.tsx   # Main navigation header
│   │   └── Hero.tsx         # Hero section with animations
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Landing page with hero
│   │   ├── About.tsx        # Personal story & Dublin connection
│   │   ├── Experience.tsx   # Westlake municipal work
│   │   ├── Skills.tsx       # Technical competencies
│   │   ├── DublinVision.tsx # Strategic proposals
│   │   ├── Portfolio.tsx    # Creative work showcase
│   │   ├── Competencies.tsx # 5 required competencies
│   │   ├── DublinResearch.tsx # Knowledge of Dublin
│   │   └── Contact.tsx        # Professional contact form
│   ├── styles/              # Global styles
│   │   └── index.css        # Tailwind + custom styles
│   ├── utils/               # Utility functions
│   │   ├── constants.ts     # App constants
│   │   └── scrollUtils.ts   # Scroll utilities
│   ├── assets/              # Static assets
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── public/                  # Public assets
├── index.html              # HTML template
└── Configuration files...
```

## 🎨 Design System

### Dublin City Council Colors
- **Primary Blue:** `#003d5c` - Main brand color
- **Accent Green:** `#28a745` - Highlights and CTAs
- **Neutral Grays:** Various shades for text and backgrounds

### Typography
- **Font:** Inter - Professional, modern typeface
- **Hierarchy:** Consistent sizing and weights
- **Accessibility:** High contrast ratios

### Components
- **Buttons:** Primary and accent variants with hover effects
- **Cards:** Consistent shadow and border radius
- **Navigation:** Fixed header with smooth transitions
- **Forms:** Professional styling with focus states

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🔧 Technologies Used

### Core
- **React 18.2+** - Modern React with hooks
- **TypeScript** - Type safety and developer experience
- **Vite** - Fast build tool and dev server

### Styling & Animation
- **Tailwind CSS 3.3+** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **PostCSS** - CSS processing and optimization

### Navigation & Interaction
- **React Router DOM** - Client-side routing
- **React Intersection Observer** - Scroll-triggered animations
- **React CountUp** - Animated number counters

## 📋 Content Customization

### Personal Information
Update the following files with your information:
- `src/utils/constants.ts` - Contact info and stats
- `src/components/Navigation.tsx` - Logo and name
- `src/components/Hero.tsx` - Headline and qualifications
- All page components with your specific content

### Assets to Add
Place the following in `src/assets/`:
- Professional headshot photo
- Dublin skyline background image
- Campaign screenshots and portfolio pieces
- CV/Resume PDF file
- Any additional supporting documents

### Contact Form
The contact form is ready for integration with:
- EmailJS for client-side email sending
- Backend API for form processing
- Database storage for inquiries

## 🎯 Portfolio Sections

1. **Home** - Hero section with animated stats and qualifications
2. **About** - Personal story and connection to Dublin
3. **Experience** - Westlake municipal marketing achievements
4. **Skills** - Technical competency demonstrations
5. **Dublin Vision** - Strategic proposals for Dublin City Council
6. **Portfolio** - Creative work and campaign showcase
7. **Action Plan** - 90-day strategic implementation roadmap
8. **Dublin Research** - Demonstrated knowledge of Dublin
9. **Contact** - Professional contact form and information

## 🚀 Deployment Options

### Recommended Platforms
- **Vercel** - Automatic deployments with GitHub integration
- **Netlify** - Simple drag-and-drop deployment
- **Firebase Hosting** - Google's hosting platform
- **GitHub Pages** - Free hosting for public repositories

### Build Commands
```bash
npm run build     # Creates production build in dist/
npm run preview   # Preview production build locally
```

## 📞 Support

This portfolio template is designed specifically for Dublin City Council applications. For customization or questions about implementation, refer to the component documentation or modify the content to match your specific experience and qualifications.

## 📄 License

This project is created for professional portfolio purposes. Ensure any assets you add comply with appropriate licensing requirements.

---

**Ready to impress Dublin City Council recruiters with your municipal marketing expertise!** 🇮🇪