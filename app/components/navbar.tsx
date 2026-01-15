'use client'
import { useState } from "react"
import style from "../styles/navbar.module.css"
import { FaBars, FaTimes } from "react-icons/fa"
const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div className={style.main}>
            <div className={style.navbar}>
                <div>
                    <p className={style.nav_title}>Joshua</p>
                </div>
                <div className={style.menu_items}>
                    <div className={`${style.nav_items} ${style.responsive}`}>
                    <ul className={open ? `${style.menu_items} ${style.open}` : style.menu_items}>
                        <li>
                            <a href="#" className={style.nav_link}>SERVICES</a>
                        </li>
                        <li>
                            <a href="#" className={style.nav_link}>WORKS</a>
                        </li>
                        <li>
                            <a href="#" className={style.nav_link}>EXPERIENCE</a>
                        </li>
                    </ul>
                </div>
                <div className={`${style.nav_contact} ${style.responsive}`}>
                    <p>+254 115 185 192</p>
                </div>
                </div>
                <div className={style.nav_toggle} onClick={handleClick}>
                    {open ?<FaTimes/>:<FaBars/>}
                </div>
            </div>
        </div>
    )
}
export default Navbar