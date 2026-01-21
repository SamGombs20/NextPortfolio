import style from "../styles/skills.module.css"
export const Skills =()=>{
    return(
        <div className={`main ${style.main}`}>
            <div className={style.container}>
                <p className={`title-text ${style.title}`}>Tech Stack</p>
                <div className={style.skills_lists}>
                    <div>
                        <p>Front</p>
                    </div>
                </div>
            </div>
        </div>
    );
}