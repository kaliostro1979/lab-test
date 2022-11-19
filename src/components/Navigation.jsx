import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={'Navbar'}>
          <ul>
              <li><Link to={'/tabs'}>Tabs</Link></li>
              <li><Link to={'/tabs-2'}>Tabs 2</Link></li>
              <li><Link to={'/slider'}>Slider</Link></li>
              <li><Link to={'/posts'}>Posts</Link></li>
          </ul>
        </nav>
    );
};

export default Navigation;
