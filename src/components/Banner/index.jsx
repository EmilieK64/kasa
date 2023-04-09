import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from '../../utils/styles/banner.module.css';


function Banner({banner}) {
    const location = useLocation();
    const [homePage, setHomePage] = useState(true);

    useEffect(() => {
        if(location.pathname === '/about') {
        setHomePage(false) };
    }, [location.pathname])

    return homePage ? (
        <div className={style.container}>
            <img src={banner} alt="bannière" className={style.image}/>
            <h1 className={style.text}>Chez vous, partout et ailleurs</h1>
        </div>
    ) : (
        <div className={style.container_aboutPage}>
            <img src={banner} alt="bannière" className={style.image_aboutPage}/>
        </div>
    )
}

export default Banner