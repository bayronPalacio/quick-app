import React from 'react';
import Table from 'react-bootstrap/Table'

const Inventory = () => {
    return (
        <div className="rightSection">
            <h1>Inventory</h1>
            <Table responsive variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <th key={index}>Table heading</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>2</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>3</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>

            {/* {list.map((li) => (
        <Li key={li.id} li={li} list={list} setList={setList}/>
    ))} */}

        </div>
    );
}

export default Inventory;
