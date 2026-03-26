import React from 'react'
import Homehero from '../../Components/Homehero/Homehero'
import EssentialSkill from '../../Components/EssentialSkill/EssentialSkill'
import Creative from '../../Components/Creative/Creative'
import SchoolCampus from '../../Components/SchoolCampus/SchoolCampus'
import Education from '../../Components/Education/Education'
import Teacher from '../../Components/Teacher/Teacher'
import Activites from '../../Components/Activites/Activites'
import Blog from '../../Components/Blog/Blog'

const Home = () => {
  return (
    <div>
        <Homehero/>
        <EssentialSkill/>
        <Creative/>
        <SchoolCampus/>
        <Education/>
        <Teacher/>
        <Activites/>
        <Blog/>
    </div>
  )
}

export default Home