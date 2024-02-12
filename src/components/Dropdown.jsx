import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown({ menuItem, subMenuItems }) {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <li
      className="relative"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      {menuItem} <FontAwesomeIcon icon={faAngleDown} />
      {dropdown && (
        <ul className="absolute bg-gray-900 w-48">
          {subMenuItems.map((item, index) => (
            <li key={index} className="px-4 py-4">
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
export default Dropdown;
