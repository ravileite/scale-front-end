import React, { useEffect, useState } from 'react'

import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import './panel_style.css'

import Header from '../../components/header'
import Card from '../../components/card'
import Pagination from '../../components/pagination'

import api from '../../service/api'

export default function Panel() {
    const [users, setUsers] = useState([])
    const [countries, setCountries] = useState([])
    const [page, setPage] = useState(1)
    const [pageArray, setPageArray] = useState([1, 2, 3, 4, 5])
    const [menu, setMenu] = useState('USERS')

    useEffect(() => {
        if (menu === 'USERS') getUsers()
        if (menu === 'COUNTRIES') getCountries()
    }, [page, menu])

    function getUsers() {
        api.get(`/users?page=${page - 1}`)
            .then(response => {
                setUsers(response.data)
            })
    }

    function getCountries() {
        api.get(`/countries`)
            .then(response => {
                setCountries(response.data)
            })
    }

    function renderUser(user) {
        return <Card item={user} menu={menu} key={user.id} />
    }

    function renderCountry(country) {
        return <Card item={country} menu={menu} key={country.id} />
    }


    const selectPageButton = (value) => {
        setPage(value)
    }

    const subtractPageArray = () => {
        let auxArray = []
        if (page - 1 < pageArray[0]) {
            pageArray.map(value => auxArray.push(value - 1))
            setPageArray(auxArray)
        }
    }

    const addPageArray = () => {
        let auxArray = []
        if (page + 1 > pageArray[4]) {
            pageArray.map(value => auxArray.push(value + 1))
            setPageArray(auxArray)
        }
    }

    async function changeMenu(item) {
        setMenu(item)
    }

    return (
        <div className='panel-page'>
            <Header changeMenu={changeMenu} />
            {menu === 'USERS' ?
                <div style={{ marginBottom: '100px' }}>
                    <h1 style={{ textAlign: 'center' }}>Lista de Usuários</h1>
                    <div className='menu'>
                        <p className='menu-text'>Avatar</p>
                        <p className='menu-text'>Nome</p>
                        <p className='menu-text'>Sobrenome</p>
                        <p className='menu-text'>Email</p>
                    </div>
                    <div >
                        {users.map(renderUser)}
                    </div>
                    <div className='pages'>
                        <Pagination page={page} selectPageButton={selectPageButton} pageArray={pageArray}
                            singleLeft={() => { setPage(page - 1); subtractPageArray() }}
                            singleRight={() => { setPage(page + 1); addPageArray() }} />
                    </div>
                </div>
                :
                <div>
                    <h1 style={{ textAlign: 'center' }}>Lista de Países</h1>
                    <div className='menu'>
                        <p className='menu-text'>País</p>
                        <p className='menu-text'>Código</p>
                        <p className='menu-text'>Fronteiras</p>
                        <p className='menu-text'>Total</p>
                    </div>
                    <div >
                        {countries.map(renderCountry)}
                    </div>
                </div>
            }
        </div>
    );
}