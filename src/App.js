
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import './App.scss';
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import { useState } from "react";
import { useEffect } from "react";

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
  // const API_URL = process.env.REACT_APP_API_URL;
  // console.log(API_URL)
  // const [videosList, setVideosList] = useState([]);
  // const videosUrl = `${API_URL}/videos`;

  // --------------------------------
//   function getVideos () {

//     axios
//         .get(videosUrl)
//         .then((response) => {

//             setVideosList(response.data);

//         }).then(response => {

//     })
//     .catch ((err) => {
//         console.log(`Videos API error :`, err)
//     })


// }// end getVideos function
// --------------------------------

// useEffect(() => {
//   getVideos();
//   document.title = 'Home';
// }, [])


  // const postVideo = (newVideo) => {
  //   const postVideoUrl = `http://localhost:9000/videos/`;
  //   axios
  //   .post(postVideoUrl, newVideo)
  //   .then( (response) => {
  //     console.log("here")
  //     console.log(response)
  //     getVideos()
  //   })
  //   .catch(err => {
  //     console.log("could not post a new video ", err);
  //   })
  // }

  return (
    <>  
          <BrowserRouter>

            <div className="app__contant">
              <Header/>
            </div>
            <Routes>
              <Route path="/" element={<Home />}  /> 
              <Route path="/videos" element={<Home />}  />    
              <Route path="/:videoId" element={<Home />}  /> 
              <Route path="/upload" element={< VideoUpload />} />
            </Routes>
          
          </BrowserRouter>

    </>
    
  );
}

export default App;
