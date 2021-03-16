import React from 'react';
class TodoItem extends React.Component {

    render() {
        return (
            <li>
                <input type="checkbox" checked={this.props.item.checked} onChange={e => this.props.onSwitchItem(e.target.checked)} />
                {this.props.item.name}
                <button onClick={() => this.props.removeItem()}>移除</button>
                <input type="text" value={this.props.item.name} onChange={e => this.props.editItem(e.target.value)} />
            </li>
        );
    }
}

export default TodoItem;
