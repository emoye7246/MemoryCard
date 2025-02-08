import {useState, useEffect } from 'react'
import '/Users/elijahmoye/Desktop/myReact/MemoryCard/src/css/styles.css'
import { Gameboard } from './Components/Gameboard/Gameboard'


export function App() {

  const [characters, updateCharacters] = useState([])

  const shuffleArray = (characters) => {

    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }

    return characters

  }

  const handleShuffle = () => {

    updateCharacters(shuffleArray(characters.slice()))
  }

  useEffect(() => {

    let ts = '1739029635778'
    let api = '1c299b223cadd537106222e3b8186702'
    let hash = 'add27c038abed35fbee03f7989f979eb'
    
    const fetchData = async () => {

      try {

        const response = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${api}&hash=${hash}&nameStartsWith=Spider`)
        await response.json().then((response) => {
        
        updateCharacters(response.data.results)

        })  
        
        
      }
      catch(error){
        console.log(`This is not yet working because ${error}`)
      }     
    }

    fetchData()

}, [])

  return (
      <>
        <div>Were Baaackkk</div>

        <div>
            <Gameboard cardInfo={characters} shuffle={handleShuffle}/> 
        </div>


      </>

      
      )
}