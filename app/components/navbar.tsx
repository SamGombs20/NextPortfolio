import { useState } from "react"
import style from "../styles/navbar.module.css"
const Navbar =()=>{
    const [open,setOpen] = useState(false)

    const handleClick = ()=>{
        setOpen(!open)
    }
    return(
        <nav className={style.navbar}>
            <div>
                <p className={style.nav_title}>Joshua</p>
            </div>
            <div className={style.nav_items}>
                <ul className={open ? `${style.menu_items} ${style.open}`:style.menu_items}>
                    <li>
                        <a href="#" className={style.nav_link}>Services</a>
                    </li>
                    <li>
                        <a href="#" className={style.nav_link}>Works</a>
                    </li>
                    <li>
                        <a href="#" className={style.nav_link}>Experience</a>
                    </li>
                </ul>
            </div>
            <div className={style.nav_contact}>
                <p>+254 115 185 192</p>
            </div>
            <div className={style.nav_toggle} onClick={handleClick}>
                <i className={open? `fas fa-times`:`fas fa-bars`}></i>
            </div>
        </nav>
    )
}
export default Navbar