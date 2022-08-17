import React from "react";

const Song = ({artist, position, title, image, audio}) => {


    return(
        <div>
        <b>{position}</b>
        <p>{artist}</p>
        <p>{title}</p>
        <img src={image} alt="jhbhbhb" ></img>
        <audio controls src={audio} type="audio/mpeg" ></audio>
        <hr></hr>

        </div>
        
        
    ) 

}

export default Song;