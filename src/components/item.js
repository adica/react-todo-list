import React from 'react';
import cn from 'classnames';

export default function Item({ item, handleRemoveClick, handleMarkAsDone }) {
    const itemClasses = cn('item ' + (item.done ? 'done' : 'normal'));

    return (
        <li
            id={item.id}
            className={itemClasses}
            key={item.id}>
            <span>{item.title}</span>
            <button
                className="remove"
                onClick={() => handleRemoveClick(item)}>
                Remove item
            </button>
            <button
                onClick={() => handleMarkAsDone(item)}>
                Mark as done
            </button>
        </li>
    );
}
