// import Router from 'next/router'
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Layout from "../../components/Layout";
import PowerstatsContainer from "../../components/PowerstatsContainer";
import _ from "lodash";

import Error from "../_error";
import { useContext } from 'react'


import { CharacterContext } from '../../components/CharacterContext'
import { useRouter } from 'next/router'

import ImageLoader from 'react-loading-image';

import { useState, useEffect } from 'react'


const Character = () => {
  const { characters } = useContext(CharacterContext)
  const router = useRouter()
  const { slug } = router.query
  // const [powerstats, setPowerstats] = useState({
  //   "intelligence": 0,
  //   "strength": 0,
  //   "speed": 0,
  //   "durability": 0,
  //   "power": 0,
  //   "combat": 0
  // })
 
  const data = _.find(characters, {'slug': slug})

  

  if (data) {
    const name = data.name;
    const biography = data.biography;
    const fullName = data.biography.fullName;
    const publisher = data.biography.publisher;
    const appearance = data.appearance;
    const work = data.work;
    const connections = data.connections;

    // useEffect(() => {
    // setPowerstats(data.powerstats)
    // }, [])
  
    return (
      <>
        <Layout>
          <Head>
            <title>{_.startCase(data.name)} | Superhero Wiki</title>
          </Head>
          <div className="container mx-auto">
          <div className="row">
            <div className="col-8">
              <h1 className="animated fadeIn name">{_.upperCase(name)}</h1>
              <h3 className="animated fadeIn full-name">{name === fullName ? "" : fullName}</h3>
              <h5 className="animated fadeIn publisher">{publisher ? _.upperCase(publisher) : ""}</h5>
              <PowerstatsContainer stats={data.powerstats}/>
  
              <p className="animated fadeIn fieldValue"><span className="fieldText">PLACE OF BIRTH:</span> {biography.placeOfBirth}</p>
              <p className="animated fadeIn fieldValue"><span className="fieldText">FIRST APPEARANCE:</span> {biography.firstAppearance}</p>
              <p className="animated fadeIn fieldValue"><span className="fieldText">ALTER EGOS:</span> {biography.alterEgos}</p>
  
              <p className="animated fadeIn fieldValue"> 
              <span className="fieldText">ALIASES:</span>{biography.aliases ? biography.aliases.toString() : 'None'}
              </p>
  
              <p className="animated fadeIn fieldValue"><span className="fieldText">OCCUPATION:</span> {work.occupation}</p>
              <p className="animated fadeIn fieldValue"><span className="fieldText">BASE:</span> {work.base}</p>
  
              <p className="animated fadeIn fieldValue"><span className="fieldText">GROUP AFFILIATIONS:</span> {connections.groupAffiliation}</p>
              <p className="animated fadeIn fieldValue"><span className="fieldText">RELATIVES:</span> {connections.relatives}</p>
            </div>
  
            <div className="col-4">
              <div className="d-flex justify-content-center pictureContainer">
                {/* <img src={data.images.md} /> */}
                
                <ImageLoader
              src={data.images.md}
              alt={data.name}
              
              loading={() => <div className="lds-dual-ring d-flex justify-content-center align-items-center h-100 mx-auto"></div>}
              error={() => <div className="d-flex justify-content-center align-items-center h-100">Error</div>}
            />
              </div>
              <div className="d-flex justify-content-center flex-column align-items-center">
                <p className="animated fadeIn fieldValue">
                  {appearance.gender}•{appearance.race ? appearance.race : "Unknown race"}
                </p>
                <p className="animated fadeIn fieldValue">
                <span className="fieldText">HEIGHT:</span> {appearance.height[0]}/{appearance.height[1]}
                </p>
                <p className="animated fadeIn fieldValue">
                <span className="fieldText">WEIGHT:</span> {appearance.weight[0]}/{appearance.weight[1]}
                </p>
                <p className="animated fadeIn fieldValue">
                <span className="fieldText">ALIGNMENT:</span> {_.startCase(biography.alignment)}
                </p>
              </div>
            </div>
          </div>
          </div>
        </Layout>
      </>
    );
  } else {
    return (
      <>
      <Layout>
        wait lang xd
      </Layout>
      </>
    )
  }
  
};

// async function getInitialProps({ query, res }) {
//   const id = query.slug.split("-", 1)[0];
//   const resp = await fetch(
//     `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${id}.json`
//   );
//   const data = await resp.json();

//   if (query.slug === data.slug) {
//     return { data, statusCode: 200 };
//   }
//   res.statusCode = 404;
//   return { data: {}, statusCode: 404 };
// }

// Character.getInitialProps = getInitialProps;

export default Character;
