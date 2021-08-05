import React from 'react'

import './header_style.css'

export default function Header({changeMenu}) {
    return (
        <header className="header">
            <div className='header-menu'>
                <h1 onClick={() => { changeMenu('USERS') }} className='menu-options'>Questão 1</h1>
                <h1 onClick={() => { changeMenu('COUNTRIES') }} className='menu-options'>Questão 2</h1>
            </div>
        </header>
    );
}