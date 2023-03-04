import jsonData from '../../Data/video-details.json';
import Comment from '../Comment/Comment';
import '../CommentList/CommentList.scss';

const CommentList = ({comments}) => {

    // console.log("inside comments");
    // console.log(comments[0][0])
    return ( 
        <>
     
        <section className='comments'>
                {/* <h2 className="videos__title"> Next Videos </h2> */}
               
                {/* <VideoList /> */}
                {/* getting data from App props */}
            <ul className='comments__list'>

                {comments.map((comment) => 
                    // console.log("here")
                    // console.log(comment.name);
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