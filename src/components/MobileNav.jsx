import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import Dropdown from "./Dropdown";
import { routes } from "../routes";

function MobileNav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 right-0 top-[3.5rem] p-5 pt-0 bg-gray-900 h-full">
          <ul className="grid place-items-center content-center gap-8">
            <li className="">
              <a href={routes.home.path}>{routes.home.title}</a>
            </li>
            <Dropdown
              menuItem={routes.about.title}
              subMenuItems={routes.about.subMenuItems}
            />
            <Dropdown
              menuItem={routes.projects.title}
              subMenuItems={routes.projects.subMenuItems}
            />
            <li>
              <a href={routes.partners.path}>{routes.partners.title}</a>
            </li>
            <Dropdown
              menuItem={routes.publications.title}
              subMenuItems={routes.publications.subMenuItems}
            />
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
