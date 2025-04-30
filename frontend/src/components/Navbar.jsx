import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const navHandler = () => {
        setNav(!nav)
    }

    // Fermer le menu mobile quand on repasse en mode desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setNav(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='w-full h-25 bg-[#f68b1e] flex justify-between'>
            <h1 className='p-3 text-xl font-bold text-white md:text-4xl sm:3xl'>E-COMMERCE</h1>
            <ul className='hidden p-3 md:flex'>

                <Link to='/'>
                    <li className='text-white font-bold p-2 hover:bg-[#000300] cursor-pointer'>Accueil</li>
                </Link>

                <Link to='/cart'>
                    <li className='text-white font-bold p-2 hover:bg-[#000300] cursor-pointer'>Panier</li>
                </Link>

                <Link to='/login'>
                    <li className='text-white font-bold p-2 hover:bg-[#000300] cursor-pointer'>se connecter</li>
                </Link>

                <Link to='/register'>
                    <li className='text-white font-bold p-2 hover:bg-[#000300] cursor-pointer'>s'enregistrer</li>
                </Link>
            </ul>

            <div className='md:hidden'>
                {nav ? <AiOutlineClose onClick={navHandler} className='text-[#000300] text-4xl px-2' /> : <AiOutlineMenu onClick={navHandler} className='text-[#000300] text-4xl px-2' />}
            </div>

            <div className={nav ? "fixed top-0 left-0 h-[100%] w-60 bg-[#000300] ease-in-out duration-300" : 'hidden'}>
                <h1 className='p-3 font-bold text-left text-white md:text-4xl sm:3xl'>E-COMMERCE</h1>
                <ul className='flex flex-col p-3 text-left'>

                    <Link to='/'>
                        <li className='text-white font-bold p-2 hover:bg-[#2C2A2A] cursor-pointer'>Accueil</li>
                    </Link>

                    <Link to='/cart'>
                        <li className='text-white font-bold p-2 hover:bg-[#2C2A2A] cursor-pointer'>Panier</li>
                    </Link>

                    <Link to='/login'>
                        <li className='text-white font-bold p-2 hover:bg-[#2C2A2A] cursor-pointer'>se connecter</li>
                    </Link>

                    <Link to='/register'>
                        <li className='text-white font-bold p-2 hover:bg-[#2C2A2A] cursor-pointer'>s'enregistrer</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
