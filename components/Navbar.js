import Link from 'next/link'

const Navbar = () => (
  <>
  
  <nav className="navBar d-flex flex-column justify-content-center align-items-center">
  
  <Link href="/"><a><h1 className="title">Superhero Wiki</h1></a></Link>
  <div>
   
    <Link href="/about"><a>About</a></Link>
  </div>
  </nav>
  </>
)

export default Navbar;