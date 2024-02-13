import { useState } from "react";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className="flex items-center bg-gray-900 py-6 px-3.5 relative ">
      <h1 className="text-4xl text-slate-100 font-bold">MHEN</h1>

      <nav className="m-auto hidden md:block">
        <ul className="flex gap-7 text-slate-100 font-bold">
          <li>Home</li>
          <Dropdown
            menuItem={"About"}
            subMenuItems={["MEHN", "Board", "Staff", "Network members"]}
          />
          <Dropdown
            menuItem={"Projects"}
            subMenuItems={[
              "Current Projects",
              "Recent Projects",
              "Past Projects",
            ]}
          />
          <li>Partners</li>
          <Dropdown
            menuItem={"Publications"}
            subMenuItems={[
              "Budget Analysis",
              "Reports",
              "Newsletter",
              "Press Statements",
              "Policy Briefs",
              "Photo Gallery",
            ]}
          />
          <li>Vacancies</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <div
        className="hover:cursor-pointer md:hidden ml-auto"
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={click ? faX : faBars}
          size="2xl"
          style={{ color: "#f3f1f8" }}
        />
      </div>
    </header>
  );
}
export default Header;
