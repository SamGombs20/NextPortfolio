import style from "../styles/experience.module.css";
export const Experience = () => {
  return (
    <div className={`${style.main}`} id="experience">
      <div className={`${style.experience_container} main`} >
        <p className={style.title}>Education & Experience</p>
        <div className={style.sub_container}>
          <div className={style.education}>
            <p className={style.year}>2020-2024</p>

            <p className={style.main_text}>BSc. Computer Science</p>
            <p>JKUAT</p>
          </div>
          <div className={style.experience}>
              <p className={style.year}>June 2023 - August 2023</p>
              <p className={style.main_text}>Software Engineer (Attachee)</p>
              <p>Mutall Investment Company Ltd.</p>
            </div>
          <div className={style.experience}>
              <p className={style.year}>Sep 2024 - Present</p>
              <p className={style.main_text}>Software Engineer (Intern)</p>
              <p>Artlly Group Ltd.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
