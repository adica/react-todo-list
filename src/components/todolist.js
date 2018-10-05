import React from 'react';
import cn from 'classnames';
import Item from './item';
import { items } from './../items';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [...items]
        };
        this.inputRef = React.createRef();

        this.generateId = this.generateId.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.markAsDone = this.markAsDone.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
        this.markAll = this.markAll.bind(this);
    }

    generateId(min = 1, max = 1000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    addItem() {
        const input = this.inputRef.current;
        if (input.value) {

            const item = {
                id: this.generateId(),
                title: input.value,
                done: false,
                shown: false
            }
            this.setState(() => ({
                list: [...this.state.list, item]
            }), console.log('addItem'));

            input.value = '';
            input.focus();
        }
    }

    removeItem(item) {
        this.setState(prevState => ({
            list: prevState.list.filter(i => i.id !== item.id)
        }), console.log('removeItem'));
    }

    markAsDone(item) {
        const list = this.state.list.map((i) => {
            if (i.id === item.id) {
                item.done = !item.done;
            }
            return i;
        });
        this.setState({ list });
    }

    enterPressed(e) {
        const code = e.keyCode || e.which;
        if (code === 13) {
            this.addItem();
        }
    }

    markAll(e) {
        const list = this.state.list.map((i) => {
            i.done = e.target.checked;
            return i;
        })
        this.setState({ list });
    }

    render() {
        return (
            <div>
                <h1>TodoList App</h1>

                <h3>items:</h3>
                {!this.state.list.length && (
                    <div>No items on the list</div>
                )}

                {this.state.list && (
                    <ul>
                        {this.state.list.map(i => (
                            <Item
                                item={i}
                                handleRemoveClick={this.removeItem}
                                handleMarkAsDone={this.markAsDone}
                            />
                        ))}

                    </ul>
                )}

                <input type="checkbox" onClick={this.markAll} />
                <input
                    type="text"
                    ref={this.inputRef}
                    onKeyPress={this.enterPressed}
                />
                <button className="add" onClick={this.addItem}>Add Item</button>

            </div>
        )
    }
}
