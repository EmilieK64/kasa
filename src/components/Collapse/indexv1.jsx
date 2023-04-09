import chevronHaut from '../../assets/images/chevron-haut.png';
import chevronBas from '../../assets/images/chevron-bas.png';
import style from '../../utils/styles/collapse.module.css';
import { useState } from 'react';

function Collapse(props) {

    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className={style.collapseContainer}>
                <button className={style.button} onClick={() => setIsOpen(false)} >
                    {props.label}
                <img className={style.chevron} src={chevronHaut} alt="chevron-haut"/>
                </button>
                <div >{props.children}</div>
        </div>
    ) : (
        <div className={style.collapseContainer}>
                <button className={style.button} onClick={() => setIsOpen(true)}>{props.label}<img className={style.chevron} src={chevronBas} alt="chevron-bas"/></button>
        </div>
    )
}

export default Collapse