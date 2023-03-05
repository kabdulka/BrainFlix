import { useState } from "react";
import "./Video.scss";
import "../VideoList/VideoList";


function Video({videoObj, handleVideoChange, handleCommentChange }) {



  const handleVideoClick = () => {

    handleVideoChange(videoObj);
    handleCommentChange(videoObj.comments)
  }  

  return (
    <>

      <li onClick={handleVideoClick} className="videos__item">
        <div className="videos__image-container">
            <img className="videos__image" src={videoObj.image} alt={videoObj.title} />
        </div>
        <div className="videos__content">
            <h3 className="videos__content-title">  {videoObj.title} </h3>
            <p className="videos__content-channel"> {videoObj.channel} </p>
        </div>
      </li>
    </>
  );
}

export default Video;
