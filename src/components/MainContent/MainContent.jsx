import '../MainContent/MainContent.scss';
import likesIcon from '../../assets/Icons/likes.svg';
import viewsIcon from '../../assets/Icons/views.svg'

const MainContent = ({currentVideo}) => {
    return (
        <>
        <main className='current-video'>
            <img className="current-video__image" src={currentVideo.image} />
            {/* <video source={currentVideo.video} > </video> */}

            <h2 className="current-video__title"> Current video name is: {currentVideo.title} </h2>
            
            <div className="current-video__info">

                <div className="current-video__flex1">

                    <p className="current-video__channel"> by {currentVideo.channel} </p>
                    <p className="current-video__date"> {currentVideo.timestamp} </p>

                </div>
            
                <div className="current-video__flex2">
                   
                  
                    <div className="current-video__likes-container">
                        <img src={likesIcon}/>
                        <p className="current-video__likes"> {currentVideo.likes} </p>
                        
                    </div>
                    <div className="current-video__views-container">
                        <img src={viewsIcon}/>
                        <p className="current-video__views"> {currentVideo.views} </p>
                    </div>
                
                </div>

            </div>

            <p> {currentVideo.description} </p>
            <p> Number of comments: {currentVideo.comments.length} </p>

            
        </main>
        </>
    );
}

export default MainContent;