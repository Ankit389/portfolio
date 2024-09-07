
// import React from 'react';
// import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <div className="bg-black-100 text-white py-2 mt-5">
//       <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
//         {/* FPC Section */}
//         <div>
//           <h3 className="font-bold mb-4">Ankit Pankaj</h3>
//           <p>Kota Rajasthan</p>
//           <p>+91 9256224759</p>
//         </div>

//         {/* Company Section */}
//         <div>
//           <h3 className="font-bold mb-4">Home</h3>
//           <p>About</p>
//           <p>Work</p>
//           <p>Contact</p>
//         </div>

//         {/* Support Section */}
//         <div>
//           <h3 className="font-bold mb-4">SUPPORT</h3>
//           <p>Privacy Policy</p>
//           <p>Terms & Conditions</p>
//           <p>Contact</p>
//           <p>FAQs</p>
//         </div>

//         {/* Resources Section */}
//         <div>
//           <h3 className="font-bold mb-4">Experience</h3>
//           <p>Gssoc24</p>
//           <p>InfoTech Pvt Ltd</p>
//         </div>

//         {/* Call-to-action Section */}
//         <div>
//           <h3 className="font-bold mb-4">I'm passionate about web development and currently exploring job opportunities.</h3>
//           <p>If you know of any openings or projects, please feel free to share! Let's connect and build something amazing together!</p>
//           <button 
//             type="button" 
//             className="text-white  justify-center items-center  bg-purple-700 mt-8 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"  
//             onClick={() => window.open('https://drive.google.com/file/d/11j_yPOex-ZzDFChWFBI64RGhxYRLBgyR/view?usp=drive_link', '_blank')}>
//             Download Now Resume
//           </button>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="container mx-auto mt-8 text-center text-xs flex justify-between items-center">
//         <h1 className='text-xl'>@2024. All Rights Reserved.</h1>
        
//         {/* Icons aligned to the right */}
//         <div className="flex space-x-6 text-right">
//           <FaEnvelope className="cursor-pointer" size={30} />  
//           <FaInstagram className="cursor-pointer" size={30} /> 
//           <a href="https://www.linkedin.com/in/ankit-pankaj-5b62ba26b/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="cursor-pointer" size={30} />
//           </a>
//           {/* GitHub Icon with hyperlink */}
//           <a href="https://github.com/Ankit389" target="_blank" rel="noopener noreferrer">
//             <FaGithub className="cursor-pointer" size={30} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-sm">
        {/* FPC Section */}
        <div>
          <h3 className="font-bold mb-4">Ankit Pankaj</h3>
          <p>Kota Rajasthan</p>
          <p>+91 9256224759</p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-bold mb-4">Home</h3>
          <p>About</p>
          <p>Work</p>
          <p>Contact</p>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold mb-4">SUPPORT</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Contact</p>
          <p>FAQs</p>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-bold mb-4">Experience</h3>
          <p>Gssoc24</p>
          <p>InfoTech Pvt Ltd</p>
        </div>

        {/* Call-to-action Section */}
        <div>
          <h3 className="font-bold mb-4 text-lg md:text-base">I'm passionate about web development and currently exploring job opportunities.</h3>
          <p className="text-sm md:text-xs">If you know of any openings or projects, please feel free to share! Let's connect and build something amazing together!</p>
          <button 
            type="button" 
            className="mt-8 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
            onClick={() => window.open('https://drive.google.com/file/d/11j_yPOex-ZzDFChWFBI64RGhxYRLBgyR/view?usp=drive_link', '_blank')}>
            Download Resume
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-8 text-center text-xs flex flex-col md:flex-row justify-between items-center">
        <h1 className='text-base md:text-xl'>@2024. All Rights Reserved.</h1>

        {/* Icons aligned to the center on mobile and right on larger screens */}
        <div className="flex justify-center space-x-6 mt-4 md:mt-0">
          <a href="mailto:your-email@example.com" aria-label="Email">
            <FaEnvelope className="cursor-pointer" size={30} />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="cursor-pointer" size={30} />
          </a>
          <a href="https://www.linkedin.com/in/ankit-pankaj-5b62ba26b/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="cursor-pointer" size={30} />
          </a>
          <a href="https://github.com/Ankit389" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="cursor-pointer" size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
