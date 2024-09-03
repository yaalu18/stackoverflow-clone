import React, { useRef } from "react";
import TagsList from "./TagsList.jsx";
//import handleSlideIn from '../../App.js';
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

import "./Tags.css";
import { tagsList } from "./tagList";


//const Tags=({ slideIn, handleSlideIn })=>{
    const Tags=()=>{
  /*  return(
        <div className="home-container-1">
            <LeftSidebar/>
            <div className="home-container-2">
                <h1>Tags</h1>
                <p>A Tag is a keyword or label that categorizes your question with other similar questions</p>
                <p>Using the right tags make it easier for others to find and answer your question.</p>
                <TagsList/>

            </div>
           
        </div>
    )*/
    return (
        <div className="home-container-1">
          {/*<LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />*/}
          <div className="home-container-2">
            <h1 className="tags-h1">Tags</h1>
            <p className="tags-p">
              A tag is a keyword or label that categorizes your question with other,
              similar questions.
            </p>
            <p className="tags-p">
              Using the right tags makes it easier for others to find and answer
              your question.
            </p>
            <div className="tags-list-container">
              {tagsList.map((tag, index) => (
                <TagsList tag={tag} key={index} />
              ))}
            </div>
          </div>
        </div>
      );
}
export default Tags;