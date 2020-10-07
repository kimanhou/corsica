import React from 'react';
import Text from '../../../LocalisationContext/Text';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import './Ferry.scss'

interface IFerryProps {
}

const Ferry : React.FC<IFerryProps> = props => {
    return(
        <div className={`ferry`} id={`ferry`}>
            <SectionHeader englishTitle="The ferry" englishSubtitle="cheap and environmental friendly" frenchTitle="Le ferry" frenchSubtitle="le plus economique et ecologique" />
            <div className={`column left`}>
                <p>
                    <Text english="" french="C'est " />
                    <b><Text english="" french="souvent moins cher que l'avion" /></b>
                    <Text english="" french=" et c'est également " />
                    <b><Text english="" french="beaucoup plus lent." /> </b>
                    <Text english="" french=" Cependant, le ferry présente l'avantage de pouvoir emmener sa voiture, facteur non négligeable pour certains, particulièrement les habitants du Sud de la France continentale et les frileux de la location de voiture. La plupart des traversées se font de nuit et durent de 8 à 11h, mais la connexion la plus rapide est Nice - Île rousse en 4h30. Il existe également des liaisons avec l’Italie, souvent plus courtes." />
                    <br></br>
                    <br></br>
                    <Text english="" french="D’où partir : 		 Marseille, Nice, Toulon			 Gènes, Livourne, Sardaigne" />
                    <br></br>
                    <Text english="" french="Où arriver : Bastia, Ajaccio, Île Rousse, Porto Vecchio, Bonifacio, Propriano" />
                    <br></br>
                    <Text english="" french="Quelles compagnies : Corsica Linea, Corsica Ferries, Moby Lines, La Méridionale" />
                    <br></br>
                    <Text english="" french="Attention, toutes les compagnies ne desservent pas tous les ports et ne partent pas de partout et tout le temps. Par exemple, Corsica Linea part de Marseille tandis que Corsica Ferries propose des départs de Nice et Toulon. En été, il y a évidemment plus de choix. Pour plus de clarté, voici un petit module illustratif:" />
                    <br></br>
                    <br></br>
                    <Text english="" french="Je veux partir de	 Marseille ⌄" />
                    <br></br>
                    <Text english="" french="Je veux arriver à 	 Bastia     ⌄" />
                    <br></br>
                    <Text english="" french="Les compagnies possibles sont Corsica Linea, Corsica Ferries, Moby Lines, La Méridionale" /></p>
            </div>
            <div className={`column middle`}></div>
            <div className={`column right`}>
                <p>
                    <b><Text english="" french="Nos chiffres" /></b>
                    <Text english="" french=" : septembre 2020 avec Corsica Ferries sans cabine sans voiture" />
                    <br></br>
                    <Text english="" french="Toulon - Ajaccio 35€ / personne" />
                    <br></br>
                    <Text english="" french="Bastia - Livourne 22€ / personne" />
                    <br></br>
                    <Text english="" french="Pour 2 personnes avec une voiture, compter environ 150€ par traversée en septembre." />
                    <br></br>
                    <br></br>
                    <Text english="" french="Les ports qu’on a visités :" />
                    <br></br>
                    <Text english="" french="Toulon ⌄ " />
                    <br></br>
                    <Text english="" french="Ajaccio  ⌄" />
                    <br></br>
                    <Text english="" french="Bastia ⌄" /></p>
            </div>
        </div>
    );
}

export default Ferry;