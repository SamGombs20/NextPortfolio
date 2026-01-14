import style from "../styles/banner.module.css"
export const Banner =()=>{
    return (
        <div className={style.banner_container}>
            <div className={style.main}>
                <div className={style.intro}>
                <p>Hey There, <br />I'm Joshua</p>
            </div>
            </div>
        </div>
    );
}