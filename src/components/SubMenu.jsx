import { routes } from "../routes";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SubMenu({ header, subMenuItems, onClose }) {
  return (
    <div className="absolute left-0 top-0 mt-2 h-full w-full bg-gray-900">
      <div className=" flex items-center px-2">
        <div className="flex items-center">
          <FaAnglesLeft />
          <span className="cursor-pointer" onClick={onClose}>
            Back
          </span>
        </div>
      </div>
      <h1 className="text-center text-2xl mt-4">{header}</h1>
      <ul className="mt-20 grid place-items-center gap-10">
        {subMenuItems.map((menuItem, index) => (
          <li key={index}>{menuItem.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default SubMenu;
