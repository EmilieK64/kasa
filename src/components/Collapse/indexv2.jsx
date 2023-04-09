import chevronHaut from '../../assets/images/chevron-haut.png';
import chevronBas from '../../assets/images/chevron-bas.png';
import style from '../../utils/styles/collapse.module.css';
import { useState } from 'react';

function Collapse(props) {

    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
            <div className={style.collapseContainer}>
                <button className={style.button} onClick={() => setIsOpen(false)}>
                    <p>{props.label}</p>
                    <img className={style.chevron} src={chevronHaut} alt="chevron-haut"/>
                    </button> 
                    <div className={style.paragraphBoxOpened}>
                        <p className={style.paragraph}>
                            {props.children}
                        </p>
                    </div>
            </div>
    ) : (
            <div className={style.collapseContainer}>
                <button className={style.button} onClick={() => setIsOpen(true)}>
                    <p>{props.label}</p>
                    <img className={style.chevron} src={chevronBas} alt="chevron-bas"/>
                    <div className={style.paragraphBoxClosed}>
                    </div>  
                 </button>
            </div>
    )
}

export default Collapse