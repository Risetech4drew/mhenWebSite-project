import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Hamburger toggled={open} size={25} toggle={setOpen} />
    </div>
  );
}
export default MobileNav;
