import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import "./project-details.css";

const ProjectDetails = ({ sites, items, Portfolio, work, Latest, Project }) => {
  const { id } = useParams();
  const sliderRef = useRef(null);

  // جلب بيانات المشروع الحالي المعروض في الأعلى
  const currentProject = sites?.find((item) => item.id === parseInt(id));

  if (!currentProject) {
    return (
      <h2
        style={{
          textAlign: "center",
          padding: "100px",
          color: "var(--text-title)",
        }}
      >
        المشروع غير موجود!
      </h2>
    );
  }

  const techList = currentProject.tools ? currentProject.tools.split("-") : [];

  // تصفية المصفوفة لعرض باقي المشاريع في السلايدر السفلي (باستثناء المشروع الحالي)
  const otherProjects = sites?.filter((item) => item.id !== parseInt(id)) || [];

  // دوال تحريك السلايدر الأفقي بسلاسة عند الضغط على الأسهم
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* الـ NavBar في الأعلى */}
      <NavBar logo="Enes" items={items} />

      <div className="details-page-wrapper">
        {/* القسم العلوي: الصورة كمسطرة وقسم النصوص والمعلومات */}
        <div className="details-flex-container">
          <div className="details-img-container">
            <img
              className="details-project-img"
              src={currentProject.photo2}
              alt={currentProject.name}
            />
          </div>

          <div className="details-text-container">
            <div className="details-title-wrapper">
  <h2 className="details-title">{currentProject.name}</h2>
  
  {/* 🎯 أيقونة السهم الدائري الموجهة لرابط الموقع مباشرة */}
  <a 
    href={currentProject.projectLink} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="project-live-link-icon"
    aria-label="Visit Live Website"
  >
    <svg width="36" height="36" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.0937 23.5317C0.534583 17.6934 2.04515 11.2059 6.62542 6.62563C13.4596 -0.208544 24.54 -0.208544 31.3742 6.62563C38.2083 13.4598 38.2083 24.5402 31.3742 31.3744C26.7939 35.9546 20.3064 37.4652 14.4681 35.9061M24.25 24.2502V13.7502M24.25 13.7502H13.75M24.25 13.7502L6.7497 31.2501" stroke="#0C96E2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </a>
