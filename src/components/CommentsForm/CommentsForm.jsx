import './CommentsForm.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import { useState, useEffect} from 'react';

const CommentsForm = ({postComment, currentVideo}) => {
    
    const [newComment, setNewComment] = useState("")
    const [textFieldError, setTextFieldError] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();
        if (newComment.length < 2) {
            setTextFieldError("--error");
        } else {
            setTextFieldError("");
            const newCommentObj = {
                comment: newComment
            };

            postComment(newCommentObj)
            setNewComment("");
        }

    };

    useEffect(() => {
        setTextFieldError("");
    }, [currentVideo])


    const handleCommentChange = (event) => {

        setNewComment(event.target.value);
        
    };


    return ( 
        <>
            <section className="form">

                <div className="form__container">

                    <div className="form__wrapper">

                        <div className="comment__image-container">
                            <img className="comment__image comment__image--form" src={avatar} alt="Mohan-muruge" />
                        </div>

                        <form className="form__comment" onSubmit={handleSubmit}>


                            <div className="form__info-container">
                                <label className="form__comment-label form__comment-text--label" htmlFor="comment"> JOIN THE CONVERSATION </label>
                                <textarea  value={newComment} onChange={handleCommentChange} className={`form__comment-text form__comment-text${textFieldError}`} id="comment" name="comment" placeholder="Add a new comment" ></textarea>
                            </div>

                            <div className="form__comment__btn-container">
                                <button  type="submit" className="form__comment-btn"> COMMENT </button>
                            </div>


                        </form>

                    </div>
                </div>

            </section>
        </>
     );
}
 
export default CommentsForm;