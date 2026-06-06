import { TiSocialFacebook } from "react-icons/ti";
import "./footer.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      {/* الخط الفاصل يوضع هنا ليمتد بعرض الشاشة كاملاً */}
      <div className="footer-line"></div>

      <div className="footer-container">
        {/* 1. جهة اليمين */}
        <div className="footer-copyright">
          <p>@ 2024. All Rights Reserved</p>
        </div>

        {/* 2. جهة الوسط */}
        <div className="footer-dev">
          <p>
            Development by <span>Enes</span>
          </p>
        </div>

        {/* 3. جهة اليسار (الأيقونات) */}
        <div className="footer-social">
          <a
            href="https://www.facebook.com/share/17ihqcKsCS/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {<TiSocialFacebook />}
          </a>
          <a
            href="https://wa.me/905340242575"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {<AiOutlineWhatsApp />}
          </a>
          <a
            href="https://www.linkedin.com/in/enes-halil-401945384"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {<FaLinkedinIn />}
          </a>
          <a
            href="https://n9.cl/5n6zny"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {<FaInstagram />}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
