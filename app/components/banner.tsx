import style from "../styles/banner.module.css"
export const Banner = () => {
    return (
        <div className={style.banner_container}>
            <div className={style.main}>
                <div className={style.intro}>
                    <p className={style.intro_name}>Hey There, <br />I'm Joshua</p>
                    <p className={style.intro_desc}>I build mobile apps, web applications, and machine learning models that solve real problems. I love what I do.  </p>
                </div>
                <div className={style.banner_img}>

                </div>
                <div className={style.additional_info}>
                    <div className={style.email_container}>
                    <p>gombajosh18@gmail.com</p>
                </div>
                <div className={style.experience_container}>
                    <p className={style.years}>2</p>
                    <p>YEARS <br />EXPERIENCE</p>
                </div>
                </div>
                
            </div>
        </div>
    );
}