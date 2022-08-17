import React from "react";

const Song = ({song, artist, position, title, image, audio, price, link, rights}) => {


    return(
        <div>
        <b>{position}</b>
        <p>{artist}</p>
        <p>{title}</p>
        <p>{price}</p>
        <p>{song["im:price"].label}</p>
        <img src={image} alt="jhbhbhb" ></img>
        <audio controls src={audio} type="audio/mpeg" ></audio>
        <p><a href={link}>Click here to Buy now!</a></p>
        <p>{rights}</p>
        <hr></hr>

        </div>
        
        
    ) 

}

export default Song;