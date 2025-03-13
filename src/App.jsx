import {useState, useEffect } from 'react'
import '/public/css/styles.css'
import { Navigation } from './Components/Nav/Navigation'


export function App() {

  const [characters, updateCharacters] = useState([])
  const [clickedCharacter, updateClickedCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [score, updateScore] = useState(0)
  const [highScore, updateHighScore] = useState(score)

  useEffect(() => {

    let ts = '1739029635778'
    let api = '1c299b223cadd537106222e3b8186702'
    let hash = 'add27c038abed35fbee03f7989f979eb'
    
    const fetchData = async () => {

      try {

        const response = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${api}&hash=${hash}&nameStartsWith=Spider`)
        await response.json().then((response) => {
        
        
        let data = response.data.results
        console.log(response)
        updateCharacters(data)
        })  
        setLoading(false)
        setError(null)
        
        
      }
      catch(error){
        console.log(`This is not yet working because ${error}`)
      }     
      setLoading(false)
      setError(error)
    }

    fetchData()

}, [])

function shuffleArray(array){

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;

}

const updateCount = () => {

  updateScore(prevScore => prevScore + 1) 
}
const resetCount = () => {


  updateScore(prevScore => prevScore = 0)
}

const clearArray = () => {

  updateClickedCharacters([])
}

const highestScore = () => {

  if(highScore < score){

    updateHighScore(prevScore => score)
  }else{

    highScore
  }

}

const winner = () => {

  if(score === 20){

    alert('You Win')
    highestScore()
    resetCount()
    clearArray()
    updateCharacters(shuffleArray(characters.slice()))


  }
  else{
    score
  }
}
 
const addItem = (item) => {

  if(clickedCharacter.includes(item)){
    
    highestScore()
    resetCount()
    updateCharacters(shuffleArray(characters.slice()))
    clearArray()

  }else{

    updateCount()
    updateCharacters(shuffleArray(characters.slice()))
    updateClickedCharacters(prevItem => [...prevItem, item])
    winner()
  }
}



return (

  <>
    <div id="App">



      <div id="Nav">

        <Navigation scores={score} highScores={highScore}/>
        
      </div>

      {loading && <h2 id='loading'>Please wait while we find while we find the true Spider</h2>}

        {error && (
        <div id='loading'>
            <h2>There was an Error fetching data please check connection and refresh browser</h2>
        </div>
        )}

        <div className="headings">

          <h2 id="title">With great power comes great memory</h2>
          <h3><em>Rules: Dont click the same card twice GOODLUCK !</em></h3>
          
        </div>

        <div id="appBody">

          <div id='board'>
            
            {characters.map((character, i) => 
                  
                  (<>

                      <div className='cell' onClick={() => addItem(character.id)}>

                            <img src={character.thumbnail['path'] + "." + character.thumbnail['extension']} alt="" height={'208px'} width={'208px'} id='images'/>
                            <div className="rectangleHolder">

                              <div className="characterName">{character.name}</div>
                              
                            </div>
                      </div>

                    </>
                ))}
          </div>

        </div>

    </div>
  </>
)

}