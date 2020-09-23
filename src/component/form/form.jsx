import React, { Component } from 'react';
import List from '../ListItems/ListItems'
import './form.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class form extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            items: [],
            currentItem:{
                text: '',
                key: ''
            } 
        }
    }

    handleInput = (e) => {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
           
        })
       
    }

    addItems = (e) => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem)
        if (newItem !== ""){
           const newItems = [...this.state.items, newItem]
           this.setState({
               items: newItems,
               currentItem: {
                   text: '',
                   key: ''
               }
           })
        }
       
    }


    deleteItems = (key) => {
        const filterdItems = this.state.items.filter(item => item.key !== key);
        this.setState({
            items: filterdItems
        })
    }
    render() {
        return (
            <div className='todo-app'>
                <form onSubmit={this.addItems}>
                    <div className='form-text'>
                    <input type='textbox' 
                    value={this.state.currentItem.text} 
                    onChange={this.handleInput}/>&nbsp;
                    <button>Add</button>
                    </div>
                    
                </form>
                <List val={this.state.items}
                deleteItem={this.deleteItems}></List>
                
            </div>
        )
    }
}

export default form;
