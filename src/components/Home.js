import React, { useState, useEffect } from 'react';
import './Home.css';
import rules from './res/controlls.png';
import Snake from './SnakeGame';

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
          <section className='Line_1'>Hi all. I am</section>
          <section className='Name_'>SIDDHARTHA BHATTACHARJEE</section>
          <section className='Line_2'> &gt; {currentSkill}<span className="cursor"></span></section>
        </p>
        <br/>
        <br/>
          <section className='Comment'>// Enjoy playing the snake game</section>
          <section className='Comment'>// you can see  the code on my Github page</section>
          <p className='githublink'><span style={{color:'#4D5BCE'}}>const&nbsp;</span><span style={{color:'#43D9AD'}}>githubLink&nbsp;</span> <span style={{color:"white"}}> =&nbsp;</span><a href="https://github.com/SiddharthaBhattacharjee/myPortfolio" target="_blank" rel="noreferrer" className='gtlink'>“https://github.com/SiddharthaBhattacharjee/myPortfolio”</a><span style={{color:"white"}}>;</span></p>
      </div>
      <div className="homeRight">
        <div className="homeRightInner">
          <div className="homeRightInnerTop">
            <Snake percentageWidth={80} snakeColor="#43D9AD" appleColor="#43D9AD"/> 
          </div>
          <div className="homeRightInnerBottom">
            <div >
              <section className='GameComment'>/* A fun little Snake game to keep you entertained */</section>
              <section className='GameComment'>/* use the keyboard arrow keys to play */</section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
