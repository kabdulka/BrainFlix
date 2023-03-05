
import "./Header.scss";
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';


const Header = () => {


    return ( 
        <>
            <header className="header">
                <div className="header__logo-container">
                    <a className='header__logo-link' href=""> 
                        <img className="header__logo-image" src={logo} alt="brainflix-logo"/> 
                    </a>

                </div>
                <div className="header__content">
                    <input className="header__search-input" type="text" id="search" name="search" placeholder="Search"/>
                    <img src={avatar} className="header__avatar" />
                    <button className="header__upload"> UPLOAD </button>
                </div>


            </header>
        </>
    );
}
 


export default Header;