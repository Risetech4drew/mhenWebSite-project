import { routes } from "../routes";
import Dropdown from "./Dropdown";

function DesktopNav() {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5">
      <li className="font-semibold">
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
      <li className="font-semibold">
        <a href={routes.partners.path}>{routes.partners.title}</a>
      </li>
      <Dropdown
        menuItem={routes.publications.title}
        subMenuItems={routes.publications.subMenuItems}
      />
      <li className="font-semibold">
        <a href={routes.vacancies.path}>{routes.vacancies.title}</a>
      </li>
      <li className="font-semibold">
        <a href={routes.contact.path}>{routes.contact.title}</a>
      </li>
    </ul>
  );
}
export default DesktopNav;
