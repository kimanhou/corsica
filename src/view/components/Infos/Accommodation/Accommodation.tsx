import React from 'react';
import Text from '../../LocalisationContext/Text';
import './Accommodation.scss'

interface IAccommodationProps {

}

const Accommodation : React.FC<IAccommodationProps> = props => {
    return(
        <div className={`accommodation`}>
            <h2><Text english="Accommodation" french="Se loger" /></h2>
            <p>
                <Text english="The island is well supplied with tourist accommodation. Campsites, hotels or Airbnb, there is something for everyone." 
                french="L'île est bien fournie en logements touristiques. Campings, hôtels ou Airbnb, chacun pourra y trouver son bonheur." />
                <br></br>
                <Text english="If you are driving, it is very advantageous to move away from city centers. Accommodation in the countryside or in small villages is much less expensive than in the city center and you will be able to enjoy peace and life with the locals." 
                    french="Si vous êtes véhiculé, il est très avantageux de s'éloigner un peu des centres villes. Les logements en campagne ou dans des petits villages sont bien moins onéreux qu'en centre ville et vous pourrez ainsi profiter du calme et de la vie avec les locaux." />
                <br></br>
                <Text english="The most expensive regions in terms of accommodation are around Calvi and Bonifacio - Porto Vecchio." 
                    french="Les régions les plus chères en terme de logement sont autour Calvi et Bonifacio - Porto Vecchio."/>
                <br></br><br></br>
                <Text english="During our two-week stay in September 2020, we booked all of our accommodations on Airbnb about a month in advance. 
                    Note that hosts are reluctant to use the Airbnb application, they contact their guests directly by phone.
                    It is therefore imperative to have a French phone number and obviously speak French or Italian.
                    They generally refuse to give the exact address and are unaware of the existence of GPS coordinates.
                    The indications for finding accommodation are at best vague, at worst non-existent." 
                    french="Lors de notre séjour de deux semaines en septembre 2020, nous avons réservé tous nos logements sur Airbnb environ un mois à l'avance. 
                    Noter que les hôtes sont frileux à utiliser l'application Airbnb, ils contactent directement les clients par téléphone. 
                    Il faut donc impérativement avoir un numéro français et bien évidemment parler français, ou bien italien. 
                    Ils refusent généralement de donner l'adresse exacte et n'ont pas connaissance de l'existence de coordonnées GPS. 
                    Les indications pour trouver le logement sont au mieux floues, au pire inexistantes."/>
                <br></br>
                <Text english="We have been usually asked to leave the accommodation clean when leaving, that is to say vacuuming, taking out the trash, cleaning the surfaces.
                     We were sometimes asked to leave a deposit check (so yes you have to have a French checkbook with you).
                     Basic amenities such as soap or towels are often missing.
                     We happened to have a single roll of toilet paper for a 3-night stay for 3 people. 
                     Come prepared!" 
                    french="Il faut généralement laisser le logement propre en partant, c'est-à-dire passer un coup d'aspirateur, sortir les poubelles, nettoyer les surfaces. 
                    Il nous a parfois été demandé de laisser un chèque de caution (donc oui il faut avoir un chéquier français sur soi). 
                    Les produits et équipements de base tels que le savon ou les serviettes sont souvent absents. 
                    Il nous est arrivé d'avoir un unique rouleau de papier toilettes pour un séjour de 3 nuits à 3 personnes. 
                    Mieux vaut venir préparé !"/>
                <br></br><br></br>
                <Text english="Here are some key figures from our experience:" french="Voici quelques chiffres clés de notre expérience :"/><br></br>
                <Text english="Cheapest: 66€ / night for a small flat with a living room and a bedroom in the village of Omessa, a few kilometers from Corte" 
                    french="La nuit la moins chère : 66€ / nuit pour un petit appartement avec une chambre dans le village d'Omessa, à quelques kilomètres de Corte"/><br></br>
                <Text english="Most expensive: 120€ / night for a modern 90m&sup2; apartment with two bedrooms and a sea view in the city center of Bastia" 
                    french="La nuit la plus chère : 120€ / nuit pour un appartement moderne de 90m&sup2; avec 2 chambres et vue sur la mer dans le centre ville de Bastia"/><br></br>
                <b><Text english="Average price: 90€ / night for 3 adults so 30€ / night per person" 
                    french="Moyenne : 90€ / nuit pour 3 personnes donc 30€ / nuit par personne"/></b>
            </p>
        </div>
    );
}

export default Accommodation;