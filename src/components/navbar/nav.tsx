import "./nav.css";
const Navbar = () => {
  return (
    <div className="content bg-gray-900">
      <nav className="nav flex justify-between items-center py-4 px-6  text-white shadow-md">
        {/* Logo */}
        <div className="logo text-3xl font-bold">
          <h1>Logo</h1>
        </div>

        {/* Navigation List */}
        <div className="list">
          <ul className="flex gap-6 text-lg font-medium">
            <li className="hover:text-gray-400 cursor-pointer duration-200	duration-200">
              Home
            </li>
            <li className="hover:text-gray-400 cursor-pointer duration-200">
              About
            </li>
            <li className="hover:text-gray-400 cursor-pointer duration-200">
              Services
            </li>
            <li className="hover:text-gray-400 cursor-pointer duration-200">
              Pages
            </li>
            <li className="hover:text-gray-400 cursor-pointer duration-200">
              Projects
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
