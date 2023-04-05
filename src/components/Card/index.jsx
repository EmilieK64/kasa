import { Link } from 'react-router-dom';
import style from '../../utils/styles/card.module.css';

function Card({ id, title, cover }) {
    return (
        <div className={style.card}>
            <Link to={`/logement/${id}`} className={style.links}>
                <img src={cover} alt="logement" className={style.img}/>
                <h3 className={style.cardTitle}>{title}</h3>
            </Link>
        </div>
    )
}



export default Card