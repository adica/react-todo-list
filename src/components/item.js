import React from 'react';
import cn from 'classnames';

export default function Item({ item, index, handleRemoveClick, handleMarkAsDone }) {
    const itemClasses = cn('item', {
        'done': item.done,
        'even': index % 2 === 0
    });

    return (
        <li
            id={item.id}
            className={itemClasses}>
            <input
                checked={item.done}
                type="checkbox"
                onClick={() => handleMarkAsDone(item)}
            />
            <span>{item.title}</span>
            <button
                className="remove"
                onClick={() => handleRemoveClick(item)}>
                X
            </button>
        </li>
    );
}
