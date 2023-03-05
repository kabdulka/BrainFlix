import videosData from '../../Data/video-details.json';
// import './currentVideo/currentVideo.jsx';
// import '../CurrentVideo/CurrentVideo';
import Video from '../Video/Video';
// import Video from '../CurrentVideo/CurrentVideo.jsx';
// import CurrentVideo from '../CurrentVideo/CurrentVideo.jsx';
import '../VideoList/VideoList.scss';

// const data = videosData;
console.log(videosData);

const VideoList = ({videos, handleVideoChange, handleCommentChange}) => {


    console.log(videos);
    return (  
        <>
            <aside className='videos'>
                <h2 className="videos__title"> Next Videos </h2>
               
     
                <ul className='videos__list'>
                    {videos.map((video) => 
                        // Map returns new data use it instead of a for each loop
                        // note the arrow
                        <Video  key={video.id} 
                                id={video.id} 
                                image={video.image} 
                                title={video.title} 
                                channel={video.channel}
                                videoObj = {video}
                                handleVideoChange = {handleVideoChange} 
                                handleCommentChange = {handleCommentChange}/>
                    )}
                </ul>
            </aside>
        </>

    );
}
 
export default VideoList;