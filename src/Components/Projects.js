import Project from "./Project";
import img1 from "../imgs/project1.png";
import img2 from "../imgs/project2.png";
import img3 from "../imgs/project3.png";
import img4 from "../imgs/project4.png";
import img5 from "../imgs/yourGalApp.png";
import img6 from "../imgs/MovieBox.png";

import Socials from "./Socials";

const projects = [
  {
    url: "https://moneybox-swart.vercel.app/",
    img: img6,
    github: "https://github.com/MIE-CODE",
    name: "MovieBox",
    stack: ["Tailwind", "React"],
    description: "Movie App (Search and Discover)",
  },
  {
    url: "https://your-gallery.vercel.app/",
    img: img5,
    github: "https://github.com/MIE-CODE",
    name: "Your Gallery App",
    stack: ["Tailwind", "Vite + React"],
    description: "Photo Gallery Web application (Drag and Drop)",
  },
  {
    url: "https://github.com/MIE-CODE",
    img: img1,
    github: "https://github.com/MIE-CODE",
    name: "Minimal Living Cost",
    stack: ["CSS", "JS"],
    description: "Real Estate Website",
  },
  {
    url: "https://teejayapartments.netlify.app/",
    img: img2,
    github: "https://github.com/MIE-CODE",
    name: "TeeJay-Apartment",
    stack: ["CSS", "JS"],
    description: "Real Estate Website",
  },
  {
    url: "https://bankist-vic.netlify.app/",
    img: img3,
    github: "https://github.com/MIE-CODE",
    name: "Bankist App",
    stack: ["CSS", "JS"],
    description: "Web Application",
  },
  {
    url: "https://mapty-app-vic.netlify.app/",
    img: img4,
    github: "https://github.com/MIE-CODE",
    name: "Mapty App",
    stack: ["CSS", "JS"],
    description: "Web Application",
  },
];

const Projects = () => {
  return (
    <section className="sections mb-44">
      <h2 data-aos="fade-down" className={`h2 mb-7 ease-in duration-300 `}>
        My Projects
      </h2>
      <div
        data-aos="fade-up"
        className={`grid grid-cols-1 gap-7 sm:gap-10 lg:grid-cols-2 xl:gap-15 ease-in-out duration-1000 `}
      >
        {projects.map((project, i) => (
          <Project items={project} key={i + 1} />
        ))}
      </div>
      <Socials display={"hidden"} />
    </section>
  );
};

export default Projects;
