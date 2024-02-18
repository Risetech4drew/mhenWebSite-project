import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";
import { routes } from "../routes";
import AboutSubMenu from "./AboutSubMenu";
import ProjectsSubMenu from "./ProjectsSubMenu";
import PublicationsSubMenu from "./PublicationsSubMenu ";

function MobileNav() {
  const [isOpen, setOpen] = useState(false);
  const [aboutSubMenuOpen, setAboutSubMenuOpen] = useState(false);
  const [projectsSubMenuOpen, setProjectsSubMenuOpen] = useState(false);
  const [publicationsSubMenuOpen, setPublicationsSubMenuOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 right-0 top-[3.5rem] p-5 pt-0 bg-gray-900 h-full">
          <ul className="grid place-items-center content-center gap-10 mt-20">
            <li>
              <a href={routes.home.path}>{routes.home.title}</a>
            </li>
            <li>
              <div
                className="flex items-center gap-1 ml-2"
                onClick={() => setAboutSubMenuOpen(!aboutSubMenuOpen)}
              >
                {routes.about.title}{" "}
                {aboutSubMenuOpen ? <FaAnglesUp /> : <FaAnglesDown />}
              </div>
              {aboutSubMenuOpen && <AboutSubMenu />}
            </li>
            <li>
              <div
                className="flex items-center gap-1 ml-2"
                onClick={() => setProjectsSubMenuOpen(!projectsSubMenuOpen)}
              >
                {routes.projects.title}{" "}
                {projectsSubMenuOpen ? <FaAnglesUp /> : <FaAnglesDown />}
              </div>
              {projectsSubMenuOpen && <ProjectsSubMenu />}
            </li>
            <li>
              <a href={routes.partners.path}>{routes.partners.title}</a>
            </li>
            <li>
              <div
                className="flex items-center gap-1 ml-2"
                onClick={() =>
                  setPublicationsSubMenuOpen(!publicationsSubMenuOpen)
                }
              >
                {routes.publications.title}{" "}
                {publicationsSubMenuOpen ? <FaAnglesUp /> : <FaAnglesDown />}
              </div>
              {publicationsSubMenuOpen && <PublicationsSubMenu />}
            </li>
            <li>
              <a href={routes.vacancies.path}>{routes.vacancies.title}</a>
            </li>
            <li>
              <a href={routes.contact.path}>{routes.contact.title}</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
