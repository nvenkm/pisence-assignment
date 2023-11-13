import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { TbAlignJustified } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { BiCctv } from "react-icons/bi";
import { PiNotebookBold } from "react-icons/pi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="navbar">
        <div className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
          <TbAlignJustified
            color={`${isOpen ? "black" : "#ad8888 "}`}
            size={50}
          />
        </div>

        <div className="home-icon">
          <BsFillPersonFill size={50} color="#af8181" />
        </div>
      </nav>

      <ul className={`nav-list ${isOpen ? "visible" : ""}`}>
        <li className="nav-list-item">
          <AiOutlineHome size={50} />
          <span>Summary Dashboard</span>
        </li>
        <li className="nav-list-item">
          <BiLibrary size={50} />
          <span> Attendance Tracking</span>
        </li>
        <li className="nav-list-item">
          <BiCctv size={50} />
          <span>Behaviour Analytics</span>
        </li>
        <li className="nav-list-item">
          <PiNotebookBold size={50} />
          <span>Academic Performance Tracking</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
