import React, { useState } from 'react'
import './Qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] =useState(1);

const toggleTab = (index) =>{
    setToggleState(index);
}

  return (
<section className='qualification section'>
    <h2 className='section__title'>Qualification</h2>
    <span className='section__subtitle'>My personal journey</span>


    <div className='qualification__container container'>
        <div className='qualification__tabs'>
            <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" 
            : "qualification__button button--flex" 
            }
            onClick={() => toggleTab(1)}
            >
                 <i className='uil uil-graduation-cap qualification__icon'></i> Education
            </div>

            <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" 
            : "qualification__button button--flex" 
            }
            onClick={() => toggleTab(2)}
            >
                 <i className='uil uil-briefcase-alt qualification__icon'></i>Experience
            </div>
        </div>
        <div className='qualification__section'>
            <div 
              className={
                toggleState === 1 
                ? "qualification__content qualification__content-active" : "qualification__content "}>

                <div className="qualification__data">
                    <div>
                    <h3 className="qualification__title">BCA:</h3>
                        <span className='qualification__subtitle'>Rajasthan Swayat Shasan Mahavidyalaya</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calendar-alt'></i>
                            2018 - 2021
                        </div>
                    </div>

                   <div>
                    <span className='qualification__rounder'></span>
                    <div className='qualification__line'></div>
                   </div>

                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                   </div>

                    <div>
                        <h3 className="qualification__title">Android Developer React Native </h3>
                        <span className='qualification__subtitle'>Youtube University</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calendar-alt'></i>
                            2023 - 2024
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">MCA:</h3>
                        <span className='qualification__subtitle'>Chandigarh University</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calendar-alt'></i>
                            2021 - 2023(December)
                        </div>
                    </div>
                   <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>

                   </div>

                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                   </div>

                    <div>
                        <h3 className="qualification__title">MERN Stack Developer</h3>
                        <span className='qualification__subtitle'>Grras Solutions Pvt. Ltd </span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calendar-alt'></i>
                            2024 - present 
                        </div>
                    </div>
                </div>
            </div>

            <div className={
                toggleState === 2 
                ? "qualification__content qualification__content-active" : "qualification__content "}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">M.Tech</h3>
                        <span className='qualification__subtitle'>Pending.....</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i>
                            2025 coming soon
                        </div>
                    </div>
                   <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>

                   </div>

                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__Line'></span>
                   </div>

                    <div>
                        <h3 className="qualification__title">UX & UI Designer</h3>
                        <span className='qualification__subtitle'>Grras Solutions Pvt. Ltd</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calendar-alt'></i>
                            2020 - 2021
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Development</h3>
                        <span className='qualification__subtitle'>youtube</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i>
                            2021 - 2023
                        </div>
                    </div>
                   <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>

                   </div>

                </div>
            </div>

        </div>

    </div>
</section>
   
  )
}

export default Qualification
