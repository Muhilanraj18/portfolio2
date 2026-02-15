# 🚀 Muhilan Raj M - 3D Interactive Portfolio

Welcome to my personal portfolio website! This showcases my skills as a Full Stack Developer through stunning 3D animations, smooth interactions, and modern web design. Built with cutting-edge technologies to create an immersive experience.

> **Live Demo:** Deploy this to Vercel for best results! (See deployment section below)

## 🔥 Features

- **3D Interactive Keyboard**: Custom Spline 3D keyboard with animated keycaps that display skill details on hover
- **Smooth Animations**: GSAP and Framer Motion powered scroll animations and transitions
- **Modern Design**: Clean, professional interface with particle effects and space theme
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Lazy loading, code splitting, and optimized bundle size
- **Contact Form**: Integrated email functionality using Resend API

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI, Aceternity UI
- **Animations**: GSAP, Framer Motion, Spline Runtime
- **Email**: Resend API
- **Deployment**: Vercel (Recommended)

## 📋 Projects Showcased

1. **Crafted Clipz** - Video editing SaaS platform
2. **Inan Book** - E-commerce bookstore (In Progress)
3. **Resume Builder** - AI-powered resume generator (In Progress)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or pnpm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Muhilanraj18/portfolio2.git
    ```

2. Navigate to the project directory:

    ```bash
    cd portfolio2
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    pnpm install
    ```

4. Create `.env.local` file and add your environment variables:

    ```env
    RESEND_API_KEY=your_resend_api_key
    FROM_EMAIL=your_sender_email@example.com
    TO_EMAIL=your_receiver_email@example.com
    ```

5. Run the development server:

    ```bash
    npm run dev
    # or
    pnpm run dev
    ```

6. Open [http://localhost:3002](http://localhost:3002) in your browser to see your portfolio!

## 🚀 Deployment

### ⚠️ Important: GitHub Pages is NOT Recommended for Next.js

**GitHub Pages** only serves static HTML and cannot run Next.js server-side features. Instead, use **Vercel** (free and optimal for Next.js):

### Deploy to Vercel (Recommended) 🌟

1. **Push your code to GitHub** (Already done! ✅)

2. **Visit [Vercel](https://vercel.com)** and sign up with your GitHub account

3. **Import your repository:**
   - Click "Add New Project"
   - Select `Muhilanraj18/portfolio2`
   - Click "Import"

4. **Configure Environment Variables:**
   - Add your environment variables:
     ```
     RESEND_API_KEY=your_key
     FROM_EMAIL=your_email
     TO_EMAIL=your_email
     ```

5. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your portfolio will be live at `https://your-portfolio.vercel.app`

6. **Custom Domain (Optional):**
   - Go to Settings → Domains
   - Add your custom domain

### Alternative: Deploy to Netlify

If you prefer Netlify:

1. Visit [Netlify](https://netlify.com)
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables
6. Deploy!

## 📱 Features by Section

### Hero Section
- Animated name reveal
- Call-to-action buttons
- Scroll indicator

### About Section
- Professional introduction
- Experience timeline
- 3D keyboard interaction

### Skills Section
- Interactive 3D keyboard
- Hover to reveal skill details
- Categorized tech stack

### Projects Section
- Project cards with images
- Tech stack badges
- Live demo links (when available)

### Contact Section
- Working contact form
- Email integration
- Social media links

## 🎨 Customization

All personal information is centralized in:
- `src/data/config.ts` - Personal details, social links
- `src/data/projects.tsx` - Project information
- `src/data/constants.ts` - Skills and experience

## 📝 Environment Variables

Create a `.env.local` file:

```env
# Resend API for contact form
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=muhilanraj1876@gmail.com
```

## 🐛 Known Issues

- Spline 3D files show warnings (non-breaking, safe to ignore)
- CSS validation warnings for Tailwind (suppressed in VS Code settings)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Muhilan Raj M**
- GitHub: [@muhilanraj18](https://github.com/muhilanraj18)
- LinkedIn: [muhilanraj](https://linkedin.com/in/muhilanraj)
- Email: muhilanraj1876@gmail.com
- Phone: +91 93636 21922

## 🙏 Acknowledgments

- Original template inspiration from the web development community
- Spline for 3D graphics
- Aceternity UI for beautiful components
- Next.js and Vercel teams

---

**Made with ❤️ by Muhilan Raj M**

⭐ Star this repo if you like it!
