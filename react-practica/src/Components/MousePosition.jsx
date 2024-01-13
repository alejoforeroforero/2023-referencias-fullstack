import React, { useEffect, useState } from 'react'

const MousePosition = () => {

    let [mouseX, setMouseX] = useState(0)

    const printX = (e) => {
        console.log(e.pageX)
        setMouseX(e.pageX)
    }

    useEffect(() => {
        window.addEventListener('mousemove', printX)
        return ()=> window.removeEventListener('mousemove', printX)
    })

    return (
        <div>{mouseX}</div>
    )
}

export default MousePosition