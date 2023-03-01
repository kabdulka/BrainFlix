import '../MainContent/MainContent.scss';

const MainContent = ({currentVideo}) => {
    return (
        <>
        <main className='current-video'>
            <img className="current-video__image" src={currentVideo.image} />
            <video source={currentVideo.video} > </video>

            <h2 className="current-video__title"> Current video name is: {currentVideo.title} </h2>
            <p className="current-video__channel"> by {currentVideo.channel} </p>
            <p> Current video description is: {currentVideo.description} </p>
            <p> Current video name timestamp is: {currentVideo.timestamp} </p>
            <p> Current video name timestamp is: {currentVideo.likes} </p>
            <p> Current video name timestamp is: {currentVideo.views} </p>
            <p> Number of comments: {currentVideo.comments.length} </p>

            
        </main>
        </>
    );
}

export default MainContent;