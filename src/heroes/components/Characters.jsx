import React from 'react'

export const Characters = ({ characters, hero }) => {
    characters = characters.split(', ').filter(name => name !== hero).join(', ')
    return (
        (characters.length)
            ? (<h3 className='hero-body-text'>
                <span className='font-display text-xl tracking-tighter mr-2'>Characters: </span> {characters}.
            </h3>)
            : ''
    )
}
