import "../style/header.scss"

import logo from "../image/logo line.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, } from '@fortawesome/free-regular-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
const Header = () => {
    const [mobilFormat, setMobilFormat] = useState('hidden')
    const BurgerMenu = <FontAwesomeIcon icon={faBars} onClick={()=>setMobilFormat('display')}  style={{color: "#ffffff",}} />
    const xmark = <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setMobilFormat('hidden')}  style={{color: "#ffffff",}}/>
    return (
        <header>
            <a href="#">
            <img width="220px" src={logo} alt=""/>
                </a>
            <nav>
                <div id={"xmark"}>{ mobilFormat=='hidden' ? BurgerMenu : xmark }</div>
            <ul className={mobilFormat=='hidden' ? 'hiddenUl' : 'displayUl'}>

                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Project">Projects</a></li>
                <li><a href="#Experience">Experiences</a></li>
                <li><a href="#Education">Educations</a></li>

                <li><a href="#Contact">Contact</a></li>
            </ul>
            </nav>

        </header>
    );
};

export default Header;