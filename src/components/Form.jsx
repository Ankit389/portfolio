// import React, { useState } from 'react';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     mobileNumber: '',
//     email: '',
//     category: '',
//     pinCode: '',
//     state: '',
//     city: '',
//     requestType: '',
//     serviceType: '',
//     address: '',
//     roadName: '',
//     nearbyLandmark: '',
//     companyName: '',
//     workExperience: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform the form submission or API call here
//     alert("Form submitted successfully!");
//   };

//   return (
//     <div className="bg-black-100 p-6 rounded-lg">
//       <h2 className="text-2xl text-white font-bold mb-4 text-center">Submit your Request</h2>
      
//       <form onSubmit={handleSubmit}>
//         <fieldset className="border p-4 mb-4">
//           <legend className="text-lg font-bold">Basic Details:</legend>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleInputChange}
//               className="border p-2 w-full text-white"
//               required
//             />
//             <input
//               type="text"
//               name="mobileNumber"
//               placeholder="10 Digit Mobile Number"
//               value={formData.mobileNumber}
//               onChange={handleInputChange}
//               className="border p-2 w-full"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="border p-2 w-full"
//               required
//             />
//             <input
//               type="text"
//               name="companyName"
//               placeholder="Company Name"
//               value={formData.companyName}
//               onChange={handleInputChange}
//               className="border p-2 w-full"
//               required
//             />
//             <input
//               type="text"
//               name="workExperience"
//               placeholder="Work Experience"
//               value={formData.workExperience}
//               onChange={handleInputChange}
//               className="border p-2 w-full"
//               required
//             />
//             <input
//               type="text"
//               name="pinCode"
//               placeholder="Enter Pin Code"
//               value={formData.pinCode}
//               onChange={handleInputChange}
//               className="border p-2 w-full"
//               required
//             />

//             <select
//               name="state"
//               value={formData.state}
//               onChange={handleInputChange}
//               className="border p-2 w-full"
//               required
//             >
              
//             </select>
//             <select
//               name="city"
//               value={formData.city}
//               onChange={handleInputChange}
//               className="border p-2 w-full"
//               required
//             >
//               <option>Select City</option>
              
//             </select>

//             {/* Request Type */}
//             <div className="flex items-center">
//               <input
//                 type="radio"
//                 name="requestType"
//                 value="Service"
//                 checked={formData.requestType === 'Service'}
//                 onChange={handleInputChange}
//                 className="mr-2"
//               />
//               <label>Service</label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="radio"
//                 name="requestType"
//                 value="New Purchase"
//                 checked={formData.requestType === 'New Purchase'}
//                 onChange={handleInputChange}
//                 className="mr-2"
//               />
//               <label>New Purchase</label>
//             </div>

//             {/* Service Type */}
//             <div className="flex items-center">
//               <input
//                 type="radio"
//                 name="serviceType"
//                 value="Repair/Service"
//                 checked={formData.serviceType === 'Repair/Service'}
//                 onChange={handleInputChange}
//                 className="mr-2"
//               />
//               <label>Repair/Service</label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="radio"
//                 name="serviceType"
//                 value="Installation/Uninstallation"
//                 checked={formData.serviceType === 'Installation/Uninstallation'}
//                 onChange={handleInputChange}
//                 className="mr-2"
//               />
//               <label>Installation/Uninstallation</label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="radio"
//                 name="serviceType"
//                 value="AMC"
//                 checked={formData.serviceType === 'AMC'}
//                 onChange={handleInputChange}
//                 className="mr-2"
//               />
//               <label>AMC</label>
//             </div>
//           </div>
//         </fieldset>

//         {/* Address Details */}
//         <fieldset className="border p-4 mb-4">
//           <legend className="text-lg font-bold">Address</legend>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="address"
//               placeholder="House No./Building No."
//               value={formData.address}
//               onChange={handleInputChange}
//               className="border p-2 w-full"
//               required
//             />
//             <input
//               type="text"
//               name="roadName"
//               placeholder="Road Name/Area"
//               value={formData.roadName}
//               onChange={handleInputChange}
//               className="border p-2 w-full"
//               required
//             />
//             <input
//               type="text"
//               name="nearbyLandmark"
//               placeholder="Near by famous Place/Shop/School, etc..."
//               value={formData.nearbyLandmark}
//               onChange={handleInputChange}
//               className="border p-2 w-full"
//               required
//             />
//           </div>
//         </fieldset>

//         {/* Your Message */}
//         <fieldset className="border p-4 mb-4">
//           <legend className="text-lg font-bold">Your Message</legend>
//           <textarea
//             name="message"
//             placeholder="Your message..."
//             value={formData.message}
//             onChange={handleInputChange}
//             className="border p-2 w-full h-32"
//             required
//           />
//         </fieldset>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit Request
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
