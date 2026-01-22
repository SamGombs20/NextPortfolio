'use client'
import Image from "next/image";
import style from "../styles/projects.module.css";
export const Projects = () => {
    const handleClick =(link:string)=>{
        window.open(link, "_blank", "noopener noreferrer")
    }
  return (
    <div className={style.main} id="works">
      <div className={style.projects_container} >
        <p className={`${style.title} title-text`}>My Projects</p>
        <div className={style.projects_list}>
          {/* <div className={style.project_container}>
            <Image
              src="/obesi_web.png"
              alt=""
              width={320}
              height={290}
              className={style.project_img}
            />
            <div className={style.project_details}>
                
                <p className={style.project_category}>Web application</p>
                <p className={style.project_title}>ObesiScan</p>
            </div>
          </div> */}
          <div className={style.project_container} onClick={() => handleClick("https://obesi-scan-web.vercel.app/")}>
            <div className={style.image_wrapper}>
              <Image
                src="/obesi_web.png"
                alt="ObesiScan project screenshot"
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
              <p className={style.project_category}>Web application</p>
              <p className={style.project_title}>ObesiScan</p>
            </div>
          </div>
          <div className={style.project_container} onClick={()=> handleClick("https://coursetrackerweb.netlify.app/")}>
           <div className={style.image_wrapper}>
              <Image
                src="/course_web.png"
                alt="Course Tracker project screenshot"
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
              <p className={style.project_category}>Web application</p>
              <p className={style.project_title}>Course Tracker</p>
            </div>
          </div>
          <div className={style.project_container} onClick={()=> handleClick("https://github.com/SamGombs20/TaxiPricingModel/blob/main/notebooks/taxiPricingPrediction.ipynb")}>
           <div className={style.image_wrapper}>
              <Image
                src="/taxi.webp"
                alt="Course Tracker project screenshot"
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
              <p className={style.project_category}>ML Model</p>
              <p className={style.project_title}>Taxi Fare Prediction</p>
            </div>
          </div>
          <div className={style.project_container} onClick={()=> handleClick("https://github.com/SamGombs20/ObesityApp/blob/master/ObesiScan.mp4")}>
           <div className={style.image_wrapper}>
              <Image
                src="/obesi_mobile.png"
                alt="ObesiScan project screenshot"
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
              <p className={style.project_category}>Mobile application</p>
              <p className={style.project_title}>ObesiScan</p>
            </div>
          </div>
          <div className={style.project_container} onClick={()=> handleClick("https://github.com/SamGombs20/StockPrediction/blob/main/Classification_stock.ipynb")}>
           <div className={style.image_wrapper}>
              <Image
                src="/stock.webp"
                alt="Stock prediction project screenshot"
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
              <p className={style.project_category}>ML Model</p>
              <p className={style.project_title}>Stock Price Prediction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
