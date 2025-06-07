import React from "react";

const Cards = [
  {
    id: 1,
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-M365-Icons-Teams?wid=380&hei=213&fit=crop",
    head: "Achive The Extaordinary",
    paragraph:
      "Microsoft 365 delivers cloud storage, security and Microsoft Copilot in your favourite apps – all in one plan.",
    button: "Shop Microsoft 365",
  },
  // {
  //    id:1,
  //   img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-M365-Icons-Teams?wid=380&hei=213&fit=crop",
  //   head:" The Extaordinary",
  //   paragraph:"Microsoft 365 delivers cloud storage, security and Microsoft Copilot in your favourite apps – all in one plan.",
  //   button:"Shop Microsoft 365"
  // }
];
const TopCardSection = () => {
  return (
    <>
      <section>
        <div>
          <div className=" flex justify-center pt-40 gap-40 pr-5">
            <img
              className="w-10 h-10"
              src="public/Link-List-Icons-Microsoft-365.svg"
              alt=""
            />
            <img
              className="w-10 h-10 "
              src="public/Link-List-Icons-Xbox-Games-Consoles.svg"
              alt=""
            />
            <img
              className="w-10 h-10"
              src="public/Link-List-Icons-Microsoft-365.svg"
              alt=""
            />
            <img
              className="w-10 h-10"
              src="public/Link-List-Icons-Surface-Devices.svg"
              alt=""
            />
          </div>
          <div className=" flex justify-center pr-5 text-[#0067B8] gap-20 pt-3 ">
            <h className="underline">Choose your Microsoft 365</h>
            <h className="underline">Shop Xbox</h>
            <h className="underline">Get Windows 11 </h>
            <h className="underline">Expolre Surface Devices</h>
          </div>
        </div>
        <div className="pt-10">
         {Cards.filter((items) => items.id).map((items) => {
  return <div className="w-[20vw] h-[40vh] flex flex-col gap-3">
<img key={items.id} src={items.img} alt="" />
    <h1 key={items.id} className="text-2xl font-semibold ">{items.head}</h1>
    <p key={items.id}>{items.paragraph}</p>
    <button key={items.id}>{items.button}</button>
  </div>
})}

          
        </div>
      </section>
    </>
  );
};

export default TopCardSection;
