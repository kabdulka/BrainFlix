import videosData from '../../Data/video-details.json';

import Video from '../Video/Video';

import '../VideoList/VideoList.scss';


const VideoList = ({videos, handleVideoChange, handleCommentChange}) => {

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