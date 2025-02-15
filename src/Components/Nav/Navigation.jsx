import '/Users/elijahmoye/Desktop/myReact/MemoryCard/src/Components/Nav/Navigation.css'
import spiderGif from '/Users/elijahmoye/Desktop/myReact/MemoryCard/src/Reference Page/logoSpider.gif'

export function Navigation({scores, highScores}){


    return (


        <>
        
                    <div>Current Score: {scores}</div>
                    <img src={spiderGif} alt="" id='logo' width={'100px'} height={'100px'}/>
                    <div>Highest Score: {highScores}</div>
        </>
    )
}