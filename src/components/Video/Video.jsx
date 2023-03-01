import "./Video.scss";
import "../VideoList/VideoList";
import { useState } from "react";

// const Video = (props) => {
function Video({ image, title, channel, id, videoObj, handleVideoChange, handleCommentChange }) {
  // const [currentVid, setCurrentVid] = useState[0];



  const handleVideoClick = () => {
    console.log("Id of video clicked");
    console.log(id);
    handleVideoChange(videoObj);
    handleCommentChange(videoObj.comments)
  }  


//   function Child(props) {
//     function handleChange(event) {
//         // Here, we invoke the callback with the new value
//         props.onChange(event.target.value);
//     }
  
//     return <input value={props.value} onChange={handleChange} />
// }
  

  return (
    <>
    {/* <p> {videoObj.title} </p> */}
      {/* add an onclick on the li element */}
      <li onClick={handleVideoClick} className="videos__item">
        <div className="videos__image-container">
            <img className="videos__image" src={videoObj.image} />
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
