import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
    render() {
        return (
            <main>
                {this.props.items.map(el => {
                    //(this.props.currentCategory === "all" || this.props.currentCategory === el.category) &&
                    //<Item key={el.id} item={el} onAdd={this.props.onAdd} />
                    if (this.props.currentCategory === "all" || this.props.currentCategory === el.category) {
                        return <Item key={el.id} onShowItem={this.props.onShowItem} item={el} onAdd={this.props.onAdd} />;
                    } else {
                        return null;
                    }
                })}
            </main>
        )
    }
}

export default Items
