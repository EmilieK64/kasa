import chevronHaut from '../../assets/images/chevron-haut.png';
import chevronBas from '../../assets/images/chevron-bas.png';
import style from '../../utils/styles/collapse.module.css';
import { useState } from 'react';

function Collapse(props) {

    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div>
                <button onClick={() => setIsOpen(false)}>{props.label}<img src={chevronHaut} alt="chevron-haut"/></button>
                <div>{props.children}</div>
        </div>
    ) : (
        <div>
                <button onClick={() => setIsOpen(true)}>{props.label}<img src={chevronBas} alt="chevron-bas"/></button>
        </div>
    )
}

export default Collapse