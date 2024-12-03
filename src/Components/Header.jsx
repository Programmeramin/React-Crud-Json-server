import { Link } from "react-router"

const Header = () => {
  return (
    <>
      
      <header className="header bg-purple-600">
          <nav className="flex justify-between items-center w-[90%] m-auto">
            <div className="logo w-[150px] bg-gradient-to-br
             from-indigo-600 via-purple-500 to-pink-500 rounded-2xl py-5">
              <img src="https://www.cdnlogo.com/logos/t/34/tailwind-css.svg" alt="---" />
            </div>

               <div className="menu">
                   <ul className="flex items-center gap-[4vw]">
                    <li><Link className="text-white text-xl font-mono" to="/">HOME</Link></li>
                    <li><Link className="text-white text-xl font-mono" to="/about">ABOUT</Link></li>
                    <li><Link className="text-white text-xl font-mono" to="/team">TEAM</Link></li>
                    <li><Link className="text-white text-xl font-mono" to="/blog">BLOG</Link></li>
                   </ul>
               </div>
                   
               <div className="sign-btn">
                  <button className="text-white bg-violet-900 p-2 text-xl font-serif rounded-full hover:bg-blue-600">Sign In</button>
               </div>

          </nav>
      </header>
 
    </>
  )
}

export default Header
