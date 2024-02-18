import { routes } from "../routes";

function ProjectsSubMenu() {
  return (
    <ul>
      {routes.projects.subMenuItems.map((menuItem, index) => (
        <li key={index}>
          <a href={menuItem.path}>{menuItem.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default ProjectsSubMenu;
