import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/nav";
import Cards from "./components/cards/cards";

function App() {
  const [activePage, setActivePage] = useState("home"); // الحالة الافتراضية

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === "home" && <Cards />}{" "}
      {/* عرض الكروت فقط إذا كانت home نشطة */}
    </>
  );
}

export default App;
