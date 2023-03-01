import videosData from '../../Data/video-details.json';
// import './currentVideo/currentVideo.jsx';
// import '../CurrentVideo/CurrentVideo';
import Video from '../Video/Video';
// import Video from '../CurrentVideo/CurrentVideo.jsx';
// import CurrentVideo from '../CurrentVideo/CurrentVideo.jsx';
import '../VideoList/VideoList.scss';

// const data = videosData;
console.log(videosData);

const VideoList = (props) => {

    // function handleVideoChange (newVideo) {
    //     setCurrentVideo(newVideo);
    //   }
    
    // const data = JSON.parse(videosData);
   
    // get the ID of the 
    console.log(props.videos);
    return (  
        <>
            <aside className='videos'>
                <h2 className="videos__title"> Next Videos </h2>
               
                {/* <VideoList /> */}
                {/* getting data from App props */}
                <ul className='videos__list'>
                    {props.videos.map((video) => 
                        // Map returns new data use it instead of a for each loop
                        <Video  key={video.id} 
                                id={video.id} 
                                image={video.image} 
                                title={video.title} 
                                channel={video.channel}
                                videoObj = {video}
                                handdleVideoChange = {props.handleVideoChange} />
                    )}
                </ul>
            </aside>
        </>

    );
}
 
export default VideoList;