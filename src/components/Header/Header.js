
import "./Header.scss";
// import searchIcon from '../../assets/Icons/search.svg';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

// import SearchIcon from '../..'
// import searchIcon from


// delete props later
const Header = () => {

    // function props test
    // const handleClick = () => {
    //     console.log("click");
    // }

    // const data = jsonData;
    // console.log(data[0]);

    return ( 
        <>
            {/* <h1> Prop test: {props.name.firstName} </h1> */}
            <header className="header">
                <div className="header__logo-container">
                    <a className='header__logo-link' href=""> 
                        <img className="header__logo-image" src={logo} alt="brainflix-logo"/> 
                        {/* <img class="header__logo-container__image" src="./assets/Logo/Logo-bandsite.svg" alt=""> */}
                    </a>

                </div>
                {/* <div className="header__search"> */}
                    {/* <img className="header__search-image" src={searchIcon}/> */}
                <div className="header__content">
                    {/* <div className="header__search-container"> */}
                        <input className="header__search-input" type="text" id="search" name="search" placeholder="Search"/>
                        {/* <div className="header__avatar-container"> */}
                        <img src={avatar} className="header__avatar" />
                        {/* </div> */}
                    {/* </div> */}
                    <button className="header__upload"> UPLOAD </button>
                    {/* </div> */}
                </div>


            </header>
        </>
    );
}
 


export default Header;