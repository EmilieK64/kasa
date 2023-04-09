import Banner from '../../components/Banner';
import style from '../../utils/styles/a-propos.module.css';
import banner from '../../assets/images/banner-a-propos.png';
import Collapse from '../../components/Collapse';

function About() {
    return (
        <div className ={style.Homecontainer}>
            <Banner banner={banner} />
            <section className={style.collapseSection}>
                <Collapse label="Fiabilité" >
                    <div className={style.paragraphBox}>
                        <p className={style.paragraph}>
                            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                        </p>
                    </div>
                </Collapse>
                <Collapse label="Respect">
                    <div className={style.paragraphBox}>
                        <p className={style.paragraph}>
                            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                        </p>
                    </div>
                </Collapse>
                <Collapse className={style.collapse} label="Service">
                    <div className={style.paragraphBox}>
                        <p className={style.paragraph}>
                            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question. 
                        </p>
                    </div>
                </Collapse>
                <Collapse className={style.collapse} label="Sécurité">
                    <div className={style.paragraphBox}>
                        <p className={style.paragraph}>
                            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                        </p>
                    </div>
                </Collapse>
            </section>
        </div>
    )
}

export default About