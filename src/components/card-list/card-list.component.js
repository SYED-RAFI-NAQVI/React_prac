import React from 'react';
import './card-list.styles.css'

export const CardList = (props) => {
        return <div className='cardList'>
                {props.monsters.map(monster => (<p key={monster.id} > {monster.name}, {monster.username} {monster.geo} </p>))}
        </div>
}