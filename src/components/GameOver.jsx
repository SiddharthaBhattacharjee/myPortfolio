import React from 'react'

function GameOver(props) {
  return (
    <div
      id='GameBoard'
      style={{
        width: props.width,
        height: props.height,
        background: 'rgba(1, 22, 39, 0.84)',
        borderWidth: '0px',
        borderRadius: '6px',
        boxShadow: 'inset 1px 5px 11px rgba(2, 18, 27, 0.71)',

      }}>
      <div id='GameOver' style={{ fontSize: '18px', FontFace: 'Fira Code, Courier New', fontWeight: '500', display:'flex',flexDirection:'column',justifyContent:'space-evenly' }}>
        <div id='GameOverText' style={{fontsize:'22px',padding:'10px'}}>GAME OVER</div>
        <div>
          <div style={{color:'#43D9AD'}}>Your score: {props.score}</div>
          <div style={{color:'#43D9AD'}}>
            {props.newHighScore ? 'New local ' : 'Local '}high score:{' '}
            {props.highScore}
          </div>
        </div>
        <div id='PressSpaceText'>Press Space to restart</div>
      </div>
    </div>
  )
}

export default GameOver
