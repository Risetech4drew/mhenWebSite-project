import { routes } from "../routes";

function PublicationsSubMenu() {
  return (
    <ul>
      {routes.publications.subMenuItems.map((menuItem, index) => (
        <li key={index}>
          <a href={menuItem.path}>{menuItem.title}</a>
        </li>
      ))}
    </ul>
  );
}
export default PublicationsSubMenu;
