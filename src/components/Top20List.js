import React from "react";
import Song from "./Song"


const SongList = ({songs}) => {

    const songNodes = songs.map((song, index) => {
        return (
            <Song
              key={song.id.attributes["im:id"]}
              price={song["im:price"].label}
              position={index + 1}
              title={song['im:name'].label}
              artist={song['im:artist'].label}
              image={song['im:image'][1].label}
              audio={song.link[1].attributes.href}
              song={song}
              link={song.link[0].attributes.href}
              rights={song.rights.label}
              
            
            />
          )
    })

    return (
        <div>
            <ul>
                {songNodes}
            </ul>
        </div>
    )
}

export default SongList