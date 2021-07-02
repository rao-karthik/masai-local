import React from 'react'
import { NavComp } from './NavComp'
import { NavTiles } from './NavTiles'

export const Navbar = () => {
    return (
        <div>
            <NavComp>
                <NavTiles />
            </NavComp>
        </div>
    )
}
