import "./Video.scss";
import "../VideoList/VideoList";
import { useState } from "react";

// const Video = (props) => {
function Video({ image, title, channel, id }) {
  // const [currentVid, setCurrentVid] = useState[0];

  const handleVideoClick = () => {
    console.log("Id of video clicked");
    console.log(id);
  }  

  return (
    <>
    <p> {id} </p>
      {/* add an onclick on the li element */}
      <li onClick={handleVideoClick} className="videos__item">
        <div className="videos__image-container">
            <img className="videos__image" src={image} />
        </div>
        <div className="videos__content">
            <h3 className="videos__content-title">  {title} </h3>
            <p className="videos__content-channel"> {channel} </p>
        </div>
      </li>
    </>
  );
}

export default Video;
