import React from 'react';
import {Link} from 'react-router-dom';


const Procedures = (props) => {
   
        const procedures = props.procedures.map((procedure, index) => {
            return <li key={index}><Link to={`/procedures/${procedure.id}`}>{procedure.name}</Link></li>
        })
        return (
          <div className="App">
           <h1>Things we do that hurt:</h1>
           <ul>
               {procedures}
           </ul>
          </div>
        );
      }


export default Procedures;