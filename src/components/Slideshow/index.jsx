import { useState } from "react";
import chevronNext from '../../assets/images/chevron-next.png';
import chevronPrevious from '../../assets/images/chevron-previous.png';

function Slideshow(pictures)
{
    console.log(pictures.pictures);

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
       <div className="carousel">
            <img src={photos[index]} alt="piece du logement" />
            <button onClick={handlePrevious}><img src={chevronPrevious} alt="chevron précédent"/></button>
            <button onClick={handleNext}><img src={chevronNext} alt="chevron suivant"/></button>
      </div>
    ) : (
        <div className="carousel">
            <img src={photos[index]} alt="piece du logement" />
      </div>
    )
}

export default Slideshow
