import React from 'react';
import { Link  } from "react-router-dom";

class Menu extends React.Component {
    state = {  }
    render() { 
        return ( 
            <ul  className="header">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/todo">To DO</Link></li>
            </ul>
         );
    }
}
 
export default Menu;