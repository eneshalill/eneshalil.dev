import { FaMoon } from "react-icons/fa";
import NavBar from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";
import image from "../src/assets/images/enes.png";
import figma from "../src/assets/images/figma.png";
import image2 from "../src/assets/images/store.png";
import About from "./components/about-me/About";
import { BiLogoReact } from "react-icons/bi";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";
import Education from "./components/education/Education";
import Call from "./components/call/Call";
import Card from "./components/Card/Card";
import Contact from "./components/Contact/Contact";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import { FiMapPin } from "react-icons/fi";

const App = () => {
  const items = [
    { id:"home", content: "Home" },
    { id:"about", content: "About me" },
    { id:"education" ,content: "Education" },
    { id:"Projects", content: "Projects" },
    { id:"contact", content: "Contact" },
  ];

  const skills=[
  {name:"HTML5" ,value:90},
  {name:"CSS3" ,value:85},
  {name:"Bootstrap" ,value:80},
  {name:"Javascript" ,value:95},
  {name:"React" ,value:90},
  {name:"Tailwind Css" ,value:100},
  {name:"Next.js" ,value:90},
  
  ]

  const experiences=[
    {address:"Education", explain:"Bachelor's degree in Information Technology Engineering,Aljazeera Private University ."},
    {address:"Frontend Intern at Vica Company", explain:"Worked on real-world projects using React and API integration."},
    {address:"Ul Developer Intern at Company", explain:"Converted Figma designs into fully functional and responsive interfaces."},
    {address:"Frontend Developer-freelance", explain:"Developed multiple websites using HTML, CSS, JavaScript, and React."},
  ]

const sites=[
 { photo2 :image2, Trippy:"Trippy", tools:"Html-Css3-Vanilla javascript-React" },
 { photo2 :image2, Trippy:"store", tools:"Html-Css3-Vanilla javascript-React" },
 { photo2 :image2, Trippy:"calculator", tools:"Html-Css3-Vanilla javascript" },
 { photo2 :image2, Trippy:"calculator", tools:"Html-Css3-Vanilla javascript" },
 { photo2 :image2, Trippy:"calculator", tools:"Html-Css3-Vanilla javascript" },
]

const infos=[
  {icon:<IoCallOutline />, title:"Call me", content:"+905396489745" },
  {icon:<HiOutlineMail />, title:"Email me", content:"thoth.na.anass@gmail.com" },
  {icon:<FiMapPin />, title:"Address", content:"Turkey, Istanbul" },
]
  return (
    <>
    <Header> 
      <NavBar logo="Enes" items={items} />
      <Hero
        greeting="HEY! " 
        name="I'm Enes, "
        tittle="Frontend Developer"
        text=" 
        Agency-quality webflow websites with the personal touch of a freelancer."
        btn="Download Cv"
        photo={image}
        
      />
      </Header>
<main> 
      <About tittle="About me" text="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra"
       skills={skills} html={<IoLogoHtml5 />} htmlIcon={<SiHtml5 />} cssIcon={<IoLogoCss3 />} reactIcon={<BiLogoReact />}
      photo1={figma}
      githubIcon={<RxGithubLogo />}/>
      <Education experiences={experiences}/>
      <Call title1="Try me out, risk free!" desctiption="If you're not happy with the design after the first draft, I'll refund your deposit , " insurance="no questions asked" btn="Contact →"/>
 
    <Card sites={sites} Portfolio="Portfolio" work="My Creative Works" Latest="Latest" Project="Projects"
    git="View Github "/>
    <Contact contact="Contact" talk="Let's Discuss Your" project="Project" infos={infos} message="Send Message"/>
    </main>
    <Footer />
    <ScrollToTop/>
    </>
  );
};
export default App;
