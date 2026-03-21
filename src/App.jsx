import { FaMoon } from "react-icons/fa";
import NavBar from "./components/NavBar";

const App = () => {
  const items = [
    { content: "Home" },
    { content: "About me" },
    { content: "Education" },
    { content: "Projects" },
    { content: "Contact" },
  ];
  return <NavBar logo="Enes" items={items} icon={<FaMoon />}/>;
};

export default App;
