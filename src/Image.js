import React from 'react';
import "./Image.css";

function Image({key,title,url}) {
    return (
        <div className="card-img">
            <img src={url} alt='demo-img'></img>
            <h3>{title}</h3>
        </div>
    )
}

export default Image
