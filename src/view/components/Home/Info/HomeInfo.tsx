import React from 'react';
import { Page } from '../../../../App';
import { myScrollTo } from '../../../../Util';
import Text from '../../LocalisationContext/Text';
import SectionHeader from '../../SectionHeader/SectionHeader';
import './HomeInfo.scss';

interface IHomeInfoProps {
    setCurrentPage : (currentPage : Page) => void;
}

const HomeInfo : React.FC<IHomeInfoProps> = props => {
    const onClick = (id : string) => {
        props.setCurrentPage(Page.infos);
        setTimeout(() => {
            myScrollTo(id);
        }, 20);
    }
    return(
        <div className={`home-info`}>
            <SectionHeader englishTitle={`Practical info`} englishSubtitle={`good to know`} frenchTitle={`Infos pratiques`} frenchSubtitle={`bon a savoir`} />
            <div className={`column left`}>
                <div className={`column-content`}>
                    <img src="./photos/home/info-01.png" />
                    <h4><Text english="" french="Se déplacer" /></h4>
                    <p>Arriver et partir de l'île, se déplacer entre chaque ville. en transports en commun ou en voiture, comment se garer...</p>
                    <div className={`subcolumns`}>
                        <div className={`subcolumn`}>
                            <p onClick={() => onClick("plane")}><Text english="The plane" french="L'avion" /></p>
                            <p onClick={() => onClick("ferry")}><Text english="The ferry" french="Le ferry" /></p>
                        </div>
                        <div className={`subcolumn`}>
                            <p onClick={() => onClick("car")}><Text english="The car" french="La voiture" /></p>
                            <p onClick={() => onClick("train")}><Text english="The train" french="Le train" /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`column middle`}>
            <div className={`column-content`}>
                    <img src="./photos/home/info-02.png" />
                    <h4><Text english="" french="Se loger" /></h4>
                    <p><Text english="" french="Quel type de logements est disponible ? Pour quel budget ?"/></p>
                </div>
            </div>
            <div className={`column right`}>
            <div className={`column-content`}>
                    <img src="./photos/home/info-03.png" />
                    <h4><Text english="" french="Se restaurer" /></h4>
                    <p><Text english="" french="Supermarchés, boulangeries, restaurants... Qu'est ce qu'on mange en Corse ?" /></p>
                </div>
            </div>
        </div>
    );
}

export default HomeInfo;