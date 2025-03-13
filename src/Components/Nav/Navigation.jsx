import { myImages } from "../../icons";

export function Navigation({scores, highScores}){


    return (


        <>
        
                    <div>Current Score: {scores}</div>
                    <img src={myImages.spiderGif} alt="" id='logo' width={'100px'} height={'100px'}/>
                    <div>Highest Score: {highScores}</div>
        </>
    )
}