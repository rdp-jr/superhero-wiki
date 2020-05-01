import '../public/static/css/PowerBar.css'
import '../public/static/css/CharacterCard.css'
import '../public/static/css/styles.css'
import CharacterContextProvider from '../components/CharacterContext'

export default function MyApp({ Component, pageProps }) {
  return ( 
  <CharacterContextProvider>
    <Component {...pageProps} />
  </CharacterContextProvider>
  )
}