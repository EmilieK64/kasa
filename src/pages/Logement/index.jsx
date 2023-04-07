import { useParams } from "react-router-dom";
import logements from '../../utils/datas/logements.json';
import Slideshow from '../../components/Slideshow';
import Collapse from "../../components/Collapse";
import style from '../../utils/styles/logement.module.css';

function Logement() {

    // On récupère le paramètre id de l'URL
    const {id} = useParams();

    // On cherche si un logement correspond à l'id récupéré
    const logement = logements.find((logement) => logement.id === id);
    // console.log(logement);

    // Pour faciliter la visibilité et les traitements ci-dessous, on stocke les infos du logement dans des variables
    const stickers = logement.tags;
    // console.log(stickers);
    const description = logement.description;
    const equipments = logement.equipments;
    // console.log(equipments);
    const pictures = logement.pictures;

    return (
        <section>
            <Slideshow pictures={pictures} />
            <div>
                <div>
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                    <div>
                        <h4>{stickers.map((sticker, index) => (
                            <li key={`${index}-${sticker}`}>{sticker}</li>
                            ))}
                        </h4>
                    </div>
                </div>
                <div>
                    <span>{logement.host.name}</span>
                    <img className={style.image} src={logement.host.picture} alt="propriétaire"/>
                    <div>stars</div>
                </div>
                <div>
                    <Collapse label='Description'>
                        <p>{description}</p>
                    </Collapse>
                    <Collapse label='Equipements'>
                        <ul>
                            {equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </section>
    ) 
}

export default Logement