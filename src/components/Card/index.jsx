import PropTypes from 'prop-types';
import style from '../../utils/styles/card.module.css';
import { Link } from 'react-router-dom';

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

// On précise le type de chaque prop
Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
};

export default Card