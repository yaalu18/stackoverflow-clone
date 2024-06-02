import React from "react";
//import  './RigtSidebar.css';
import Widget from './Widget.jsx';
import  WidgetTags from './WidgetTags.jsx';
const RightSidebar=()=>{
    return(
        <aside className='right-sidebar'>
           <Widget/>
           <WidgetTags/>
        </aside>
    )
}
export default RightSidebar;