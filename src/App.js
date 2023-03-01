
import logo from './logo.svg';
import Header from "./components/Header/Header";
import './App.scss';
import jsonData from './Data/video-details.json';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import './components/VideoList/VideoList';
import VideoList from './components/VideoList/VideoList';
import { useState } from "react";
import MainContent from './components/MainContent/MainContent';

function App() {
// const [currentVideo, setCurrentVideo] = useState()

// first Id
 console.log("Printing current initial Id");
  // console.log(jsonData);
  // const currentId = VideoList
  // const [currentVideo, setCurrentVideo] = useState(id);

  const obj = {firstName: "kenan"};

  const videosData = jsonData;
  console.log(videosData[0]);

  // comments change
  // likes, views, title, date, channel and description
  
  let currentId = videosData[0].id;

  // Current video object
  let currentVid = videosData[0];
  let comments = videosData[0].comments;
  // Initialize the current video to be the first video object in the json array of objects
  const [currentVideo, setCurrentVideo] = useState(currentVid);
  const [currentComment, setCurrentComment] = useState([comments]);
  // Use a callback to handle the change in currentId using setCurrentId

  function handleVideoChange (newVideo) {
    setCurrentVideo(newVideo);
  }

  

// function handleChange(newValue) {
//   setValue(newValue);
// }

// We pass a callback to Child
// return <Child value={value} onChange={handleChange} />;






  return (
    <>
    <Header name={obj}/>
    <CurrentVideo id={currentId} />
    <MainContent currentVideo={currentVideo} />
    <VideoList videos={videosData} handleVideoChange={handleVideoChange} />
    
    </>
  );
}

export default App;
