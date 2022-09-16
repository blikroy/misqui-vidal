import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <header>
            <div className="logo"><Link to='/'>MISQUI</Link></div>
            <nav>
                <ul>
                    <li><Link to='/categoria/normal'>Hamburguesas</Link></li>
                    <li><Link to='/categoria/vegano'>Veganos</Link></li>
                    <li><Link to='/categoria/infantil'>Kid</Link></li>
                </ul>
            </nav>
            <CartWidget></CartWidget>
        </header>
    );
}

export default NavBar;