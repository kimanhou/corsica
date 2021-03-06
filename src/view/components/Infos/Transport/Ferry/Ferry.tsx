import React, { useState } from 'react';
import Text from '../../../LocalisationContext/Text';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import Link from '../Link';
import './Ferry.scss'
import Port from './Port';

interface IFerryProps {
}

enum Departure {
    Marseille = "Marseille",
    Nice = "Nice",
    Toulon = "Toulon",
    Livourne = "Livourne",
    Savone = "Savone",
    Genes = "Gènes",
    Sardaigne = "Sardaigne"
}

enum Arrival {
    Ajaccio = "Ajaccio",
    Bastia = "Bastia",
    IleRousse = "Île Rousse",
    PortoVecchio = "Porto-Vecchio",
    Propriano = "Propriano",
    Bonifacio = "Bonifacio"
}

enum Companies {
    CorsicaLinea = "Corsica Linea",
    CorsicaFerries = "Corsica Ferries",
    Moby = "Moby Lines",
    Meridionale = "La Méridionale"
}

const Ferry : React.FC<IFerryProps> = props => {
    const combinations = [
        [Departure.Marseille, Arrival.Ajaccio, Companies.CorsicaLinea],
        [Departure.Marseille, Arrival.Bastia, Companies.CorsicaLinea],
        [Departure.Marseille, Arrival.IleRousse, Companies.CorsicaLinea],
        [Departure.Nice, Arrival.Ajaccio, Companies.CorsicaFerries],
        [Departure.Nice, Arrival.Bastia, Companies.CorsicaFerries],
        [Departure.Nice, Arrival.IleRousse, Companies.CorsicaFerries],
        [Departure.Nice, Arrival.PortoVecchio, Companies.CorsicaFerries],
        [Departure.Toulon, Arrival.Ajaccio, Companies.CorsicaFerries],
        [Departure.Toulon, Arrival.Bastia, Companies.CorsicaFerries],
        [Departure.Toulon, Arrival.IleRousse, Companies.CorsicaFerries],
        [Departure.Toulon, Arrival.PortoVecchio, Companies.CorsicaFerries],
        [Departure.Livourne, Arrival.Bastia, Companies.CorsicaFerries],
        [Departure.Livourne, Arrival.IleRousse, Companies.CorsicaFerries],
        [Departure.Savone, Arrival.Bastia, Companies.CorsicaFerries],
        [Departure.Genes, Arrival.Bastia, Companies.Moby],
        [Departure.Livourne, Arrival.Bastia, Companies.Moby],
        [Departure.Sardaigne, Arrival.Bonifacio, Companies.Moby],
        [Departure.Marseille, Arrival.Ajaccio, Companies.Meridionale],
        [Departure.Marseille, Arrival.Bastia, Companies.Meridionale],
        [Departure.Marseille, Arrival.Propriano, Companies.Meridionale],
    ]

    const [departure, setDeparture] = useState(Departure.Marseille);
    const [arrival, setArrival] = useState(Arrival.Ajaccio);
    const setDepartureValue = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        setDeparture(event.target.value as Departure);
    }
    const setArrivalValue = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        setArrival(event.target.value as Arrival);
    }
    const updateCompanies = () => {
        var result = [];
        for(let entry of combinations){
            if (entry[0] == departure && entry[1] == arrival) {
                result.push(entry[2]);
            }
        }
        return result;
    }

    const formatCompanies = (companies : (Departure | Arrival | Companies)[]) => {
        var formattedCompanies = companies.join(', ');
        if (companies.length == 0) {
            return <Text english="This route is unavailable." french="Aucune compagnie ne fait ce trajet."/>        
        }
        if (companies.length == 1) {
            return <Text english={`The only possible company is ${formattedCompanies}.`} french={`La seule compagnie qui fait ce trajet est ${formattedCompanies}.`}/>        
        }
        else {
            return <Text english={`The possible companies are ${formattedCompanies}.`} french={`Les compagnies possibles sont ${formattedCompanies}.`} />
        }
    }

    return(
        <div className={`ferry`} id={`ferry`}>
            <SectionHeader englishTitle="The ferry" englishSubtitle="cheap and environmental friendly" frenchTitle="Le ferry" frenchSubtitle="le plus economique et ecologique" />
            <div className={`column left`}>
                <p>
                    <Text english="It's " french="C'est " />
                    <b><Text english="often cheaper than flying" french="souvent moins cher que l'avion" /></b>
                    <Text english=" but it's also " french=" et c'est également " />
                    <b><Text english="much slower." french="beaucoup plus lent." /> </b>
                    <Text english="However, the ferry has the huge advantage of allowing you to take your car, which can be a big bonus if you don't want to go through the hassle of renting a car. Most of the ferries travel from continental France by night, the crossing lasts from 8 to 11 hours but the fastest connection is Nice - Ile Rousse (4h30 by day). You can also depart from Italy, there the crossing is a bit shorter." french=" Cependant, le ferry présente l'avantage de pouvoir emmener sa voiture, facteur non négligeable pour certains, particulièrement les habitants du Sud de la France continentale et les frileux de la location de voiture. La plupart des traversées se font de nuit et durent de 8 à 11h, mais la connexion la plus rapide est Nice - Île rousse en 4h30. Il existe également des liaisons avec l’Italie, souvent plus courtes." />
                    <br></br>
                    <br></br>
                    <div className={`departure-ports`}>
                        <Text english="From : " french="D’où partir : "/>
                        <img src="./icons/french-flag.png" />	 
                        <Text english="Marseille, Nice, Toulon" french="Marseille, Nice, Toulon"/>
                        <img src="./icons/italian-flag.png" className={`italian-flag`}/>	
                        <Text english="Genoa, Livorno, Sardinia" french="Gènes, Livourne, Sardaigne" />
                    </div>
                    <br></br>
                    <Text english="To : Bastia, Ajaccio, Île Rousse, Porto Vecchio, Bonifacio, Propriano" french="Où arriver : Bastia, Ajaccio, Île Rousse, Porto Vecchio, Bonifacio, Propriano" />
                    <br></br>
                    <Text english="Which company : Corsica Linea, Corsica Ferries, Moby Lines, La Méridionale" french="Quelles compagnies : Corsica Linea, Corsica Ferries, Moby Lines, La Méridionale" />
                    <br></br>
                    <Text english="Warning, each company has different routes and don't connect all the ports. For example, Corsica Linea only departs from Marseille, while Corsica Ferries departs from Nice and Toulon. Outside the summer months (July and August), choices are more limited. For more clarity, please find below a module illustrating the possibles routes." french="Attention, toutes les compagnies ne desservent pas tous les ports et ne partent pas de partout et tout le temps. Par exemple, Corsica Linea part de Marseille tandis que Corsica Ferries propose des départs de Nice et Toulon. En été, il y a évidemment plus de choix. Pour plus de clarté, voici un petit module illustratif:" />
                    <br></br>
                    <br></br>
                    <div className={`choose-text`}>
                        <Text english="I want to depart from" french="Je veux partir de" />
                    </div>
                    <select name="departure" id="departure" className="departure" onChange={setDepartureValue}>
                        <option value={Departure.Marseille}>Marseille</option>
                        <option value={Departure.Nice}>Nice</option>
                        <option value={Departure.Toulon}>Toulon</option>
                        <option value={Departure.Livourne}>Livourne</option>
                        <option value={Departure.Savone}>Savone</option>
                        <option value={Departure.Genes}>Gènes</option>
                        <option value={Departure.Sardaigne}>Sardaigne</option>
                    </select>
                    <br></br>
                    <div className={`choose-text`}>
                        <Text english="I want to arrive in" french="Je veux arriver à " />
                    </div>
                    <select name="arrival" id="arrival" className="arrival" onChange={setArrivalValue}>
                        <option value={Arrival.Ajaccio}>Ajaccio</option>
                        <option value={Arrival.Bastia}>Bastia</option>
                        <option value={Arrival.IleRousse}>Île Rousse</option>
                        <option value={Arrival.PortoVecchio}>Porto-Vecchio</option>
                        <option value={Arrival.Bonifacio}>Bonifacio</option>
                        <option value={Arrival.Propriano}>Propriano</option>
                    </select>
                    <br></br>
                    {formatCompanies(updateCompanies())}
                    <br></br>
                    <br></br>
                    <Text english="If you have a car, " french="Si vous avez une voiture, " />
                    <b><Text english="make sure to remember where you parked it" french="retenez bien son emplacement" /></b>
                    <Text english=" (garage number, floor number...). You cannot access your car during the crossing and garages are not air-conditionned." french=" et le numéro du garage, ainsi que l’étage. Les garages sont inaccessibles durant la traversée et ne sont pas climatisés." />
                    <br></br>
                    <Text english="Pets can of course come to Corsica, however, depending on the companies, they might be put in individual boxes or they might be able to stay with you during the crossing.  With Corsica Ferries for example, you need to book a cabin if you are with a pet." french="Les animaux de compagnie peuvent bien entendu venir en Corse mais selon les compagnies, ils seront soit placés dans des boxes individuelles, ou vous pourrez les garder avec vous. Corsica Ferries oblige notamment les passagers accompagnés d’un animal à réserver une cabine." />
                    <br></br>
                    <Text english="If you chose " french="Si vous avez choisi " />
                    <b><Text english="a night crossing without a cabin, you will have to sleep on the floor." french="une traversée de nuit sans cabine, il faudra dormir par terre." /></b>
                    <Text english="Hopefully, the carpet is quite clean and comfy, however most passengers use their camping gear. You can pay for a cabin once on-board, it's about 100€ for a 4 people cabin (half for a day crossing). " french=" La moquette est plutôt propre et confortable, cependant la plupart des passagers utilisent leur matériel de camping. Il est alors également possible de prendre une cabine une fois à bord pour une centaine d’euros (la moitié pour une traversée de jour) par cabine pouvant accueillir 4 personnes. " />
                    <b><Text english="It's very cold during the night." french="Il fait extrêmement froid durant la nuit." /></b>
                    <br></br>
                    <Text english="Food and drinks are available for sale in the many restaurants and bars onboard. They are open during the whole crossing, even at night. " french="Il y a évidemment de la nourriture et des boissons en vente durant tout le trajet dans différents bars et restaurants. " />
                    <b><Text english="Wifi onboard is not free." french="Le wifi à bord est payant." /></b>
                </p>
            </div>
            <div className={`column middle`}></div>
            <div className={`column right`}>
                <p>
                    <b><Text english="Our key figures" french="Nos chiffres" /></b>
                    <Text english=" : September 2020 with Corsica Ferries, no cabins, no cars" french=" : septembre 2020 avec Corsica Ferries sans cabine sans voiture" />
                    <br></br>
                    <div className={`image-container`}>
                        <img src="./icons/night.png" />
                    </div>
                    <div className={`middle`}></div>
                    <div className={`text-container`}>
                        <Text english="Toulon - Ajaccio 35€ / pax" french="Toulon - Ajaccio 35€ / personne" />
                    </div>
                    <br></br>
                    <div className={`image-container`}>
                        <img src="./icons/day.png" />
                    </div>
                    <div className={`middle`}></div>
                    <div className={`text-container`}>
                        <Text english="Bastia - Livourne 22€ / pax" french="Bastia - Livourne 22€ / personne" />
                    </div>
                    <br></br>
                    <Text english="For two people with a car, it's about 150€ total each way in September." french="Pour 2 personnes avec une voiture, compter environ 150€ par traversée en septembre." />
                    <br></br>
                    <br></br>
                    <b><Text english="The ports we visited :" french="Les ports que l'on a visités :" /></b>
                    <br></br>
                    <Port englishName="Toulon" frenchName="Toulon" details={
                        <p>
                            <a href="https://goo.gl/maps/feuqEpqJGhjQi3FN6" target="_blank"><Text english={"GPS coordinates : 43°07'00.1\"N\" 5°55'56.3\"E"} french ={"Coordonnées GPS : 43°07'00.1\"N 5°55'56.3\"E"} /></a>
                            <br></br>
                            <Text english={"The terminal is comfortable, has free wifi, clean restrooms and you can buy snacks, sandwiches, cool beverages and hot drinks."} french ={"Le terminal est confortable avec du wifi gratuit, des toilettes propres et la possibilité d’acheter des sandwiches et des boissons fraîches et chaudes."} />
                        </p>} 
                    />
                    <Port englishName="Ajaccio" frenchName="Ajaccio" details={
                        <p>
                            <a href="https://goo.gl/maps/qyi6eStKBbt98SQYA" target="_blank"><Text english={"GPS coordinates : 41°55'17.2\"N 8°44'23.1\"E"} french ={"Coordonnées GPS : 41°55'17.2\"N 8°44'23.1\"E"} /></a>
                            <br></br>
                            <Text english={"The terminal is located in the city center, in front of Palais Fesch."} french ={"Le terminal maritime et routier d’Ajaccio se situe dans le centre ville, en face du Palais Fesch."} />
                        </p>} 
                    />
                    <Port englishName="Bastia" frenchName="Bastia" details={
                        <p>
                            <a href="https://goo.gl/maps/6kvW1dyGBbUkcVDm6" target="_blank"><Text english={"GPS coordinates : 42°42'20.1\"N 9°27'15.5\"E"} french ={"Coordonnées GPS : 42°42'20.1\"N 9°27'15.5\"E"} /></a>
                            <br></br>
                            <Text english={"Boarding of passengers takes place in the North terminal. There is nothing in there, except a few seats."} french ={"L’embarquement de passagers se fait exclusivement du terminal Nord. Il n’y a rien dans le terminal, à part quelques sièges."} />
                        </p>} 
                    />
                    <br></br>
                    <br></br>
                    <b><Text english="" french="Liens utiles" /></b>
                    <br></br>
                    <Link textEnglish="Corsica Linea" textFrench="Corsica Linea" link="https://www.corsicalinea.com/" />
                    <Link textEnglish="Corsica Ferries" textFrench="Corsica Ferries" link="https://www.corsica-ferries.fr/" />
                    <Link textEnglish="Moby Lines" textFrench="Moby Lines" link="https://www.mobylines.com/" />
                    <Link textEnglish="La Meridionale" textFrench="La Méridionale" link="https://www.lameridionale.fr/" />
                </p>
            </div>
        </div>
    );
}

export default Ferry;