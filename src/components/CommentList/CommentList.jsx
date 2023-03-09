// import jsonData from '../../Data/video-details.json';
import Comment from '../Comment/Comment';
import '../CommentList/CommentList.scss';

const CommentList = ({currentVideo}) => {

    const comments = currentVideo.comments;
    const videoId = currentVideo.id;
    // console.log(`The id of the current video is ${videoId}`);
    // console.log(`the Id of the comment is: ${comments[0].id}`)


    return ( 
        <>
     
        <section className='comments'>

            <ul className='comments__list'>

                {comments?.map((comment) => 
 
                    // Map returns new data use it instead of a for each loop
                    <Comment  
                           key={comment.id} currentComment={comment}/>
                
                           )}
            </ul>

        </section>

        </>
    );
}
 
export default CommentList;