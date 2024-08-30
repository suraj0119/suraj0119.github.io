// import React from "react";
// import { FaRegFolder } from "react-icons/fa";
// import { RxOpenInNewWindow } from "react-icons/rx";

// const ArchiveCard = ({ project }) => {
//   return (
//     <a href={project?.link} target="blank">
//       <div className="w-full h-80 rounded-lg bg-textBg p-7 flex flex-col justify-center gap-6 group">
//         <div className="flex justify-between items-center">
//           <FaRegFolder className="text-4xl text-designColor" />
//           <RxOpenInNewWindow className="text-2xl hover:text-designColor duration-200" />
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold tracking-wide group-hover:text-designColor duration-200">
//             {project?.title}
//           </h2>
//           <p className="text-sm mt-3">{project?.description}</p>
//         </div>
//         <ul className="text-xs md:text-sm text-darkText flex items-center gap-2 justify-between">
//           {project?.listItem.map((item) => (
//             <li key={item}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </a>
//   );
// };

// export default ArchiveCard;
