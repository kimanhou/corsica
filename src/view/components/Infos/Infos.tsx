import React from 'react';
import './Infos.scss';

interface IInfosProps {
}

const Infos : React.FC<IInfosProps> = props => {
    return(
        <div className={`infos`}>
            This is the infos page.
        </div>
    );
}

export default Infos;