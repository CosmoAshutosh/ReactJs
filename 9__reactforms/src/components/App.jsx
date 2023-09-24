import React, { useState } from "react";

function App() {

     const [name, setName] = useState("");
     const [headingText, setHeading] = useState("");

     function handleChange(event) {
          setName(event.target.value);
     }

     function handleClick(event) {
          setHeading(name);
          event.preventDefault();
     }

     return (
          <div className="container">
               <form onSubmit={handleClick}>
                    <h1>Hello {headingText}</h1>
                    <input
                         onChange={handleChange}
                         type="text"
                         placeholder="Write your name"
                         value={name}
                    />
                    <button>Submit</button>
               </form>
          </div>
     );
}

export default App;