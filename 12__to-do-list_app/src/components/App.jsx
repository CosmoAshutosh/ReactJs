import React, { useState } from "react";

function App () {

     const [listItems, setlistItems] = useState("")
     const [items, setItem] = useState([])
     
     function handleChange (event) {
          const newValue = event.target.value
          setlistItems(newValue)
     }
     
     function handleClick() {
          setItem( prevItem => {
               return [
                    ...prevItem,
                    listItems
               ];
          });
          setlistItems("");
     }

     return (
          <div className="container">
               <div className="heading">
                    <h1>To-Do List</h1>
               </div>
               <div className="form">
                    <input onChange={handleChange} name="items" type="text" value={listItems}/>
                    <button onClick={handleClick}>
                         <span>Add</span>
                    </button>
               </div>
               <div>
                    <ul>
                         {items.map( (ToDoItems) => {
                              return <li>{ToDoItems}</li>
                         })}
                    </ul>
               </div>
          </div>
     )
}

export default App;