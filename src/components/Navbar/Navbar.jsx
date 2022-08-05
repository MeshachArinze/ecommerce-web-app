import React from 'react';
import { useGlobalContext } from '../../context';
import { FaTimes } from 'react-icons/fa';
import { links } from '../../Data';
import { NavLink } from "react-router-dom";
import Header from './Header';
import "./Navbar.css";

const Navbar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  console.log(isSidebarOpen)


  return (
    <div>
      <Header />
      <aside
        className={`  ${
          isSidebarOpen ? "sidebar hideSideBar" : " sidebar"
        }`}
      >
        <header className="header space-x-16 py-2 px-5">
          <div className="text-bgZinc">mama ekene </div>
          <div onClick={closeSidebar}>{<FaTimes />}</div>
        </header>

        <nav className="sidebar-nav">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <ul key={id}>
                <li>
                  <NavLink
                    className="  text-lightCream flex space-x-4 hover:bg-gray-900 "
                    to={url}
                    // onClick={(event) => {
                    //         event.preventDefault();
                    //         window.history.pushState({}, `${url}`)
                    //       }}
                  >
                    <p className="text-xs">{text}</p>
                  </NavLink>
                </li>
              </ul>
            );
          })}
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;
