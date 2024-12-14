// import React from 'react'
// import '../App.css'


// function Categories() {
//   return (
//       <>
//           <header className='list-none uppercase flex justify-evenly items-center bg-[#003380] text-white font-semibold text-sm sticky top-[75px] z-40 [&>li:hover]:bg-[#E42529]' >
//               <li>Mobiles & Tablets <i className="fa-solid fa-angle-down"></i></li>
//               <li>Televisions <i className="fa-solid fa-angle-down"></i></li>
//               <li>Audio <i className="fa-solid fa-angle-down"></i></li>
//               <li>Home Appliances <i className="fa-solid fa-angle-down"></i></li>
//               <li>Computer <i className="fa-solid fa-angle-down"></i></li>
//               <li>Cameras <i className="fa-solid fa-angle-down"></i></li>
//               <li>Kitchen Appliances <i className="fa-solid fa-angle-down"></i></li>
//               <li>PERSONAL CARE <i className="fa-solid fa-angle-down"></i></li>
//               <li>Accessories <i className="fa-solid fa-angle-down"></i></li>
//           </header>
//       </>
//   )
// }

// export default Categories


// import React, { useState } from 'react';
// import '../App.css';

// function Categories() {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   // Sample dropdown data for each category
//   const dropdownData = {
//     "Mobiles & Tablets": ["Smartphones", "Tablets", "Mobile Accessories"],
//     Televisions: ["Smart TVs", "LED TVs", "OLED TVs"],
//     Audio: ["Headphones", "Speakers", "Soundbars"],
//     "Home Appliances": ["Refrigerators", "Washing Machines", "Air Conditioners"],
//     Computer: ["Laptops", "Desktops", "Monitors"],
//     Cameras: ["DSLR", "Mirrorless", "Action Cameras"],
//     "Kitchen Appliances": ["Microwaves", "Blenders", "Coffee Makers"],
//     "PERSONAL CARE": ["Trimmers", "Hair Dryers", "Massagers"],
//     Accessories: ["Chargers", "Cables", "Power Banks"],
//   };

//   // Event handlers for showing/hiding dropdown
//   const handleMouseEnter = (category) => setActiveDropdown(category);
//   const handleMouseLeave = () => setActiveDropdown(null);

//   return (
//     <>
//       <header className="list-none uppercase flex justify-evenly items-center bg-[#003380] text-white font-semibold text-sm sticky top-[75px] z-40 [&>li:hover]:bg-[#E42529]">
//         {Object.keys(dropdownData).map((category) => (
//           <li
//             key={category}
//             onMouseEnter={() => handleMouseEnter(category)}
//             onMouseLeave={handleMouseLeave}
//             className="relative cursor-pointer px-4 py-2"
//           >
//             {category} <i className="fa-solid fa-angle-down"></i>
//             {activeDropdown === category && (
//               <ul className="absolute left-0 top-full bg-white text-black text-sm font-normal w-48 shadow-lg">
//                 {dropdownData[category].map((item, index) => (
//                   <li
//                     key={index}
//                     className="px-4 py-2 hover:bg-gray-200"
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </header>
//     </>
//   );
// }

// export default Categories;


import React, { useState } from "react";
import "../App.css";
import { dropDownData } from "./DropdownData";

function Categories() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (category) => setActiveDropdown(category);
  const handleMouseLeave = () => setActiveDropdown(null);

//   return (
//     <>
//       <header className="list-none uppercase flex justify-evenly items-center bg-[#003380] text-white font-semibold text-sm sticky top-[75px] z-40">
//         {Object.keys(dropDownData).map((category) => (
//           <li
//             key={category}
//             onMouseEnter={() => handleMouseEnter(category)}
//             onMouseLeave={handleMouseLeave}
//             className="relative cursor-pointer px-4 py-2"
//           >
//             {category} <i className="fa-solid fa-angle-down"></i>
//             {activeDropdown === category && (
//                     <div  className="absolute top-full bg-white text-black text-sm shadow-lg p-4 grid grid-cols-2"
//                     style={{
//                       left: "50%",
//                       transform: "translateX(-50%)", // Centering the dropdown
//                       width: "100vw",
//                       maxWidth: "1200px", // Ensures dropdown is not wider than 1200px
//                       margin: "0 auto", // Ensures it remains in the webpage center
//                     }}
//                     >
//                 {dropDownData[category].map((section, index) => (
//                   <div key={index} >
//                     <h4 className="font-bold mb-2 text-[#003380]">{section.title}</h4>
//                     {section.item ? (
//                       <ul>
//                         {section.item.map((item, idx) => (
//                           <li
//                             key={idx}
//                             className="px-2 py-1 hover:text-[#E42529] hover:underline cursor-pointer"
//                           >
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     ) : (
//                       <p className="text-gray-500">No items available</p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </li>
//         ))}
//       </header>
//     </>
    //   );
    return (
        <header className="list-none  flex justify-evenly items-center bg-[#003380] text-white font-semibold text-sm sticky top-[75px] z-40 [&>li:hover]:bg-[#E42529]">
          {Object.keys(dropDownData).map((category) => (
            <li
              key={category}
              onMouseEnter={() => handleMouseEnter(category)}
              onMouseLeave={handleMouseLeave}
              className="relative group"
            >
              {category} <i className="fa-solid fa-angle-down"></i>
              {activeDropdown === category && (
                <div className="absolute transition-all rounded-t-none rounded-b-lg duration-300 ease-out  left-0 mt-2 bg-blue-900 text-[12px]  shadow-lg  w-[800px] z-50">
                  <ul className="list-none grid grid-cols-4 ">
                    {dropDownData[category].map((subcategory, idx) => (
                      <li key={idx} className="px-4 py-2 ">
                        <span>{subcategory.title}</span>
                        <ul className="list-none pl-4">
                          {subcategory.item && subcategory.item.map((item, subIdx) => (
                            <li key={subIdx} className="py-1 text-[10px] hover:text-[#b3b1b1]">{item}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </header>
      );
}

export default Categories;

