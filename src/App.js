
import { useState } from "react";
import logo from './logo.svg';
import Header from "./components/Header/Header";
import './App.scss';
import jsonData from './Data/video-details.json';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import './components/VideoList/VideoList';
import VideoList from './components/VideoList/VideoList';

import MainContent from './components/MainContent/MainContent';
import CommentsForm from './components/CommentsForm/CommentsForm.jsx';
import CommentList from './components/CommentList/CommentList.jsx';

function App() {

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
