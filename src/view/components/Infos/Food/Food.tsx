import React from 'react';
import Text from '../../LocalisationContext/Text';
import './Food.scss'

interface IFoodProps {

}

const Food : React.FC<IFoodProps> = props => {
    return(
        <div className={`food`}>
            <h2><Text english="Food" french="Se restaurer" /></h2>
        </div>
    );
}

export default Food;