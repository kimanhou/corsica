import React from 'react';
import './TableLineNumber.scss';

interface ITableLineNumberProps {
    numbers : string[];
}

const TableLineNumber : React.FC<ITableLineNumberProps> = props => {
    const renderNumbers = () => {
        var tableNumbers : JSX.Element[] = [];
        for(let number of props.numbers){
            tableNumbers.push(<div className={`table-number`} key={number}>{number}</div>)
        }
        return tableNumbers;
    }

    return(
        <div className={`table-line-number`}>
            {renderNumbers()}
        </div>
                
    );
}

export default TableLineNumber;