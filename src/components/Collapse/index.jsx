import chevronHaut from '../../assets/images/chevron-haut.png';
import chevronBas from '../../assets/images/chevron-bas.png';
import style from '../../utils/styles/collapse.module.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Collapse(props) {

    const location = useLocation()

    useEffect(() => {
        if(location.pathname === '/about') {
            setIsAboutPage(true) };
    }, [location.pathname])
    
    const [isAboutPage, setIsAboutPage] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (

            isAboutPage ? (
                <div className={style.collapseBox_aboutPage} onClick={() => setIsOpen(false)}>
                <button className={style.button_aboutPage} onClick={() => setIsOpen(false)}>
                    <p className={style.label_aboutPage}>{props.label}</p>
                    <img className={style.chevron_aboutPage} src={chevronHaut} alt="chevron-haut"/>
                    </button> 
                    <div className={style.paragraphBoxOpened_aboutPage}>
                        <div className={style.paragraphBox_aboutPage}>
                            {props.children}
                        </div>
                    </div>
            </div>
            ) : (
                <div className={style.collapseBox_logement} onClick={() => setIsOpen(false)}>
                <button className={style.button_logement} onClick={() => setIsOpen(false)}>
                    <p className={style.Label_logement}>{props.label}</p>
                    <img className={style.chevron_logement} src={chevronHaut} alt="chevron-haut"/>
                    </button> 
                    <div className={style.paragraphBoxOpened_logement}>
                        <div className={style.paragraphBox_logement}>
                            {props.children}
                        </div>
                    </div>
            </div>

            )      
    ) : (
        isAboutPage ? (
            <div className={style.collapseBox_aboutPage}>
                <button className={style.button_aboutPage} onClick={() => setIsOpen(true)}>
                    <p className={style.label_aboutPage}>{props.label}</p>
                    <img className={style.chevron_aboutPage} src={chevronBas} alt="chevron-bas"/>
                 </button>
            </div>
        ) : (
            <div className={style.collapseBox_logement}>
                <button className={style.button_logement} onClick={() => setIsOpen(true)}>
                    <p className={style.label_logement}>{props.label}</p>
                    <img className={style.chevron_logement} src={chevronBas} alt="chevron-bas"/>
                 </button>
            </div>
        ) 
    )
}

export default Collapse