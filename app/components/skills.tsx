import style from "../styles/skills.module.css";
import { FaBootstrap, FaCss3, FaDocker, FaHtml5, FaJava, FaLaptopCode, FaMobile, FaPython, FaReact } from "react-icons/fa6";
import { RiJavascriptLine, RiNextjsLine } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiAndroidstudio, SiFastapi, SiJetpackcompose, SiJira, SiKotlin, SiMui, SiSanity, SiSqlite } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { TbApi, TbFileTypeXml } from "react-icons/tb";
import { FaTools } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
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
                <FaReact/>
                <RiNextjsLine/>
                <BiLogoTypescript/>
                <RiJavascriptLine/>
                <SiMui/>
                <FaHtml5/>
                <FaCss3/>
                <FaBootstrap/>
            </div>
          </div>
          <div className={style.skill}>
            <div className={style.title_container}>
                <FaLaptopCode className={style.icon}/>
                <p className={style.skill_title}>Backend</p>
            </div>
            <div className={style.skill_icons}>
                <FaPython/>
                <SiFastapi/>
                <BiLogoPostgresql/>
                <TbApi/>
            </div>
          </div>
          <div className={style.skill}>
            <div className={style.title_container}>
                <FaMobile className={style.icon}/>
                <p className={style.skill_title}>Mobile</p>
            </div>
            <div className={style.skill_icons}>
                <SiKotlin/>
                <FaJava/>
                <SiJetpackcompose/>
                <SiSqlite/>
                <TbFileTypeXml/>
            </div>
          </div>
          <div className={style.skill}>
            <div className={style.title_container}>
                <FaTools className={style.icon}/>
                <p className={style.skill_title}>Tools and Platforms</p>
            </div>
            <div className={style.skill_icons}>
                <SiAndroidstudio/>
                <VscCode/>
                <IoLogoFirebase/>
                <SiSanity/>
                <FaDocker/>
                <SiJira/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
