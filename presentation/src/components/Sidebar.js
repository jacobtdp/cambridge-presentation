import React from 'react';
import '../styles/sidebar.css';

import old_sb_1 from '../assets/old_sb_1.gif';
import old_sb_2 from '../assets/old_sb_2.gif';
import old_sb_3 from '../assets/old_sb_3.gif';
import old_sb_4 from '../assets/old_sb_4.gif';
import new_sb_1 from '../assets/new_sb_1.gif';
import new_sb_2 from '../assets/new_sb_2.gif';
import new_sb_3 from '../assets/new_sb_3.gif';

function Sidebar() {
    return(
        <div className="sidebar-container">

            <div className="sidebar-left">
                <img src={old_sb_1} />
                <img src={old_sb_2} />
                <img src={old_sb_3} />
                <img src={old_sb_4} />
            </div>
            <div className="sidebar-right">
                <img src={new_sb_1} />
                <img src={new_sb_2} />
                <img src={new_sb_3} />
            </div>

        </div>
    );
}

export default Sidebar;