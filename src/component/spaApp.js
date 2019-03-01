import React from 'react';
import Menu from './menu_component/menu';
import Content from './content_component/content';

class SPAApp extends React.Component {
    
    render() { 
        return ( 
            <div>
                SPA App will come here!!!!
                <Menu></Menu>
                <Content></Content>
            </div>

         );
    }
}

export default SPAApp;
  
