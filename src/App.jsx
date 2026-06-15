import { FaMoon } from "react-icons/fa";
import NavBar from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";
import image from "../src/assets/images/enes.png";
import figma from "../src/assets/images/figma.png";
import image2 from "../src/assets/images/store.png";
import trippy from "../src/assets/images/trippy.png";
import calculator from "../src/assets/images/calculator.png";
import portfolio from "../src/assets/images/portfolio.png";
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
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { FiMapPin } from "react-icons/fi";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// استيراد صفحة التفاصيل الجديدة من مجلدها الفرعي
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

const App = () => {
  const items = [
    { id: "home", content: "Home" },
    { id: "about", content: "About me" },
    { id: "education", content: "Education" },
    { id: "Projects", content: "Projects" },
    { id: "contact", content: "Contact" },
  ];

  const skills = [
    { name: "HTML5", value: 90 },
    { name: "CSS3", value: 85 },
    { name: "Bootstrap", value: 80 },
    { name: "Javascript", value: 95 },
    { name: "React", value: 90 },
    { name: "Tailwind Css", value: 100 },
    { name: "Next.js", value: 90 },
  ];

  const experiences = [
    {
      address: "Education",
      explain:
        "Bachelor's degree in Information Technology Engineering, Aljazeera Private University .",
    },
    {
      address: "Frontend Intern at Vica Company",
      explain: "Worked on real-world projects using React and API integration.",
    },
    {
      address: "Ul Developer Intern at Company",
      explain:
        "Converted Figma designs into fully functional and responsive interfaces.",
    },
    {
      address: "Frontend Developer-freelance",
      explain:
        "Developed multiple websites using HTML, CSS, JavaScript, and React.",
    },
  ];

  const sites = [
    {
      id: 1,
      photo2: image2,
      name: "a store",
      tools: "Html-Css3-Vanilla javascript-React",
      projectImg: image2,
      projectLink: "https://enes-mobilia.vercel.app/",
      github: "https://github.com/eneshalill/Maltimart-ecommerce-.git",
      text: `
"This project is a modern, fully responsive multi-vendor e-commerce platform designed to showcase and manage diverse product categories including premium furniture, luxury watches, and smart devices. It features an advanced filtering system, intuitive user navigation, and optimized state management for a seamless, fast-loading shopping experience across all screen sizes.`,
    },
    {
      id: 2,
      photo2: trippy,
      name: "trippy",
      tools: "Html-Css3-Vanilla javascript-React",
      projectImg: trippy,
      projectLink: "https://trippy-wine.vercel.app/",
      text: `Trippy is a dynamic, high-performance travel and tourism platform designed to provide users with an immersive trip-booking experience. It features an interactive destination explorer, automated dynamic itineraries, and custom filtering for seamless travel planning. Built with a strong focus on pixel-perfect responsive design and fluid frontend transitions, the project delivers a fast, intuitive, and modern UI across all screen environments.`,
      github: "https://github.com/eneshalill/trippy.git",
    },
    {
      id: 3,
      photo2: calculator,
      name: "calculator",
      tools: "Html-Css3-Vanilla javascript",
      projectImg: calculator,
      projectLink: "https://calculator-cbe2.vercel.app/ ",
      text: `A modern web calculator built with pure JavaScript logic to handle standard arithmetic computations and decimal tracking. It features dynamic state updates, precise input validation to prevent errors, and a lightweight, fully responsive design optimized for all screens.`,
      github: "https://github.com/eneshalill/calculator.git",
    },
    {
      id: 4,
      photo2: portfolio,
      name: "portfolio",
      tools: "Html-Css3-Vanilla javascript",
      projectImg: portfolio,
      projectLink: "https://anas-cv-1323e.web.app/",
      text: `My personal professional portfolio designed to showcase my frontend expertise, core skillset, and latest real-world projects. It features pixel-perfect responsive layouts, smooth modern animations, and full dark/light mode configurations.`,
      github: "https://github.com/eneshalill/eneshalil.dev.git",
    },
  ];

  const infos = [
    { icon: <IoCallOutline />, title: "Call me", content: "+905396489745" },
    {
      icon: <HiOutlineMail />,
      title: "Email me",
      content: "thoth.na.anass@gmail.com",
    },
    { icon: <FiMapPin />, title: "Address", content: "Turkey, Istanbul" },
  ];

  return (
    <Router>
      <Routes>
        {/* 🏠 1. المسار الرئيسي للموقع */}
        <Route
          path="/"
          element={
            <>
              <Header>
                <NavBar logo="Enes" items={items} />
                <Hero
                  greeting="HEY! "
                  name="I'm Enes, "
                  tittle="Frontend Developer"
                  text="Agency-quality webflow websites with the personal touch of a freelancer."
                  btn="Download Cv"
                  photo={image}
                />
              </Header>
              <main>
                <About
                  tittle="About me"
                  text="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra"
                  skills={skills}
                  html={<IoLogoHtml5 />}
                  htmlIcon={<SiHtml5 />}
                  cssIcon={<IoLogoCss3 />}
                  reactIcon={<BiLogoReact />}
                  photo1={figma}
                  githubIcon={<RxGithubLogo />}
                />
                <Education experiences={experiences} />
                <Call
                  title1="Try me out, risk free!"
                  desctiption="If you're not happy with the design after the first draft, I'll refund your deposit , "
                  insurance="no questions asked"
                  btn="Contact →"
                />

                <Card
                  sites={sites}
                  Portfolio="Portfolio"
                  work="My Creative Works"
                  Latest="Latest"
                  Project=" Projects"
                  git="View Github "
                />
                <Contact
                  contact="Contact"
                  talk="Let's Discuss Your"
                  project="Project"
                  infos={infos}
                  message="Send Message"
                />
              </main>
              <Footer />
              <ScrollToTop />
            </>
          }
        />

        {/* مسار صفحة التفاصيل المخصصة */}
        <Route
          path="/details/:id"
          element={
            <ProjectDetails
              sites={sites}
              items={
                items
              } /*  قمنا بتمرير مصفوفة  items هنا ليعمل الناف بار بشكل صحيح داخل صفحة التفاصيل */
              Portfolio="Portfolio"
              work="My Creative Works"
              Latest="Latest"
              Project="Projects"
              git="View Github "
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
