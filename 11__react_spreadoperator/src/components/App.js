import React, { useState } from "react";

// Same code using Spread Operator

function App() {
     const [contact, setContact] = useState({
          fName: "",
          lName: "",
          email: ""
     })

     function handleChange(event) {
          const { value, name } = event.target;

          // setContact(previous => {
          //      if(name === "fName"){
          //           return {
          //                fName: value,
          //                lName: previous.lName,
          //                email: previous.email
          //           };
          //      }
          //      else if(name === "lName"){
          //           return {
          //                fName: previous.fName,
          //                lName: value,
          //                email: previous.email
          //           };
          //      }
          //      else if(name === "email"){
          //           return {
          //                fName: previous.fName,
          //                lName: previous.lName,
          //                email: value
          //           };
          //      }
          // })

          setContact(prevValue => {
               return {
                    ...prevValue,
                    [name]: value
               };
          });
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
