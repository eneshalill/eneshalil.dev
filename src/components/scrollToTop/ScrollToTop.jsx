import "./scrolltotop.css";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { LuArrowUp } from "react-icons/lu";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // مراقبة السكرول لإظهار أو إخفاء الزر
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // دالة الصعود للأعلى باستخدام مكتبة react-scroll
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // سرعة الصعود بالملي ثانية
      smooth: true,
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <LuArrowUp className="arrow-icon" />
    </div>
  );
};

export default ScrollToTop;
