import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

function Dropdown({ menuItem, subMenuItems }) {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <li
      className="relative flex items-center ml-3.5 font-bold"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <a href="#">{menuItem}</a>
      <RiArrowDownSLine />
      {dropdown && (
        <ul className="absolute px-5 w-48 grid gap-2 top-5 bg-white text-black lg:bg-gray-900 lg:w-44 lg:py-2 lg:px-3">
          {subMenuItems.map((subMenu, index) => {
            const { title, path } = subMenu;
            return (
              <li key={index} className="lg:py-4 font-semibold">
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
