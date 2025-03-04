import './nav.css'

type NavbarProps = {
  activePage: string; // الصفحة النشطة
  setActivePage: (page: string) => void; // دالة لتغيير الصفحة
};

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="bg-gray-800">
     
        <nav className=" nav flex justify-between p-4  text-white">
          <div className="text-2xl font-bold">Logo</div>
          <ul className="flex space-x-4">
            {["home", "about", "services", "pages", "projects"].map((item) => (
              <li
                key={item}
                onClick={() => setActivePage(item)} // تحديث الصفحة عند النقر
                className={`cursor-pointer capitalize ${
                  activePage === item
                    ? "text-yellow-400 font-bold duration-300"
                    : "text-white"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      
    </div>
  );
};

export default Navbar;
