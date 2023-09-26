import React, { useState } from "react";

function InputArea(props) {

     const [listItems, setlistItems] = useState("");

     function handleChange(event) {
          const newValue = event.target.value;
          setlistItems(newValue);
     }

     return (
          <div className="form">
               <input onChange={handleChange} name="items" type="text" value={listItems} />

               <button onClick={() => {
                    props.OnAdd(listItems);
                    setlistItems("");
               }}>
                    <span>Add</span>
               </button>
          </div>
     );
}

export default InputArea;