import React from 'react';

const Row = () => {
    return (
        <tr>
            <td>1</td>
            {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
            ))}
        </tr>
    );
}

export default Row;