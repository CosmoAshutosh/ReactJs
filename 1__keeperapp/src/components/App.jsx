import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
     return (
          <div>
               <Header />
               {notes.map(notecontent => (
                    <Note 
                         key={notecontent.key}
                         title={notecontent.title}
                         content={notecontent.content}
                    />
               ))}
               <Footer />
          </div>
     );
}

export default App;
