import "./Video.scss";
import "../VideoList/VideoList";
import { Link} from "react-router-dom";


function Video({videoObj }) {




  return (
    <>
      <li className="videos__item">
        <Link className="videos__link" to={`/${videoObj.id}`}>
          <div className="videos__image-container">
              <img className="videos__image" src={videoObj.image} alt={videoObj.title} />
          </div>
          <div className="videos__content">
              <h3 className="videos__content-title">  {videoObj.title} </h3>
              <p className="videos__content-channel"> {videoObj.channel} </p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Video;
