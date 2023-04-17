import React, {useState, useRef, useEffect} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {FaReact, FaBars} from "react-icons/fa";
import {HiX} from "react-icons/hi";
import "./style.scss";

let navItems = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "ABOUT",
    path: "/about",
  },
  {
    label: "SKILLS",
    path: "/skills",
  },
  {
    label: "RESUME",
    path: "/resume",
  },
  {
    label: "PORTFOLIO",
    path: "/portfolio",
  },
  {
    label: "CONTACT",
    path: "/contact",
  },
];

const Navbar = () => {
  const [menuBarToggle, setMenuBarToggle] = useState(true);

  const handleToggle = () => {
    setMenuBarToggle(!menuBarToggle);
  };
  const merkerHoverRef = useRef();
  const merkerActiveRef = useRef();
  const navRef = useRef();
  let location = useLocation();

  function setMarker(element, activeEl) {
    var width = element.offsetWidth;
    var left = element.offsetLeft;
    if (activeEl) {
      merkerActiveRef.current.style.setProperty("--marker-left", `${left}px`);
      merkerActiveRef.current.style.setProperty("--marker-width", `${width}px`);
    } else {
      merkerHoverRef.current.style.setProperty("--marker-left", `${left}px`);
      merkerHoverRef.current.style.setProperty("--marker-width", `${width}px`);
    }
  }

  const mouseEnter = (e) => {
    const element = e.target;
    setMarker(element);
  };

  const mouseLeave = (e) => {
    var element = navRef.current.querySelector(
      ".navbar__container__menu__item__links.active"
    );
    setMarker(element);
  };

  useEffect(() => {
    var element = navRef.current.querySelector(
      ".navbar__container__menu__item__links.active"
    );
    setMarker(element, 1);
    setMarker(element);
    setMenuBarToggle(true);
  }, [location]);

  return (
    <div>
      <nav className="navbar" ref={navRef}>
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <div className={`nav-wrapper  ${!menuBarToggle ? "active" : ""} `}>
          <ul className={`navbar__container__menu`}>
            {navItems.map((item, index) => (
              <li className="navbar__container__menu__item" key={index}>
                <NavLink
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                  className={({isActive, isPending}) =>
                    isPending
                      ? "navbar__container__menu__item__links pending"
                      : isActive
                      ? "navbar__container__menu__item__links active"
                      : "navbar__container__menu__item__links"
                  }
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="marker marker-hover" ref={merkerHoverRef}></div>
          <div className="marker marker-active" ref={merkerActiveRef}></div>
        </div>

        <div className="nav-icon" onClick={handleToggle}>
          {menuBarToggle ? <FaBars size={30} /> : <HiX size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
