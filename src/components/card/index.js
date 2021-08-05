import React, { useState } from 'react'

import '../../../node_modules/font-awesome/css/font-awesome.min.css'

import './card_style.css'

export default function Card({ item, menu }) {
    let string = ' '

    if(menu === 'COUNTRIES'){
        item.borders.forEach(code=> {
            string = string + ' ' + code
        });
    }

    return (
        <div>
            {menu === 'USERS' ?
                <div className='card'>
                    <img className='card-img' src={item.avatar} />
                    <p className='card-text'>{item.first_name}</p>
                    <p className='card-text'>{item.last_name}</p>
                    <p className='card-text'>{item.email}</p>
                </div>
                :
                <div className='card'>
                    <p className='card-text'>{item.country_name}</p>
                    <p className='card-text'>{item.code}</p>
                    <p className='card-text'>{string}</p>
                    <p className='card-text'>{item.borders.length}</p>
                </div>
            }
        </div>
    )
}