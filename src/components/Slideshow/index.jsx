import { useState } from "react";
import chevronNext from '../../assets/images/chevron-next.png';
import chevronPrevious from '../../assets/images/chevron-previous.png';
import style from '../../utils/styles/slideshow.module.css';


function Slideshow(pictures)
{
    // console.log(pictures.pictures);

    const photos = pictures.pictures;
    // pour tester le cas où le logement n'a qu'une seule picture : id = 2139a317

    const [index, setIndex] = useState(0); 
    const length = photos.length;

    const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
    const newIndex = index + 1;
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
