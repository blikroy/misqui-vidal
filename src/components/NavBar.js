import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <header>
            <div className="logo">MISQUI</div>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Categoría</li>
                    <li>Login</li>
                </ul>
            </nav>
            <CartWidget></CartWidget>
        </header>
    );
}

export default NavBar;