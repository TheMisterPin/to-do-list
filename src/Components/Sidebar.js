import React from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div className="Sidebar"> 
      <ul className='Sidebar-list'>
        {SidebarData.map((val, key) => {
          return (
            <li className='Sidebar-link' key={key}>
              <i>{val.icon}</i>
              <span>{val.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
