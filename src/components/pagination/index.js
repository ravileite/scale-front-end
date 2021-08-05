import React, {useState} from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import './pagination_style.css'

import PageButton from '../../components/pageButton'

export default function Pagination({ page, selectPageButton, singleLeft, singleRight, pageArray }) {
    const [totalPages] = useState(2)

    return (
        <div className='pages'>
            <button className='arrow-button' disabled={!(page > 1)}
                onClick={singleLeft}>
                <FaAngleLeft style={{ color: `${page > 1 ? '#8E8E8E' : 'transparent'}`}} />
            </button>
            <PageButton page={pageArray[0]} changePage={selectPageButton} selected={pageArray[0] === page} />
            <PageButton changePage={selectPageButton} page={pageArray[1]} selected={pageArray[1] === page} />
            <button className='arrow-button' disabled={!(page < totalPages)}
                onClick={singleRight}>
                <FaAngleRight style={{ color: `${page < totalPages ? '#8E8E8E' : 'transparent'}`}} />
            </button>
        </div>
    )
}