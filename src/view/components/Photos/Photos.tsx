import React from 'react';
import './Photos.scss';

interface IPhotosProps {
}

const Photos : React.FC<IPhotosProps> = props => {
    return(
        <div className={`photos`}>
            This is the photos page.
        </div>
    );
}

export default Photos;