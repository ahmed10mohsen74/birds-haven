import React, { useEffect, useRef } from "react";
import "./ScrollAnimation.css"; // تأكد من وجود ملف CSS

const ScrollAnimation = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="container">
      <div className="hidden from-right" ref={(el) => elementsRef.current.push(el)}>
        يأتي من اليمين
      </div>
      <div className="hidden from-left" ref={(el) => elementsRef.current.push(el)}>
        يأتي من اليسار
      </div>
      <div className="hidden from-bottom" ref={(el) => elementsRef.current.push(el)}>
        يأتي من الأسفل
      </div>
    </div>
  );
};

export default ScrollAnimation;
