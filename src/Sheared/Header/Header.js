import React from 'react';
import { Link } from 'react-router-dom';
import mistlogo from '../../asset/img/Military_Institute_of_Science_and_Technology_Monogram.svg.png'

const Header = () => {
    return (
        <div className="navbar bg-green-500 sticky top-0 z-50">
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-bold rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/testsrates'>Test Rates</Link></li>
                        <li><Link to='/'>Consaltency</Link></li>
                        <li><Link to='/experts'>Experts</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <Link className="normal-case flex justify-between items-center">
                    <img className='w-16 mx-4' src={mistlogo} alt="" />
                    <div>
                        <h1 className='font-bold text-xl text-orange-500'>CATS-MIST (PME)</h1>
                        <h3 className='font-semibold text-slate-200'>CENTRE FOR ADVISORY & TESTING SERVICES <br /> DEPT OF PETROLIUM & MINING ENGINEERING, MIST</h3>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="font-bold text-white menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/testsrates'>Test Rates</Link></li>
                    <li><Link to='/'>Consaltency</Link></li>
                    <li><Link to='/experts'>Experts</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;