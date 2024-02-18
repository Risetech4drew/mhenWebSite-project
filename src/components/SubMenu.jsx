import { routes } from "../routes";
import { Link } from "react-router-dom";

function SubMenu({ subMenuItems, isOpen, onClose }) {
  return (
    <div className="absolute left-0 top-0 mt-2 h-full w-full bg-gray-900">
      <h3 className="cursor-pointer" onClick={onClose}>
        Back
      </h3>
      <ul className="mt-4">
        {subMenuItems.map((menuItem, index) => (
          <li key={index}>{menuItem.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default SubMenu;
