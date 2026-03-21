import './navBar.css'
const NavBar = ({ logo, items, icon}) => {
  return (
    <nav>
      <span>{logo}</span>

      <ul>
        {items?.map((item, index) => {
          return <li key={index}>{item?.content}</li>;
        })}
      </ul>
      <span>{icon}</span>
    </nav>
  );
};

export default NavBar;
