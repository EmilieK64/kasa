import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import style from '../../utils/styles/header.module.css';

function Header() {
    return (
        <nav className={style.nav}>
            <Link to="/">
                <img src={logo} alt='logo Kasa' className={style.img}></img>
            </Link>
            <ul className={style.menuLinks}>
                <Link to="/" className={style.links}>Accueil</Link>
                <Link to="/about" className={style.links}>A propos</Link>
            </ul>
        </nav>
    )
}

export default Header