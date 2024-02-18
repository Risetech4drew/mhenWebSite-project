import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";
import { routes } from "../routes";
import SubMenu from "./SubMenu";
function MobileNav() {
  const [isOpen, setOpen] = useState(false);
  const [aboutSubMenuOpen, setAboutSubMenuOpen] = useState(false);
  const [projectsSubMenuOpen, setProjectsSubMenuOpen] = useState(false);
  const [publicationsSubMenuOpen, setPublicationsSubMenuOpen] = useState(false);

  const closeAboutSubMenu = () => {
    setAboutSubMenuOpen(false);
  };
  const closeProjectsSubMenu = () => {
    setProjectsSubMenuOpen(false);
  };
  const closePublicationsSubMenu = () => {
    setPublicationsSubMenuOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 right-0 top-[3.5rem] h-full p-5 pt-0 bg-gray-900">
          <ul className="grid place-items-center content-center mt-20 gap-10">
            <li>
              <a href={routes.home.path}>{routes.home.title}</a>
            </li>
            <li>
              <div
                className="flex items-center gap-1 ml-2"
                onClick={() => setAboutSubMenuOpen(!aboutSubMenuOpen)}
              >
                {routes.about.title}{" "}
              </div>
              {aboutSubMenuOpen && (
                <SubMenu
                  subMenuItems={routes.about.subMenuItems}
                  isOpen={aboutSubMenuOpen}
                  onClose={closeAboutSubMenu}
                />
              )}
            </li>
            <li>
              <div
                className="flex items-center gap-1 ml-2"
                onClick={() => setProjectsSubMenuOpen(!projectsSubMenuOpen)}
              >
                {routes.projects.title}{" "}
              </div>
              {projectsSubMenuOpen && (
                <SubMenu
                  subMenuItems={routes.projects.subMenuItems}
                  isOpen={projectsSubMenuOpen}
                  onClose={closeProjectsSubMenu}
                />
              )}
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
              </div>
              {publicationsSubMenuOpen && (
                <SubMenu
                  subMenuItems={routes.publications.subMenuItems}
                  isOpen={publicationsSubMenuOpen}
                  onClose={closePublicationsSubMenu}
                />
              )}
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