</div>
            <div className="details-date">12-5-2024</div>

            <p className="details-description">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra Lorem ipsum dolor sit amet consectetur.
            </p>

            <div className="tech-info-line">
              <strong>Basic Languages :</strong>
              <span>
                {techList[0] || "Html5"} , {techList[1] || "Css3"}
                {techList[2] || "Javascript"}
              </span>
            </div>
            <div className="tech-info-line">
              <strong>Framework :</strong>
              <span>{techList[3] || "Bootstrap"}</span>
            </div>
            <div className="tech-info-line">
              <strong>Libraries :</strong> <span>React.js</span>
            </div>

            <a
              href={currentProject.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="github-repo-btn"
            >
              Github Repo
            </a>
          </div>
        </div>

        {/* هيدر قسم المشاريع السفلي (The Best Projects) */}
        <div className="bottom-section-header">
          <div className="header-text-side">
            <div className="portfolio-sub">{Portfolio || "Portfolio"}</div>
            <h3 className="portfolio-main-title">
              The Best <span>Projects</span>
            </h3>
          </div>

          <div className="slider-arrows-container">
            <button
              className="slider-arrow-btn"
              onClick={scrollLeft}
              aria-label="Previous"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path
                  d="M7 13L1 7L7 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="slider-arrow-btn"
              onClick={scrollRight}
              aria-label="Next"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path
                  d="M1 13L7 7L1 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="divider1">
          <span className="center-dot2"></span>
        </div>

        {/* ==========================================================================
   📦 الحاوية الحقيقية والمستقلة للـ Slider الأفقي (The Best Projects)
   ========================================================================== */}
        <div className="horizontal-slider-wrapper" ref={sliderRef}>
          <div className="pure-slider-row">
            {otherProjects &&
              otherProjects.map((site) => (
                <div className="pure-project-card" key={site.id}>
                  <div className="card">
                    {/* حاوية الصورة مع طبقة الـ Overlay والأيقونات عند الهوفر */}
                    <div className="card-image-container">
                      <img src={site.photo2} alt={site.name} />

                      <div className="card-overlay">
                        {/* أيقونة التكبير لمشاهدة الصورة */}
                        <a
                          href={site.projectImg || site.photo2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="overlay-icon"
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M66.6667 66.6666V68.6666H68.6667V66.6666H66.6667ZM51.4143 48.5857C50.6332 47.8047 49.3669 47.8047 48.5859 48.5857C47.8048 49.3668 47.8048 50.6331 48.5859 51.4142L51.4143 48.5857ZM64.6667 46.6666V66.6666H68.6667V46.6666H64.6667ZM66.6667 64.6666H46.6667V68.6666H66.6667V64.6666ZM68.081 65.2524L51.4143 48.5857L48.5859 51.4142L65.2525 68.0808L68.081 65.2524Z"
                              fill="white"
                            />
                            <path
                              d="M13.3333 66.6666H11.3333V68.6666H13.3333V66.6666ZM31.4141 51.4142C32.1952 50.6331 32.1952 49.3668 31.4141 48.5857C30.6331 47.8047 29.3668 47.8047 28.5857 48.5857L31.4141 51.4142ZM11.3333 46.6666V66.6666H15.3333V46.6666H11.3333ZM13.3333 68.6666H33.3333V64.6666H13.3333V68.6666ZM14.7475 68.0808L31.4141 51.4142L28.5857 48.5857L11.919 65.2524L14.7475 68.0808Z"
                              fill="white"
                            />
                            <path
                              d="M66.6667 13.3334H68.6667V11.3334H66.6667V13.3334ZM48.5859 28.5858C47.8048 29.3669 47.8048 30.6332 48.5859 31.4143C49.3669 32.1953 50.6332 32.1953 51.4143 31.4143L48.5859 28.5858ZM68.6667 33.3334V13.3334H64.6667V33.3334H68.6667ZM66.6667 11.3334H46.6667V15.3334H66.6667V11.3334ZM65.2525 11.9192L48.5859 28.5858L51.4143 31.4143L68.081 14.7476L65.2525 11.9192Z"
                              fill="white"
                            />
                            <path
                              d="M13.3333 13.3334V11.3334H11.3333V13.3334H13.3333ZM28.5857 31.4143C29.3668 32.1953 30.6331 32.1953 31.4141 31.4143C32.1952 30.6332 32.1952 29.3669 31.4141 28.5858L28.5857 31.4143ZM15.3333 33.3334V13.3334H11.3333V33.3334H15.3333ZM13.3333 15.3334H33.3333V11.3334H13.3333V15.3334ZM11.919 14.7476L28.5857 31.4143L31.4141 28.5858L14.7475 11.9192L11.919 14.7476Z"
                              fill="white"
                            />
                          </svg>
                        </a>

                        {/* أيقونة الانتقال المباشر للموقع لايف */}
                        <a
                          href={site.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="overlay-icon secondary"
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 65 63"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.5179 38.8772C0.845122 29.2374 3.43467 18.5257 11.2866 10.9631C23.0023 -0.321024 41.9972 -0.321024 53.713 10.9631C65.4287 22.2472 65.4287 40.5423 53.713 51.8264C45.8611 59.389 34.7396 61.8831 24.7311 59.3088M41.5002 40.0634V22.7266M41.5002 22.7266H23.5002M41.5002 22.7266L11.4996 51.6212"
                              stroke="white"
                              strokeWidth="5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* معلومات الكرت السفلية والسهم الأزرق النظيف */}
                    <div className="card-info">
                      <div className="card-text-side">
                        <h6 className="card-name">{site.name}</h6>
                        <p className="card-text">{site.tools}</p>
                      </div>

                      {/* زر الانتقال لصفحة التفاصيل بالسهم الدائري الأزرق */}
                      <div className="icon-card">
                        <Link
                          to={`/details/${site.id}`}
                          className="svg-icon-link"
                        >
                          <svg
                            className="svg-icon"
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.0937 23.5317C0.534583 17.6934 2.04515 11.2059 6.62542 6.62563C13.4596 -0.208544 24.54 -0.208544 31.3742 6.62563C38.2083 13.4598 38.2083 24.5402 31.3742 31.3744C26.7939 35.9546 20.3064 37.4652 14.4681 35.9061M24.25 24.2502V13.7502M24.25 13.7502H13.75M24.25 13.7502L6.7497 31.2501"
                              stroke="#0C96E2"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetails;
