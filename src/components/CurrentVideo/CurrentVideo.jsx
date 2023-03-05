


import axios from 'axios';
import "./CurrentVideo.scss";





const CurrentVideo = ({currentVideo}) => {
    return ( 
        <>
            <section className="selected-Video"> 
                <video className="selected-video__current-video" poster={currentVideo.image}  controls> 
                    <source src={currentVideo.video} /> 
                </video>
            </section>
        </>
     );
}
 
export default CurrentVideo;