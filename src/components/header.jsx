import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [click, setClick] = useState(false);
  return (
    <header class="flex items-center bg-gray-900 py-6 px-3.5">
      <h1 className="text-4xl text-slate-100 font-bold">MHEN</h1>
      <div className="menu-icon">
        <FontAwesomeIcon
          icon={click ? faX : faBars}
          size="2xl"
          style={{ color: "#f3f1f8" }}
        />
      </div>
      <nav className="m-auto">
        <ul className="flex gap-7 text-slate-100 font-bold">
          <li>Home</li>
          <li>
            About <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <li>
            Projects <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <li>Partners</li>
          <li>Publications</li>
          <li>Vacancies</li>
          <li>Contact us</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
