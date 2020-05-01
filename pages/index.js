import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
// import PowerstatsContainer from '../components/PowerstatsContainer'
import CharacterCard from "../components/CharacterCard";
import { idList } from "../public/static/js/idList";
import FilterResults from "react-filter-search";
import { useState, useContext } from 'react'
import { CharacterContext } from '../components/CharacterContext'

let currData = [];

const Index = () => {
  const { characters } = useContext(CharacterContext)
  // console.log(characters)
  const [page, setPage] = useState(0)
  const charactersList = characters ? characters.slice(page * 18,18 * (page + 1)) : []
  
  const handleClick = (direction) => {
    
    if (direction === 'back') {
      if (page === 0) return;
      setPage(prevState => prevState - 1)
    } else if (direction === 'next') {
      setPage(prevState => prevState + 1)
    }
    
    
  }
  return (
    <>
    <div id="gridTop"></div>
      <Layout>
      
        <div className="row no-gutters">
          <div className="col"></div>
          <div className="col-10 p-0">
          
            <div className="cardGrid">
              
              {charactersList.map((character) => (
              <CharacterCard data={character} key={Math.random()}/>
              ))}
            </div>
          </div>
          <div className="col p-0"></div>
        </div>
        
        <div>
        <div className="d-flex justify-content-center mt-4 mb-4">
        
        <a href="#gridTop" className="btn btn-primary" onClick={() => handleClick('back')}>Back</a>
        <a href="#gridTop" className="btn btn-primary ml-5" onClick={() => handleClick('next')}>Next</a>
        
        </div>
        </div>
      </Layout>
    </>
  );
};

// async function getInitialProps({ query, res }) {
//   currData = [];

//   let resp = await fetch(
//     `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json`
//   );
//   let data = await resp.json();

//   return {
//     data,
//     statusCode: true ? 200 : 404,
//   };

// }

// Index.getInitialProps = getInitialProps;

export default Index;
