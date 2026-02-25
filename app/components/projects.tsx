'use client'
import Image from "next/image";
import style from "../styles/projects.module.css";
import { projects } from "../data/projects";
export const Projects = () => {
    const handleClick =(link:string)=>{
        window.open(link, "_blank", "noopener noreferrer")
    }
  return (
    <div className={style.main} id="works">
      <div className={style.projects_container} >
        <p className={`${style.title} title-text`}>My Projects</p>
        <div className={style.projects_list}>
          {projects.map((project, index)=>(
            <div className={style.project_container} onClick={() => handleClick(project.link)} key={index}>
            <div className={style.image_wrapper}>
              <Image
                src={project.imageSrc}
                alt={`${project.title} screenshot`}
                width={320}
                height={290}
                className={style.project_img}
              />

             
              <div className={style.overlay}>
                <div className={style.overlay_content}>
                  
                  <span className={style.view_btn}>See Project →</span>
                </div>
              </div>
            </div>

           
            <div className={style.project_details}>
              <p className={style.project_category}>{project.category}</p>
              <p className={style.project_title}>{project.title}</p>
            </div>
          </div>
          ))}
          
          
        </div>
      </div>
    </div>
  );
};
