import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/nav";
import Cards from "./components/cards/cards";
import About from "./components/aboutPage/about";
import Services from "./components/servicesPage/service";

function App() {
  const [activePage, setActivePage] = useState("about"); // الحالة الافتراضية

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === "home" && <Cards />}{" "}
      {/* عرض الكروت فقط إذا كانت home نشطة */}
      {activePage === "about" && <About />}
      {/* عرض المحتوي فقط إذا كانت about نشطة  */}
      {activePage === "services" && <Services />}
    </>
  );
}

export default App;
