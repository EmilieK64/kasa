import redStar from '../../assets/images/star-red.png';
import greyStar from '../../assets/images/star-grey.png';
import style from '../../utils/styles/rating.module.css';

function Rating(rating) {
    // console.log(rating.rating);

    // On récupère le nombre d'étoiles
    const evaluation = rating.rating;
    // On calcule le nombre d'étoiles "grises" pour compléter le total de 5 étoiles
    const greyStars = 5 - evaluation;

    // On créé 2 array vide qui recevront les images des étoiles
    const arrayRedStars = [];
    const arrayGreyStars = [];

    // On boucle pour mettre le nb souhaité d'étoiles rouges dans l'array correspondant
    for (let i = 1; i <= evaluation; i++) {
        arrayRedStars.push(<img className={style.rating} src={redStar} alt="etoile" />);
    }

    // Si le nb d'étoiles rouges est différent de 5
    // alors on boucle pour mettre le nb d'étoiles grises complémentaires dans l'array correspondant
    if (evaluation !== 5) {
        for (let i = 1; i <= greyStars; i++) {
            arrayRedStars.push(<img className={style.rating} src={greyStar} alt="etoile" />);
        }
    }

    return (
        // On boucle sur les array pour construire la notation avec étoiles
        <div className={style.ratingBox}>
            {arrayRedStars.map((redStar, index) => (
                <span key={`${index}-${redStar}`}>{redStar}</span>
            ))}
            {arrayGreyStars.map((greyStar, index) => (
                <span key={`${index}-${greyStar}`}>{greyStar}</span>
            ))}
        </div>
    )
}

export default Rating