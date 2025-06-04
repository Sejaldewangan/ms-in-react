import React,{useState} from "react";

const Navbar = () => {
    const [show,setShow]=useState(true)
  return (
    <nav className="flex justify-between pl-50 pr-50">
      <div className="flex gap-5 pt-2.5 ">
        <img
          className="w-[100px] h-8 pt-2"
          src="/src/assets/RE1Mu3b (1).png"
          alt=""
        />
        <div className="flex pt-2.5 gap-5">
          <h1>Microsoft365</h1>
          <h1>Teams</h1>
          <h1>Copilot</h1>
          <h1>Windows</h1>
          <h1>Surface</h1>
          <h1>Xbox</h1>
          <h1>Support</h1>
        </div>
      </div>

      <div className=" flex gap-4 pt-5">
        <div className="flex">
          <h2>All Microsoft</h2>
          <img
            className="pt-1 pl-1 h-5 w-5 bg-white"
            onClick={()=>{setShow(!show), console.log("happy")}
            }
            src="src/assets/icons8-dropdown-20.png"
            alt=""
          />
        </div>
        <div className="flex">
          <h1>Search</h1>
          <img
            className="pt-1 pl-1 h-5 w-5 bg-white"
            src="src/assets/icons8-search-20.png"
            alt=""
          />
        </div>
        <div className="flex">
          <h1>Cart</h1>
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
