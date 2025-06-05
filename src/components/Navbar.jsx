import React, { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="flex justify-between pl-50 pr-50">
      <div className="flex gap-5 pt-2.5 ">
        <img
          className="w-[100px] h-8 pt-2"
          src="/src/assets/RE1Mu3b (1).png"
          alt=""
        />
        <div className="flex pt-2.5 gap-5">
          <h1 className="hover:cursor-pointer hover:underline ">Microsoft365</h1>
          <h1 className="hover:cursor-pointer hover:underline">Teams</h1>
          <h1 className="hover:cursor-pointer hover:underline">Copilot</h1>
          <h1 className="hover:cursor-pointer hover:underline">Windows</h1>
          <h1 className="hover:cursor-pointer hover:underline">Surface</h1>
          <h1 className="hover:cursor-pointer hover:underline">Xbox</h1>
          <h1 className="hover:cursor-pointer hover:underline">Support</h1>
        </div>
      </div>

      <div className=" flex gap-4 pt-5">
        <div
          onClick={() => {
            setShow(!show), console.log("happy");
          }}
          className="flex"
        >
          <h2 className="hover:cursor-pointer hover:underline">All Microsoft</h2>
          {/* {show ? (
            <div className="flex pt-100 gap-10">
              <h1>Software</h1>
              <h1>PCs7Devices</h1>
              <h1>Entertainment</h1>
              <h1>Business</h1>
              <h1>Developer & IT</h1>
              <h1>Other</h1>
            </div>
          ) : null} */}

          <img
            className="pt-1 pl-1 h-5 w-5 bg-white"
            src="src/assets/icons8-dropdown-20.png"
            alt=""
          />
        </div>
        <div className="flex">
          <h1 className="hover:cursor-pointer hover:underline">Search</h1>
          <img
            className="pt-1 pl-1 h-5 w-5 bg-white"
            src="src/assets/icons8-search-20.png"
            alt=""
          />
        </div>
        <div className="flex">
          <h1 className="hover:cursor-pointer hover:underline">Cart</h1>
          <img
            className="pt-1 pl-1 h-5 w-5 bg-white"
            src="src/assets/icons8-cart-20.png"
            alt=""
          />
        </div>
        <div className="flex">
          <h1>Sign in</h1>
          <img
            className="pt-1 pl-1 h-5 w-5 bg-white"
            src="src/assets/icons8-add-user-20.png"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
