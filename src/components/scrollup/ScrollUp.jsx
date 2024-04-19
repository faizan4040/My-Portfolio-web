import React from 'react'
import "./ScrollUp.css"

const ScrollUp = () => {
    window.addEventListener("scroll", function (){
        const scrollup = document.querySelector(".scrollup");

        // when the scroll is higher than 560 viewport height, add
        // the show-scroll class to a tag with the scroll-class
        if(this.scroll >= 560) scrollup.classList.add
        ("show-scroll")
        else scrollup.classList.remove("show-scroll");
    })
    
  return (
    <a href='@' className='scrollup'>
        <li className='uil uil-arrow-up scrollup__icon'></li>
    </a>
  )
}

export default ScrollUp
