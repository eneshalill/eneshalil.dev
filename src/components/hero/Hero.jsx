import "./hero.css";
const Hero = ({ greeting, name, tittle, text, btn, photo}) => {
  return (
    <section className="hero-section" id="home" >
<svg className="curve" viewBox="0 0 1366 459" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-30 295.176C-11.901 295.176 125.651 458.5 307.676 458.5C560.544 458.5 696.694 -136.474 1052.84 29.8421C1335.18 161.695 1459.29 175.803 1511 84.1028" stroke="#D3D5D6"/>
</svg>
<svg className="curve1" viewBox="0 0 1366 459" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-30 295.176C-11.901 295.176 125.651 458.5 307.676 458.5C560.544 458.5 696.694 -136.474 1052.84 29.8421C1335.18 161.695 1459.29 175.803 1511 84.1028" stroke="#D3D5D6"/>
</svg>
      <div className="glow-circle"></div>      {/*  توهج لازرق*/}

    <div className="home-hero">
      <h1>
      <span className="line">
          <span className="greeting">{greeting}</span>
          <span className="name">{name}</span>
      </span>
      <span className="bold"> {tittle}</span>
      </h1>
      <p>{text} </p>
      
      <a href="/Anas_CV.pdf"
      className="download-btn"
      >{btn}</a>
    </div>

   <div className="hero-img">
  <img src={photo}alt="enes" /> 
  <div className="circle"></div>
  <div className="square"></div>
  <div className="dot1"></div>
  <div className="dot2"></div>
  <div className="dot3"></div>
  <div className="dot4"></div>

</div>
  <div className="divider"><span className="center-dot"></span></div>
    </section>
  );
};

export default Hero;
