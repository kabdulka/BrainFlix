import '../Comment/Comment.scss';
import { getFormattedDate } from '../../App';


const Comment = ({currentComment}) => {

    return ( 
        <>
            <li className="comment__item">
                <div className="comment__image-container comment__image-container__form">
                    {/* <img className="comment__image" src="" alt=""  /> */}
                </div>
                <div className="comment__info">
                    <div className="comment__info__row-1">
                        <p className="comment__name"> {currentComment.name} </p>
                        <p className="comment__date"> {getFormattedDate(currentComment.timestamp)} </p>
                    </div>
                    <div className="comment__info__row-2">
                        <p className="comment__value"> 
                            {currentComment.comment}
                        </p>
                    </div>

     
                </div>
            </li> 
        </>

     );
}
 
export default Comment;
