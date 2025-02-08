import '/Users/elijahmoye/Desktop/myReact/MemoryCard/src/Components/Gameboard/Gameboard.css'
import { useState, useEffect } from 'react'


export function Gameboard(prop){




    return(

        <>
            <div id='board'>
                {prop.cardInfo.map((character) => (

                    <>
                        <div className="cell" onClick={prop.shuffle}>{character.name}</div>
                    </>
                ))}
            </div>       
        </>
    )
}
