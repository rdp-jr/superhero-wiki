import { createContext, useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch'

export const CharacterContext = createContext()

const CharacterContextProvider = (props) => {
  const [characters, setCharacters] = useState()

  useEffect(() => {
    async function fetchData() {
      let resp = await fetch(
        `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json`
      );
      let data = await resp.json();
      setCharacters(data)
      console.log(data)
    }
    fetchData()
  }, [])

  return (
    <CharacterContext.Provider value={{ characters }}>
      {props.children}
    </CharacterContext.Provider>
  )

}

export default CharacterContextProvider;