import React from 'react'

export default function PageButton({ page, selected, changePage }) {
    return (
        <button 
            onClick={() => changePage(page)}
            style={{width: `40px`,
                height: '32px',
                backgroundColor: `${!selected ? '#F5F5F5' : '#167ABC'}`,
                border: '1px solid #E5E5E5',
                color: '#555555',
                borderRadius: '4px', outline: 'none', 
                cursor: 'pointer', marginLeft: `8px`, 
                marginRight: `8px`}}>
            {page}
        </button>
    )
}