import { useState, useEffect } from "react";

const NameSwitcher = () => {
  const [name, setName] = useState("أحمد");

  useEffect(() => {
    const interval = setInterval(() => {
      setName((prevName) => (prevName === "أحمد" ? "محسن" : "أحمد"));
    }, 5000); // كل 5 ثواني

    return () => clearInterval(interval); // تنظيف الـ interval عند إلغاء تحميل الكومبوننت
  }, []);

  return <h1>{name}</h1>;
};

// eslint-disable-next-line no-irregular-whitespace
export default NameSwitcher;