
import logo from './logo.svg';
import Header from "./components/Header/Header";
import './App.scss';
import jsonData from './Data/video-details.json';
import './components/VideoList/VideoList';
import VideoList from './components/VideoList/VideoList';
import { useState } from "react";

function App() {
// const [currentVideo, setCurrentVideo] = useState()

// first Id
 console.log("hereerer")
  // console.log(jsonData);
  // const currentId = VideoList
  // const [currentVideo, setCurrentVideo] = useState(id);

  const obj = {firstName: "kenan"};

  const videosData = jsonData;


  //    const [name, setName] = useState('Mario');
  // console.log(data);

  return (
    <>
    <Header name={obj}/>
    <VideoList videos={videosData}/>
    </>
  );
}

export default App;
