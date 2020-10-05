import React from 'react';
import Text from '../../LocalisationContext/Text';
import './Accommodation.scss'

interface IAccommodationProps {

}

const Accommodation : React.FC<IAccommodationProps> = props => {
    return(
        <div className={`accommodation`}>
            <h2><Text english="Accommodation" french="Se loger" /></h2>
        </div>
    );
}

export default Accommodation;