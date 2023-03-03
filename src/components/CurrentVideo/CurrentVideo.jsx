


import axios from 'axios';
import "./CurrentVideo.scss";


// import "../CurrentVideo"



// <source src = "/html/compileonline.mp4" type = "video/mp4">
const CurrentVideo = ({currentVideo}) => {
    return ( 
        <>
            <section className="selected-Video"> 
                <video className="selected-video__current-video" poster={currentVideo.image}  controls> 
                    <source src={currentVideo.video} /> 
                </video>
                {/* <p> The current Video is:  {currentVideo.id} </p> */}
            </section>
        </>
     );
}
 
export default CurrentVideo;