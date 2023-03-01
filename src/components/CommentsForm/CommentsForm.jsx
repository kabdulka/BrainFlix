import './CommentsForm.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

const CommentInfo = ({comments}) => {
    
    console.log("Inside comments section ");
    console.log(comments);
    return ( 
        <>
            <section className="form">

                <h1 className="form__title"> Join the Conversation  </h1>

                <div className="form__container">

                    <div className="form__wrapper">

                        <div className="comment__image-container">
                            <img className="comment__image comment__image--form" src={avatar} alt="Mohan-muruge" />
                        </div>

                        <form className="form__comment">

                            <div className="form__info-container">
                                <label className="form__comment-label  form__comment__name--label" htmlFor="name"> NAME </label>
                                <input className="form__comment-name  form__comment__name--value" type="text" id="name" name="name" placeholder="Enter your name" />
                            </div>

                            <div className="form__info-container">
                                <label className="form__comment-label form__comment-text--label" htmlFor="comment"> COMMENT </label>
                                <textarea className="form__comment-text form__comment-text--value" id="comment" name="comment" placeholder="Add a new comment" ></textarea>
                            </div>

                            <div className="form__comment__btn-container">
                                <button type="submit" className="form__comment-btn"> COMMENT </button>
                            </div>


                        </form>

                    </div>
                </div>

            </section>
        </>
     );
}
 
export default CommentInfo;