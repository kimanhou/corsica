import React from 'react';
import Text from '../../LocalisationContext/Text';
import './Food.scss'

interface IFoodProps {

}

const Food : React.FC<IFoodProps> = props => {
    return(
        <div className={`food`}>
            <h2><Text english="Food" french="Se restaurer" /></h2>
            <p>
                <Text english="Corsica is an island, but don't expect to eat fish.
                     Outside of Cap Corse, the locals are more mountain people in their diet, namely more specialized in sausage and cheese than in seafood.
                     Corsican sausage and ewe's cheese are institutions not to be missed."
                    french="La Corse est une île mais ne vous attendez pas à manger du poisson. 
                    En dehors du Cap Corse, les locaux sont plutôt montagnards dans leur alimentation, à savoir plutôt spécialisés en saucisson et fromage qu'en produits de la mer. 
                    Le saucisson Corse et le fromage de brebis sont des institutions à ne pas rater."/>
                <br></br><br></br>
                <Text english="In terms of restaurants, there are plenty but don't expect variety. 
                    Locals do not eat sushis or poke bowls, food is exclusively French and Corsican. 
                    Don't take me wrong, it's always delicious ! 
                    Popular restaurants are often fully booked but you can try getting a table if you arrive at midday. 
                    Lunch sets are usually around 18€. Like everywhere in France, bread and water are free and unlimited and tipping is not mandatory. 
                    If you do tip, leave less than 5€. 
                    We had read that most restaurants only accept cash, however it looks like covid has made a difference.
                    It is now easy to pay with credit card everywhere."
                    french="L'île ne manque pas de restaurants cependant ne vous attendez pas à de la variété.
                    Les habitants ne mangent pas de sushis ni de poke bowls, la nourriture est exclusivement française et corse.
                    Ne vous méprenez pas, c'est toujours délicieux!
                    Les restaurants populaires sont souvent complets, mais vous pouvez essayer d'obtenir une table si vous arrivez à midi pile.
                    Les menus au déjeuner coûtent généralement aux alentours de 18 €. Comme partout en France, le pain et l'eau sont gratuits et illimités. 
                    Nous avions lu que la plupart des restaurants n'acceptaient que les paiements en espèce, cependant il semblerait que le covid ait fait bouger les choses.
                    Il est désormais aisé de payer en carte bleue partout." />
            </p>
        </div>
    );
}

export default Food;