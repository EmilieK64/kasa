import logements from '../../utils/datas/logements.json';
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import banner from '../../assets/images/banner-home.png';
import style from '../../utils/styles/home.module.css';

function Home() {
    return (
        <div className={style.center}>
            <Banner banner={banner} />
            <section className={style.section}>
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />   
                ))}
            </section>
        </div>
    )
}

export default Home