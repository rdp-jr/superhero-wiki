import Head from 'next/head'

import Navbar from './Navbar'

const Layout = (props) => (
  <>
  <Head>
    <title>SuperHero</title>    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,600;1,700&display=swap" rel="stylesheet"></link>
   
  </Head>
  <Navbar/>
  {props.children}
  </>
)

export default Layout;
