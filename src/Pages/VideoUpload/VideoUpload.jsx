
import '../VideoUpload/VideoUpload.scss';
import uploadThumbnail from '../../assets/Images/Upload-video-preview.jpg'
import { Link, NavLink } from 'react-router-dom';


const VideoUpload = () => {

    document.title = 'Upload';

    const handlePublishClick = () => {
        console.log("cliock")
        alert("You've successfully published your video")
    }

    return (
        <>
            <section className="form__section">
                <h1 className="form__section-title"> Upload Video </h1>
                <form className="form__section-form">

                    <div className="form__section-thumbnail-container">
                        <h3 className="form__section-title-secondary"> VIDEO THUMBNAIL </h3>
                        <img className="form__section-thumbnail" src={uploadThumbnail} />
                    </div>
                
                    <div className="form__section-input">
                        <div className="form__section-title-text">
                            <label className="form__section-title-label" htmlFor="formTitle"> TITLE YOUR VIDEO </label>
                            <input className="form__section-title-input" name="formTitle" placeholder="Add a title to your video"/>
                        </div>

                        <div className="form__section-description">
                            <label className="form__section-description-label" htmlFor="formDescription"> ADD A VIDEO DESCRIPTION </label>
                            <textarea className="form__section-description-input" name="formDescription" placeholder="Add a description of your video"/>
                        </div>
                    </div>

                </form>

                <div className="form__section-update">

                    <NavLink onClick={handlePublishClick} className="form__section-publish" to="/">
                        PUBLISH
                    </NavLink>

                    <Link to="/" className="form__section-cancel"> 
                        CANCEL
                    </Link>

                </div>

            </section>


        </>
    );
}

export default VideoUpload;