
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import VideoList from '../../components/VideoList/VideoList'
import MainContent from "../../components/MainContent/MainContent";
import CommentList from "../../components/CommentList/CommentList";
import CommentsForm from "../../components/CommentsForm/CommentsForm"

// use environment variables stored in .env, needs to be prefixed with REACT_APP_ in React apps
const API_URL = process.env.REACT_APP_API_URL;

//Way to check which environment you are in
// console.log(process.env.NODE_ENV);

const Home = () => {

    const apiKey = `789bb1ed-ef63-4f3c-a3fc-e83987bf2396`;
    let request = `videos`
    // const videosUrl = `https://project-2-api.herokuapp.com/${request}/?api_key=${apiKey}`;
    const videosUrl = `${API_URL}/${request}`

    const [videosList, setVideosList] = useState([]);

    // Initialize the current video to be the first video object in the json array of objects
    const [currentVideo, setCurrentVideo] = useState(null);
   
    const {videoId} = useParams()

    function getRandomVid (vidListLen) {
        return Math.floor((Math.random() * vidListLen));
    }

    function getVideos () {

        axios
            .get(videosUrl)
            .then((response) => {
              // check if it exists
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
        getVideos();
        document.title = 'Home';
    }, [])

    function getCurrentVideo(id) {
        axios
        // .get(`https://project-2-api.herokuapp.com/${request}/${id}/?api_key=${apiKey}`)
        .get(`${API_URL}/${request}/${id}`)
        .then( (response) => {
        setCurrentVideo(response.data)
        document.title = `${response.data.title}}`;
        }).catch ( (err) => {
        console.log(`Videos API error :` , err);
        })
    }
 

  // empy square brackets [] means on page mount (page renders)
  useEffect(() => {

    if (videoId) {
        getCurrentVideo(videoId);
    } else if(videosList.length){
        let ranNum = getRandomVid(videosList.length)

        let testLen = videosList.length-1 // temp var
        let curVid = videosList[ranNum].id;
        getCurrentVideo(curVid)

    }
    // videoId is a dependency which means that the use effect will run the code when the videoId variable has changed
    window.scrollTo(0, 0)
  }, [videoId, videosList])


  const postComment = (newComment) => {
    // const postCommentUrl = `https://project-2-api.herokuapp.com/${request}/${currentVideo.id}/comments?api_key=${apiKey}`;
    const postCommentUrl = `${API_URL}/${request}/${currentVideo.id}/comments`
    axios
        .post(postCommentUrl, newComment )
        .then( (response) => {
            getCurrentVideo(currentVideo.id);
        })
        .catch((err) => {
            console.log("Comment post error", err);
        });

  }

  const deleteComment = (commentId) => {
    
    // const deleteComment = `https://project-2-api.herokuapp.com/${request}/${currentVideo.id}/comments/${commentId}?api_key=${apiKey}`
    const deleteCommentUrl = `${API_URL}/${request}/${currentVideo.id}/comments/${commentId}`;
    axios
        .delete(deleteCommentUrl)
        .then((response ) => {
            getCurrentVideo(currentVideo.id)
        })
        .catch( (err) => {
            console.log("delete post error", err);
        });
  }


  const likeVideo = (videoId) => {
   
    const url = `http://localhost:9000/videos/${currentVideo.id}/likes`;
    alert("Video Liked")
    axios
    .put(url)
    .then(response => {
        getCurrentVideo(currentVideo.id)
    })
    .catch( (err) => {
        console.log("Could not like video", err);

    })
}
	
  function handleVideoChange (newVideo) {
    setCurrentVideo(newVideo);
  }

    return ( 
        currentVideo && videosList ? 
        <>
          <CurrentVideo getCurrentVideo={getCurrentVideo}  currentVideo={currentVideo}/>
          <div className="app__contant">
            <div className="main__content">
              <div className="main__content-left">
                
                <MainContent currentVideo={currentVideo} likeVideo={likeVideo}/>
                <CommentsForm currentVideo={currentVideo} postComment={postComment} />
                <CommentList deleteComment={deleteComment} currentVideo={currentVideo}/>
              </div>
              <div className="main__content-right">
                <VideoList videos={videosList.filter(e => e.id !== currentVideo.id)} handleVideoChange={handleVideoChange} />
              </div>
            </div>
          </div>
        </> 
        : null

     );
}
 
export default Home;


