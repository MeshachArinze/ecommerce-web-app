import React from 'react';
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import "./Header.css";

const Header = () => {
      const { openSidebar } = useGlobalContext();
      const { amount } = useGlobalContext();
      console.log(amount);
  return (
    <>
      <div className="flex flex-row justify-between px-9 py-3 header items-center ">
        <button onClick={openSidebar}>
          {<FaBars className="w-[20px] text-lg" />}
        </button>
        
        <div className="text-lg space-x-2 translate-y-2 flex items-center text-lightCream">
          <p>{<FaShoppingCart />}</p>
          <div className="-translate-y-5 -translate-x-3 bg-white text-lightOrange text-center rounded-xl px-1">
            {amount}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;