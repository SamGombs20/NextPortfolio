import style from "../styles/experience.module.css";
export const Experience = () => {
  return (
    <div className={style.main}>
      <div className={style.experience_container}>
        <p className={style.title}>Education & Experience</p>
        <div>
          <div className={style.education}>
            <p className={style.year}>2020-2024</p>
            <div>
              <p className={style.course}>BSc. Computer Science</p>
              <p>JKUAT</p>
            </div>
            <div>
                <p className={style.year}>Sep 2024 - Present</p>
                <p>Software Engineer (Intern)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
