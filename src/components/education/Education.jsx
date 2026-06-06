
import "./education.css";
const Education = ({experiences}) => {
  return (
    <section  className="education" id="education">
        <div className="shape circle-top"></div>
        <div className="shape circle-bottom"></div>
        <div className="shape square-right"></div>
        <div className="shape square-bottom"></div>
        <div className="shape circle-right"></div>
        

<div className="section-title">
        <div className="subtitle">Education and Experience</div>
    <h4 className="main-title">Education & Experience</h4>
    </div>   

    <div className="experience-grid">
{experiences.map((experience, index)=>(
    <div className="experience-item" key={index}>
        <div className="content-wrapper">
        <h5>{experience.address}</h5>
<p>{experience.explain}</p>
</div>
    </div>

))}
    </div>
     </section>
  )
}
export default Education