import { FaUserGraduate } from "react-icons/fa";
import style from "../styles/banner.module.css"
export const Banner = () => {
    return (
        <div className={style.banner_container}>
            <div className={style.main}>
                <div className={style.intro}>
                    <p className={style.intro_name}>Hey There, <br />I'm Joshua</p>
                    <p className={style.intro_desc}>
                        <strong>Full-Stack Developer</strong> | React • Next.js • FastAPI • Android • ML 
                        <br /> <br />
                        
                        I build mobile apps, web applications, and machine learning models that solve real problems. I love what I do.  </p>
                </div>
                <div className={style.banner_img}>

                </div>
                <div className={style.additional_info}>
                    <div className={style.email_container}>
                        <p>gombajosh18@gmail.com</p>
                    </div>
                    <div className={style.experience_container}>
                        <div className={style.experience_child}>
                            <p className={style.years}>2</p>
                            <p>YEARS <br />EXPERIENCE</p>
                        </div>
                        {/* <div className={`${style.experience_child} ${style.education}`}>
                            <FaUserGraduate className={style.icon}/>
                            <p>BSc. Computer Science</p>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
}