import { Link } from '@reach/router';
import logo from "../static/Smaller_Logo2.png";
import "../Logo.css"

const Logo = () => {
    return (
        <div id="header_wrap">



            <navBar id="navigation"><img id="logo" src={logo} alt="logo"/>
                <Link to={"/"}> Home </Link>|| 
                <Link to="/About">About</Link> || 
                <Link to="/Contact">Contact</Link>
            </navBar>
        </div>
    )
}
export default Logo;