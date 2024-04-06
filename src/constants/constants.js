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
    name: "Blog App",
    icon: flutter,
    tech: ["Dart", "Flutter", "Firebase"],
    deiscription:
      "Flutter app powered by Firebase. Write, edit, and publish your posts on the go, while Firebase handles real-time updates and secure data storage.",
    gitLink: "https://github.com/wolfy-six/blog_app.git",
  },
  {
    name: "Space X App",
    icon: flutter,
    tech: ["Dart", "Flutter", "API", "Postman API"],
    deiscription:
      "Explore the latest launches, missions, and updates straight from SpaceX's rocket API. From rocket specifications to mission details, stay informed with real-time data.",
    gitLink: "https://github.com/wolfy-six/SpaceX-Modile-App.git",
  },
  {
    name: "T-Shirt-Customizer",
    icon: reactlogo,
    tech: ["React", "ThreeJs", "threeFiber", "gsap"],
    deiscription:
      "Using Three.js, React, and GSAP, design unique styles effortlessly. Enjoy smooth interactions and stunning animations while bringing your designs to life in 3D.",
    gitLink: "https://github.com/wolfy-six/T-Shirt-Customizer.git",
  },
  {
    name: "Bank Website",
    icon: reactlogo,
    tech: ["React", "Tailwind"],
    deiscription:
      "Experience seamless banking with our React-powered website, elegantly designed with Tailwind CSS. Manage your finances with ease, explore services, and access resources securely with our intuitive interface.",
    gitLink: "https://github.com/wolfy-six/Bank-webapp.git",
  },
];

export { navigationItems, socialIcons, projectList };
