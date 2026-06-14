import "./card.css";
import { Link } from "react-router-dom"; 

const Card = ({ sites, Portfolio, work, Latest, Project, git }) => {
  return (
    <div className="portfolio-full-wrapper" id="Projects">
      {/* الحاوية الموحدة لضمان المسطرة الواحدة */}
      <div className="main-unified-container">
        
        {/* قسم العنوان والزر (Projects سابقا) */}
        <div className="projects-container">
          <div className="text-group">
            <p className="portfolio-label">{Portfolio}</p>
            <h6 className="projects-title">
              <span className="work"> {work}</span> {Latest}
              <span className="blue-text">{Project}</span>
            </h6>
          </div>
         <a 
  href="https://github.com/eneshalill" 
  target="_blank" /* لفتح الرابط في تبويب جديد دون إغلاق موقعك */
  rel="noopener noreferrer" /* خطوة أمان برمجية ضرورية عند استخدام target="_blank" */
  className="github-btn"
>
  {git} <span className="arrow">↗</span>
</a>
        </div>

        {/* قسم الكروت (Card سابقا) */}
        <section className="project-container">
          {sites && sites?.map((site, index) => {
            return (
              <div key={index} className="projects-card">
                <div className="card">
                  <div className="card-image-container">
                    <img src={site.photo2} alt={site.Trippy} />
                    
                    <div className="card-overlay">
                      {/* أيقونة التكبير */}
                      <div className="overlay-icon">


                        <a href={site.projectImg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-icon"
                        style={{textDecoration:"none"}}
                        >
                        <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M66.6667 66.6666V68.6666H68.6667V66.6666H66.6667ZM51.4143 48.5857C50.6332 47.8047 49.3669 47.8047 48.5859 48.5857C47.8048 49.3668 47.8048 50.6331 48.5859 51.4142L51.4143 48.5857ZM64.6667 46.6666V66.6666H68.6667V46.6666H64.6667ZM66.6667 64.6666H46.6667V68.6666H66.6667V64.6666ZM68.081 65.2524L51.4143 48.5857L48.5859 51.4142L65.2525 68.0808L68.081 65.2524Z" fill="white"/>
                          <path d="M13.3333 66.6666H11.3333V68.6666H13.3333V66.6666ZM31.4141 51.4142C32.1952 50.6331 32.1952 49.3668 31.4141 48.5857C30.6331 47.8047 29.3668 47.8047 28.5857 48.5857L31.4141 51.4142ZM11.3333 46.6666V66.6666H15.3333V46.6666H11.3333ZM13.3333 68.6666H33.3333V64.6666H13.3333V68.6666ZM14.7475 68.0808L31.4141 51.4142L28.5857 48.5857L11.919 65.2524L14.7475 68.0808Z" fill="white"/>
                          <path d="M66.6667 13.3334H68.6667V11.3334H66.6667V13.3334ZM48.5859 28.5858C47.8048 29.3669 47.8048 30.6332 48.5859 31.4143C49.3669 32.1953 50.6332 32.1953 51.4143 31.4143L48.5859 28.5858ZM68.6667 33.3334V13.3334H64.6667V33.3334H68.6667ZM66.6667 11.3334H46.6667V15.3334H66.6667V11.3334ZM65.2525 11.9192L48.5859 28.5858L51.4143 31.4143L68.081 14.7476L65.2525 11.9192Z" fill="white"/>
                          <path d="M13.3333 13.3334V11.3334H11.3333V13.3334H13.3333ZM28.5857 31.4143C29.3668 32.1953 30.6331 32.1953 31.4141 31.4143C32.1952 30.6332 32.1952 29.3669 31.4141 28.5858L28.5857 31.4143ZM15.3333 33.3334V13.3334H11.3333V33.3334H15.3333ZM13.3333 15.3334H33.3333V11.3334H13.3333V15.3334ZM11.919 14.7476L28.5857 31.4143L31.4141 28.5858L14.7475 11.9192L11.919 14.7476Z" fill="white"/>
                        </svg>
                        </a>
                      </div>

                      {/* أيقونة الرابط */}
                    <a 
  href={site.projectLink} 
  target="_blank" /* لفتح موقع المشروع في تبويب جديد والحفاظ على بورتفوليوهات مفتوح */
  rel="noopener noreferrer" /* حماية أمنية ضرورية للأداء والمتصفح */
  className="overlay-icon secondary"
  style={{ textDecoration: 'none' }} /* لضمان عدم تأثر الأيقونة بأي خطوط تحتها */
>
  <svg width="40" height="40" viewBox="0 0 65 63" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5179 38.8772C0.845122 29.2374 3.43467 18.5257 11.2866 10.9631C23.0023 -0.321024 41.9972 -0.321024 53.713 10.9631C65.4287 22.2472 65.4287 40.5423 53.713 51.8264C45.8611 59.389 34.7396 61.8831 24.7311 59.3088M41.5002 40.0634V22.7266M41.5002 22.7266H23.5002M41.5002 22.7266L11.4996 51.6212" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</a>
                    </div>
                  </div>

                  <div className="card-info">
                    <h6 className="card-name">{site.name}</h6>
                    <p className="card-text">{site.tools}</p>

<div className="icon-card">
  {/* 🚨 عند الضغط هنا، سينتقل المتصفح لصفحة تفاصيل هذا المشروع المحدّد بناءً على الـ id */}
  <Link to={`/details/${site.id}`} className="svg-icon-link">
    <svg className="svg-icon" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.0937 23.5317C0.534583 17.6934 2.04515 11.2059 6.62542 6.62563C13.4596 -0.208544 24.54 -0.208544 31.3742 6.62563C38.2083 13.4598 38.2083 24.5402 31.3742 31.3744C26.7939 35.9546 20.3064 37.4652 14.4681 35.9061M24.25 24.2502V13.7502M24.25 13.7502H13.75M24.25 13.7502L6.7497 31.2501" stroke="#0C96E2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Link>
</div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Card;