import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-small.png';
import './Header.css'

function Header(){
    return (
        <header>
            <Link to="/"><img id="logo" src={logo} /></Link>
        </header>
    );
}

export default Header;