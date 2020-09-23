import React from 'react'
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function ListItems(props) {

    const list = props.val.map( item => {
        return <div className='list-item' key={item.key}>
                <p>{item.text}
                <span>
                    <FontAwesomeIcon className='icon' icon='trash'
                    onClick={ () => props.deleteItem(item.key)} />
                </span>
                </p>
               
        </div>
    })
    return (
        <div>
            {list}
        </div>
    )
}

export default ListItems;