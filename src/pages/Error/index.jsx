import style from '../../utils/styles/error.module.css';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className={style.errorContainer}>
            <h1 className={style.errorNumber}>404</h1>
            <p className={style.errorText}>Oups, la page que vous n'existe pas...</p>
            <Link to={`/`} className={style.links}>
                <p>Retourner sur la page d'accueil</p>
            </Link>
        </div>
    )
}

export default Error