import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

//react icons
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStacky, setIsStacky] = useState(false);

  //toggle menu
  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsStacky(true)
      }
      else {
        setIsStacky(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, []);

  //NavItems

  const NavItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/Shop" },
    { link: "sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ]


  return (
    <header className='w-full bg-transprent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isStacky?"sticky top-0 right-0 left-0 bg-blue-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          {/* Logo */}
          <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block' />Books</Link>

          {/* NavItems */}

          <ul className='md:flex space-x-12 hidden'>
            {
              NavItems.map(({ link, path }) =>
                <Link key={path} to={path} className='block text-base text-black uppercase curser-pointer hover:text-blue-700'>{link}</Link>)
            }
          </ul>

          {/* btn for large screen */}
          <div className='space-x-12 hidden lg:flex items-center'>
            <button><FaBarsStaggered className='w-5 hover:text-blue-700 lg:hidden' /></button>
          </div>

          {/* btn for mobile screen */}
          <div className='md:hidden'>
            <button onClick={togglemenu} className='text-black focus:outline-none'>{
              isMenuOpen ? <FaXmark className='h-5 w-5 hover:text-blue-700' /> : <FaBarsStaggered className='h-5 w-5 hover:text-blue-700' />
            }</button>
          </div>
        </div>

        {/*NavItem for mobile screen */}

        <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {
            NavItems.map(({ link, path }) =>
              <Link key={path} to={path} className='block text-base text-white uppercase curser-pointer'>{link}</Link>)
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar
