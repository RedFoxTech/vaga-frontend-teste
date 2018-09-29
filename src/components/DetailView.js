import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
    const { id, name, sprite, type } = pokemon;
    console.log(pokemon)

    return (
        <div className="detail-view">
            <a href="" className="close">x Close</a>
            <h2 className='data-name'>{name}</h2>
            <img src={sprite} className='sprite-image' alt={name} />
            <p className="data-char">Id: {id}</p>
            <p className="data-char">Type: {type}</p>
        </div>
    )
}

export default DetailView;