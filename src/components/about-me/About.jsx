import "./about.css"

const About = ({tittle, text, skills, html, cssIcon, reactIcon, photo1, githubIcon }) => {
  return (
    <section className='about-section' id="about">
      <div className="about-wrapper">
        {/* الجزء الأيسر: الأيقونات والدوائر */}
        <div className="about-left ">
            <div className="oval orbit-1"></div>
            <div className="oval orbit-2"></div>
            <div className="oval orbit-3"></div>

          <div className="html">{html}</div>
            <div className=" cssLogo">{cssIcon}</div>
            <div className=" reactLogo">{reactIcon}</div>
            <div className=" githubLogo">{githubIcon}</div>
            <img className="figma-img" src={photo1} alt="figma" />
        </div>

        {/* الجزء الأيمن: النصوص والمهارات */}
        <div className='about-right'>
          <div className='about-header'>
            <h2 className="about-tittle">{tittle}</h2>
            <p className="about-text">{text}</p>
          </div>
       
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <h3>{skill.name}</h3>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${skill.value}%` }}>
                    <span className="progress-knob"></span>
                    <span className="skill-tooltip">{skill.value}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About