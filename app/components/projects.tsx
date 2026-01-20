import Image from "next/image";
import style from "../styles/projects.module.css";
export const Projects = () => {
  return (
    <div className={style.main}>
      <div className={style.projects_container}>
        <p className={`${style.title} title-text`}>My Latest Projects</p>
        <div className={style.projects_list}>
          <div className={style.project_container}>
            <Image
              src="/obesi_web.png"
              alt=""
              width={300}
              height={290}
              className={style.project_img}
            />
            <div className={style.project_details}>
                
                <p className={style.project_category}>Web application</p>
                <p className={style.project_title}>ObesiScan</p>
            </div>
          </div>
          <div className={style.project_container}>
            <Image
              src="/course_web.png"
              alt=""
              width={300}
              height={290}
              className={style.project_img}
            />
            <div>
              <p></p>
            </div>
          </div>
          <div className={style.project_container}>
            <Image
              src="/obesi_mobile.png"
              alt=""
              width={300}
              height={290}
              className={style.project_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
