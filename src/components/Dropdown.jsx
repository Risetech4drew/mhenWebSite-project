import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

function Dropdown({ menuItem, subMenuItems }) {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <li
      className="relative flex items-center font-bold"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <a href="#">{menuItem}</a>
      <RiArrowDownSLine />
      {dropdown && (
        <ul className="absolute top-5 bg-gray-900 w-44 py-2 px-3">
          {subMenuItems.map((subMenu, index) => {
            const { title, path } = subMenu;
            return (
              <li key={index} className="py-4 font-semibold">
                <a href={path}>{title}</a>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
export default Dropdown;
