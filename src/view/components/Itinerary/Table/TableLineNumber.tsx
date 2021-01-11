import React from 'react';
import './TableLineNumber.scss';

interface ITableLineNumberProps {
    numbers : string[];
    isMobile ?: boolean;
    lineNumber ?: number;
}

const TableLineNumber : React.FC<ITableLineNumberProps> = props => {
    const isMobileClassname = props.isMobile ? 'is-mobile' : '';
    const lineNumber1 = props.lineNumber == 1 ? 'line-1' : '';
    const lineNumber2 = props.lineNumber == 2 ? 'line-2' : '';

    const renderNumbers = () => {
        var tableNumbers : JSX.Element[] = [];
        for(let number of props.numbers){
            tableNumbers.push(<div className={`table-number`} key={number}>{number}</div>)
        }
        return tableNumbers;
    }

    return(
        <div className={`table-line-number ${isMobileClassname} ${lineNumber1} ${lineNumber2}`}>
            {renderNumbers()}
        </div>
                
    );
}

export default TableLineNumber;