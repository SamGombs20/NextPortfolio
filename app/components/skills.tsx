import style from "../styles/skills.module.css";
import { FaBootstrap, FaCss3, FaDocker, FaHtml5, FaJava, FaLaptopCode, FaMobile, FaPython, FaReact } from "react-icons/fa6";
import { RiJavascriptLine, RiNextjsLine } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiAndroidstudio, SiFastapi, SiJetpackcompose, SiJira, SiKotlin, SiMui, SiSanity, SiSqlite } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { TbApi, TbFileTypeXml } from "react-icons/tb";
import { FaTools } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
export const Skills = () => {
  return (
    <div className={`main ${style.main}`}>
      <div className={style.container}>
        <p className={`title-text ${style.title}`}>Tech Stack</p>
        <div className={style.skills_list}>
          <div className={style.skill}>
            <div className={style.title_container}>
              <MdOutlineWeb className={style.icon}/>
              <p className={style.skill_title}>Frontend</p>
            </div>
            <div className={style.skill_icons}>
                <div className={style.icon_wrapper}>
                    <FaReact/>
                    <span className={style.tooltip}>React</span>
                </div>
                <div className={style.icon_wrapper}>
                    <RiNextjsLine/>
                    <span className={style.tooltip}>NextJS</span>
                </div>
                <div className={style.icon_wrapper}>
                    <BiLogoTypescript/>
                    <span className={style.tooltip}>Typescript</span>
                </div>
                <div className={style.icon_wrapper}>
                    <RiJavascriptLine/>
                    <span className={style.tooltip}>Javascript</span>
                </div>
                <div className={style.icon_wrapper}>
                    <SiMui/>
                    <span className={style.tooltip}>MUI</span>
                </div>
                <div className={style.icon_wrapper}>
                    <FaHtml5/>
                    <span className={style.tooltip}>HTML5</span>
                </div>
                <div className={style.icon_wrapper}>
                    <FaCss3/>
                    <span className={style.tooltip}>CSS</span>
                </div>
                <div className={style.icon_wrapper}>
                    <FaBootstrap/>
                    <span className={style.tooltip}>Bootstrap</span>
                </div>
            </div>
          </div>
          <div className={style.skill}>
            <div className={style.title_container}>
                <FaLaptopCode className={style.icon}/>
                <p className={style.skill_title}>Backend</p>
            </div>
            <div className={style.skill_icons}>
                <div className={style.icon_wrapper}> 
                    <FaPython/>
                    <span className={style.tooltip}> Python</span>
                </div>
                <div className={style.icon_wrapper}>
                    <SiFastapi/>
                    <span className={style.tooltip}>FastAPI</span>
                </div>
                <div className={style.icon_wrapper}>
                    <BiLogoPostgresql/>
                    <span className={style.tooltip}>Postgres</span>
                </div>
                <div className={style.icon_wrapper}>
                    <TbApi/>
                    <span className={style.tooltip}>REST</span>
                </div>
            </div>
          </div>
          <div className={style.skill}>
            <div className={style.title_container}>
                <FaMobile className={style.icon}/>
                <p className={style.skill_title}>Mobile</p>
            </div>
            <div className={style.skill_icons}>
                <div className={style.icon_wrapper}>
                    <SiKotlin/>
                    <span className={style.tooltip}>Kotlin</span>
                </div>
                <div className={style.icon_wrapper}>
                    <FaJava/>
                    <span className={style.tooltip}>Java</span>
                </div>
                <div className={style.icon_wrapper}>
                    <SiJetpackcompose/>
                    <span className={style.tooltip}>Jetpack</span>
                </div>
                <div className={style.icon_wrapper}>
                    <SiSqlite/>
                    <span className={style.tooltip}>SQLite</span>
                </div>
                <div className={style.icon_wrapper}>
                    <TbFileTypeXml/>
                    <span className={style.tooltip}>XML</span>
                </div>
            </div>
          </div>
          <div className={style.skill}>
            <div className={style.title_container}>
                <FaTools className={style.icon}/>
                <p className={style.skill_title}>Tools and Platforms</p>
            </div>
            <div className={style.skill_icons}>
                <div className={style.icon_wrapper}>
                    <SiAndroidstudio/>
                    <span className={style.tooltip}>Studio</span>
                </div>
                <div className={style.icon_wrapper}>
                    <VscVscode/>
                    <span className={style.tooltip}>VSCode</span>
                </div>
                <div className={style.icon_wrapper}>
                     <IoLogoFirebase/>
                     <span className={style.tooltip}>Firebase</span>
                </div>
                <div className={style.icon_wrapper}>
                    <SiSanity/>
                    <span className={style.tooltip}>Sanity</span>
                </div>
                <div className={style.icon_wrapper}>
                    <FaDocker/>
                    <span className={style.tooltip}>Docker</span>
                </div>
                <div className={style.icon_wrapper}>
                    <SiJira/>
                    <span className={style.tooltip}>Jira</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
