import React from 'react'
import { Logo } from './Logo'
import { NavComp } from './NavComp'
import { NavContent } from './NavContent'

export const StyleComp = () => {
    return (
        <div>
            <NavComp>
                <Logo image = {"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Imgur_logo.svg/1920px-Imgur_logo.svg.png"} />
                <NavContent />
            </NavComp>
        </div>
    )
}
