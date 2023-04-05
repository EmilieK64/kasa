import style from '../../utils/styles/banner.module.css';

function Banner({banner}) {
    return (
        <div className={style.container}>
            <img src={banner} alt="bannière" className={style.image}/>
            <h1 className={style.text}>Chez vous, partout et ailleurs</h1>
        </div>
    )
}


export default Banner