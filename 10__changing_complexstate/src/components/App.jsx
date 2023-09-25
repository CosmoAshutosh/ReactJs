import React, { useState } from "react";

// function App() {
//      const [fullName, setFullName] = useState({
//           fName: "",
//           lName: ""
//      });

//      function handleChange(event) {
//           const { value, name } = event.target;

//           setFullName(prevValue => {
//                if (name === "fName") {
//                     return {
//                          fName: value,
//                          lName: prevValue.lName
//                     };
//                } else if (name === "lName") {
//                     return {
//                          fName: prevValue.fName,
//                          lName: value
//                     };
//                }
//           });
//      }

//      return (
//           <div className="container">
//                <h1>
//                     Hello {fullName.fName} {fullName.lName}
//                </h1>
//                <form>
//                     <input
//                          name="fName"
//                          onChange={handleChange}
//                          placeholder="First Name"
//                          value={fullName.fName}
//                     />
//                     <input
//                          name="lName"
//                          onChange={handleChange}
//                          placeholder="Last Name"
//                          value={fullName.lName}
//                     />
//                     <button>Submit</button>
//                </form>
//           </div>
//      );
// }

// Challenge practice given in my online course while studing

function App () {
     const [contact, setContact] = useState({
          fName: "",
          lName: "",
          email: ""
     })

     function handleChange (event){
          const {value, name} = event.target;

          setContact(previous => {
               if(name === "fName"){
                    return {
                         fName: value,
                         lName: previous.lName,
                         email: previous.email
                    };
               }
               else if(name === "lName"){
                    return {
                         fName: previous.fName,
                         lName: value,
                         email: previous.email
                    };
               }
               else if(name === "email"){
                    return {
                         fName: previous.fName,
                         lName: previous.lName,
                         email: value
                    };
               }
          })
     }

     return (
          <div className="container">
               <h1>Hello {contact.fName} {contact.lName}</h1>
               <p>{contact.email}</p>
               <form>
                    <input 
                         onChange={handleChange}
                         type="text"
                         name="fName"
                         placeholder="First name"
                         value={contact.fName}
                    />

                    <input
                         onChange={handleChange}
                         type="text"
                         name="lName"
                         placeholder="Last name"
                         value={contact.lName}
                    />

                    <input
                         onChange={handleChange}
                         type="text"
                         name="email"
                         placeholder="Email"
                         value={contact.email}
                    />

                    <button>Submit</button>
               </form>
          </div>
     );
}

export default App;
