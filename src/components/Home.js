import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const skills = [
    'Full Stack Web Developer',
    'Android Developer',
    'Smartcontract Developer',
    'Public Speaker',
    'Python Developer'
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentSkillPosition, setCurrentSkillPosition] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentSkillPosition === skills[currentSkillIndex].length + 1) {
        // If the current skill is fully typed, delete it and move on to the next one
        setCurrentSkillPosition(0);
        setCurrentSkillIndex((currentSkillIndex + 1) % skills.length);
      } else if (currentSkillPosition < skills[currentSkillIndex].length) {
        // If the current skill is not fully typed yet, type one more character
        setCurrentSkillPosition(currentSkillPosition + 1);
      } else {
        // If the current skill is fully deleted, start typing it again
        setCurrentSkillPosition(skills[currentSkillIndex].length + 1);
      }
    }, 200);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [currentSkillIndex, currentSkillPosition]);

  const currentSkill = skills[currentSkillIndex].substring(0, currentSkillPosition);

  return (
    <div className="home">
      <div className="homeLeft">
        <p>
          <section className='Line_1'>Hi all. I am</section><br />
          <section className='Name_'>SIDDHARTHA BHATTACHARJEE</section><br />
          <section className='Line_2'> &gt; {currentSkill}<span className="cursor"></span></section>
          <br/>
          <br/>
        </p>
      </div>
      <div className="homeRight"></div>
    </div>
  );
}

export default Home;
