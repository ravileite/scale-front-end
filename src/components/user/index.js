import React from 'react'

import '../../../node_modules/font-awesome/css/font-awesome.min.css'

import './product_style.css'

export default function Product({ user }) {

    return (
        <div className='user-card'>
            <img className='card-img' src ={user.avatar}/>
            <p className='card-text'>{user.first_name}</p>
            <p className='card-text'>{user.last_name}</p>
            <p className='card-text'>{user.email}</p>
        </div>

    )
}