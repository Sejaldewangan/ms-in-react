import React from 'react'
const BCards = [
  {
    id: 1,
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Pro-AI-11Ed-Platinum-x86-001-COMMR?wid=380&hei=213&fit=crop",
    head: "Surface Pro for Business, Copilot+ PC | Intel",
    paragraph:
      "Ultra-versatile and built with Intel® Core™ Ultra processors (Series 2) that power AI experiences to amplify your team’s productivity.",
    button: "Learn more",
  },
  {
    id: 2,
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Copilot-Commercial?wid=380&hei=213&fit=crop",
    head: "Microsoft 365 Copilot",
    paragraph:
      "Save time and focus on the things that matter most with AI in Microsoft 365 for business.",
    button: "Learn more",
  },
  {
    id: 3,
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-Teams-Commercial-Meeting?wid=380&hei=213&fit=crop",
    head: "Get Microsoft Teams for your business",
    paragraph: "Online meetings, chat, real-time collaboration, and shared cloud storage – all in one place.",
    button: "Find the right plan for your business",
  },
  {
    id: 4,
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Windows-11-Business?wid=380&hei=213&fit=crop",
    head: "Windows 11 for business",
    paragraph: "Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all",
    button: "Learn more",
  },
];
const BottomCardSection = () => {
  return (
    <div>
      <div className='pl-29 pt-30' > 
        <img  src="/public/Highlight-Slim-Multi-Canvas-Game-Pass-APR-2025_VP5-1596x600.avif" alt="" />
      </div>
      <div className='pt-30 pl-29' >
        <h1 className='text-5xl '>For business</h1>
      </div>
    <div className="pt-10 flex gap-[3vw] pt-10 justify-center">
          {BCards.filter((items) => items.id).map((items) => {
            return (
              <div className="w-[20vw] h-[40vh] flex flex-col gap-3 ">
                <img key={items.id} src={items.img} alt="" />
                <div className="p-5  flex flex-col gap-3  ">
                  <h1 key={items.id} className="text-2xl font-semibold ">
                    {items.head}
                  </h1>
                  <p key={items.id}>{items.paragraph}</p>
                  <div className="flex items-end">
                    <button className=" bg-sky-700 text-white p-2 " key={items.id}>
                      {items.button}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default BottomCardSection
