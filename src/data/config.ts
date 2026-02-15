const config = {
  title: "Muhilan Raj M | Frontend Developer",
  description: {
    long: "Explore the portfolio of Muhilan Raj, a passionate frontend developer specializing in building clean, modern, and interactive web experiences. Discover my work with HTML, CSS, JavaScript, and latest projects including Crafted Clipz, Inan Book, and Resume Builder. Let's create something amazing together!",
    short:
      "Discover the portfolio of Muhilan Raj, a frontend developer crafting responsive and interactive web experiences.",
  },
  keywords: [
    "Muhilan Raj",
    "portfolio",
    "frontend developer",
    "web development",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "responsive design",
    "UI/UX",
    "Crafted Clipz",
    "Inan Book",
    "Inan Infinites",
    "web design",
    "animations",
  ],
  author: "Muhilan Raj",
  email: "muhilanraj1876@gmail.com",
  site: "https://muhilanraj.site",

  // for github stars button
  githubUsername: "muhilanraj18",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/muhilanraj",
    linkedin: "https://www.linkedin.com/in/muhilanraj",
    instagram: "https://www.instagram.com/muhilanraj",
    facebook: "https://www.facebook.com/muhilanraj",
    github: "https://github.com/muhilanraj18",
  },
};
export { config };
