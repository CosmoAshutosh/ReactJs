import React from "react";
import cars from "../practice";

const [honda, tesla] = cars;

const {coloursByPopularity: [hondaTopColour], speedStats: {topSpeed:hondaTopSpeed}} = honda
const {coloursByPopularity: [teslaTopColour], speedStats: {topSpeed:teslaTopSpeed}} = tesla

function App() {
     return (
          <table>
               <tr>
                    <th>Brand</th>
                    <th>Top Speed</th>
               </tr>
               <tr>
                    <td>{tesla.model}</td>
                    <td>{teslaTopSpeed}</td>
                    <td>{teslaTopColour}</td>
               </tr>
               <tr>
                    <td>{honda.model}</td>
                    <td>{hondaTopSpeed}</td>
                    <td>{hondaTopColour}</td>
               </tr>
          </table>
     );
}

export default App;