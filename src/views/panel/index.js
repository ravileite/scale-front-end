import React, { useEffect, useState } from 'react'

import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import './panel_style.css'

import Header from '../../components/header'
import User from '../../components/user'
import Pagination from '../../components/pagination'

import api from '../../service/api'

export default function Panel() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [pageArray, setPageArray] = useState([1, 2, 3, 4, 5])

    useEffect(() => {
        getUsers()
    }, [page])

    function getUsers() {
        api.get(`/users?page=${page - 1}`)
            .then(response => {
                setUsers(response.data)
            })
    }


    function renderUser(user) {
        return <User user={user} key={user.id} />
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

    return (
        <div className='panel-page'>
            <Header />
            <div style={{marginBottom: '100px'}}>
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
        </div>
    );
}