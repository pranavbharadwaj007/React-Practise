import React from 'react';
function Card(pr){
    return(
      <div className="cards">
      <div className="card">
        <img src={pr.imgsrc} alt="myPic" className="card_img" />
        <div className="card_info">
    <span className="card_category">{pr.sname}</span>
    <h3 className="card_title">{pr.title}</h3>
        <a href={pr.link} target="_blank">
          <button>Watch Now</button>
        </a>
        </div>
      </div>
    </div>
    )
  }
  export default Card;