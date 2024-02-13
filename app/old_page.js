// 'use client'

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import Input from "./components/Input";
// import TextArea from "./components/TextArea";

// export default function Home() {
//   const [userEmail, setUserEmail] = useState("");
//   const [partnerName, setPartnerName] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [failureMessage, setFailureMessage] = useState("")
//   const handleUserInfo = async () => {
//     try {
//       const response = await fetch('/api/user/new', {
//         method: 'POST',
//         body: JSON.stringify({
//           email: userEmail,
//           partnerName: partnerName,
//           successMessage: successMessage,
//           failureMessage: failureMessage
//         })
//       })
//       if (response.ok) {
//         router.push('/')
//         alert("success")
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <main className={`flex flex-col h-full w-full items-center justify-center bg-pink-200`}>
//       <h2 className="text-8xl bold text-red-400">Be my Val &#129505;</h2>
//       <div className="w-full md:w-2/3 text-center flex justify-between flex-wrap gap-2 py-3">
//         {/* <Input
//           id="name"
//           type="name"
//           placeholder="Your Name"
//           value=""
//         /> */}
//         <Input
//           id="email"
//           type="email"
//           placeholder="Your Email"
//           value={userEmail}
//           onChange={(e) => setUserEmail(e.target.value)}
//         />
//         <Input
//           id="partner-name"
//           type="name"
//           placeholder="Your Partner Name/Nickname/Pet Name"
//           value={partnerName}
//           onChange={(e) => setPartnerName(e.target.value)}
//         />

//         <TextArea
//           id="success-msg"
//           placeholder="Message to display to your partner when they answer 'Yes'"
//           value={successMessage}
//           onChange={(e) => setSuccessMessage(e.target.value)}
//         />
//         <TextArea
//           id="failure-msg"
//           placeholder="Message to display to your partner when they answer 'No'"
//           value={failureMessage}
//           onChange={(e) => setFailureMessage(e.target.value)}
//         />
//         <button 
//           className="rounded-lg bg-red-400 text-white w-full lg:w-1/3 p-4 cursor hover:bg-red-500"
//           onClick={handleUserInfo}
//           >Submit</button>
//       </div>
//     </main>
//   );
// }
