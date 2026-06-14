import "./call.css";
const Call = ({ title1, desctiption, insurance, btn }) => {
  
  // كل هلدوخة مشان ينط لقسم الفورم
  const handleScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="cta">
      <div className="cta-waves">
        <svg
          viewBox="0 0 1170 348"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* الخط العلوي الأوضح - تجمع يسار وانحناء واسع لليمين والأسفل */}
          <path
            d="M-0.333252 261.511C13.5221 231.522 118.823 320.507 258.168 320.507C451.748 320.507 558.236 -187.581 812.779 -31.8159C998.441 81.7982 1108.1 126.927 1179.35 75.8603"
            stroke="#BECED8"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            
          />
          {/* الخط الأوسط - يبدأ مرتفعاً وينحدر بزاوية أعمق */}
          <path
            d="M-0.333252 198.184C13.5221 198.184 118.823 317.34 258.168 317.34C451.748 317.34 555.975 -116.735 828.614 4.60415C1044.76 100.8 1139.77 111.093 1179.35 44.191"
            stroke="#BECED8"
            strokeWidth="0.8"
            strokeOpacity="0.2"
          />
          {/* الخط السفلي الأقل وضوحاً - يتبع نفس المسار ولكن أعمق */}
          <path
            d="M-0.333252 67.2233C11.9387 76.3283 118.823 289.305 258.168 289.305C451.748 289.305 587.644 -97.2657 860.283 24.0737C1076.43 120.27 1110.47 104.831 1179.35 55.7432"
            stroke="#BECED8"
              strokeWidth="0.8"
            strokeOpacity="0.2"
          />
        </svg>
      </div>
      <div className="cta-content">
        <div className="test">
          <h6>{title1}</h6>
          <p className="descrtiption">
            {desctiption}
            <strong>{insurance}</strong>
          </p>
        </div>
        <button className="cta-btn" onClick={handleScroll}>{btn}</button>
      </div>
    </section>
  );
};

export default Call;
