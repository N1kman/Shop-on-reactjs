import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Items from './Components/Items'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
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
            ]
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <Header />
                <Items items={this.state.items} />
                <Footer />
            </div>
        );
    }
}

export default App