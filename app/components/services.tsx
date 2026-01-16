import { TbDeviceImac } from "react-icons/tb"
import style from "../styles/services.module.css"
import { CiMobile3 } from "react-icons/ci"
import { LuBrainCircuit } from "react-icons/lu"
export const Services = () => {
    return (
        <div className={style.main}>
            <div className={style.profession_container}>
                <div className={style.profession}>
                    <p className={style.title}>What I Do</p>
                    <p>I build modern, responsive web and mobile applications that solve real problems and deliver great user experience. <br />
                        I create fast intuitive interfaces - from interactive dashboards and health tools to news platforms and loan management systems to specialized e-commerce systems. I connect them to robust backends and focus on clean, maintainable code using Git and Agile workflows.<br />
                        I thrive in focused teams, delivering products that solve problems and provide excellent user experiences.</p>
                </div>
                <div className={style.sub_professions_container}>
                    <div className={style.sub_profession}>
                        <div>
                            <TbDeviceImac className={style.icon} />
                        </div>
                        <div>
                            <p>Web Development</p>
                            <p>11 projects</p>
                        </div>
                    </div>
                    <div className={style.sub_profession}>
                        <div>
                            <CiMobile3 className={style.icon}/>
                        </div>
                        <div>
                            <p>Mobile App Development</p>
                            <p>4 projects</p>
                        </div>
                    </div>
                    <div className={style.sub_profession}>
                        <div>
                            <LuBrainCircuit className={style.icon}/>
                        </div>
                        <div>
                            <p>ML Models</p>
                            <p>3 projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}