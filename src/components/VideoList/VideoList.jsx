import videosData from '../../Data/video-details.json';
import { useState, useEffect } from "react";
import axios from "axios";
import Video from '../Video/Video';

import '../VideoList/VideoList.scss';
import { Link } from 'react-router-dom';


const VideoList = ({videos, handleVideoChange}) => {

    return (  
        <>
            <aside className='videos'>
                <h2 className="videos__title"> Next Videos </h2>
               
     
                <ul className='videos__list'>
                    {videos.map((video) => 
   
                        <Video  
                                key={video.id} 
                                id={video.id} 
                                image={video.image} 
                                title={video.title} 
                                channel={video.channel}
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