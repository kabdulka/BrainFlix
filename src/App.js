
// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import logo from './logo.svg';
// import axios from "axios";
// import Header from "./components/Header/Header";

// import jsonData from './Data/video-details.json';
// import CurrentVideo from './components/CurrentVideo/CurrentVideo';
// import './components/VideoList/VideoList';
// import VideoList from './components/VideoList/VideoList';
// import MainContent from './components/MainContent/MainContent';
// import CommentsForm from './components/CommentsForm/CommentsForm.jsx';
// import CommentList from './components/CommentList/CommentList.jsx';

import './App.scss';
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";


export function getFormattedDate (timeStamp) {

  const postedDate = new Date(timeStamp);
  postedDate.toLocaleDateString('en-US');
   
  let day = postedDate.getDate() + "";
  let month = postedDate.getMonth() + "";
  let year = postedDate.getFullYear() + "";
  let hoursInSeconds = postedDate.getHours()*3600;
  let minutesInSeconds = postedDate.getMinutes()*60;
  let seconds = postedDate.getSeconds();
  let totalTimeInSec = hoursInSeconds + minutesInSeconds + seconds;

  if (postedDate.getMonth()/10 < 1 ) {
      month++;
      month = "0" + month;
  }
  if (postedDate.getDate()/10 < 1 ) {
      day = "0" + day;
  }
  return `${month}/${day}/${year}`;
} // end getFormatedDate function

function App() {

  // const apiKey = `789bb1ed-ef63-4f3c-a3fc-e83987bf2396`;
  // let request = `videos`
  // const videosUrl = `https://project-2-api.herokuapp.com/${request}/?api_key=${apiKey}`;

  // const videosData = jsonData;
  // let comments = videosData[0].comments;
  // let currentVid = videosData[0];
  // console.log("comments are: ")
  // console.log(comments)
  // console.log("testing for jsonData")
  // console.log(jsonData);

  // const [videosList, setVideosList] = useState([])

  // Current video object

  // Initialize the current video to be the first video object in the json array of objects
  // const [currentVideo, setCurrentVideo] = useState(currentVid);
  // const [currentComment, setCurrentComment] = useState(comments);
  // Use a callback to handle the change in currentId using setCurrentId
  // const {pageId} = useParams()
  // Code for sprint 2
  // get the data using an axios call
  // const getVideos = () => {
    // function getVideos () {

    // // React.useEffect (() => {
    //   axios
		// 	.get(videosUrl)
		// 	.then((response) => {
    //     console.log("Inside axios call")
    //     console.log(response.data);
    //     setVideosList(response.data);
		// 	}).then(response => {
    //     // console.log(response.data)
    //     // setVideosList(response.data);
    //   })
    //   .catch ((err) => {
		// 		console.log(`Videos API error :`, err)
    //   })
    // }, ([]))

	// }// end getVideos function

  // on page mount []
  // fires the useEffect once
  // useEffect(() => {
  //   console.log("inside Use effect")
  //   getVideos();
  // }, [])

  // getVideos();

  // let currentVid = videosList[0];
  // console.log(currentVid);


  // function getCurrentVideo(id) {
  //   axios
  //   .get(`https://project-2-api.herokuapp.com/${request}/${id}/?api_key=${apiKey}`)
  //   .then( (response) => {
  //     setCurrentVideo(response.data)
  //   }).catch ( (err) => {
  //     console.log(`Videos API error :` , err);
  //   })
  // }

  //   // on page mount []
  // // fires the useEffect once
  // useEffect(() => {
  //   if(pageId) {
  //     getCurrentVideo(pageId);
  //   } else {
  //     getCurrentVideo('84e96018-4022-434e-80bf-000ce4cd12b8');
  //   }
    
  // }, [pageId]) 
	
  // console.log("Testing state variable ");
  // console.log(videosList);



  // function handleVideoChange (newVideo) {
  //   setCurrentVideo(newVideo);
  // }

  // function handleCommentChange (newComment) {
  //   setCurrentComment(newComment);
  // }

  return (
    // currentVideo ?
    <>
 
        {/* <div className="app__contant">
          <Header/>
        </div>
          <CurrentVideo  currentVideo={currentVideo}/>
          <div className="app__contant">
            <div className="main__content">
              <div className="main__content-left">
                
                <MainContent currentVideo={currentVideo} />
                <CommentsForm  />
                <CommentList comments={currentComment}/>
              </div>
              <div className="main__content-right">
                <VideoList videos={videosData.filter(e => e.id !== currentVideo.id)} handleVideoChange={handleVideoChange} handleCommentChange={handleCommentChange} />
              </div>
            </div>
          </div> */}
        
          <BrowserRouter>
          
            <div className="app__contant">
              <Header/>
            </div>
            <Routes>
              <Route path="/" element={<Home />}  />    
              <Route path="/videos/:videoId" element={<Home />}  /> 
            </Routes>
          
          </BrowserRouter>
          

 

    </>
    // : ""
    
  );
}

export default App;
