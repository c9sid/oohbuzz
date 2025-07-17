import Image from 'next/image'
import React from 'react'

const India = () => {
    return (
        <div>
            <Image src={'/india.png'} layout="responsive" alt='India Map' />
        </div>
    )
}

export default India