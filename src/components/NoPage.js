import './nopage.css'
const NoPage = () => {

  return (
    <div style={{display:'flex', width:'100%',height:'79.2vh'}}>
      <div className="sideMenu">
        hi
      </div>
      <div style={{width:"100%", height:'79.2vh'}}>
        <div className="glitch-container">
          <div className={`glitch-404 glitch`}>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </div>
          <p className="not-found">This is not the page you are looking for</p>
        </div>
      </div>
    </div>

  );
};

export default NoPage;