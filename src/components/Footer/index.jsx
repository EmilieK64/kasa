import { Link } from 'react-router-dom';
import style from '../../utils/styles/footer.module.css';
import logo from '../../assets/images/logo-footer.png';

function Footer() {
    return (
        <div className={style.footer}>
            <Link to="/">
            <img src={logo} alt='logo kasa' className={style.logo} />
            </Link>
            <p className={style.copyright}>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer