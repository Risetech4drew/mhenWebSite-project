import { routes } from "../routes";

function AboutSubMenu() {
  return (
    <ul>
      {routes.about.subMenuItems.map((menuItem, index) => (
        <li key={index}>
          <a href={menuItem.path}>{menuItem.title}</a>
        </li>
      ))}
    </ul>
  );
}
export default AboutSubMenu;
