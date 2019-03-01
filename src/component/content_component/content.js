import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './home';
import About from './about';
import Contact from './contact';
import ToDoManager from './todo';


class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="content">  
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/todo" component={ToDoManager}></Route>
            </Switch>
            </div>

         );
    }
}
 
export default Content;