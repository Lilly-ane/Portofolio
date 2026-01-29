import { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (section) => {
    setMenu(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img
        src={menu_open}
        onClick={() => setIsMenuOpen(true)}
        alt=""
        className="nav-mob-open"
      />
      <ul
        className="nav-menu"
        style={{
          right: isMenuOpen ? "0" : "-350px",
          transition: "right 0.3s ease",
        }}
      >
        <img
          onClick={() => setIsMenuOpen(false)}
          className="nav-mob-close"
          src={menu_close}
          alt=""
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleLinkClick("home")}>Home</p>
            {menu === "home" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleLinkClick("about")}>About Me</p>
            {menu === "about" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#techstack">
            <p onClick={() => handleLinkClick("techstack")}>TechStack</p>
            {menu === "techstack" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => handleLinkClick("work")}>Portfolio</p>
            {menu === "work" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleLinkClick("contact")}>Contact</p>
            {menu === "contact" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
