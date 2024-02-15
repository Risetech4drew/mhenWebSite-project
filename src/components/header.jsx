import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white">
      <nav className="container flex items-center py-1 px-1 lg:py-7 lg:px-7 m-auto">
        <h1 className="text-xl font-extrabold tracking-widest">MHEN</h1>
        <div className="m-auto">
          <DesktopNav />
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
export default Header;
