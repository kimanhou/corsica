import React from 'react';
import Text from '../../../LocalisationContext/Text';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import './Plane.scss'

interface IPlaneProps {
}

const Plane : React.FC<IPlaneProps> = props => {
    return(
        <div className={`plane`} id={`plane`}>
            <SectionHeader englishTitle="The plane" englishSubtitle="fast and comfortable" frenchTitle="L'avion" frenchSubtitle="le plus rapide et confortable" />
            <div className={`column left`}>
                <p><b><Text english="" french="Nos chiffres" /></b></p>
                <p><Text english="" french="220€ pour un aller-retour Paris Ajaccio de mardi à mardi avec Corsica Airlines (en partenariat avec Air France) en septembre 2020. Pour un départ et un retour le samedi pour la même période ou des dates au mois d’août, il faut compter le double." /></p>
                <br></br>
                <br></br>
                <p><b><Text english="" french="Lien utile" /></b></p>
                <p><a href="https://mobilite.muvitarra.fr/" target="_blank"><Text english="" french="Muvitarra" /></a></p>
                <p><Text english="" french="Comme un plan à jour du réseau urbain de la Muvistrada est introuvable sur Internet, voici une photo prise à un l’arrêt de bus."/></p>
                <img src="./photos/infos/transport/bus-lines.jpg" />
            </div>
            <div className={`column middle`}></div>
            <div className={`column right`}>
                <p>
                    <Text english="" french="Se rendre en avion en Corse est le moyen " />
                    <b><Text english="" french="le plus rapide et confortable, mais c’est également souvent le plus coûteux" /></b>
                    <Text english="" french=". Quelques compagnies dont Corsica Airlines, Air France et EasyJet desservent les 4 aéroports de l’île : Ajaccio et Bastia, Calvi et Figari (près de Bonifacio)." />
                    <br></br>
                    <br></br>
                    <b><Text english="" french="L’aéroport d’Ajaccio :" /></b>
                    <Text english="" french="il s’appelle évidemment Napoléon Bonaparte et se situe à 6km à l’est du centre ville. " />
                    <br></br>
                    <Text english="" french="Pour s’y rendre :" />
                    <ul>
                        <li><Text english="" french="- il existe une navette à partir de la gare CFC au prix exorbitant de 10€, à moins de télécharger l’application Muvistrada (le service public de transports en commun d’Ajaccio, un autre nom est Muvitarra), qui permet d’acheter ce ticket pour la modique somme de 8€. Néanmoins, l’application est plutôt bien faite. Il est également possible d’acheter son ticket par SMS mais nous n’avons pas tenté cette méthode obscure." /></li>
                        <li><Text english="" french="- le bus numéro 1 vous dépose au rond-point d’Aspretto en moins de 15 min, puis c’est 40 min de marche le long de la plage. Un peu lent et fatigant mais ce bus ne coûte qu’1€ (encore une fois à travers l’application)." /></li>
                        <li><Text english="" french="- une autre solution consiste à prendre le train jusqu’à la gare de Ricanto (U Ricantu). Le trajet dure 8 min, puis il ne reste “que” 25 min de marche." /></li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default Plane;