import jsonData from '../../Data/video-details.json';
import Comment from '../Comment/Comment';

const CommentList = ({}) => {

    return ( 
        <>
        <h1> {} </h1>
        <section className='comments'>
                {/* <h2 className="videos__title"> Next Videos </h2> */}
               
                {/* <VideoList /> */}
                {/* getting data from App props */}
            <ul className='comments__list'>
                {props.videos.map((video) => 
                    // Map returns new data use it instead of a for each loop
                    <Comment  
                            handleVideoChange = {props.handleVideoChange} 
                            handleCommentChange = {props.handleCommentChange}/>
                    )}
            </ul>
        </section>

        </>
    );
}
 
export default CommentList;