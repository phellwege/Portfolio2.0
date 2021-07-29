import { Link } from '@reach/router';
import logo from "../static/Smaller_Logo2.png";
import "../Logo.css"

const Logo2 = () => {
    return (
        <div id="header_wrap">
<img id="logo" src={logo} alt="logo"/>
<div/>
<ul id="navigation">
  <li><a class="active" href="/">Home</a></li>
  <li><a href="/#Projects">Projects</a></li>
  <li><a href="/#Contact">Contact</a></li>
</ul>
        </div>
    )
}
export default Logo2;