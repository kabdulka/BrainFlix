import Video from '../Video/Video';

import '../VideoList/VideoList.scss';


const VideoList = ({videos, handleVideoChange}) => {

    return (  
        <>
            <aside className='videos'>
                <h2 className="videos__title"> Next Videos </h2>
               
     
                <ul className='videos__list'>
                    {videos.map((video) => 
   
                        <Video  
                                key={video.id} 
                               
                                videoObj = {video}
                                handleVideoChange = {handleVideoChange} 
                        />
                    )}
                </ul>

            </aside>
        </>

    );
}
 
export default VideoList;