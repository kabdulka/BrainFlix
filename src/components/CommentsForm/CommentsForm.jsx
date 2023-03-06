import './CommentsForm.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

const CommentInfo = ({comments}) => {
    

    return ( 
        <>
            <section className="form">

                <div className="form__container">

                    <div className="form__wrapper">

                        <div className="comment__image-container">
                            <img className="comment__image comment__image--form" src={avatar} alt="Mohan-muruge" />
                        </div>

                        <form className="form__comment">


                            <div className="form__info-container">
                                <label className="form__comment-label form__comment-text--label" htmlFor="comment"> JOIN THE CONVERSATION </label>
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