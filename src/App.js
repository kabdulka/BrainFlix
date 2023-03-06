
import { useState } from "react";
import logo from './logo.svg';
import axios from "axios";
import Header from "./components/Header/Header";
import './App.scss';
import jsonData from './Data/video-details.json';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import './components/VideoList/VideoList';
import VideoList from './components/VideoList/VideoList';
import MainContent from './components/MainContent/MainContent';
import CommentsForm from './components/CommentsForm/CommentsForm.jsx';
import CommentList from './components/CommentList/CommentList.jsx';


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

  const apiKey = `789bb1ed-ef63-4f3c-a3fc-e83987bf2396`;
  let request = `videos`
  const videosUrl = `https://project-2-api.herokuapp.com/${request}/?api_key=${apiKey}`;
  const [videosList, setVideosList] = useState();

  // get the data using an axios call
  const getVideos = () => {

		axios
			.get(videosUrl)
			.then((response) => {
				// setMemeList(response.data.data.memes.slice(0,26))
        setVideosList(response.data);
        console.log("Inside axios call")
        console.log(response.data);
			}).catch ((err) => {
				console.log(`Videos API error :`, err)
			})
	}
	getVideos()

  console.log("Testing state variable ");
  console.log(videosList);

  const videosData = jsonData;

  let currentId = videosData[0].id;

  // Current video object
  let currentVid = videosData[0];
  let comments = videosData[0].comments;
  // Initialize the current video to be the first video object in the json array of objects
  const [currentVideo, setCurrentVideo] = useState(currentVid);
  const [currentComment, setCurrentComment] = useState(comments);
  // Use a callback to handle the change in currentId using setCurrentId

  function handleVideoChange (newVideo) {
    setCurrentVideo(newVideo);
  }

  function handleCommentChange (newComment) {
    setCurrentComment(newComment);
  }
  return (
    <>
      <div className="app__contant">
        <Header/>
      </div>
      <CurrentVideo id={currentId} currentVideo={currentVideo}/>
      <div className="app__contant">
        <div className="main__content">
          <div className="main__content-left">
            
            <MainContent currentVideo={currentVideo} />
            <CommentsForm  />
            <CommentList comments={currentComment}/>
          </div>
          <div className="main__content-right"v>
            <VideoList videos={videosData.filter(e => e.id !== currentVideo.id)} handleVideoChange={handleVideoChange} handleCommentChange={handleCommentChange} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
