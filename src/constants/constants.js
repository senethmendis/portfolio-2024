import { fbLogo, instLogo, xLogo, linkedLogo } from "../assets";
import {
  csslogo,
  firebaselogo,
  flutter,
  htmllogo,
  jslogo,
  nextjslogo,
  nodelogo,
  reactlogo,
  tailwindlogo,
} from "../assets/project-logos";

const navigationItems = [
  {
    link: "#Home",
    linkName: "Home",
  },
  {
    link: "#Project",
    linkName: "Project",
  },
  {
    link: "#About",
    linkName: "About",
  },
  {
    link: "#Contact",
    linkName: "Contact",
  },
];

const socialIcons = [
  {
    link: "https://www.linkedin.com/in/senethmendis/",
    icon: linkedLogo,
  },
  {
    link: "https://www.facebook.com/seneth.mendis20/",
    icon: fbLogo,
  },

  {
    link: "https://www.instagram.com/mendis.exe?igsh=MWllYWlpOWg0Z2N4aQ%3D%3D&utm_source=qr",
    icon: instLogo,
  },

  {
    link: "https://twitter.com/itsSeniya",
    icon: xLogo,
  },
];

const projectList = [
  {
    invert_img: false,
    name: "Blog App",
    icon: flutter,
    tech: ["Dart", "Flutter", "Firebase"],
    deiscription:
      "Flutter app powered by Firebase. Write, edit, and publish your posts on the go, while Firebase handles real-time updates and secure data storage.",
    gitLink: "https://github.com/wolfy-six/blog_app.git",
  },
  {
    invert_img: false,
    name: "Space X App",
    icon: flutter,
    tech: ["Dart", "Flutter", "API", "Postman API"],
    deiscription:
      "Explore the latest launches, missions, and updates straight from SpaceX's rocket API. From rocket specifications to mission details, stay informed with real-time data.",
    gitLink: "https://github.com/wolfy-six/SpaceX-Modile-App.git",
  },
  {
    invert_img: false,
    name: "T-Shirt-Customizer",
    icon: reactlogo,
    tech: ["React", "ThreeJs", "threeFiber", "gsap"],
    deiscription:
      "Using Three.js, React, and GSAP, design unique styles effortlessly. Enjoy smooth interactions and stunning animations while bringing your designs to life in 3D.",
    gitLink: "https://github.com/wolfy-six/T-Shirt-Customizer.git",
  },
  {
    invert_img: false,
    name: "Bank Website",
    icon: reactlogo,
    tech: ["React", "Tailwind"],
    deiscription:
      "Experience seamless banking with our React-powered website, elegantly designed with Tailwind CSS. Manage your finances with ease, explore services, and access resources securely with our intuitive interface.",
    gitLink: "https://github.com/wolfy-six/Bank-webapp.git",
  },
  {
    invert_img: false,
    name: "NFT Web Design",
    icon: reactlogo,
    tech: ["React", "Tailwind", "Threejs"],
    deiscription:
      "React-based NFT site, powered by Three.js. Immerse yourself in stunning 3D visuals as you explore unique and rare digital assets.",
    gitLink: "https://github.com/wolfy-six/CyberBand-web-site.git",
  },
  {
    invert_img: true,
    name: "Portfolio 2023",
    icon: nextjslogo,
    tech: ["React", "Tailwind", "Threejs"],
    deiscription: "My previous portfolio for 2023",
    gitLink: "https://github.com/wolfy-six/SenethMendis-Portfolio.git",
  },
  {
    invert_img: true,
    name: "Movie-Lab-website",
    icon: nextjslogo,
    tech: ["React", "Tailwind", "Threejs"],
    deiscription:
      "Movie viewing site built on Next.js and the TMDB API, styled with Tailwind CSS. Discover the latest releases, browse through popular titles.",
    gitLink: "https://github.com/wolfy-six/Movie-Lab-website.git",
  },
  {
    invert_img: true,
    name: "NextJs Portfolio Test",
    icon: nextjslogo,
    tech: ["React", "Tailwind"],
    deiscription: "NextJs Portfolio Beta",
    gitLink: "https://github.com/wolfy-six/nextjs-portfolio.git",
  },
  {
    invert_img: false,
    name: "Drum Kit",
    icon: jslogo,
    tech: ["javascript", "html", "css"],
    deiscription: "Fun Drum kit can play with key stroks",
    gitLink: "https://github.com/wolfy-six/DrumKit.git",
  },
];

export { navigationItems, socialIcons, projectList };
