import "../style/header.scss"
import logo from "../image/logo line.svg"

const Header = () => {
    return (
        <header>
            <a href="#">
            <img width="220px" src={logo} alt=""/>
                </a>
            <nav>
            <ul>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Project">Projects</a></li>
                <li><a href="#Experience">Experiences</a></li>
                <li><a href="#Education">Educations</a></li>
                <li><a href="#Blogs">Blogs</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            </nav>

        </header>
    );
};

export default Header;