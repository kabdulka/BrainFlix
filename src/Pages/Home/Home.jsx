
import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import VideoList from '../../components/VideoList/VideoList'
import MainContent from "../../components/MainContent/MainContent";
import CommentList from "../../components/CommentList/CommentList";
import CommentsForm from "../../components/CommentsForm/CommentsForm"


const Home = () => {

    const apiKey = `789bb1ed-ef63-4f3c-a3fc-e83987bf2396`;
    let request = `videos`
    const videosUrl = `https://project-2-api.herokuapp.com/${request}/?api_key=${apiKey}`;

    // const videosData = jsonData;
    // let comments = videosData[0].comments;


    const [videosList, setVideosList] = useState([]);


    // Initialize the current video to be the first video object in the json array of objects
    const [currentVideo, setCurrentVideo] = useState({});
   
    const {videoId} = useParams()


    console.log(videoId)

    function getVideos () {

        axios
            .get(videosUrl)
            .then((response) => {
  
                setVideosList(response.data);
            }).then(response => {

        })
        .catch ((err) => {
            console.log(`Videos API error :`, err)
        })


	}// end getVideos function

  // on page mount [] empty dependency runs once. good for API calls
  // fires the side effect of useEffect after every render when there is no second argument
  useEffect(() => {
   // console.log("inside Use effect")
    getVideos();
  }, [])

  // getVideos();

  // let currentVid = videosList[0];
  // console.log(currentVid);


  function getCurrentVideo(id) {
    axios
    .get(`https://project-2-api.herokuapp.com/${request}/${id}/?api_key=${apiKey}`)
    .then( (response) => {
      setCurrentVideo(response.data)
    }).catch ( (err) => {
      console.log(`Videos API error :` , err);
    })
  }

    // on page mount []
  // fires the useEffect once
 


  // empy square brackets [] means on page mount
  useEffect(() => {
    if (videoId) {
        getCurrentVideo(videoId);
    } else {
        getCurrentVideo('84e96018-4022-434e-80bf-000ce4cd12b8')
    }
    // videoId is a dependency which means that the use effect will run the code when the videoId variable has changed

  }, [videoId, videosList])
	
  function handleVideoChange (newVideo) {
    setCurrentVideo(newVideo);
  }

    return ( 
        // currentVideo && videosList ? 
        <>
          <CurrentVideo  currentVideo={currentVideo}/>
          <div className="app__contant">
            <div className="main__content">
              <div className="main__content-left">
                
                <MainContent currentVideo={currentVideo} />
                <CommentsForm  />
                <CommentList currentVideo={currentVideo}/>
              </div>
              <div className="main__content-right">
                <VideoList videos={videosList.filter(e => e.id !== currentVideo.id)} handleVideoChange={handleVideoChange} />
              </div>
            </div>
          </div>
        </> 
        // : null

     );
}
 
export default Home;