import { useState } from "react";
import chevronNext from '../../assets/images/chevron-next.png';
import chevronPrevious from '../../assets/images/chevron-previous.png';
import style from '../../utils/styles/slideshow.module.css';


function Slideshow(pictures)
{
    const photos = pictures.pictures;
    // pour tester le cas où le logement n'a qu'une seule picture : id = 2139a317

    // Par défaut, on positionne le slideshow sur la première image de l'array photos
    const [index, setIndex] = useState(0); 
    const length = photos.length;

    const handlePrevious = () => {
    const newIndex = index - 1;
    // On met à jour la valeur de l'index en prenant en compte le cas où on soit sur la première image de photos
    // (dans ce cas, on repart sur la dernière)
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
    const newIndex = index + 1;
    // On met à jour la valeur de l'index en prenant en compte le cas où on soit sur la dernière image de photos
    // (dans ce cas, on repart sur la première)
    setIndex(newIndex >= length ? 0 : newIndex);
    };

    return length > 1 ? (
       <div className={style.carrousel}>
            <img src={photos[index]} alt="piece du logement" className={style.image} />
            <img src={chevronPrevious} alt="chevron précédent" className={style.chevronPrevious} onClick={handlePrevious}/>
            <img src={chevronNext} className={style.chevronNext} onClick={handleNext}  alt="chevron suivant" />
      </div>
    ) : (
        <div className={style.carrousel}>
            <img src={photos[index]} alt="piece du logement" className={style.image}/>
      </div>
    )
}

export default Slideshow
