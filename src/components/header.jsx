function Header() {
  return (
    <header class="flex items-center bg-gray-900 py-6 px-3.5">
      <h1 className="text-4xl text-slate-100 font-bold">MHEN</h1>
      <nav className="m-auto">
        <ul className="flex gap-7 text-slate-100 font-bold">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
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
