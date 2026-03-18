'use client'
import Link from "next/link";
import style from "../styles/footer.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
export const Footer = () => {
    const downloadResume = () => {
        const fileId = "1kU21LaMwcApV2RzK333hwGcdFB0gmFm3"
        const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`
        const link = document.createElement('a');
        link.href = directDownloadUrl;
        link.download = 'Josh_resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
  return (
    <div className={`main`}>
      <div className={style.footer_container}>
        <div className={style.reserved}>
          <p>&copy; 2026 JOSH, ALL RIGHTS RESERVED</p>
        </div>
        <div className={style.resume} onClick={downloadResume}>
            <FaCloudDownloadAlt/>
            <p>My Resume</p>
        </div>
        <div className={style.links}>
          <Link href="https://github.com/SamGombs20" className={style.link}>
          <FaGithub/>
          </Link>
          <Link href="https://www.linkedin.com/in/samuel-gomba-554aa81aa" className={style.link}>
          <FaLinkedinIn/>
          </Link>
        </div>
      </div>
    </div>
  );
};
