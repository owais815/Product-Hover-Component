// import React, { useState } from 'react';
// import './App.css'; // Make sure to include Tailwind CSS

// const hoverComp =()=>{

//     const [hovered, setHovered] = useState(false);

//     const handleMouseEnter = () => setHovered(true);
//     const handleMouseLeave = () => setHovered(false);

//     let container = document.getElementById("container");
// for (let i = 50; i >= -20; i--) {
//   let span = document.createElement("span");
//   span.style.setProperty("--i", i);
//   container.appendChild(span);
// }

//     return(
//         <div
//         className={`relative w-72 h-72 cursor-pointer shadow-[5px_50px_50px_#111] transition-transform duration-500
//           ${hovered ? 'perspective-1000 transform-style-preserve-3d' : ''}`}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <span
//           className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 z-10
//             ${hovered ? 'transform rotate-[-30deg] skew-[25deg] translate-x-[1.5px] translate-y-[-1.5px] shadow[-5px_5px_0_rgba(0,0,0,0.4)]' : ''}`}
//           style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}
//         />
//         <span
//           className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 z-20
//             ${hovered ? 'shadow[-50px_50px_0_rgba(0,0,0,0.5)]' : ''}`}
//           style={{ backgroundImage: `url('../public/product.jpg')` }}
//         />
//       </div>
//     )
// }
// export default hoverComp;

import React, { useEffect } from "react";
import "./HoverComponent.css";

const HoverComp = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    for (let i = 50; i >= -20; i--) {
      const span = document.createElement("span");
      span.style.setProperty("--i", i);
      container.appendChild(span);
    }
  }, []);

  return (
    <div className="items-center flex justify-center h-screen bg-slate-800 w-full h-screen">
      <div
        id="container"
        className="relative w-72 justify-center   h-72 transform-style-preserve-3d perspective-1000 cursor-pointer shadow-[5px_50px_50px_#111] transition-transform duration-500"
      ></div>
    </div>
  );
};

export default HoverComp;
