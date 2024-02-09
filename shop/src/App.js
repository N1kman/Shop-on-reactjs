import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Items from './Components/Items'
import Categories from './Components/Categories'
import ShowItem from './Components/ShowItem';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: 'Серый стул',
                    photo: 'chair-grey.jpeg',
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Стол',
                    photo: 'table.webp',
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    category: 'tables',
                    price: '149.00'
                },
                {
                    id: 3,
                    title: 'Диван',
                    photo: 'sofa.jpeg',
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    category: 'sofas',
                    price: '199.00'
                },
                {
                    id: 4,
                    title: 'Белый стул',
                    photo: 'chair-white.jpeg',
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 5,
                    title: 'Лампа',
                    photo: 'wall-light.jpeg',
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    category: 'lights',
                    price: '27.99'
                }
            ],
            currentCategory: "all",
            showItem: false,
            fullItem: {}
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }

    render() {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders} onDelete={this.deleteOrder} />
                <Categories chooseCategory={this.chooseCategory} />
                <Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addToOrder} currentCategory={this.state.currentCategory} />

                {this.state.showItem && <ShowItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}

                <Footer />
            </div>
        );
    }

    onShowItem(item) {
        this.setState({ fullItem: item })
        this.setState({ showItem: !this.state.showItem })
    }

    chooseCategory(category) {
        this.setState({ currentCategory: category })
    }

    deleteOrder(id) {
        this.setState({ orders: this.state.orders.filter((el) => el.id !== id) })
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id) {
                isInArray = true
            }
        })

        if (!isInArray) {
            this.setState({ orders: [...this.state.orders, item] })
        }

    }
}

export default App