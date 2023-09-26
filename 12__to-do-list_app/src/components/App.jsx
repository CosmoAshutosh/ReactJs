import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItems from "./TodoItems";

function App() {
     const [items, setItem] = useState([]);

     function addItems(listItems) {
          setItem(prevItem => {
               return [ ...prevItem, listItems ];
          });
     }

     function deleteItem(id) {
          setItem(prevItem => {
               return prevItem.filter((items, index) => {
                    return index !== id;
               })
          })
     }

     return (
          <div className="container">
               <div className="heading">
                    <h1>To-Do List</h1>
               </div>
               <InputArea OnAdd={addItems} />
               <div>
                    <ul>
                         {items.map((ToDoItems, index) => (
                              <TodoItems
                                   key={index}
                                   id={index}
                                   text={ToDoItems}
                                   onChecked={deleteItem}
                              />
                         ))}
                    </ul>
               </div>
          </div>
     )
}

export default App;