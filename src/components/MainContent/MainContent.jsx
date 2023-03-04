import '../MainContent/MainContent.scss';
import likesIcon from '../../assets/Icons/likes.svg';
import viewsIcon from '../../assets/Icons/views.svg'

const MainContent = ({currentVideo}) => {


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
        <>
        <main className='current-video'>
            {/* <img className="current-video__image" src={currentVideo.image} /> */}
            {/* <video source={currentVideo.video} > </video> */}

            <h2 className="current-video__title">  {currentVideo.title} </h2>
            
            <div className="current-video__info">

                <div className="current-video__flex1">

                    <p className="current-video__channel"> by {currentVideo.channel} </p>
                    <p className="current-video__date"> {getFormatedDate(currentVideo.timestamp)} </p>

                </div>
            
                <div className="current-video__flex2">
                    {/* <div className='current-video__flex2-icons'> */}
                        <div className="current-video__views-container">
                            <img src={viewsIcon}/>
                            <p className="current-video__views"> {currentVideo.views} </p>
                        </div>
                        <div className="current-video__likes-container">
                            <img src={likesIcon}/>
                            <p className="current-video__likes"> {currentVideo.likes} </p>
                            
                        </div>
                    {/* </div> */}

                
                </div>

            </div>

            <p className="current-video__description"> {currentVideo.description} </p>
            <p className="current-video__comment-number"> {currentVideo.comments.length} comments </p>

            
        </main>
        </>
    );
}

export default MainContent;