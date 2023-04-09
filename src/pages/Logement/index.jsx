import { useParams } from "react-router-dom";
import logements from '../../utils/datas/logements.json';
import Slideshow from '../../components/Slideshow';
import Rating from "../../components/Rating";
import Collapse from "../../components/Collapse";
import style from '../../utils/styles/logement.module.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import Error from "../../components/Error";

function Logement() {

    const navigate = useNavigate();

    // On récupère le paramètre id de l'URL
    const {id} = useParams();

    // On cherche si un logement correspond à l'id récupéré
    const logement = logements.find((logement) => logement.id === id);
    // console.log(logement);

    useEffect(() => {
        if (logement === undefined) {
            navigate('/*');
        }
    });

    // Pour faciliter la visibilité et les traitements ci-dessous, on stocke les infos du logement dans des variables
    // TODO : commentaire à supprimer : Si logement exite, alors on stocke logement.tags dans stickers, sinon on stocke ''
    const stickers = logement ? logement.tags : '';
    // console.log(stickers);
    const rating = logement ? logement.rating : '';
    const description = logement ? logement.description : '';
    const equipments = logement ? logement.equipments : '';
    // console.log(equipments);
    const pictures = logement ? logement.pictures : '';

    return logement ? (
        <section className={style.logementContainer}>
            <Slideshow pictures={pictures} />
            <div className={style.infoContainer}>
                <div className={style.infoBox}>
                    <div className={style.infoPart1}>
                        <h1 className={style.appartTitle}>{logement.title}</h1>
                        <h2 className={style.appartLocation}>{logement.location}</h2>
                        <ul className={style.appartStickers}>{stickers.map((sticker, index) => (
                            <li className={style.sticker} key={`${index}-${sticker}`}>{sticker}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={style.infoPart2}>
                        <div className={style.infoPart2Details}>
                            <div className={style.host}>
                                <span className={style.hostName}>{logement.host.name}</span>
                                <img src={logement.host.picture} alt="propriétaire" className={style.hostPicture}/>
                            </div>
                            <div className={style.ratingContainer}><Rating rating={rating} /></div>
                        </div>
                    </div>
                </div>
                <div className={style.collapseContainer}>
                    <Collapse className={style.collapseLabel} label='Description'>
                        <p className={style.collapseComments}>{description}</p>
                    </Collapse>
                    <Collapse label='Equipements'>
                        <ul className={style.collapseComments}>
                            {equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </section>
    ) : (
        <div>
        </div>
    )
}

export default Logement