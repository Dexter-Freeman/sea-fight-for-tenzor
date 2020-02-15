import React from 'react';
import Cell from './Cell/Cell.js';

export default function Field(props) {

    return (
        <div className='field' >

            {
                props.field.map(cell => <Cell
                    x={cell.x}
                    y={cell.y}
                    id={cell.id}
                    key={cell.id}
                    hasShip={cell.hasShip}
                    shooted={cell.shooted}
                    isShipVisible={cell.isShipVisible}
                />)
            }

            <div className='field-name' >
                {props.whose}
            </div>
        </div>
    )
};