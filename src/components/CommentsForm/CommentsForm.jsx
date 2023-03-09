import './CommentsForm.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import { useState } from 'react';
// import axios from 'axios';

const CommentsForm = ({postComment}) => {
    
    // const newComment = {};
    const [newComment, setNewComment] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
         // newComment.comment = event.target.value;
         console.log("submit")
         console.log(newComment);
        handleCommentChange(event)
       
        // console.log(comment)

    };

    const handleCommentChange = (event) => {
        event.preventDefault();
        const newComment = {
            name: "Anonymous",
            comment: event.target.value
        };
        // newComment.name = "Anonymous";
        // newComment.comment = event.target.value;
        console.log(newComment.comment)
        setNewComment(newComment);
        console.log(newComment);
        postComment(newComment)
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
                                <textarea  value={newComment} className="form__comment-text form__comment-text--value" id="comment" name="comment" placeholder="Add a new comment" ></textarea>
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