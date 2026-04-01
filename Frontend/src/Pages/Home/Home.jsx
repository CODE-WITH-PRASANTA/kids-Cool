import React from 'react'
import Homehero from '../../Components/Homehero/Homehero'
import EssentialSkill from '../../Components/EssentialSkill/EssentialSkill'
import Creative from '../../Components/Creative/Creative'
import SchoolCampus from '../../Components/SchoolCampus/SchoolCampus'
import Education from '../../Components/Education/Education'
import Teacher from '../../Components/Teacher/Teacher'
import Activites from '../../Components/Activites/Activites'
import Blog from '../../Components/Blog/Blog'
import TeachingMethodology from '../../Components/TeachingMethodology/TeachingMethodology'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Contactfrom from '../../Components/ContactForm/ContactForm'

const Home = () => {
  return (
    <div>
      <section id="home">
        <Homehero/>
      </section>

      <section id="why">
        <EssentialSkill/>
      </section>

      <section id="history">
        <Creative/>
      </section>

      <section id="facility">
        <SchoolCampus/>
      </section>

      <section id="gallery">
        <Education/>
      </section>
      
      <section id="teachers">
        <Teacher/>
      </section>

      <section id="programms">
        <Activites/>
      </section>
      
      <section id="news">
        <Blog/>
      </section>
       
      <section id="stage">
        <TeachingMethodology/>
      </section>

        <section id="testimonial">
          <Testimonial/>
        </section> 

        
        <Contactfrom />
        
    </div>
  )
}

export default Home