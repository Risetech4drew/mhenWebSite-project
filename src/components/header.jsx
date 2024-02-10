function Header() {
  return (
    <header class="flex justify-between items-center bg-gray-900 py-3.5 px-3.5">
      <h1 className="text-4xl text-slate-100">MHEN</h1>
      <nav>
        <ul className="flex text-slate-100">
          <li className="mr-2.5">Home</li>
          <li className="mr-2.5">About</li>
          <li className="mr-2.5">Projects</li>
          <li className="mr-2.5">Partners</li>
          <li className="mr-2.5">Publications</li>
          <li className="mr-2.5">Vacancies</li>
          <li className="mr-2.5">Contact us</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
