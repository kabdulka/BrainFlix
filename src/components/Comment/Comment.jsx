import '../Comment/Comment.scss';

const Comment = ({currentComment}) => {

    function getFormatedDate (timeStamp) {
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

    return ( 
        // <p> comment </p>
        <>
            <li className="comment__item">
                <div className="comment__image-container">
                    <img className="comment__image" src="" alt=""/>
                </div>
                <div className="comment__info">
                    <div className="comment__info__row-1">
                        <p className="comment__name"> {currentComment.name} </p>
                        <p className="comment__date"> {getFormatedDate(currentComment.timestamp)} </p>
                    </div>
                    <div className="comment__info__row-2">
                        <p className="comment__value"> 
                            {currentComment.comment}
                        </p>
                    </div>

                    {/* <div className="comment__edit">
                        
                        <img className="comment__delete" src="./assets/Icons/SVG/icon-delete.svg" alt="delete comment" />
                        <img className="comment__like" src="./assets/Icons/SVG/icon-like.svg" alt="like comment">

                    </div> */}
                </div>
            </li> 
        </>

     );
}
 
export default Comment;