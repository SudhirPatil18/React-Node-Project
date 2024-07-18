import React, { useState } from 'react'
import logo1 from "../assest/logo1.jpeg"
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from '../redux/userSlice';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const userData = useSelector((state)=>state.user)
    console.log(userData)
    const dispatch =useDispatch()
    const handleShowMenu = ()=>{
        setShowMenu(preve => !preve)
    }
    const handleLogout =()=>{
        dispatch(logoutRedux())
    }
    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
            {/* desktop */}
            <div className='flex items-center h-full justify-between'>
                <Link to={""}>
                    <div className='h-12 flex'>
                        <span><img src={logo1} className='h-full' /></span><span className='mt-2.5'><h1 className='text-2xl'>𝐌𝐢𝐥𝐤𝐨</h1></span>
                    </div>
                </Link>
                <div className='flex items-center gap-4 md:gap-7'>
                    <nav className='flex gap-4 md: gap-7 text-base md:text-lg'>
                        <Link to={""}>Home</Link>
                        <Link to={"menu"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>contact</Link>
                    </nav>
                    <div className='text-2xl text-slate-600 relative'>
                        <FaCartShopping />
                        <div className='absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center '>0</div>
                    </div>
                    <div className='text-xl text-slate-600' onClick={handleShowMenu}>
                        <div className='w-10 h-10 border-2 border-solid border-slate-600 p-1 rounded-full overflow-hidden drop-shadow-md cursor-pointer'>
                           {
                            userData.image ? <img src={userData.image} className='h-full w-full '/> : <FaUser />
                           } 
                        </div>
                        {
                            showMenu && 
                            (<div className='absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col'>
                                <Link to={"newproduct"}  className='whitespace-nowrap px-2 cursor-pointer'>New Product</Link>
                                {
                                   userData.image ? <p className='cursor-pointer px-2 text-white bg- ' onClick={handleLogout}>Logout</p> :  <Link to={"/login"} className='whitespace-nowrap cursor-pointer'>Login</Link>
                                }
                               
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* mobile */}
        </header>
    )
}

export default Header;