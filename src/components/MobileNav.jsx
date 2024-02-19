import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { FaAnglesRight } from "react-icons/fa6";
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
        <div className="fixed left-0 right-0 top-[3.5rem] h-full p-5 pt-0 bg-gray-900 z-1">
          <ul className="grid place-items-center content-center mt-20 gap-10">
            <li>
              <a href={routes.home.path}>{routes.home.title}</a>
            </li>
            <li>
              <div
                className="flex items-center gap-1 ml-2"
                onClick={() => setAboutSubMenuOpen(!aboutSubMenuOpen)}
              >
                {routes.about.title}
                <FaAnglesRight />
              </div>
              {aboutSubMenuOpen && (
                <SubMenu
                  header={routes.about.title}
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
                {routes.projects.title}
                <FaAnglesRight />
              </div>
              {projectsSubMenuOpen && (
                <SubMenu
                  header={routes.projects.title}
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
                {routes.publications.title}
                <FaAnglesRight />
              </div>
              {publicationsSubMenuOpen && (
                <SubMenu
                  header={routes.publications.title}
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
