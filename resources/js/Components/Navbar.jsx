import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import './Navbar.css';

function Navbar() {
    const [color, setColor] = useState('text-blue-500');
    const [direction, setDirection] = useState('left'); // Default direction


    useEffect(() => {
        const colors = ['text-red-500', 'text-green-500', 'text-yellow-500', 'text-purple-500'];
        let index = 0;

        const interval = setInterval(() => {
            setColor(colors[index]);
            index = (index + 1) % colors.length;
        }, 1000); 

        return () => clearInterval(interval);
    }, []);
    return (
        <nav className="navbar navbar-expand-md navbar-light shadow-sm" style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
            <div className="container mx-auto p-1">
                <div className="flex justify-between items-center">
                    <Link className="navbar-brand" to="/">
                        <ApplicationLogo style={{ width: '60px', height: '60px' }} />
                    </Link>
                    <p  className={`text-black ml-auto flex ${color} ${direction === 'right' ? 'slide-left' : 'slide-right'}`}>
                        <strong className="text-blue-500">Good News!</strong> We offer great{' '}
                        <strong className="px-1">discount</strong> until{' '}
                        <h1 className="pl-1">July 10 only</h1>
                    </p>
                    <div className="flex items-center ml-auto">                        
                        <button className="btn btn-primary border rounded-lg text-white px-4" style={{background: 'linear-gradient(to right, purple, orange)'}}><Link href={route('login')}>Login</Link></button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
