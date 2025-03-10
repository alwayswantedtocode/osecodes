import { ReactNode } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";



type Project = {
  title: string;
  links: { url: string; label: string; icon: ReactNode }[];
  stack: string[];
  achievements: string[];
};
type projectTypes = Project[];

 const projects: projectTypes = [
  {
    title: "Social Media CRUD Web App",
    links: [
      { url: "https://github.com/alwayswantedtocode/share-x", label: "Client Repo", icon: <FiGithub /> },
      { url: "https://github.com/alwayswantedtocode/Share-x-Server", label: "Server Repo", icon: <FiGithub /> },
      { url: "https://share-x-q14a.onrender.com", label: "Live Demo", icon: <FiExternalLink /> },
    ],
    stack: ["React.js", "Redux Toolkit", "Firebase", "Tailwind CSS"],
    achievements: [
      "Integrated Firestore for media storage",
      "Designed scalable backend with Express.js/Node.js",
      "Reduced API response times by 25% with MongoDB optimization",
      "Implemented JWT token authentication",
    ],
  },
  {
    title: "Location Pinning CRUD Web App",
    links: [
      { url: "https://github.com/alwayswantedtocode/Pinning-Location", label: "Client Repo", icon: <FiGithub /> },
      { url: "https://github.com/alwayswantedtocode/Pinning-Location", label: "Server Repo", icon: <FiGithub /> },
      { url: "https://lara-pastry-ui.onrender.com", label: "Live Demo", icon: <FiExternalLink /> },
    ],
    stack: ["React", "MongoDB", "Google Maps API"],
    achievements: [
      "Integrated Google Maps API with React components",
      "Implemented geolocation with Haversine formula",
      "Improved response time by 30% through backend optimization",
    ],
  },
  {
    title: "Automobile Dynamic Web App",
    links: [
      { url: "https://github.com/alwayswantedtocode/ShowRoom-Project", label: "Client Repo", icon: <FiGithub /> },

      { url: "https://showroom-6nwa.onrender.com/", label: "Live Demo", icon: <FiExternalLink /> },
    ],
    stack: ["React", "Firebase"],
    achievements: [
      "Built responsive SPA with dynamic image galleries",
      "Increased user session duration by 30%",
      "Reduced bundle size by 45% through code splitting",
    ],
  },
];
export default projects;