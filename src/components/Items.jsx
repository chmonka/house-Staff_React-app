import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
    render() {
        return (
            <section className='shop'>
                <div className='container'>
                    {this.props.items.map(element => (
                        <Item key={element.id} item={element}/>
                    ))}
                </div>  
            </section>
        )
    }
}

export default Items